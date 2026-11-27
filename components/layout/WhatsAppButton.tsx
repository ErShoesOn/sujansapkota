import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export function WhatsAppButton() {
  const href = site.contact.whatsappUrl;
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition-transform duration-200 hover:scale-105 hover:bg-[#1ebe5d] focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <MessageCircle aria-hidden="true" className="h-6 w-6" />
    </a>
  );
}
