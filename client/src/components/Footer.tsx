import React from "react";
import { Barcode, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";

const institucionalLinks = [
  "Sobre a Empresa",
  "Como Comprar",
  "Segurança",
  "Envio",
  "Pagamento",
  "Tempo de Garantia",
];

const navegacaoLinks = [
  "Página inicial",
  "Cadastra-se",
  "Meus pedidos",
  "Minha conta",
  "Contato",
  "Política de Privacidade",
];

const paymentMethods = [
  {
    name: "Pix",
    type: "image" as const,
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663426677852/g8HbWEKf6Zz7gcUUELR8dg/pix_161cf9b7.svg",
    alt: "Logotipo do Pix",
  },
  {
    name: "Boleto",
    type: "boleto" as const,
  },
  {
    name: "Visa",
    type: "image" as const,
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663426677852/g8HbWEKf6Zz7gcUUELR8dg/visa_b82a04ca.svg",
    alt: "Logotipo da Visa",
  },
  {
    name: "Mastercard",
    type: "image" as const,
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663426677852/g8HbWEKf6Zz7gcUUELR8dg/mastercard_8b28f7e3.svg",
    alt: "Logotipo da Mastercard",
  },
  {
    name: "Elo",
    type: "image" as const,
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663426677852/g8HbWEKf6Zz7gcUUELR8dg/elo_f7192409.svg",
    alt: "Logotipo da Elo",
  },
  {
    name: "American Express",
    type: "image" as const,
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663426677852/g8HbWEKf6Zz7gcUUELR8dg/americanexpress_1f865c04.svg",
    alt: "Logotipo da American Express",
  },
  {
    name: "Hipercard",
    type: "image" as const,
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663426677852/g8HbWEKf6Zz7gcUUELR8dg/hipercard_c5d93f53.svg",
    alt: "Logotipo da Hipercard",
  },
];

const securityBadges = ["Ambiente protegido", "Checkout confiável", "Pagamento processado com PagSeguro"];

function PaymentMethodCard({ method }: { method: (typeof paymentMethods)[number] }) {
  return (
    <div className="flex min-h-[86px] min-w-[148px] flex-col items-center justify-center gap-3 rounded-[22px] border border-zinc-200 bg-white px-4 py-4 text-center shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:border-yellow-300">
      {method.type === "boleto" ? (
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-100 text-zinc-950 shadow-inner">
          <Barcode size={22} strokeWidth={2.2} />
        </span>
      ) : (
        <div className="flex h-11 items-center justify-center rounded-2xl bg-white px-2">
          <img src={method.logo} alt={method.alt} className="h-8 w-auto max-w-[84px] object-contain" />
        </div>
      )}
      <span className="text-sm font-semibold leading-tight text-zinc-800">{method.name}</span>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200 bg-white">
      <div className="container py-14">
        <div className="grid gap-10 border-b border-zinc-200 pb-12 md:grid-cols-[1.1fr_1fr_1.2fr]">
          <div>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663426677852/g8HbWEKf6Zz7gcUUELR8dg/pasted_file_9XQjLN_LOGO_04_dcd29abc.webp"
              alt="Datti Design"
              className="h-16 w-auto object-contain"
            />
            <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-600">
              Fábrica das Letras especializada em letras, números, logos e placas com acabamento profissional
              para residências, comércios e fachadas.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-2">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-900">Informações</h4>
              <ul className="mt-5 space-y-3 text-sm text-zinc-600">
                {institucionalLinks.map(link => (
                  <li key={link}>
                    <a href="#" className="transition hover:text-yellow-500">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-900">Navegação</h4>
              <ul className="mt-5 space-y-3 text-sm text-zinc-600">
                {navegacaoLinks.map(link => (
                  <li key={link}>
                    <a href="#" className="transition hover:text-yellow-500">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-900">Atendimento</h4>
            <div className="mt-5 space-y-4 text-sm text-zinc-600">
              <div className="border-b border-zinc-200 pb-3">
                <p className="font-semibold text-zinc-950">Orçamento e Produtos</p>
                <a href="tel:+5511995759555" className="mt-1 flex items-center gap-2 transition hover:text-yellow-500">
                  <Phone size={16} className="text-yellow-500" />
                  (11) 99575-9555
                </a>
              </div>

              <div className="border-b border-zinc-200 pb-3">
                <p className="font-semibold text-zinc-950">Atendimento Comercial</p>
                <a href="tel:+5511995576538" className="mt-1 flex items-center gap-2 transition hover:text-yellow-500">
                  <Phone size={16} className="text-yellow-500" />
                  (11) 99557-6538
                </a>
              </div>

              <div className="border-b border-zinc-200 pb-3">
                <p className="font-semibold text-zinc-950">WhatsApp</p>
                <a
                  href="https://wa.me/5511995759555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-center gap-2 transition hover:text-green-600"
                >
                  <MessageCircle size={16} className="text-green-600" />
                  Atendimento pelo WhatsApp
                </a>
              </div>

              <div className="border-b border-zinc-200 pb-3">
                <p className="font-semibold text-zinc-950">E-mail</p>
                <a href="mailto:datti.fachadas@gmail.com" className="mt-1 flex items-center gap-2 transition hover:text-yellow-500">
                  <Mail size={16} className="text-yellow-500" />
                  datti.fachadas@gmail.com
                </a>
              </div>

              <div>
                <p className="font-semibold text-zinc-950">Nosso endereço</p>
                <div className="mt-1 flex items-start gap-2 leading-6">
                  <MapPin size={16} className="mt-1 text-yellow-500" />
                  <span>Rua dos Alecrins, 656 - Portais - Cajamar/SP</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-zinc-200 py-10">
          <div className="mx-auto max-w-5xl text-center">
            <h4 className="text-[28px] font-bold tracking-[-0.03em] text-zinc-950">Formas de pagamento</h4>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-zinc-600">
              Métodos exibidos de forma clara para transmitir segurança, leitura rápida e aparência de loja profissional.
            </p>

            <div data-testid="payment-methods-row" className="mt-7 flex flex-wrap items-center justify-center gap-4">
              {paymentMethods.map(method => (
                <PaymentMethodCard key={method.name} method={method} />
              ))}
            </div>

            <p className="mt-5 flex items-center justify-center gap-2 text-sm font-medium text-zinc-600">
              <ShieldCheck size={16} className="text-green-600" />
              Pagamento seguro via PagSeguro
            </p>
          </div>
        </div>

        <div className="grid gap-10 py-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div>
            <h4 className="text-[28px] font-bold tracking-[-0.03em] text-zinc-950">Site seguro</h4>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-600">
              Estrutura de apresentação profissional com comunicação clara, elementos de confiança e jornada preparada para checkout com PagSeguro.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            {securityBadges.map(badge => (
              <div
                key={badge}
                className="flex items-center gap-2 rounded-2xl border border-zinc-200 bg-[#fcfbf8] px-4 py-3 text-sm font-medium text-zinc-700"
              >
                <ShieldCheck size={16} className="text-green-600" />
                {badge}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-zinc-200 pt-6 text-center text-sm text-zinc-500">
          <p>© 2026 Datti Design - Fábrica das Letras. Todos os direitos reservados.</p>
          <p className="mt-1">CNPJ: 18.068.222/0001-01</p>
        </div>
      </div>
    </footer>
  );
}
