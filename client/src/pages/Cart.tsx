import React from "react";
import { Link } from "wouter";
import { ChevronLeft, LockKeyhole, ShoppingBag, Truck } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Cart() {
  return (
    <main className="min-h-screen bg-[#fcfbf8] py-10 md:py-14">
      <div className="container">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition hover:text-zinc-950">
            <ChevronLeft className="h-4 w-4" />
            Voltar para a loja
          </Link>
        </div>

        <div className="mx-auto max-w-5xl rounded-[32px] border border-zinc-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <section>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">
                Carrinho da loja
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-zinc-950 md:text-4xl">
                Estrutura pronta para organizar seus pedidos
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600 md:text-base">
                Esta página prepara a experiência de carrinho da Datti Design para futuras evoluções. Ela mantém a jornada visual de compra consistente com a vitrine e com a finalização do pedido.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-[24px] border border-dashed border-zinc-300 bg-[#fcfbf8] px-5 py-6">
                  <div className="flex items-center gap-3 text-zinc-950">
                    <ShoppingBag className="h-5 w-5" />
                    <p className="font-semibold">Nenhum item adicionado ao carrinho nesta etapa</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    O botão principal da loja segue priorizando a compra direta por produto. Quando necessário, o carrinho já tem espaço reservado para funcionar como apoio à jornada.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <article className="rounded-[24px] border border-zinc-200 bg-[#fcfbf8] p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-950 text-white">
                      <LockKeyhole className="h-5 w-5" />
                    </div>
                    <h2 className="mt-4 text-base font-semibold text-zinc-950">Pagamento seguro</h2>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">
                      Comunicação pronta para reforçar confiança com checkout protegido e processamento via PagSeguro.
                    </p>
                  </article>

                  <article className="rounded-[24px] border border-zinc-200 bg-[#fcfbf8] p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-950 text-white">
                      <Truck className="h-5 w-5" />
                    </div>
                    <h2 className="mt-4 text-base font-semibold text-zinc-950">Entrega nacional</h2>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">
                      Espaço preparado para políticas de entrega, prazos e acompanhamento do pedido em próximas etapas.
                    </p>
                  </article>
                </div>
              </div>
            </section>

            <aside className="rounded-[28px] border border-zinc-200 bg-[#fcfbf8] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">
                Próximo passo
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-zinc-950">
                Continue explorando os produtos da vitrine
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                Para manter a navegação objetiva, o fluxo principal da loja continua levando cada produto diretamente para a etapa de checkout estrutural.
              </p>

              <Button asChild className="mt-8 h-12 w-full rounded-full bg-zinc-950 text-sm font-semibold text-white hover:bg-zinc-800">
                <Link href="/">Voltar para comprar</Link>
              </Button>

              <Button asChild variant="outline" className="mt-3 h-12 w-full rounded-full border-zinc-300 bg-white text-sm font-semibold text-zinc-800 hover:bg-zinc-100">
                <Link href="/checkout">Ver página de checkout</Link>
              </Button>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
