export default function PortfolioSection() {
  const portfolioItems = [
    {
      id: 1,
      title: "Letras Decorativas Douradas",
      category: "Decoração",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663426677852/g8HbWEKf6Zz7gcUUELR8dg/banner-logotipos-premium-aEeVEpZWiKQfLETx86BSHh.webp",
    },
    {
      id: 2,
      title: "Nomes Personalizados",
      category: "Quartos",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663426677852/g8HbWEKf6Zz7gcUUELR8dg/banner-letras-mesa-premium-o5Cds6CEuYAxxW2C9GykPR.webp",
    },
    {
      id: 3,
      title: "Números Residenciais",
      category: "Fachadas",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663426677852/g8HbWEKf6Zz7gcUUELR8dg/banner-numeros-residenciais-premium-oTfqd2qf3FFS4yCiQcgGyk.webp",
    },
    {
      id: 4,
      title: "Letreiros Comerciais",
      category: "Lojas",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663426677852/g8HbWEKf6Zz7gcUUELR8dg/banner-fachadas-premium-ZsGWDZCpJpyUjPZjManyVT.webp",
    },
    {
      id: 5,
      title: "Logos 3D",
      category: "Corporativo",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663426677852/g8HbWEKf6Zz7gcUUELR8dg/banner-logotipos-premium-aEeVEpZWiKQfLETx86BSHh.webp",
    },
    {
      id: 6,
      title: "Placas de Sinalização",
      category: "Sinalização",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663426677852/g8HbWEKf6Zz7gcUUELR8dg/banner-fachadas-premium-ZsGWDZCpJpyUjPZjManyVT.webp",
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16 border-t border-border">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Galeria de Projetos
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja alguns dos projetos realizados pela Datti Design - Produção personalizada para sua marca
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all"
            >
              {/* Imagem */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-lg mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-foreground mb-2 text-lg font-semibold">
            Gostou? Solicite seu orçamento sem compromisso!
          </p>
          <p className="text-muted-foreground mb-6">
            Atendimento rápido e personalizado via WhatsApp
          </p>
          <a
            href="https://wa.me/5511995759555?text=Ol%C3%A1,%20quero%20um%20or%C3%A7amento"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-lg transition-all shadow-lg text-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.347l-.355.192-.368-.06a9.879 9.879 0 00-3.464.608l.564 2.173 1.888-.959a9.877 9.877 0 018.368 1.215l.341.262.348-.053a9.868 9.868 0 013.734-.543 9.87 9.87 0 01-1.525 5.96l-.227.348.062.368a9.88 9.88 0 01-.606 3.464l-2.173-.564.96-1.888a9.877 9.877 0 01-1.215-8.368l-.262-.341-.053-.348a9.868 9.868 0 00-.543-3.734 9.87 9.87 0 00-5.96 1.525l-.348.227-.368-.062a9.88 9.88 0 00-3.464.606l.564 2.173 1.888-.959a9.877 9.877 0 018.368 1.215l.341.262.348-.053a9.868 9.868 0 013.734-.543 9.87 9.87 0 01-1.525 5.96l-.227.348.062.368a9.88 9.88 0 01-.606 3.464l-2.173-.564.96-1.888a9.877 9.877 0 01-1.215-8.368l-.262-.341-.053-.348a9.868 9.868 0 00-.543-3.734" />
            </svg>
            Solicite Seu Orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
