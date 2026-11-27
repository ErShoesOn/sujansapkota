import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy | Er Sujan Sapkota",
  description:
    "How information shared when contacting www.sapkotasujan.com.np is handled.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="This page explains what information this website collects and how it is used."
        breadcrumbs={[{ name: "Privacy Policy", path: "/privacy" }]}
      />
      <section className="bg-cream py-14 sm:py-16">
        <Container className="max-w-4xl">
          <div className="space-y-8 rounded-2xl border border-line bg-white p-7 text-sm leading-relaxed text-charcoal/85 shadow-soft sm:p-10 sm:text-base">
            <section>
              <h2 className="text-lg font-bold">Information you provide</h2>
              <p className="mt-2">
                This website does not use a contact form. If you contact me by phone or
                WhatsApp, you may choose to share your name, organization, tender or
                contract reference and your question. Any information you choose to
                share is used only to respond to you and discuss possible professional
                support.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold">How information is handled</h2>
              <p className="mt-2">
                Phone calls and WhatsApp messages are handled by those service
                providers under their own privacy practices. This website does not
                collect or store form submissions. Information shared directly with me
                is kept only as long as needed to respond and follow up.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold">Analytics and cookies</h2>
              <p className="mt-2">
                If analytics are enabled, aggregated usage information may be collected
                to understand how the site is used. No advertising profiles are created
                by this website. YouTube embeds, where present, use privacy-enhanced
                playback.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold">External links</h2>
              <p className="mt-2">
                Links to official sources such as PPMO and the e-GP portal lead to
                websites with their own privacy practices. Review those policies before
                submitting information there.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold">Your choices</h2>
              <p className="mt-2">
                You may request access to, correction of, or deletion of personal
                information you have shared with me. Use the contact page to make such
                a request.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold">Changes to this policy</h2>
              <p className="mt-2">
                This policy may be updated as the website and its services develop. The
                current version is always published on this page.
              </p>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
}
