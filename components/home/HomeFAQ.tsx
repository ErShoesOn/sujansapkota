import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ } from "@/components/ui/FAQ";
import { homeFaqs } from "@/lib/faqs";

export function HomeFAQ() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading
          eyebrow="Common questions"
          title="Clear answers to common procurement questions"
          description="Short, practical answers to the questions contractors ask most often."
        />
        <FAQ items={homeFaqs} />
      </Container>
    </section>
  );
}
