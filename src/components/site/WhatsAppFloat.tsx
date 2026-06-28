import { MessageCircle } from "lucide-react";
import { WHATSAPP_GENERAL } from "@/data/sedes";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_GENERAL}
      target="_blank"
      rel="noopener"
      className="fixed bottom-6 right-6 z-[100] inline-flex items-center gap-2 bg-whatsapp text-white px-4 py-3 rounded-full shadow-2xl hover:scale-105 transition-transform"
      aria-label="Chatear por WhatsApp"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline font-bold text-xs uppercase tracking-wider">WhatsApp</span>
    </a>
  );
}