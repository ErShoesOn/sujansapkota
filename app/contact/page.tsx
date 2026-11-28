import type { Metadata } from "next";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FAQ } from "@/components/ui/FAQ";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { contactFaqs } from "@/lib/faqs";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Contact | Call or Message Er Sujan Sapkota",
  description:
    "Contact Er Sujan Sapkota directly by phone, WhatsApp, email, Facebook and TikTok for practical public procurement guidance, tendering support and e-GP / Bolpatra questions in Nepal.",
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

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
    </svg>
  );
}

const shareDetails = [
  "Tender or contract reference",
  "Your role in the tender",
  "Procurement stage or document involved",
  "Deadline or timeline",
  "The specific question you want answered",
];

export default function ContactPage() {
  const { phoneDisplay, phoneUrl, whatsappDisplay, whatsappUrl, email } = site.contact;
  const { facebookUrl, tiktokUrl, youtubeUrl } = site;

  const starterMessage =
    "Hello Er Sujan Sapkota, I would like to discuss a public procurement or tender question.";
  const whatsappChatUrl = `${whatsappUrl}${whatsappUrl.includes("?") ? "&" : "?"}text=${encodeURIComponent(starterMessage)}`;

  const contactRows = [
    { icon: Phone, label: "Phone", value: phoneDisplay, href: phoneUrl },
    { icon: MessageCircle, label: "WhatsApp", value: whatsappDisplay, href: whatsappChatUrl },
    { icon: Mail, label: "Email", value: email, href: `mailto:${email}` },
  ];

  return (
    <>
      <JsonLd
        value={[
          faqSchema(contactFaqs),
          breadcrumbSchema([{ name: "Contact", path: "/contact" }]),
        ]}
      />

      <section className="depth-glow bg-navy-950 py-14 text-white sm:py-20">
        <Container>
          <Breadcrumbs light items={[{ name: "Contact", path: "/contact" }]} />
          <div className="max-w-4xl">
            <p className="eyebrow text-gold-300">Contact</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Tell us what you&apos;re working on.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
              Message {site.name} on WhatsApp with your tender or procurement question.
              Share the basics and you will get a clear, practical response.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={whatsappChatUrl} variant="gold">
                Message on WhatsApp
              </Button>
              <Button href={phoneUrl} variant="light">
                Call Us
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start lg:gap-16">
            <div>
              <p className="eyebrow">WhatsApp</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                Send your question on WhatsApp or call {phoneDisplay}.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                Open a chat with a short note about your tender, contract or e-GP question.
                Add any reference number you already have and continue the conversation at
                your convenience.
              </p>
              <div className="mt-7">
                <Button href={whatsappChatUrl} variant="gold">
                  Open WhatsApp Chat
                </Button>
              </div>
              <p className="mt-3 text-xs text-muted">
                Opens WhatsApp with a starter message. Add your details before sending.
              </p>

              <div className="mt-12 border-t border-line pt-10">
                <p className="eyebrow">What to share</p>
                <h3 className="mt-3 text-xl font-bold tracking-tight">
                  Details that help us reply faster.
                </h3>
                <ol className="mt-5 space-y-3">
                  {shareDetails.map((detail, index) => (
                    <li
                      key={detail}
                      className="flex gap-4 text-sm leading-relaxed text-charcoal/85 sm:text-base"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-900 text-xs font-bold text-gold-400">
                        {index + 1}
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-line bg-cream p-7 shadow-soft">
                <p className="eyebrow">Contact our team</p>
                <h2 className="mt-3 text-xl font-bold tracking-tight">Direct contact details</h2>
                <div className="mt-6 space-y-3">
                  {contactRows.map(({ icon: Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="flex items-start gap-4 rounded-xl border border-line bg-white p-4 transition-colors hover:border-gold-500"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-gold-400">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-gold-600">
                          {label}
                        </span>
                        <span className="mt-1 block break-words text-sm font-semibold text-navy-900">
                          {value}
                        </span>
                      </span>
                    </a>
                  ))}
                </div>

                <div className="mt-6 border-t border-line pt-6">
                  <h3 className="text-sm font-bold text-navy-900">Follow us</h3>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <a
                      href={facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-navy-900 transition-colors hover:border-gold-500"
                    >
                      <FacebookIcon className="h-4 w-4" />
                      Facebook
                      <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={tiktokUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-navy-900 transition-colors hover:border-gold-500"
                    >
                      <TikTokIcon className="h-4 w-4" />
                      TikTok
                      <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-navy-900 transition-colors hover:border-gold-500"
                    >
                      <YouTubeIcon className="h-4 w-4" />
                      YouTube
                      <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                <p className="mt-5 text-sm text-muted">
                  Based in Nepal · Supporting procurement work across Nepal.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-cream py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="Quick answers"
            title="Common questions before you get in touch."
            description="Short answers about starting a conversation and what happens next."
          />
          <FAQ items={contactFaqs} />
        </Container>
      </section>
    </>
  );
}
