import { Product } from "@shared/products";

const DEFAULT_SANDBOX_API_BASE_URL = "https://sandbox.api.pagseguro.com";
const DEFAULT_PRODUCTION_API_BASE_URL = "https://api.pagseguro.com";
const DEFAULT_INSTALLMENTS_LIMIT = 12;

type PagBankPaymentMethodType =
  | "CREDIT_CARD"
  | "DEBIT_CARD"
  | "PIX"
  | "BOLETO";

type PagBankCreateCheckoutPayload = {
  reference_id: string;
  expiration_date: string;
  items: Array<{
    reference_id: string;
    name: string;
    quantity: number;
    unit_amount: number;
    image_url?: string;
    description?: string;
  }>;
  payment_methods: Array<{ type: PagBankPaymentMethodType }>;
  payment_methods_configs: Array<{
    type: "CREDIT_CARD";
    config_options: Array<{
      option: "INSTALLMENTS_LIMIT" | "INTEREST_FREE_INSTALLMENTS";
      value: string;
    }>;
  }>;
  redirect_url: string;
  return_url: string;
  soft_descriptor: string;
};

type PagBankCheckoutResponse = {
  id?: string;
  links?: Array<{
    rel?: string;
    href?: string;
    method?: string;
  }>;
};

export function getPagBankApiBaseUrl() {
  const customBaseUrl = process.env.PAGBANK_API_BASE_URL?.trim();

  if (customBaseUrl) {
    return customBaseUrl;
  }

  return process.env.NODE_ENV === "production"
    ? DEFAULT_PRODUCTION_API_BASE_URL
    : DEFAULT_SANDBOX_API_BASE_URL;
}

export function getPagBankInstallmentsLimit() {
  const configuredLimit = Number(process.env.PAGBANK_INSTALLMENTS_LIMIT ?? DEFAULT_INSTALLMENTS_LIMIT);

  if (!Number.isFinite(configuredLimit) || configuredLimit < 1) {
    return DEFAULT_INSTALLMENTS_LIMIT;
  }

  return Math.min(Math.trunc(configuredLimit), DEFAULT_INSTALLMENTS_LIMIT);
}

export function getPagBankToken() {
  return process.env.PAGBANK_TOKEN?.trim() ?? "";
}

export function buildPagBankCheckoutPayload(product: Product, origin: string): PagBankCreateCheckoutPayload {
  const productAmountInCents = Math.round(product.price * 100);
  const normalizedOrigin = origin.replace(/\/$/, "");
  const redirectUrl = `${normalizedOrigin}/?checkout=pagbank`;
  const descriptor = (process.env.PAGBANK_SOFT_DESCRIPTOR ?? "DATTI DESIGN")
    .replace(/[^A-Za-z0-9 ]/g, "")
    .slice(0, 17)
    .trim() || "DATTI DESIGN";

  return {
    reference_id: `DATTI-${product.id}`,
    expiration_date: new Date(Date.now() + 1000 * 60 * 30).toISOString(),
    items: [
      {
        reference_id: product.id,
        name: product.name,
        quantity: 1,
        unit_amount: productAmountInCents,
        image_url: product.image,
        description: product.description,
      },
    ],
    payment_methods: [
      { type: "CREDIT_CARD" },
      { type: "DEBIT_CARD" },
      { type: "PIX" },
      { type: "BOLETO" },
    ],
    payment_methods_configs: [
      {
        type: "CREDIT_CARD",
        config_options: [
          {
            option: "INSTALLMENTS_LIMIT",
            value: String(getPagBankInstallmentsLimit()),
          },
        ],
      },
    ],
    redirect_url: redirectUrl,
    return_url: redirectUrl,
    soft_descriptor: descriptor,
  };
}

export function getPayLinkFromCheckoutResponse(response: PagBankCheckoutResponse) {
  return response.links?.find(link => link.rel === "PAY")?.href ?? response.links?.[0]?.href ?? "";
}

export async function createPagBankCheckout(product: Product, origin: string) {
  const token = getPagBankToken();

  if (!token) {
    throw new Error("As credenciais do PagBank ainda não foram configuradas no projeto.");
  }

  const response = await fetch(`${getPagBankApiBaseUrl()}/checkouts`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(buildPagBankCheckoutPayload(product, origin)),
  });

  const payload = (await response.json().catch(() => ({}))) as PagBankCheckoutResponse & {
    error_messages?: Array<{ code?: string; description?: string }>;
    error_message?: string;
  };

  if (!response.ok) {
    const description = payload.error_messages?.map(item => item.description).filter(Boolean).join(" | ")
      || payload.error_message
      || "Não foi possível criar o checkout no PagBank.";
    throw new Error(description);
  }

  const checkoutUrl = getPayLinkFromCheckoutResponse(payload);

  if (!checkoutUrl) {
    throw new Error("O PagBank não retornou a URL de pagamento do checkout.");
  }

  return {
    checkoutId: payload.id ?? "",
    checkoutUrl,
  };
}
