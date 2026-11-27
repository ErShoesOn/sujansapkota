import type { Metadata } from "next";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { createMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Contact | Call or Message Er Sujan Sapkota",
  description:
    "Contact Er Sujan Sapkota directly by phone or WhatsApp for procurement support, tendering assistance, e-GP and Bolpatra support, contract management and training in Nepal.",
  path: "/contact",
});

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22 12a10 10 0 1 0-11.5625 9.875v-6.9844H7.8984V12h2.5391V9.7969c0-2.5078 1.4922-3.8955 3.7812-3.8955 1.0938 0 2.2383.1953 2.2383.1953v2.4609h-1.2617c-1.2422 0-1.6289.7734-1.6289 1.5664V12h2.7734l-.4453 2.8906h-2.3281v6.9844A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.07-12.07z" />
    </svg>
  );
}

export default function ContactPage() {
  const { phoneUrl, whatsappUrl, email } = site.contact;
  const { facebookUrl, tiktokUrl } = site;

  const channels = [
    {
      icon: Phone,
      eyebrow: "Phone call",
      title: "Talk it through",
      description:
        "Call directly for a quick discussion about your tender, contract or procurement question.",
      href: phoneUrl,
      action: "Call now",
      variant: "primary" as const,
    },
    {
      icon: MessageCircle,
      eyebrow: "WhatsApp",
      title: "Send a message",
      description:
        "Share a short question or documents and continue the conversation at your convenience.",
      href: whatsappUrl,
      action: "Chat on WhatsApp",
      variant: "gold" as const,
    },
    {
      icon: FacebookIcon,
      eyebrow: "Facebook",
      title: "Follow along",
      description:
        "Follow Sujan Sapkota for updates, practical tips and short lessons on public procurement and tendering.",
      href: facebookUrl,
      action: "Visit Facebook Page",
      variant: "gold" as const,
    },
    {
      icon: TikTokIcon,
      eyebrow: "TikTok",
      title: "Watch short lessons",
      description:
        "Quick, practical procurement and tender preparation tips in short videos.",
      href: tiktokUrl,
      action: "Visit TikTok",
      variant: "gold" as const,
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch directly"
        description="Call or message me on WhatsApp. Tell me what you are working on and I will explain how I can help."
        breadcrumbs={[{ name: "Contact", path: "/contact" }]}
      />

      <section className="bg-cream py-16 sm:py-20">
        <Container className="max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">
            {channels.map(({ icon: Icon, eyebrow, title, description, href, action, variant }) => (
              <article
                key={eyebrow}
                className="flex h-full flex-col rounded-2xl border border-line bg-white p-8 shadow-soft sm:p-10"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </span>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-gold-600">
                  {eyebrow}
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
                <div className="mt-auto pt-7">
                  <Button href={href} variant={variant}>
                    {action}
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-4 rounded-xl border border-line bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-900/5 text-navy-700">
                <Mail aria-hidden="true" className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-navy-900">Prefer email?</p>
                <a
                  href={`mailto:${email}`}
                  className="mt-1 inline-block rounded-sm text-sm font-semibold text-navy-700 hover:text-gold-600"
                >
                  {email}
                </a>
              </div>
            </div>
            <Button href={`mailto:${email}`} variant="secondary">
              Send an Email
            </Button>
          </div>

          <div className="mt-8 rounded-xl border border-gold-400/40 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-600">
              Before you get in touch
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Keep the tender or contract reference, your timeline and the main question
              you want answered ready. Please avoid sharing sensitive personal or
              financial information over chat.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
