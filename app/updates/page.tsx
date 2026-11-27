import type { Metadata } from "next";
import { ExternalLink, Info } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTA } from "@/components/ui/CTA";
import { officialSources } from "@/lib/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Procurement Updates | Nepal PPMO Notices and e-GP Changes",
  description:
    "Procurement-related developments in Nepal: PPMO notices, legal and regulatory changes, e-GP updates and procedural changes, with official source links.",
  path: "/updates",
});

const coverage = [
  ["PPMO notices", "Announcements published by the regulator."],
  ["Act and regulations", "Amendments to public procurement law and rules."],
  ["Directives", "Procedural guidance and instructions."],
  ["e-GP / Bolpatra", "System changes and participation updates."],
  ["Government announcements", "Relevant procurement-related announcements."],
  ["Professional commentary", "Clearly separated from official announcements."],
];

export default function UpdatesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Procurement updates"
        title="Updates that matter to contractors"
        description="A dedicated place for procurement developments in Nepal, published with dates, official sources and practical context."
        breadcrumbs={[{ name: "Procurement Updates", path: "/updates" }]}
      />

      <section className="bg-cream py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Publication standard"
              title="Accurate, dated and properly sourced"
              description="Official announcements are clearly distinguished from personal professional commentary. Outdated information is never presented as current."
            />
            <div className="mt-8 space-y-4 text-sm leading-relaxed text-charcoal/85 sm:text-base">
              <p>
                Each published update includes a clear headline, a short summary, the
                publication date, an effective date where applicable, a link to the
                official source, and an explanation of practical implications where
                useful.
              </p>
              <p>
                Until verified updates are prepared, this page deliberately contains no
                notices. Use the official sources below to check current information
                directly.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-line bg-white p-7 shadow-soft">
            <p className="eyebrow">What this section covers</p>
            <dl className="mt-5 divide-y divide-line">
              {coverage.map(([title, text]) => (
                <div key={title} className="py-3">
                  <dt className="text-sm font-semibold text-navy-900">{title}</dt>
                  <dd className="mt-1 text-xs leading-relaxed text-muted">{text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="flex items-start gap-3 rounded-xl border border-gold-400/40 bg-cream p-6">
            <Info aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
            <p className="text-sm leading-relaxed text-charcoal/85">
              <strong className="text-navy-900">No verified updates published yet.</strong>{" "}
              Updates will appear here only after the official source, dates and
              practical implications have been checked.
            </p>
          </div>

          <h2 className="mt-12 text-xl font-bold tracking-tight">Official sources</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {officialSources.map((source) => (
              <a
                key={source.href}
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-line p-6 transition-colors hover:border-gold-400"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="font-semibold text-navy-900">{source.label}</p>
                  <ExternalLink aria-hidden="true" className="h-4 w-4 shrink-0 text-gold-600" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{source.note}</p>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
