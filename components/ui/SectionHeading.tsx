import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        className,
      )}
    >
      {eyebrow && (
        <p className={cn("eyebrow mb-3", light && "text-gold-300")}>{eyebrow}</p>
      )}
      <h2
        className={cn(
          "text-3xl font-bold leading-tight tracking-tight sm:text-4xl",
          light && "text-white",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed text-muted sm:text-lg",
            light && "text-white/70",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
