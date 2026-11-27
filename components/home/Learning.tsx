import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Learning() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="For every stage"
          title="Whether you are new to tenders or bidding regularly"
          description="New contractors can learn the basics of registration, requirements and compliant bids. Established contractors can get structured support with documentation, compliance, contract management and complex procurement questions."
          align="center"
        />
      </Container>
    </section>
  );
}
