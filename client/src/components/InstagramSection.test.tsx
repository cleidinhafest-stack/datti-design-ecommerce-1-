import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import InstagramSection from "./InstagramSection";

describe("InstagramSection", () => {
  it("renderiza a estrutura textual principal da seção", () => {
    const html = renderToStaticMarkup(<InstagramSection />);

    expect(html).toContain("Siga nosso Instagram");
    expect(html).toContain(
      "Acompanhe nossos últimos projetos, dicas de design e inspirações para sua marca!",
    );
    expect(html).toContain("No Instagram da Datti Design você encontra:");
    expect(html).toContain("Portfólio de projetos realizados");
    expect(html).toContain("Veja o Instagram @dattidesign");
  });
});
