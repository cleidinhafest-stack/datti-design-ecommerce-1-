import React from "react";

const paragraphs = [
  "Fábrica das Letras com olhar comercial, acabamento premium e atendimento próximo.",
  "A Datti Design desenvolve letras, números, fachadas, nomes decorativos e peças em PVC e acrílico para quem busca apresentação elegante, leitura clara e sensação de qualidade real no ambiente.",
  "Cada projeto é pensado para destacar a marca, valorizar espaços e transmitir profissionalismo, seja em ambientes residenciais, consultórios, lojas ou recepções corporativas.",
];

export default function AboutSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#fffdf6_0%,#fff9df_54%,#ffffff_100%)] py-16 md:py-24">
      <div className="container">
        <div className="overflow-hidden rounded-[34px] border border-yellow-200/80 bg-[linear-gradient(135deg,rgba(255,244,194,0.9)_0%,rgba(255,250,232,0.96)_46%,rgba(255,255,255,1)_100%)] px-6 py-10 shadow-[0_22px_70px_rgba(202,138,4,0.12)] md:px-10 md:py-14 lg:px-14 lg:py-16">
          <div className="max-w-4xl">
            <span className="inline-flex items-center rounded-full border border-yellow-300/80 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-yellow-700 shadow-sm backdrop-blur-sm">
              Sobre a Datti Design
            </span>

            <div className="mt-6 space-y-5 md:space-y-6">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={index === 0 ? "max-w-3xl text-lg leading-8 text-zinc-800 md:text-[1.35rem] md:leading-9" : "max-w-3xl text-sm leading-7 text-zinc-700 md:text-base md:leading-8"}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
