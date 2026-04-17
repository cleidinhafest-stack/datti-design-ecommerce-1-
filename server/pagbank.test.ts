import { describe, expect, it } from "vitest";
import { products } from "../shared/products";
import {
  buildPagBankCheckoutPayload,
  getPagBankInstallmentsLimit,
  getPayLinkFromCheckoutResponse,
} from "./pagbank";

describe("shared product catalog", () => {
  it("expõe os cinco produtos de preço fixo definidos para a nova loja", () => {
    expect(products).toHaveLength(5);
    expect(products.map(product => product.name)).toEqual([
      "Letra Decorativa em PVC 20cm",
      "Nome Decorativo para Parede",
      "Número Residencial em Acrílico",
      "Logo 3D para Fachada",
      "Letreiro em PVC para Loja",
    ]);
    expect(products.map(product => product.price)).toEqual([39.9, 89.9, 59.9, 149.9, 199.9]);
  });

  it("usa imagens hospedadas em CDN para manter a vitrine leve e compatível com a publicação", () => {
    for (const product of products) {
      expect(product.image.startsWith("https://d2xsxph8kpxj0f.cloudfront.net/")).toBe(true);
    }
  });
});

describe("pagbank checkout payload", () => {
  it("monta o payload do checkout com item, meios de pagamento e retorno para a loja", () => {
    const payload = buildPagBankCheckoutPayload(products[0]!, "https://dattishop-g8hbwekf.manus.space/");

    expect(payload.reference_id).toBe("DATTI-pvc-20cm");
    expect(payload.items).toEqual([
      {
        reference_id: "pvc-20cm",
        name: "Letra Decorativa em PVC 20cm",
        quantity: 1,
        unit_amount: 3990,
        image_url: products[0]!.image,
        description: products[0]!.description,
      },
    ]);
    expect(payload.payment_methods).toEqual([
      { type: "CREDIT_CARD" },
      { type: "DEBIT_CARD" },
      { type: "PIX" },
      { type: "BOLETO" },
    ]);
    expect(payload.payment_methods_configs[0]?.config_options).toContainEqual({
      option: "INSTALLMENTS_LIMIT",
      value: String(getPagBankInstallmentsLimit()),
    });
    expect(payload.redirect_url).toBe("https://dattishop-g8hbwekf.manus.space/?checkout=pagbank");
    expect(payload.return_url).toBe("https://dattishop-g8hbwekf.manus.space/?checkout=pagbank");
  });

  it("extrai a URL de pagamento correta da resposta da API", () => {
    const link = getPayLinkFromCheckoutResponse({
      id: "CHEC_123",
      links: [
        { rel: "SELF", href: "https://api.pagseguro.com/checkouts/CHEC_123" },
        { rel: "PAY", href: "https://pag.ae/checkout-123" },
      ],
    });

    expect(link).toBe("https://pag.ae/checkout-123");
  });
});
