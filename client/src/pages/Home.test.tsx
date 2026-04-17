import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

import Home from "./Home";

vi.mock("@/components/Header", () => ({
  default: () => <div>Header</div>,
}));

vi.mock("@/components/HeroBanner", () => ({
  default: () => <div>Hero banner</div>,
}));

vi.mock("@/components/Sidebar", () => ({
  default: () => <div>Sidebar</div>,
}));

vi.mock("@/components/ProductCard", () => ({
  default: ({ product }: { product: { name: string } }) => <article>{product.name}</article>,
}));

vi.mock("@/components/CategoriesSection", () => ({
  default: () => <div>Categories</div>,
}));

vi.mock("@/components/DifferentialsSection", () => ({
  default: () => <div>Differentials</div>,
}));

vi.mock("@/components/PortfolioSection", () => ({
  default: () => <div>Portfolio</div>,
}));

vi.mock("@/components/FAQSection", () => ({
  default: () => <div>FAQ</div>,
}));

vi.mock("@/components/PaymentMethodsSection", () => ({
  default: () => <div>Payments</div>,
}));

vi.mock("@/components/InstagramSection", () => ({
  default: () => <div>Instagram</div>,
}));

vi.mock("@/components/AboutSection", () => ({
  default: () => <div>About</div>,
}));

vi.mock("@/components/Footer", () => ({
  default: () => <div>Footer</div>,
}));

vi.mock("@/components/WhatsAppButton", () => ({
  default: () => <div>WhatsApp</div>,
}));

describe("Home", () => {
  it("não renderiza mais as seções informativas removidas e mantém a grade de produtos", () => {
    const html = renderToStaticMarkup(<Home />);

    expect(html).not.toContain("Vitrine pronta para vender");
    expect(html).not.toContain("Vitrineação para vender");
    expect(html).not.toContain("Preço visível");
    expect(html).not.toContain("Pagamento seguro");
    expect(html).not.toContain("Entrega para todo Brasil");
    expect(html).not.toContain("Projetos personalizados");
    expect(html).toContain("produto");
    expect(html).toContain("Mais Relevante");
    expect(html).toContain("Sidebar");
  });
});
