import type { Metadata } from "next";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTA } from "@/components/ui/CTA";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "About Er Sujan Sapkota | Public Procurement Consultant in Nepal",
  description:
    "Learn about Er Sujan Sapkota, a Public Procurement Consultant with 7+ years of experience and an MBA (Project Management), BE, helping contractors navigate Nepal's public procurement system.",
  path: "/about",
});

const facts = [
  ["Name", "Er Sujan Sapkota"],
  ["Primary title", "Procurement Consultant"],
  ["Professional positioning", "Public Procurement Expert"],
  ["Additional titles", "Tendering Specialist, Procurement Trainer"],
  ["Experience", "7+ years"],
  ["Qualification", "MBA (Project Management), BE"],
  ["Primary expertise", "Public Procurement"],
  ["Geographic focus", "Nepal"],
];

const specialties = [
  {
    title: "Tendering and bid preparation",
    text: "Reading tender documents carefully, assessing eligibility and preparing bids that address the stated requirements.",
  },
  {
    title: "e-GP and Bolpatra",
    text: "Helping contractors understand registration, account setup, authorisation and online participation.",
  },
  {
    title: "Contract management",
    text: "Supporting documentation, schedules, running bills, variations, extensions and contract closure.",
  },
  {
    title: "Procurement advisory",
    text: "Explaining rules, procedures and practical options in a way contractors can act on.",
  },
  {
    title: "Training and learning",
    text: "Sharing practical procurement knowledge through online sessions and physical workshops.",
  },
  {
    title: "Compliance guidance",
    text: "Helping teams understand what a tender document actually requires and where problems usually arise.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="About Er Sujan Sapkota"
        description="A public procurement professional focused on practical guidance, clear explanations and support contractors can actually use."
        breadcrumbs={[{ name: "About", path: "/about" }]}
      />

      <section className="bg-cream py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Professional introduction"
              title="Experience beyond theory"
              description="I am a Public Procurement Consultant helping contractors and businesses navigate Nepal's public procurement system. My work is grounded in seven-plus years of practical experience and a clear understanding of the difficulties contractors face throughout the procurement lifecycle."
            />
            <div className="mt-7 space-y-4 text-sm leading-relaxed text-charcoal/85 sm:text-base">
              <p>
                My professional approach is based on practical work experience,
                accumulated knowledge and helping clients understand complicated
                procurement procedures. The aim is not to impress with terminology,
                but to make the process understandable and manageable.
              </p>
              <p>
                The website combines three identities: a personal professional brand,
                independent procurement guidance, and a knowledge platform where
                practical guides, updates and tutorials can be shared with contractors
                across Nepal.
              </p>
            </div>
            <blockquote className="mt-9 border-l-2 border-gold-500 pl-6">
              <Quote aria-hidden="true" className="h-6 w-6 text-gold-500" />
              <p className="mt-3 font-display text-xl italic leading-snug text-navy-900 sm:text-2xl">
                Practical Knowledge Through Real-World Work.
              </p>
            </blockquote>
          </div>

          <div className="rounded-2xl border border-line bg-white p-7 shadow-card sm:p-9">
            <p className="eyebrow">Professional snapshot</p>
            <dl className="mt-6 divide-y divide-line">
              {facts.map(([label, value]) => (
                <div key={label} className="grid gap-1 py-3 sm:grid-cols-[1fr_1.2fr] sm:gap-4">
                  <dt className="text-xs font-medium uppercase tracking-[0.1em] text-muted">
                    {label}
                  </dt>
                  <dd className="text-sm font-semibold text-navy-900 sm:text-base">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Areas of specialization"
            title="Where I focus my professional work"
            description="Each area is built around practical procurement tasks and the questions that come with them."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {specialties.map((item, index) => (
              <div key={item.title} className="rounded-xl border border-line bg-cream p-6">
                <span className="font-display text-xl font-semibold text-gold-500/80">
                  0{index + 1}
                </span>
                <h2 className="mt-3 text-lg font-bold tracking-tight">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Professional philosophy"
              title="Clear guidance, honest boundaries"
            />
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-charcoal/85 sm:text-base">
            <p>
              Procurement decisions affect real businesses. That is why the emphasis is
              on careful reading, honest eligibility assessment and documentation that
              stands up to review.
            </p>
            <p>
              Official laws, regulations and government notices always take precedence.
              Professional interpretation is clearly separated from official
              requirements, and no tender award or contract acquisition is guaranteed.
            </p>
            <p>
              This site is an independent professional resource. It does not claim
              affiliation with PPMO or any government institution.
            </p>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
