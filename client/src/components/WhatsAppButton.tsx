import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511995759555"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-green-500 px-4 py-3 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-600 hover:shadow-xl"
      title="Atendimento via WhatsApp"
      aria-label="Abrir atendimento via WhatsApp"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
        <MessageCircle size={24} />
      </span>
      <span className="text-sm font-semibold">Atendimento</span>
    </a>
  );
}
