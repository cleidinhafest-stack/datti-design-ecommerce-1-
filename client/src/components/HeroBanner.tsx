import React, { useEffect, useState } from "react";

const banners = [
  {
    id: 1,
    title: "Logo 3D em recepção corporativa",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663426677852/g8HbWEKf6Zz7gcUUELR8dg/category-logos-fixed-dsUN9dwp5mTbJZJv8524rT.webp",
  },
  {
    id: 2,
    title: "Letras decorativas em ambiente sofisticado",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663426677852/g8HbWEKf6Zz7gcUUELR8dg/category-table-letters-professional-T2ABsZ9NRVJCRZdac2pDG4.webp",
  },
  {
    id: 3,
    title: "Números residenciais em fachada clara",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663426677852/g8HbWEKf6Zz7gcUUELR8dg/category-numbers-professional-9qqkcobpKjwFFnaBMvNHgz.webp",
  },
  {
    id: 4,
    title: "Fachada premium com identidade visual",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663426677852/g8HbWEKf6Zz7gcUUELR8dg/category-facades-professional-mSoVzK66YW8wLxauBjDQMh.webp",
  },
];

export default function HeroBanner() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % banners.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white py-6 md:py-8">
      <div className="container">
        <div
          className="relative overflow-hidden rounded-[32px] border border-zinc-200 shadow-[0_24px_80px_rgba(15,23,42,0.14)]"
          style={{ aspectRatio: "16/5" }}
        >
          <img
            src={banners[currentImage].image}
            alt={banners[currentImage].title}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,14,0.78)_0%,rgba(10,10,14,0.38)_42%,rgba(10,10,14,0.08)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.28),transparent_28%)]" />

          <div className="absolute inset-0 flex items-center px-6 py-8 md:px-14 md:py-12">
            <div className="max-w-3xl text-left text-white">
              <span className="inline-flex items-center rounded-full border border-fuchsia-300/40 bg-[linear-gradient(135deg,#6d28d9_0%,#7c3aed_52%,#a855f7_100%)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white shadow-[0_18px_45px_rgba(124,58,237,0.35)]">
                Loja Premium Datti Design
              </span>

              <h1 className="mt-5 text-3xl font-bold leading-[1.02] tracking-[-0.05em] text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.36)] md:text-6xl">
                Fábrica das Letras
              </h1>

              <p className="mt-4 max-w-2xl text-lg font-medium leading-relaxed text-white/92 drop-shadow-[0_2px_12px_rgba(0,0,0,0.3)] md:text-3xl">
                Transformamos sua marca em destaque
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#produtos"
                  className="inline-flex items-center justify-center rounded-full bg-[#ffcf24] px-6 py-3 text-sm font-semibold text-zinc-950 shadow-[0_16px_34px_rgba(250,204,21,0.28)] transition hover:bg-[#f2c000]"
                >
                  Comprar agora
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {banners.map((banner, index) => (
              <button
                key={banner.id}
                onClick={() => setCurrentImage(index)}
                className={`rounded-full transition-all ${
                  index === currentImage ? "h-3 w-8 bg-[#ffcf24]" : "h-3 w-3 bg-white/60 hover:bg-white"
                }`}
                aria-label={`Ir para banner ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
