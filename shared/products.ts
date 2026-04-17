export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  promotion?: boolean;
  discount?: number;
}

export const products: Product[] = [
  {
    id: "pvc-20cm",
    name: "Letra Decorativa em PVC 20cm",
    category: "decoracao",
    price: 39.9,
    originalPrice: 49.9,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663426677852/g8HbWEKf6Zz7gcUUELR8dg/letra-decorativa-sala_1bce47e2.jpeg",
    description:
      "Peça em PVC com acabamento limpo para compor salas, halls e ambientes residenciais claros.",
    promotion: true,
    discount: 20,
  },
  {
    id: "nome-parede",
    name: "Nome Decorativo para Parede",
    category: "infantil",
    price: 89.9,
    originalPrice: 109.9,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663426677852/g8HbWEKf6Zz7gcUUELR8dg/nome-decorativo-parede_867cc8f6.jpg",
    description:
      "Nome personalizado para quarto infantil ou ambiente residencial com visual acolhedor e elegante.",
    promotion: true,
    discount: 18,
  },
  {
    id: "numero-acrilico",
    name: "Número Residencial em Acrílico",
    category: "fachada",
    price: 59.9,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663426677852/g8HbWEKf6Zz7gcUUELR8dg/numero-residencial-acrilico_b415d78d.jpg",
    description:
      "Numeração residencial com presença premium para entradas iluminadas e fachadas sofisticadas.",
  },
  {
    id: "logo-3d-fachada",
    name: "Logo 3D para Fachada",
    category: "corporativo",
    price: 149.9,
    originalPrice: 189.9,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663426677852/g8HbWEKf6Zz7gcUUELR8dg/logo-3d-painel_ec79d7c1.jpg",
    description:
      "Aplicação em relevo para recepções, consultórios e marcas que precisam de presença visual refinada.",
    promotion: true,
    discount: 21,
  },
  {
    id: "letreiro-loja",
    name: "Letreiro em PVC para Loja",
    category: "comercial",
    price: 199.9,
    originalPrice: 239.9,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663426677852/g8HbWEKf6Zz7gcUUELR8dg/letreiro-loja-fachada_c044b5c5.jpg",
    description:
      "Letreiro com leitura forte para vitrines e fachadas comerciais, mantendo estética clean e profissional.",
    promotion: true,
    discount: 17,
  },
];

export const categories = [
  { id: "decoracao", name: "Decoração" },
  { id: "infantil", name: "Quarto Infantil" },
  { id: "fachada", name: "Fachadas" },
  { id: "corporativo", name: "Consultórios & Marcas" },
  { id: "comercial", name: "Lojas" },
];

export const priceRanges = [
  { id: "0-100", label: "Até R$ 100" },
  { id: "100-200", label: "R$ 100 - R$ 200" },
  { id: "200-400", label: "R$ 200 - R$ 400" },
  { id: "400+", label: "Acima de R$ 400" },
];
