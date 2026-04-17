import React, { useMemo } from "react";
import { Link, useLocation } from "wouter";
import { CheckCircle2, ChevronLeft, CreditCard, LockKeyhole, QrCode, ReceiptText, ShieldCheck, Truck } from "lucide-react";

import { products } from "@/lib/products";
import { Button } from "@/components/ui/button";

const paymentOptions = [
  {
    title: "Cartão de crédito",
    description: "Ideal para compras parceladas e finalização rápida.",
    icon: CreditCard,
  },
  {
    title: "Cartão de débito",
    description: "Opção prática para pagamento à vista.",
    icon: ShieldCheck,
  },
  {
    title: "Pix",
    description: "Pagamento instantâneo com confirmação ágil.",
    icon: QrCode,
  },
  {
    title: "Boleto",
    description: "Alternativa para quem prefere pagar sem cartão.",
    icon: ReceiptText,
  },
];

export default function Checkout() {
  const [location] = useLocation();

  const product = useMemo(() => {
    if (typeof window === "undefined") return null;
    const url = new URL(window.location.href);
    const productId = url.searchParams.get("product");
    return products.find(item => item.id === productId) ?? null;
  }, [location]);

  if (!product) {
    return (
      <main className="min-h-screen bg-[#fcfbf8] py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-[32px] border border-zinc-200 bg-white p-8 text-center shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Checkout da loja
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-zinc-950">
              Produto não encontrado
            </h1>
            <p className="mt-4 text-sm leading-7 text-zinc-600 md:text-base">
              Volte para a vitrine para escolher um produto com preço fixo antes de seguir para a finalização.
            </p>
            <Button asChild className="mt-8 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800">
              <Link href="/">Voltar para a loja</Link>
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fcfbf8] py-10 md:py-14">
      <div className="container">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition hover:text-zinc-950">
            <ChevronLeft className="h-4 w-4" />
            Voltar para a loja
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="rounded-[32px] border border-zinc-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.07)] md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Finalização da compra
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-zinc-950 md:text-4xl">
              Checkout preparado para pagamento seguro
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600 md:text-base">
              Esta etapa organiza a jornada de compra da Datti Design com aparência profissional, resumo do pedido e apresentação clara das formas de pagamento.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {paymentOptions.map(option => {
                const Icon = option.icon;
                return (
                  <article key={option.title} className="rounded-[24px] border border-zinc-200 bg-[#fcfbf8] p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-950 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="mt-4 text-base font-semibold text-zinc-950">{option.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">{option.description}</p>
                  </article>
                );
              })}
            </div>

            <div className="mt-8 rounded-[28px] border border-zinc-200 bg-zinc-950 p-6 text-white">
              <div className="flex items-start gap-3">
                <LockKeyhole className="mt-1 h-5 w-5 text-emerald-300" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    Ambiente protegido
                  </p>
                  <p className="mt-3 text-sm leading-7 text-zinc-200 md:text-base">
                    Pagamento seguro, processado via PagSeguro, com comunicação pensada para gerar confiança antes da integração definitiva.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <aside className="rounded-[32px] border border-zinc-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.07)] md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Resumo do pedido
            </p>

            <div className="mt-6 overflow-hidden rounded-[28px] border border-zinc-200 bg-[#fcfbf8]">
              <img src={product.image} alt={product.name} className="h-64 w-full object-cover" />
              <div className="p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  {product.category}
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-[-0.03em] text-zinc-950">
                  {product.name}
                </h2>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{product.description}</p>
                <div className="mt-5 flex items-end gap-2">
                  {product.originalPrice ? (
                    <span className="text-sm text-zinc-400 line-through">
                      R$ {product.originalPrice.toFixed(2)}
                    </span>
                  ) : null}
                  <span className="text-3xl font-black tracking-[-0.03em] text-zinc-950">
                    R$ {product.price.toFixed(2)}
                  </span>
                </div>
                <p className="mt-2 text-sm text-zinc-500">
                  ou em até 12x de R$ {(product.price / 12).toFixed(2)} no checkout
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-sm text-zinc-600">
              <div className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-[#fcfbf8] px-4 py-3">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Pagamento seguro e jornada de compra mais profissional</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-[#fcfbf8] px-4 py-3">
                <Truck className="h-4 w-4 text-amber-600" />
                <span>Entrega para todo Brasil e atendimento próximo no pós-venda</span>
              </div>
            </div>

            <Button className="mt-6 h-12 w-full rounded-full bg-zinc-950 text-sm font-semibold text-white hover:bg-zinc-800">
              Prosseguir para pagamento
            </Button>

            <p className="mt-4 text-center text-xs leading-6 text-zinc-500">
              Estrutura visual de checkout pronta para futura integração definitiva com o PagSeguro.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}
