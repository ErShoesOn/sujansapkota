import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const points = [
  "Guidance shaped by practical work, not theory alone.",
  "Clear explanations of procedures, documents and terminology.",
  "Support that spans bidding, e-GP participation and contract implementation.",
  "Nepal-specific context and a realistic view of contractor challenges.",
];

export function Introduction() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Professional introduction"
            title={
              <>
                Experience Beyond Theory.{" "}
                <span className="font-display font-medium italic text-navy-700">
                  Practical Knowledge Through Real-World Work.
                </span>
              </>
            }
            description="I am a Public Procurement Consultant helping contractors and businesses navigate Nepal's public procurement system. My approach is built on years of hands-on work and a clear understanding of the difficulties contractors face throughout the procurement lifecycle."
          />
          <div className="mt-8">
            <Button href="/about" variant="secondary">
              More About Er Sujan Sapkota
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-5 -top-5 h-24 w-24 rounded-lg border-l-2 border-t-2 border-gold-400/70" />
          <div className="relative rounded-xl border border-line bg-cream p-8 shadow-card sm:p-10">
            <p className="eyebrow mb-4">How I work</p>
            <ul className="space-y-5">
              {points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-charcoal sm:text-base">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy-900 text-white">
                    <Check aria-hidden="true" className="h-3 w-3" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute -bottom-5 -right-5 h-24 w-24 rounded-lg border-b-2 border-r-2 border-gold-400/70" />
        </div>
      </Container>
    </section>
  );
}
