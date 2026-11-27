import type { Metadata } from "next";
import { ExternalLink, FileText, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTA } from "@/components/ui/CTA";
import { resources } from "@/content/resources";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Downloadable Procurement Resources and Checklists | Nepal",
  description:
    "View reference PDFs for public procurement in Nepal, including the Public Procurement Act and Regulation, technical and price bid letter formats, joint venture documents and representative authorisation.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Downloadable procurement resources"
        description="Reference documents to help contractors understand public procurement rules, prepare technical and price bid letters, joint venture documents and representative authorisation."
        breadcrumbs={[{ name: "Resources", path: "/resources" }]}
      />

      <section className="bg-cream py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {resources.map((resource) => (
              <article
                key={resource.slug}
                className="flex h-full flex-col rounded-xl border border-line bg-white p-7 shadow-soft"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-900 text-gold-400">
                  <FileText aria-hidden="true" className="h-5 w-5" />
                </span>
                <h2 className="mt-5 text-lg font-bold leading-snug">{resource.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {resource.description}
                </p>
                <dl className="mt-6 space-y-2 border-t border-line pt-4 text-xs">
                  <div className="flex gap-2">
                    <dt className="font-semibold text-navy-900">Use:</dt>
                    <dd className="text-muted">{resource.intendedUse}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-semibold text-navy-900">File:</dt>
                    <dd className="text-muted">{resource.fileType}</dd>
                  </div>
                </dl>
                <a
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${resource.title}`}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
                >
                  <ExternalLink aria-hidden="true" className="h-4 w-4" />
                  View PDF
                </a>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            eyebrow="How to use these files"
            title="Reference documents, not legal advice"
            description="Use these files for general reference and confirm current requirements from official sources."
          />
          <div className="space-y-5">
            <div className="flex gap-3 rounded-xl border border-line bg-cream p-6">
              <ShieldCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
              <p className="text-sm leading-relaxed text-charcoal/85">
                Requirements differ between tenders. Always follow the actual tender
                document, its amendments and the current official e-GP instructions.
              </p>
            </div>
            <p className="text-sm leading-relaxed text-muted">
              Click <strong>View PDF</strong> to open a document in a new tab. You can read
              it there or save it using your browser&apos;s PDF viewer.
            </p>
            <p className="text-sm leading-relaxed text-muted">
              More resources will be added only after they have been properly prepared
              and checked.
            </p>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
