import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="depth-glow relative overflow-hidden bg-navy-950 text-white">
      <div
        aria-hidden="true"
        className="hero-grid pointer-events-none absolute inset-0 opacity-[0.14]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full border border-gold-500/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-24 h-[380px] w-[380px] rounded-full border border-gold-500/10"
      />

      <Container className="relative grid gap-14 py-20 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:py-28">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-white/5 px-4 py-1.5 text-xs font-medium text-gold-300">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            Public Procurement Consultant · Nepal
          </div>

          <h1 className="mt-7 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.6rem]">
            Navigate Public Procurement{" "}
            <span className="font-display font-medium italic text-gold-400">
              with Confidence.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            I am a Public Procurement Consultant helping contractors and businesses
            navigate Nepal's public procurement system.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/contact" variant="gold">
              Call or WhatsApp
            </Button>
            <Button href="/knowledge-centre" variant="light">
              Explore Procurement Resources
            </Button>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-float">
          <Image
            src="/images/hero-person.jpg"
            alt="Er Sujan Sapkota"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </Container>
    </section>
  );
}
