import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Laptop, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ } from "@/components/ui/FAQ";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/ui/CTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Public Procurement Training in Nepal | Online and Physical",
  description:
    "Practical procurement training for contractors: public procurement fundamentals, tender preparation, bidder registration, Bolpatra/e-GP, laws and contract management.",
  path: "/training",
});

const topics = [
  {
    title: "Public procurement fundamentals",
    text: "How the procurement cycle works, who is involved and where contractors fit in.",
  },
  {
    title: "Tender preparation",
    text: "Reading documents, assessing eligibility and preparing a complete response.",
  },
  {
    title: "Bidder registration",
    text: "Information, documents and account setup considerations for new bidders.",
  },
  {
    title: "Bolpatra and e-GP",
    text: "Practical familiarity with the online tender environment and submission workflow.",
  },
  {
    title: "Procurement laws and regulations",
    text: "An accessible overview of the legal framework and where to verify current rules.",
  },
  {
    title: "Bid evaluation and compliance",
    text: "Understanding responsiveness, evaluation criteria and common documentation gaps.",
  },
  {
    title: "Contract management",
    text: "Schedules, bills, variations, extensions and closing a contract properly.",
  },
  {
    title: "Practical documentation",
    text: "Organising records and correspondence so they are useful when reviewed.",
  },
];

const objectives = [
  "Explain the public procurement lifecycle in plain language.",
  "Read a tender document and identify mandatory requirements.",
  "Understand the bidder registration and online participation process.",
  "Prepare clearer technical and financial documentation.",
  "Recognise common compliance issues before submission.",
  "Maintain better contract records after award.",
];

const faqs = [
  {
    question: "Who can attend procurement training?",
    answer:
      "Training can be designed for new contractors, experienced contractors, procurement and project staff, engineering firms, suppliers and organisations arranging procurement awareness sessions.",
  },
  {
    question: "Is training available online and in person?",
    answer:
      "Yes. Sessions can be delivered online or as physical workshops. The format is agreed with the requesting organisation based on the topic and participants.",
  },
  {
    question: "Are fees, schedules or certificates published here?",
    answer:
      "No. Details such as fees, dates and certification are not published until confirmed for a specific training request. Use the contact page to discuss your requirements.",
  },
  {
    question: "Can the training be customised?",
    answer:
      "Yes. Topics and examples are adapted to the experience level and the practical questions participants need to answer.",
  },
];

export default function TrainingPage() {
  return (
    <>
      <JsonLd value={faqSchema(faqs)} />
      <PageHeader
        eyebrow="Training"
        title="Procurement training built around real work"
        description="Online sessions and physical workshops that explain Nepal's public procurement system in clear, practical terms."
        breadcrumbs={[{ name: "Training", path: "/training" }]}
      />

      <section className="bg-cream py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Training categories"
            title="Choose the topics your team needs"
            description="Sessions are planned around practical workflows, not abstract theory."
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((topic, index) => (
              <div key={topic.title} className="rounded-xl border border-line bg-white p-6 shadow-soft">
                <span className="font-display text-xl font-semibold text-gold-500/80">
                  0{index + 1}
                </span>
                <h2 className="mt-3 text-base font-bold leading-snug">{topic.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{topic.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Learning objectives"
              title="What participants should take away"
              description="The aim is practical understanding that can be used on the next tender."
            />
            <ul className="mt-7 space-y-3">
              {objectives.map((objective) => (
                <li key={objective} className="flex gap-3 text-sm text-charcoal/85 sm:text-base">
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                  {objective}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <div className="rounded-xl border border-line bg-cream p-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-900 text-gold-400">
                <Laptop aria-hidden="true" className="h-5 w-5" />
              </span>
              <h2 className="mt-5 text-lg font-bold">Online training</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Live or guided sessions for teams that want practical guidance without
                travel. Screen-based walkthroughs and examples can be included where
                useful.
              </p>
            </div>
            <div className="rounded-xl border border-line bg-cream p-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-900 text-gold-400">
                <Users aria-hidden="true" className="h-5 w-5" />
              </span>
              <h2 className="mt-5 text-lg font-bold">Physical workshops</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                In-person sessions for organisations and groups, with examples and
                discussion based on the participants&apos; actual procurement work.
              </p>
            </div>
            <div className="rounded-xl border border-dashed border-gold-500/50 bg-white p-7">
              <p className="text-sm font-semibold text-navy-900">Planning a session?</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Share the audience size, experience level and topics you want covered.
              </p>
              <div className="mt-5">
                <Button href="/contact" variant="secondary">
                  Enquire About Training
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="FAQ" title="Training questions" />
            <Link
              href="/services/procurement-training"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 hover:text-gold-600"
            >
              Procurement training service <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <FAQ items={faqs} />
        </Container>
      </section>

      <CTA
        title="Arrange practical procurement training"
        description="Tell us who will attend and what they need to learn. The format and topics will be planned around that."
      />
    </>
  );
}
