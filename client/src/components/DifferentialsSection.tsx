import { Zap, Award, Truck, MessageCircle } from "lucide-react";

export default function DifferentialsSection() {
  const differentials = [
    {
      id: 1,
      icon: Zap,
      title: "Produção Personalizada",
      description: "Cada projeto é único e personalizado conforme suas necessidades",
    },
    {
      id: 2,
      icon: Award,
      title: "Qualidade Premium",
      description: "Materiais de primeira linha com acabamento impecável",
    },
    {
      id: 3,
      icon: Truck,
      title: "Entrega Rápida",
      description: "Prazos curtos e entrega segura em todo o Brasil",
    },
    {
      id: 4,
      icon: MessageCircle,
      title: "Atendimento 24/7",
      description: "Suporte direto via WhatsApp - Solicite seu orçamento agora!",
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16 border-t border-border">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Por que escolher a Datti Design?</h2>
          <p className="text-muted-foreground text-lg">Qualidade, profissionalismo e atendimento personalizado</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((diff) => {
            const IconComponent = diff.icon;
            return (
              <div key={diff.id} className="text-center p-6 rounded-lg border border-border hover:border-yellow-400 hover:shadow-md transition-all">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-yellow-100">
                    <IconComponent className="w-8 h-8 text-yellow-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {diff.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{diff.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
