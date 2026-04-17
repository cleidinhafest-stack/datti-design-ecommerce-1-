import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

import Footer from "./Footer";
import Header from "./Header";
import WhatsAppButton from "./WhatsAppButton";

vi.mock("wouter", () => ({
  Link: ({ href, children }: { href: string; children: React.ReactNode }) => <a href={href}>{children}</a>,
}));

describe("Header", () => {
  it("exibe atendimento clicável com os dois números principais", () => {
    const html = renderToStaticMarkup(<Header cartCount={0} onSearch={() => {}} />);

    expect(html).toContain("Atendimento");
    expect(html).toContain("Atendimento principal");
    expect(html).toContain("(11) 99575-9555");
    expect(html).toContain("Atendimento comercial");
    expect(html).toContain("(11) 99557-6538");
  });
});

describe("Footer", () => {
  it("destaca formas de pagamento com logotipos reais, atendimento e CNPJ formatado", () => {
    const html = renderToStaticMarkup(<Footer />);

    expect(html).toContain("Formas de pagamento");
    expect(html).toContain('data-testid="payment-methods-row"');
    expect(html).toContain("justify-center");
    expect(html).toContain("Pix");
    expect(html).toContain("Boleto");
    expect(html).toContain("Visa");
    expect(html).toContain("Mastercard");
    expect(html).toContain("Elo");
    expect(html).toContain("American Express");
    expect(html).toContain("Hipercard");
    expect(html).toContain("Logotipo do Pix");
    expect(html).toContain("Logotipo da Visa");
    expect(html).toContain("Logotipo da Mastercard");
    expect(html).toContain("Logotipo da Elo");
    expect(html).toContain("Logotipo da American Express");
    expect(html).toContain("Logotipo da Hipercard");
    expect(html).toContain("Pagamento seguro via PagSeguro");
    expect(html).toContain("Site seguro");
    expect(html).toContain("Atendimento");
    expect(html).toContain("datti.fachadas@gmail.com");
    expect(html).toContain("(11) 99575-9555");
    expect(html).toContain("(11) 99557-6538");
    expect(html).toContain("CNPJ: 18.068.222/0001-01");
  });
});

describe("WhatsAppButton", () => {
  it("mantém o texto Atendimento visível no botão flutuante", () => {
    const html = renderToStaticMarkup(<WhatsAppButton />);

    expect(html).toContain("Atendimento");
    expect(html).not.toContain("hidden text-sm font-semibold sm:inline");
  });
});
