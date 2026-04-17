import { CreditCard, LockKeyhole, QrCode, ReceiptText } from "lucide-react";

const paymentMethods = [
  {
    id: "visa",
    name: "Visa",
    type: "logo",
    icon: "https://cdn.simpleicons.org/visa/1434CB",
    iconAlt: "Visa",
  },
  {
    id: "mastercard",
    name: "Mastercard",
    type: "logo",
    icon: "https://cdn.simpleicons.org/mastercard/EB001B",
    iconAlt: "Mastercard",
  },
  {
    id: "elo",
    name: "Elo",
    type: "logo",
    icon: "https://cdn.simpleicons.org/elo/00A4E0",
    iconAlt: "Elo",
  },
  {
    id: "pix",
    name: "Pix",
    type: "logo",
    icon: "https://cdn.simpleicons.org/pix/32BCAD",
    iconAlt: "Pix",
  },
  {
    id: "boleto",
    name: "Boleto",
    type: "label",
  },
] as const;

function BoletoBadge() {
  return (
    <div className="flex h-10 min-w-18 items-center justify-center rounded-full border border-zinc-200 bg-white px-4 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-700">
      Boleto
    </div>
  );
}

export default function PaymentMethodsSection() {
  return (
    <section className="border-t border-zinc-200 bg-white py-14 md:py-16">
      <div className="container">
        <div className="mx-auto max-w-5xl rounded-[30px] border border-zinc-200 bg-[#fcfbf8] px-6 py-8 shadow-[0_18px_60px_rgba(15,23,42,0.05)] md:px-10">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Pagamento e segurança
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-zinc-950 md:text-3xl">
              Finalize sua compra com confiança
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-zinc-600 md:text-base">
              Pagamento seguro, processado via PagSeguro, com ambiente protegido e comunicação clara sobre as formas de pagamento.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {paymentMethods.map(method => (
              <div
                key={method.id}
                className="flex h-14 min-w-24 items-center justify-center rounded-2xl border border-zinc-200 bg-white px-4 shadow-sm"
              >
                {method.type === "logo" ? (
                  <img
                    src={method.icon}
                    alt={method.iconAlt}
                    className="h-8 w-auto object-contain"
                    loading="lazy"
                  />
                ) : (
                  <BoletoBadge />
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-[24px] border border-zinc-200 bg-white p-5">
              <div className="flex items-center gap-3 text-zinc-950">
                <CreditCard className="h-5 w-5" />
                <span className="text-sm font-semibold">Cartão e parcelamento</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Estrutura preparada para crédito, débito e parcelamento com apresentação profissional.
              </p>
            </div>

            <div className="rounded-[24px] border border-zinc-200 bg-white p-5">
              <div className="flex items-center gap-3 text-zinc-950">
                <QrCode className="h-5 w-5" />
                <span className="text-sm font-semibold">Pix e boleto</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Alternativas simples para quem prefere rapidez no pagamento ou compra sem cartão.
              </p>
            </div>

            <div className="rounded-[24px] border border-zinc-200 bg-white p-5">
              <div className="flex items-center gap-3 text-zinc-950">
                <LockKeyhole className="h-5 w-5" />
                <span className="text-sm font-semibold">Ambiente protegido</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                O botão <strong>Comprar agora</strong> conduz o cliente a uma jornada de checkout mais segura e confiável.
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-zinc-500">
            <ReceiptText className="h-4 w-4 text-amber-500" />
            <span>Pagamento seguro • Processado via PagSeguro • Ambiente protegido</span>
          </div>
        </div>
      </div>
    </section>
  );
}
