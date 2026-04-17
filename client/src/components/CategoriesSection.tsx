import { Home, Briefcase, Palette, Users, Zap, Package } from "lucide-react";

export default function CategoriesSection() {
  const categories = [
    {
      id: 1,
      name: "Letras em PVC",
      icon: Palette,
      description: "Letras em PVC expandido de alta qualidade",
    },
    {
      id: 2,
      name: "Letras em Acrílico",
      icon: Users,
      description: "Letras em acrílico com acabamento premium",
    },
    {
      id: 3,
      name: "Fachadas Comerciais",
      icon: Briefcase,
      description: "Sinalização profissional para lojas e empresas",
    },
    {
      id: 4,
      name: "Números Residenciais",
      icon: Home,
      description: "Identificação elegante para endereços",
    },
    {
      id: 5,
      name: "Logos Personalizados",
      icon: Package,
      description: "Logos e marcas em PVC e acrílico",
    },
    {
      id: 6,
      name: "Placas Decorativas",
      icon: Zap,
      description: "Placas personalizadas para diversos ambientes",
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16 border-t border-gray-200">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600">
            Explore todos os produtos e serviços especializados da Datti Design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="group p-6 rounded-lg border-2 border-gray-200 hover:border-yellow-400 hover:shadow-lg transition-all cursor-pointer bg-white"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-yellow-100 group-hover:bg-yellow-200 transition-all">
                    <IconComponent className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
