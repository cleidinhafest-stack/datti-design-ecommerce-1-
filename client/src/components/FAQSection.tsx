import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      id: 1,
      question: "Vocês fazem produtos personalizados?",
      answer:
        "Sim! Todos os nossos produtos são personalizáveis. Você pode escolher tamanho, cores, fontes, acabamento e muito mais. Entre em contato via WhatsApp para discutir seu projeto.",
    },
    {
      id: 2,
      question: "Qual é o prazo de entrega?",
      answer:
        "O prazo varia conforme a complexidade do projeto. Geralmente, produtos padrão são entregues em 5-7 dias úteis. Projetos personalizados podem levar de 10-15 dias. Consulte-nos para prazos específicos.",
    },
    {
      id: 3,
      question: "Vocês fazem entrega em todo o Brasil?",
      answer:
        "Sim! Fazemos entrega em todo o território nacional. Os custos de frete variam conforme a localização. Entre em contato para solicitar um orçamento de entrega.",
    },
    {
      id: 4,
      question: "Qual é o valor mínimo de pedido?",
      answer:
        "Não temos valor mínimo obrigatório. Você pode fazer pedidos de qualquer tamanho. Quanto maior a quantidade, melhor o preço unitário.",
    },
    {
      id: 5,
      question: "Como funciona o atendimento?",
      answer:
        "Oferecemos atendimento via WhatsApp 24 horas. Você pode enviar fotos, descrever seu projeto e receber um orçamento personalizado em poucas horas.",
    },
    {
      id: 6,
      question: "Quais são as formas de pagamento?",
      answer:
        "Aceitamos cartão, boleto, link de pagamento e PIX. Consulte nossa equipe para confirmar a melhor opção para o seu pedido.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-12 md:py-16 border-t border-border">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Encontre respostas para as perguntas mais comuns sobre nossos produtos e serviços
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg border border-border hover:border-yellow-400 overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-all"
              >
                <h3 className="text-left font-bold text-foreground">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={20}
                  className={`text-yellow-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
