import React, { useMemo, useState } from "react";
import AboutSection from "@/components/AboutSection";
import CategoriesSection from "@/components/CategoriesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import InstagramSection from "@/components/InstagramSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProductCard from "@/components/ProductCard";
import Sidebar from "@/components/Sidebar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Product, products } from "@/lib/products";

export default function Home() {
  const cartCount = 0;
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [buyingProductId, setBuyingProductId] = useState<string | null>(null);
  const itemsPerPage = 6;

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      if (selectedCategory && product.category !== selectedCategory) {
        return false;
      }

      if (selectedPriceRange) {
        const price = product.price;
        switch (selectedPriceRange) {
          case "0-100":
            if (price > 100) return false;
            break;
          case "100-200":
            if (price < 100 || price > 200) return false;
            break;
          case "200-400":
            if (price < 200 || price > 400) return false;
            break;
          case "400+":
            if (price < 400) return false;
            break;
        }
      }

      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
        );
      }

      return true;
    });
  }, [selectedCategory, selectedPriceRange, searchQuery]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleAddToCart = async (product: Product) => {
    if (typeof window === "undefined") return;

    try {
      setBuyingProductId(product.id);
      window.location.href = `/checkout?product=${product.id}`;
    } finally {
      setBuyingProductId(null);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category === selectedCategory ? "" : category);
    setCurrentPage(1);
  };

  const handlePriceRangeChange = (range: string) => {
    setSelectedPriceRange(range === selectedPriceRange ? "" : range);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-[#fcfbf8] text-zinc-950 flex flex-col">
      <Header cartCount={cartCount} onSearch={handleSearch} />
      <HeroBanner />

      <main className="flex-1 pb-6">
        <section id="produtos" className="container pt-8 pb-10 md:pt-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <Sidebar
                selectedCategory={selectedCategory}
                selectedPriceRange={selectedPriceRange}
                onCategoryChange={handleCategoryChange}
                onPriceRangeChange={handlePriceRangeChange}
              />
            </div>

            <div className="lg:col-span-3 space-y-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <p className="text-sm text-zinc-500">
                  {filteredProducts.length} produto{filteredProducts.length !== 1 ? "s" : ""} encontrado{filteredProducts.length !== 1 ? "s" : ""}
                </p>
                <select className="h-11 rounded-full border border-zinc-200 bg-white px-4 text-sm text-zinc-700 shadow-sm outline-none transition focus:border-zinc-400">
                  <option>Mais Relevante</option>
                  <option>Menor Preço</option>
                  <option>Maior Preço</option>
                  <option>Mais Vendidos</option>
                </select>
              </div>

              {paginatedProducts.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {paginatedProducts.map(product => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={handleAddToCart}
                        isBuying={buyingProductId === product.id}
                      />
                    ))}
                  </div>

                  {totalPages > 1 && (
                    <div className="flex flex-wrap justify-center gap-2 pt-4">
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                        className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition hover:border-zinc-400 hover:text-zinc-950 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        Anterior
                      </button>

                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                            currentPage === page
                              ? "bg-zinc-950 text-white"
                              : "border border-zinc-200 bg-white text-zinc-700 shadow-sm hover:border-zinc-400 hover:text-zinc-950"
                          }`}
                        >
                          {page}
                        </button>
                      ))}

                      <button
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                        disabled={currentPage === totalPages}
                        className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition hover:border-zinc-400 hover:text-zinc-950 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        Próximo
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="rounded-[28px] border border-zinc-200 bg-white px-6 py-14 text-center shadow-[0_12px_40px_rgba(15,23,42,0.05)]">
                  <p className="text-lg font-semibold text-zinc-900">Nenhum produto encontrado</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    Limpe os filtros para voltar a visualizar todos os produtos com preço fixo disponíveis na loja.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory("");
                      setSelectedPriceRange("");
                      setSearchQuery("");
                    }}
                    className="mt-6 rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
                  >
                    Limpar filtros
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <CategoriesSection />
      <DifferentialsSection />
      <PortfolioSection />
      <FAQSection />
      <InstagramSection />
      <AboutSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
