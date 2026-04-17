import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

const WhatsAppButton = () => {
  return (
    <a
      href={whatsappLink("Hello, I'm interested in your safety products")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-30" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-bold border-2 border-white hover:scale-110 transition-transform">
        <MessageCircle className="h-7 w-7" fill="currentColor" />
      </span>
      <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-secondary text-secondary-foreground px-3 py-1.5 text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;
