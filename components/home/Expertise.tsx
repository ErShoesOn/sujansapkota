import {
  BookOpenText,
  ClipboardCheck,
  FileCheck2,
  Globe2,
  ScrollText,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const areas = [
  {
    icon: ScrollText,
    title: "Public Procurement",
    text: "Understanding the system, the rules and how they apply in practice.",
  },
  {
    icon: FileCheck2,
    title: "Tendering & Bid Preparation",
    text: "Reading tender documents and preparing complete, compliant bids.",
  },
  {
    icon: Globe2,
    title: "e-GP & Bolpatra",
    text: "Registration, online participation and account troubleshooting.",
  },
  {
    icon: ClipboardCheck,
    title: "Contract Management",
    text: "Documentation, variations, extensions and contract closure.",
  },
  {
    icon: ShieldCheck,
    title: "Procurement Advisory",
    text: "Clear answers when a clause, process or decision needs review.",
  },
  {
    icon: BookOpenText,
    title: "Training & Learning",
    text: "Practical explanations for new and experienced contractors.",
  },
];

export function Expertise() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Key expertise"
          title="Focused on the parts of procurement that matter most"
          description="Practical support across the full procurement lifecycle — from understanding a tender notice to closing a contract."
          align="center"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-xl border border-line bg-white p-6 shadow-soft transition-all duration-200 hover:border-gold-400/60 hover:shadow-card"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-900 text-gold-400">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold tracking-tight">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
