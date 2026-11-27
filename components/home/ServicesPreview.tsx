import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/services";

export function ServicesPreview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Support services"
            title="Practical help when you need it"
            description="Five focused service areas, each built around real problems contractors face in Nepal's public procurement system."
          />
          <Button href="/services" variant="secondary">
            All Services
          </Button>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex h-full flex-col rounded-xl border border-line bg-cream p-6 transition-all duration-200 hover:-translate-y-1 hover:border-gold-400/60 hover:bg-white hover:shadow-card"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-display text-2xl font-semibold text-gold-500/70">
                  0{index + 1}
                </span>
                <ArrowRight
                  aria-hidden="true"
                  className="h-5 w-5 text-muted transition-all group-hover:translate-x-1 group-hover:text-gold-600"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold leading-snug">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {service.summary}
              </p>
              <ul className="mt-5 space-y-2 border-t border-line pt-4">
                {service.scope.slice(0, 3).map((item) => (
                  <li key={item} className="flex gap-2 text-xs text-charcoal/80">
                    <CheckCircle2 aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
          <div className="flex flex-col justify-center rounded-xl border border-dashed border-navy-900/20 bg-navy-900 p-7 text-white">
            <p className="eyebrow text-gold-300">Not sure where to start?</p>
            <p className="mt-3 font-display text-2xl leading-snug">
              Describe your situation and get pointed in the right direction.
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="gold">
                Call or WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
