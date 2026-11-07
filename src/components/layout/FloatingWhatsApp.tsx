import { MessageCircle } from 'lucide-react';
import { BUSINESS } from '@/data/site';

export default function FloatingWhatsApp() {
  return (
    <a
      href={BUSINESS.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Arora Interiors on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-0 rounded-full border border-gold-500/40 bg-charcoal-900 p-4 text-gold-400 shadow-xl shadow-charcoal-900/30 transition-all duration-500 hover:gap-3 hover:pl-5 hover:pr-6 sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold text-ivory-100 transition-all duration-500 group-hover:max-w-xs">
        Chat on WhatsApp
      </span>
    </a>
  );
}
