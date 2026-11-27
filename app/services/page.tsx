import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTA } from "@/components/ui/CTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";
import { services } from "@/lib/services";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Procurement Support Services in Nepal | Er Sujan Sapkota",
  description:
    "Tendering and bid preparation, e-GP and Bolpatra support, contract management, procurement training and advisory guidance for contractors in Nepal.",
  path: "/services",
});

const serviceFaqs = [
  {
    question: "Who are these services for?",
    answer:
      "New and established contractors, construction firms, suppliers, vendors and organisations participating in public tenders in Nepal.",
  },
  {
    question: "Can a consultant guarantee a tender award?",
    answer:
      "No. Evaluation and award decisions belong to the procuring entity. Support focuses on understanding requirements and preparing complete, compliant documentation.",
  },
  {
    question: "How do I talk to Er Sujan?",
    answer:
      "Call or message on WhatsApp via the contact page. Share the service area, your timeline and the key documents or questions involved so the discussion can be focused.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd value={faqSchema(serviceFaqs)} />
      <PageHeader
        eyebrow="Services"
        title="Procurement support services"
        description="Focused support across tendering, electronic participation, contract management, training and procurement advisory work."
        breadcrumbs={[{ name: "Services", path: "/services" }]}
      />

      <section className="bg-cream py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                id={service.slug}
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-card"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display text-3xl font-semibold text-gold-600">
                    0{index + 1}
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    className="h-5 w-5 text-muted transition-all group-hover:translate-x-1 group-hover:text-gold-600"
                  />
                </div>
                <h2 className="mt-4 text-xl font-bold leading-snug tracking-tight">
                  {service.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {service.summary}
                </p>
                <ul className="mt-5 space-y-2 border-t border-line pt-4">
                  {service.scope.slice(0, 3).map((item) => (
                    <li key={item} className="flex gap-2 text-xs text-charcoal/80">
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-600"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="How engagements work"
            title="A clear, practical way forward"
            description="Every assignment starts with understanding your actual situation before suggesting a course of action."
          />
          <ol className="space-y-5">
            {[
              ["Tell me the context", "Share the tender, contract or question and the deadline you are working with."],
              ["Agree the scope", "We confirm what support is useful and realistic for that situation."],
              ["Work through it", "We review documents, explain requirements and prepare the needed information."],
              ["Review and next steps", "You receive a clear summary and practical next actions."],
            ].map(([title, text], index) => (
              <li key={title} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-900 text-xs font-bold text-gold-400">
                  {index + 1}
                </span>
                <div>
                  <p className="font-semibold text-navy-900">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <CTA />
    </>
  );
}
