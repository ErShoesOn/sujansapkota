import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, CircleAlert, Laptop, Target, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ } from "@/components/ui/FAQ";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/ui/CTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/metadata";
import { getService, services } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

const trainingTopics = [
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

const trainingObjectives = [
  "Explain the public procurement lifecycle in plain language.",
  "Read a tender document and identify mandatory requirements.",
  "Understand the bidder registration and online participation process.",
  "Prepare clearer technical and financial documentation.",
  "Recognise common compliance issues before submission.",
  "Maintain better contract records after award.",
];

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return createMetadata({ title: "Service Not Found", description: "", noIndex: true });

  return createMetadata({
    title: `${service.title} in Nepal | Er Sujan Sapkota`,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const otherServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        value={[
          serviceSchema({
            name: service.title,
            description: service.summary,
            path: `/services/${service.slug}`,
          }),
          faqSchema(service.faqs),
          breadcrumbSchema([
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
        ]}
      />

      <PageHeader
        eyebrow="Support service"
        title={service.title}
        description={service.summary}
        breadcrumbs={[
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
      />

      <section className="bg-cream py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Overview" title={`What this service covers`} />
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-charcoal/85 sm:text-base">
              {service.intro.split("\n\n").map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10">
              <h2 className="text-xl font-bold tracking-tight">Scope of assistance</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.scope.map((item) => (
                  <li key={item} className="flex gap-2.5 rounded-lg border border-line bg-white px-4 py-3 text-sm text-charcoal/85">
                    <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-line bg-white p-7 shadow-soft">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-900 text-gold-400">
                <CircleAlert aria-hidden="true" className="h-5 w-5" />
              </span>
              <h2 className="mt-5 text-lg font-bold">Problems this helps with</h2>
              <ul className="mt-4 space-y-3">
                {service.problems.map((problem) => (
                  <li key={problem} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                    {problem}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-line bg-white p-7 shadow-soft">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-900 text-gold-400">
                <Users aria-hidden="true" className="h-5 w-5" />
              </span>
              <h2 className="mt-5 text-lg font-bold">Who this is for</h2>
              <ul className="mt-4 space-y-3">
                {service.audience.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                    <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Process"
            title="How the work usually proceeds"
            description="A simple, transparent approach so you know what to expect."
            align="center"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {service.process.map((step, index) => (
              <div key={step.step} className="relative rounded-xl border border-line bg-cream p-6">
                <span className="font-display text-2xl font-semibold text-gold-600">0{index + 1}</span>
                <h2 className="mt-3 text-lg font-bold">{step.step}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {service.slug === "procurement-training" && (
        <>
          <section className="bg-cream py-16 sm:py-20">
            <Container>
              <SectionHeading
                eyebrow="Training topics"
                title="What the sessions can cover"
                description="Topics are selected and adapted to the audience, the organisation and the questions participants actually face."
                align="center"
              />
              <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {trainingTopics.map((topic, index) => (
                  <div key={topic.title} className="flex gap-4 rounded-xl border border-line bg-white p-6 shadow-soft">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-navy-900 font-display text-sm font-semibold text-gold-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h2 className="text-base font-bold">{topic.title}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{topic.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          <section className="bg-white py-16 sm:py-20">
            <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-gold-400">
                  <Laptop aria-hidden="true" className="h-6 w-6" />
                </span>
                <div>
                  <p className="eyebrow">Learning outcomes</p>
                  <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                    Practical, not theoretical
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                    Sessions are designed around real tender situations so participants
                    leave with something they can apply immediately.
                  </p>
                </div>
              </div>
              <div className="rounded-xl border border-line bg-cream p-7 shadow-soft sm:p-9">
                <ul className="space-y-4">
                  {trainingObjectives.map((objective) => (
                    <li key={objective} className="flex items-start gap-3">
                      <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                      <span className="text-sm leading-relaxed text-charcoal/85 sm:text-base">{objective}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 border-t border-line pt-7">
                  <Button href="/contact" variant="gold">
                    Enquire About Training
                  </Button>
                </div>
              </div>
            </Container>
          </section>
        </>
      )}

      <section className="bg-cream py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Straight answers to the questions that come up most often."
          />
          <FAQ items={service.faqs} />
        </Container>
      </section>

      <section className="bg-white py-14">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-lg font-bold tracking-tight">Explore other services</h2>
            <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 hover:text-gold-600">
              All services <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {otherServices.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group rounded-xl border border-line p-5 transition-colors hover:border-gold-400"
              >
                <Target aria-hidden="true" className="h-5 w-5 text-gold-600" />
                <p className="mt-3 font-semibold text-navy-900">{item.shortTitle}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">{item.summary}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-navy-700 group-hover:text-gold-600">
                  Learn more <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
