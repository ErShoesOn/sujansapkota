import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function WhatsAppButton() {
  const { whatsappUrl, phoneUrl, phoneDisplay } = site.contact;
  if (!whatsappUrl || !phoneUrl) return null;

  const buttonClass =
    "inline-flex h-14 w-14 items-center justify-center rounded-full text-white shadow-soft transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2";

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={phoneUrl}
        aria-label={`Call ${site.name}`}
        title={`Call ${phoneDisplay}`}
        className={`${buttonClass} bg-gold-500 text-navy-950 hover:bg-gold-400`}
      >
        <Phone aria-hidden="true" className="h-6 w-6" />
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className={`${buttonClass} bg-[#25D366] hover:bg-[#1ebe5d]`}
      >
        <MessageCircle aria-hidden="true" className="h-6 w-6" />
      </a>
    </div>
  );
}
