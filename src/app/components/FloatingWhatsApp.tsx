import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5513992130719"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-50 group hidden md:flex"
      aria-label="Chamar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-20 bg-gray-900 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chamar no WhatsApp
      </span>
    </a>
  );
}
