import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "light" | "gold" | "ghost" | "lightGhost";

const styles: Record<Variant, string> = {
  primary:
    "bg-navy-900 text-white hover:bg-navy-800 border border-navy-900 shadow-soft",
  secondary:
    "border border-navy-900/20 bg-white text-navy-900 hover:border-gold-500 hover:bg-white",
  light:
    "border border-white/25 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm",
  gold: "border border-gold-500 bg-gold-500 text-navy-950 hover:bg-gold-400",
  ghost:
    "border border-transparent text-navy-900 hover:text-gold-600 px-0",
  lightGhost:
    "border border-white/25 bg-transparent text-white hover:bg-white/10",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  const isAbsolute = /^(https?:|mailto:|tel:)/.test(href);
  const content = (
    <>
      <span>{children}</span>
      {variant !== "ghost" &&
        (external || isAbsolute ? (
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        ) : (
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        ))}
    </>
  );

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200",
    styles[variant],
    className,
  );

  if (isAbsolute || external) {
    return (
      <a
        href={href}
        className={classes}
        target={/^https?:/.test(href) ? "_blank" : undefined}
        rel={/^https?:/.test(href) ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
