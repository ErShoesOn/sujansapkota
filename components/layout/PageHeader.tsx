import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { BreadcrumbItem } from "@/lib/schema";

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs = [],
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-line bg-white">
      <Container className="py-12 sm:py-16">
        <Breadcrumbs items={breadcrumbs} />
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
        {children}
      </Container>
    </section>
  );
}
