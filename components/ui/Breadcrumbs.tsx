import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import type { BreadcrumbItem } from "@/lib/schema";

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted">
        <li>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-sm transition-colors hover:text-navy-900"
          >
            <Home aria-hidden="true" className="h-3.5 w-3.5" />
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.path} className="flex items-center gap-1.5">
            <ChevronRight aria-hidden="true" className="h-3 w-3" />
            <Link
              href={item.path}
              className="rounded-sm transition-colors hover:text-navy-900"
              aria-current={item === items[items.length - 1] ? "page" : undefined}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
