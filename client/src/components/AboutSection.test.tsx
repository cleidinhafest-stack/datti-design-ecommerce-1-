import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import AboutSection from "./AboutSection";

describe("AboutSection", () => {
  it("mantém a seção institucional leve, clara e sem cards laterais", () => {
    const html = renderToStaticMarkup(<AboutSection />);

    expect(html).toContain("Sobre a Datti Design");
    expect(html).toContain("Fábrica das Letras com olhar comercial, acabamento premium e atendimento próximo.");
    expect(html).toContain(
      "A Datti Design desenvolve letras, números, fachadas, nomes decorativos e peças em PVC e acrílico para quem busca apresentação elegante, leitura clara e sensação de qualidade real no ambiente.",
    );
    expect(html).toContain(
      "Cada projeto é pensado para destacar a marca, valorizar espaços e transmitir profissionalismo, seja em ambientes residenciais, consultórios, lojas ou recepções corporativas.",
    );
    expect(html).toContain("#fffdf6");
    expect(html).not.toContain("Composição premium");
    expect(html).not.toContain("Atendimento consultivo");
    expect(html).not.toContain("Missão");
    expect(html).not.toContain("Visão");
    expect(html).not.toContain("Valores");
  });
});
