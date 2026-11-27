"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-md">
      <Container className="flex h-[72px] items-center justify-between gap-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 rounded-sm"
          aria-label="Sujan Sapkota — home"
        >
          <span className="block text-xl font-bold tracking-tight text-navy-900 sm:text-2xl">
            Sujan Sapkota
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-5 xl:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "relative rounded-sm py-2 text-[13px] font-medium transition-colors hover:text-navy-900",
                isActive(item.href) ? "text-navy-900" : "text-muted",
              )}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-gold-500" />
              )}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-navy-900 xl:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open && (
        <nav
          aria-label="Mobile navigation"
          className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-line bg-white xl:hidden"
        >
          <Container className="py-5">
            <ul className="grid gap-1 sm:grid-cols-2">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "block rounded-md px-3 py-3 text-sm font-medium transition-colors",
                      isActive(item.href)
                        ? "bg-navy-900 text-white"
                        : "text-navy-800 hover:bg-cream",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      )}
    </header>
  );
}
