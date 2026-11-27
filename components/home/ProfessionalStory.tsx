import { Compass, MessagesSquare, Route, WalletCards } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: Compass,
    title: "Practical experience first",
    text: "Guidance grounded in how procurement actually works on the ground, not just how it reads on paper.",
  },
  {
    icon: MessagesSquare,
    title: "Clear, approachable explanations",
    text: "Complex procedures explained in simple English you can use with your own team.",
  },
  {
    icon: Route,
    title: "Support across the lifecycle",
    text: "From the first notice to contract closure, with a clear view of what comes next.",
  },
  {
    icon: WalletCards,
    title: "Honest, realistic guidance",
    text: "No guarantees of awards — just careful preparation and a clear understanding of the requirements.",
  },
];

export function ProfessionalStory() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why work with Er Sujan Sapkota"
          title="A professional guide who understands the contractor's side"
          description="The goal is simple: help you understand the process, prepare properly and make better-informed decisions."
          align="center"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-line bg-white p-6 shadow-soft">
              <Icon aria-hidden="true" className="h-6 w-6 text-gold-600" />
              <h3 className="mt-5 text-base font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
