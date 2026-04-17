import React, { useState } from "react";
import { ChevronDown, Menu, Phone, Search, ShoppingCart, User, X } from "lucide-react";
import { Link } from "wouter";

import { Button } from "@/components/ui/button";

interface HeaderProps {
  cartCount: number;
  onSearch: (query: string) => void;
}

const categories = [
  { name: "Letras Decorativas", href: "#produtos" },
  { name: "Nomes Personalizados", href: "#produtos" },
  { name: "Placas", href: "#produtos" },
  { name: "Fachadas", href: "#produtos" },
  { name: "Logos", href: "#produtos" },
  { name: "Profissões", href: "#produtos" },
  { name: "Eventos", href: "#produtos" },
  { name: "Sport & Hobby", href: "#produtos" },
];

const contactNumbers = [
  {
    label: "Atendimento principal",
    formatted: "(11) 99575-9555",
    href: "tel:+5511995759555",
  },
  {
    label: "Atendimento comercial",
    formatted: "(11) 99557-6538",
    href: "tel:+5511995576538",
  },
];

export default function Header({ cartCount, onSearch }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="bg-yellow-400 py-2 text-sm text-black">
        <div className="container flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a href="tel:+5511995759555" className="flex items-center gap-1 transition hover:opacity-80">
              <Phone size={14} />
              (11) 99575-9555
            </a>
            <span>|</span>
            <a
              href="https://wa.me/5511995759555"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 transition hover:opacity-80"
            >
              💬 WhatsApp
            </a>
          </div>
          <div className="text-xs">Rua dos Alecrins, 656 - Cajamar/SP</div>
        </div>
      </div>

      <div className="container py-4">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div className="flex-shrink-0">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663426677852/g8HbWEKf6Zz7gcUUELR8dg/pasted_file_gLQMSc_image_cc216281.png"
              alt="Datti Design - Fábrica das Letras"
              className="h-20 w-auto object-contain"
            />
          </div>

          <form onSubmit={handleSearch} className="mx-4 hidden max-w-md flex-1 md:flex">
            <div className="flex w-full overflow-hidden rounded-sm border border-border bg-secondary">
              <input
                type="text"
                placeholder="Busque seu produto..."
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
                className="flex-1 bg-secondary px-4 py-2 text-foreground outline-none placeholder:text-muted-foreground"
              />
              <button type="submit" className="bg-yellow-400 px-4 font-bold text-black transition hover:bg-yellow-500">
                <Search size={18} />
              </button>
            </div>
          </form>

          <div className="flex items-center gap-2 md:gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="hidden items-center gap-2 text-foreground hover:bg-secondary md:flex"
            >
              <User size={18} />
              <span className="text-sm">Minha Conta</span>
            </Button>

            <details className="relative hidden md:block">
              <summary className="flex cursor-pointer list-none items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground transition hover:bg-secondary">
                <Phone size={18} />
                <span>Atendimento</span>
                <ChevronDown size={16} className="text-muted-foreground" />
              </summary>
              <div className="absolute right-0 mt-2 w-72 rounded-2xl border border-zinc-200 bg-white p-4 shadow-[0_18px_60px_rgba(15,23,42,0.12)]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Telefones</p>
                <div className="mt-3 space-y-3">
                  {contactNumbers.map(contact => (
                    <a
                      key={contact.href}
                      href={contact.href}
                      className="flex items-center justify-between rounded-2xl border border-zinc-200 px-4 py-3 text-sm transition hover:border-yellow-400 hover:bg-yellow-50"
                    >
                      <span className="font-medium text-zinc-700">{contact.label}</span>
                      <span className="font-semibold text-zinc-950">{contact.formatted}</span>
                    </a>
                  ))}
                </div>
              </div>
            </details>

            <Button asChild variant="ghost" size="icon" className="relative text-foreground hover:bg-secondary">
              <Link href="/cart" aria-label="Abrir carrinho">
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {cartCount}
                  </span>
                )}
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:bg-secondary md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        <form onSubmit={handleSearch} className="mb-4 md:hidden">
          <div className="flex w-full overflow-hidden rounded-sm border border-border bg-secondary">
            <input
              type="text"
              placeholder="Busque seu produto..."
              value={searchQuery}
              onChange={event => setSearchQuery(event.target.value)}
              className="flex-1 bg-secondary px-4 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
            <button type="submit" className="bg-primary px-3 text-primary-foreground transition hover:bg-primary/90">
              <Search size={16} />
            </button>
          </div>
        </form>

        <nav className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
          <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-0">
            {categories.map(category => (
              <a
                key={category.name}
                href={category.href}
                className="rounded-sm px-3 py-2 text-sm font-medium text-foreground transition hover:text-purple-700"
              >
                {category.name}
              </a>
            ))}
            <a
              href="#produtos"
              className="flex items-center gap-1 rounded-sm px-3 py-2 text-sm font-bold text-yellow-500 transition hover:text-yellow-600"
            >
              🔥 Super Promo
            </a>
          </div>

          <details className="mt-3 rounded-2xl border border-zinc-200 bg-white p-3 md:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-zinc-950">
              <span className="flex items-center gap-2">
                <Phone size={16} />
                Atendimento
              </span>
              <ChevronDown size={16} className="text-muted-foreground" />
            </summary>
            <div className="mt-3 space-y-2">
              {contactNumbers.map(contact => (
                <a
                  key={contact.formatted}
                  href={contact.href}
                  className="block rounded-xl border border-zinc-200 px-3 py-3 text-sm text-zinc-700 transition hover:border-yellow-400 hover:bg-yellow-50"
                >
                  <span className="block text-xs uppercase tracking-[0.18em] text-zinc-500">{contact.label}</span>
                  <span className="mt-1 block font-semibold text-zinc-950">{contact.formatted}</span>
                </a>
              ))}
            </div>
          </details>
        </nav>
      </div>
    </header>
  );
}
