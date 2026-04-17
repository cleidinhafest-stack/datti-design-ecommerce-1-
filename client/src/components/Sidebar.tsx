import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { categories, priceRanges } from "@/lib/products";

interface SidebarProps {
  selectedCategory?: string;
  selectedPriceRange?: string;
  onCategoryChange?: (category: string) => void;
  onPriceRangeChange?: (range: string) => void;
}

export default function Sidebar({
  selectedCategory,
  selectedPriceRange,
  onCategoryChange,
  onPriceRangeChange,
}: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
    availability: true,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <aside className="w-full lg:w-64 bg-card border border-border rounded-sm p-6 sticky top-32">
      {/* Categories */}
      <div className="mb-8">
        <button
          onClick={() => toggleSection("categories")}
          className="flex items-center justify-between w-full mb-4 pb-3 border-b-2 border-border hover:border-yellow-400 transition"
        >
          <h3 className="font-black text-foreground text-sm uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Categorias
          </h3>
          <ChevronDown
            size={18}
            className={`text-yellow-400 transition-transform duration-300 ${expandedSections.categories ? "" : "-rotate-90"}`}
          />
        </button>

        {expandedSections.categories && (
          <div className="space-y-3 animate-in fade-in duration-200">
            {categories.map((cat) => (
              <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedCategory === cat.id}
                  onChange={() => onCategoryChange?.(cat.id)}
                  className="w-4 h-4 accent-primary rounded-sm cursor-pointer"
                />
                <span className="text-sm text-foreground group-hover:text-yellow-400 transition font-medium">
                  {cat.name}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <button
          onClick={() => toggleSection("price")}
          className="flex items-center justify-between w-full mb-4 pb-3 border-b-2 border-border hover:border-yellow-400 transition"
        >
          <h3 className="font-black text-foreground text-sm uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Faixa de Preço
          </h3>
          <ChevronDown
            size={18}
            className={`text-yellow-400 transition-transform duration-300 ${expandedSections.price ? "" : "-rotate-90"}`}
          />
        </button>

        {expandedSections.price && (
          <div className="space-y-3 animate-in fade-in duration-200">
            {priceRanges.map((range) => (
              <label key={range.id} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="price"
                  checked={selectedPriceRange === range.id}
                  onChange={() => onPriceRangeChange?.(range.id)}
                  className="w-4 h-4 accent-primary cursor-pointer"
                />
                <span className="text-sm text-foreground group-hover:text-yellow-400 transition font-medium">
                  {range.label}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Availability */}
      <div className="mb-8">
        <button
          onClick={() => toggleSection("availability")}
          className="flex items-center justify-between w-full mb-4 pb-3 border-b-2 border-border hover:border-yellow-400 transition"
        >
          <h3 className="font-black text-foreground text-sm uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Disponibilidade
          </h3>
          <ChevronDown
            size={18}
            className={`text-yellow-400 transition-transform duration-300 ${expandedSections.availability ? "" : "-rotate-90"}`}
          />
        </button>

        {expandedSections.availability && (
          <div className="space-y-3 animate-in fade-in duration-200">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 accent-primary rounded-sm cursor-pointer"
              />
              <span className="text-sm text-foreground group-hover:text-yellow-400 transition font-medium">
                Em Estoque
              </span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 accent-primary rounded-sm cursor-pointer"
              />
              <span className="text-sm text-foreground group-hover:text-yellow-400 transition font-medium">
                Sob Encomenda
              </span>
            </label>
          </div>
        )}
      </div>

      {/* Clear filters button */}
      <button className="w-full py-3 px-4 bg-yellow-400 text-black hover:bg-yellow-500 transition text-sm font-black rounded-sm uppercase tracking-widest shadow-md hover:shadow-lg">
        Limpar Filtros
      </button>
    </aside>
  );
}
