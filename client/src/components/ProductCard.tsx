import { Heart, Loader2, LockKeyhole, MessageCircleMore, ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void | Promise<void>;
  isBuying?: boolean;
}

const WHATSAPP_ORCAMENTO =
  "https://wa.me/5511995759555?text=Olá,%20quero%20um%20orçamento";

export default function ProductCard({ product, onAddToCart, isBuying = false }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_70px_rgba(15,23,42,0.14)]">
      <div className="relative aspect-[4/4.6] w-full overflow-hidden bg-[#f7f5f2]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
          <div className="flex flex-col gap-2">
            {product.promotion && (
              <span className="inline-flex w-fit rounded-full bg-amber-300 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-zinc-950 shadow-sm">
                Destaque
              </span>
            )}
            {product.discount && (
              <span className="inline-flex w-fit rounded-full bg-zinc-950/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                Economize {product.discount}%
              </span>
            )}
          </div>

          <button
            type="button"
            aria-label={`Favoritar ${product.name}`}
            className="rounded-full bg-white/90 p-2.5 text-zinc-800 shadow-md backdrop-blur-sm transition hover:bg-white"
          >
            <Heart size={18} />
          </button>
        </div>

        <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/92 p-3 shadow-lg backdrop-blur-sm">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
            <LockKeyhole className="h-3.5 w-3.5" />
            Pagamento seguro
          </div>
        </div>
      </div>

      <div className="space-y-5 p-5 md:p-6">
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
            {product.category}
          </p>

          <h3
            className="text-xl font-bold leading-tight text-zinc-950"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {product.name}
          </h3>

          <p className="line-clamp-3 text-sm leading-6 text-zinc-600">
            {product.description}
          </p>
        </div>

        <div className="rounded-2xl bg-[#f8f7f4] p-4">
          {product.originalPrice ? (
            <div className="flex items-end gap-2">
              <span className="text-sm text-zinc-400 line-through">
                R$ {product.originalPrice.toFixed(2)}
              </span>
              <span className="text-3xl font-black tracking-[-0.03em] text-zinc-950">
                R$ {product.price.toFixed(2)}
              </span>
            </div>
          ) : (
            <span className="text-3xl font-black tracking-[-0.03em] text-zinc-950">
              R$ {product.price.toFixed(2)}
            </span>
          )}

          <p className="mt-2 text-sm text-zinc-500">
            ou em até 12x de R$ {(product.price / 12).toFixed(2)} no checkout
          </p>
        </div>

        <div className="space-y-2.5">
          <Button
            size="sm"
            className="h-12 w-full rounded-full bg-zinc-950 text-sm font-semibold text-white shadow-md transition-all hover:bg-zinc-800 disabled:cursor-wait disabled:opacity-80"
            onClick={() => onAddToCart?.(product)}
            type="button"
            disabled={isBuying}
          >
            {isBuying ? (
              <>
                <Loader2 size={16} className="mr-2 animate-spin" />
                Abrindo checkout
              </>
            ) : (
              <>
                <ShoppingBag size={16} className="mr-2" />
                Comprar agora
              </>
            )}
          </Button>

          <Button
            asChild
            size="sm"
            variant="outline"
            className="h-12 w-full rounded-full border-zinc-300 bg-white text-sm font-semibold text-zinc-800 transition-all hover:border-[#25D366] hover:bg-[#25D366]/5 hover:text-[#15803d]"
          >
            <a href={WHATSAPP_ORCAMENTO} target="_blank" rel="noreferrer">
              <MessageCircleMore size={16} className="mr-2" />
              Solicitar orçamento
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
