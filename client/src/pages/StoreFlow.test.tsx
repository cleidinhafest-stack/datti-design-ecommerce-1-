import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { beforeEach, describe, expect, it, vi } from "vitest";

import Cart from "./Cart";
import Checkout from "./Checkout";

describe("Store flow pages", () => {
  beforeEach(() => {
    vi.unstubAllGlobals();

    const locationStub = {
      href: "https://dattishop-g8hbwekf.manus.space/cart",
      pathname: "/cart",
      search: "",
      hash: "",
    };

    vi.stubGlobal("location", locationStub);
    vi.stubGlobal("history", {
      pushState: () => {},
      replaceState: () => {},
    });
    vi.stubGlobal("window", {
      location: locationStub,
      history: {
        pushState: () => {},
        replaceState: () => {},
      },
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => true,
    });
  });

  it("renderiza a página estrutural do carrinho com mensagem orientando o próximo passo", () => {
    const html = renderToStaticMarkup(<Cart />);

    expect(html).toContain("Carrinho da loja");
    expect(html).toContain("Estrutura pronta para organizar seus pedidos");
    expect(html).toContain("Ver página de checkout");
  });

  it("renderiza o checkout estrutural com resumo do produto quando há produto na URL", () => {
    const checkoutLocation = {
      href: "https://dattishop-g8hbwekf.manus.space/checkout?product=pvc-20cm",
      pathname: "/checkout",
      search: "?product=pvc-20cm",
      hash: "",
    };

    vi.stubGlobal("location", checkoutLocation);
    vi.stubGlobal("window", {
      location: checkoutLocation,
      history: {
        pushState: () => {},
        replaceState: () => {},
      },
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => true,
    });

    const html = renderToStaticMarkup(<Checkout />);

    expect(html).toContain("Checkout preparado para pagamento seguro");
    expect(html).toContain("Letra Decorativa em PVC 20cm");
    expect(html).toContain("Prosseguir para pagamento");
  });
});
