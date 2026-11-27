import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Professional Disclaimer | Er Sujan Sapkota",
  description:
    "Important information about the scope of guidance published on sapkotasujan.com.np.",
  path: "/disclaimer",
});

const points = [
  {
    title: "Independent professional service",
    text: "This website provides independent procurement guidance and educational information. It does not claim affiliation with PPMO, the Government of Nepal or any government institution unless an affiliation is independently verified and stated.",
  },
  {
    title: "General guidance only",
    text: "Articles, checklists and videos are intended for general professional guidance. They are not legal advice and do not replace the applicable tender document, contract or official instruction.",
  },
  {
    title: "Official sources take precedence",
    text: "Laws, regulations, directives, notices and current official procedures always take precedence over general guidance published here. Requirements should be verified against current PPMO and official sources.",
  },
  {
    title: "No guarantee of award",
    text: "Professional procurement guidance does not guarantee tender awards, contract acquisition or any particular evaluation outcome. Decisions rest with the procuring entity.",
  },
  {
    title: "Verify each assignment",
    text: "Clients and readers should confirm the requirements applicable to their own procurement assignment, including deadlines, documents and procedural steps.",
  },
  {
    title: "Professional interpretation",
    text: "Where this website offers an interpretation, it is clearly presented as professional guidance and not as an official government instruction.",
  },
];

export default function DisclaimerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Professional Disclaimer"
        description="Please read this information before relying on any content published on this website."
        breadcrumbs={[{ name: "Disclaimer", path: "/disclaimer" }]}
      />
      <section className="bg-cream py-14 sm:py-16">
        <Container className="grid gap-6 md:grid-cols-2">
          {points.map((point) => (
            <div key={point.title} className="rounded-xl border border-line bg-white p-6 shadow-soft">
              <h2 className="text-base font-bold text-navy-900">{point.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{point.text}</p>
            </div>
          ))}
          <div className="rounded-xl border border-gold-400/40 bg-white p-6 md:col-span-2">
            <p className="text-sm leading-relaxed text-charcoal/85">
              If you need guidance for a specific tender or contract, call or message
              on WhatsApp and provide the relevant documents and context.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
