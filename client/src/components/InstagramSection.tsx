import React from "react";

export default function InstagramSection() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <h2
            className="text-3xl font-bold tracking-[-0.02em] text-zinc-950 md:text-4xl"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Siga nosso Instagram
          </h2>

          <p className="mt-4 text-sm leading-7 text-zinc-500 md:text-base">
            Acompanhe nossos últimos projetos, dicas de design e inspirações para sua marca!
          </p>

          <div className="mt-7">
            <p className="text-sm font-semibold text-zinc-800 md:text-base">
              No Instagram da Datti Design você encontra:
            </p>

            <div className="mt-4 space-y-2 text-sm leading-7 text-zinc-600 md:text-base">
              <p>✓ Portfólio de projetos realizados</p>
              <p>✓ Dicas e tendências em sinalização</p>
              <p>✓ Promoções e ofertas especiais</p>
              <p>✓ Histórias do dia a dia da fábrica</p>
            </div>
          </div>

          <a
            href="https://www.instagram.com/dattidesign/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-pink-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-pink-700"
          >
            Veja o Instagram @dattidesign
          </a>
        </div>
      </div>
    </section>
  );
}
