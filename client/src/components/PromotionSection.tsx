import { products } from "@/lib/products";
import ProductCard from "./ProductCard";
import { Product } from "@/lib/products";

interface PromotionSectionProps {
  onAddToCart?: (product: Product) => void;
}

export default function PromotionSection({ onAddToCart }: PromotionSectionProps) {
  const promotionalProducts = products.filter((p) => p.promotion).slice(0, 4);

  return (
    <section className="bg-purple-700 py-16 border-t-4 border-b-4 border-yellow-400">
      <div className="container">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="text-4xl">🔥</div>
            <h2 className="text-4xl md:text-5xl font-black text-yellow-400" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              SUPER PROMOÇÃO
            </h2>
          </div>
          <div className="w-32 h-2 bg-yellow-400 mb-4"></div>
          <p className="text-white text-lg font-medium">Confira nossos produtos com os melhores preços do mercado</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {promotionalProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
