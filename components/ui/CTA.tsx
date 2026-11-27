import { Container } from "./Container";
import { Button } from "./Button";

export function CTA({
  title = "Need clear guidance on your next tender?",
  description = "Discuss your requirement with a procurement professional who understands the practical side of Nepal's public procurement system.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="depth-glow bg-navy-900 py-16 text-white sm:py-20">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3 text-gold-300">Let&apos;s talk</p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
              {description}
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Button href="/contact" variant="gold">
              Call or WhatsApp
            </Button>
            <Button href="/services" variant="lightGhost">
              View Services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
