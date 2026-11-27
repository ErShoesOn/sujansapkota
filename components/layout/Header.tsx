"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";
import { mainNav } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const toggle = menuButtonRef.current;
    panel?.querySelector<HTMLElement>("a[href]")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        window.setTimeout(() => toggle?.focus(), 0);
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = [
        ...(toggle ? [toggle] : []),
        ...Array.from(
          panel?.querySelectorAll<HTMLElement>(
            "a[href], button:not([disabled])",
          ) ?? [],
        ),
      ];
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      toggle?.focus();
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  function handleToggle() {
    if (open) {
      window.setTimeout(() => menuButtonRef.current?.focus(), 0);
    }
    setOpen((value) => !value);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-md">
      <Container className="flex h-[72px] items-center justify-between gap-4 sm:gap-6">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex shrink-0 items-center rounded-sm"
          aria-label="Sujan Sapkota — home"
        >
          <span className="block text-xl font-bold tracking-tight text-navy-900 sm:text-2xl">
            Sujan Sapkota
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-4 xl:flex">
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
          ref={menuButtonRef}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={handleToggle}
          className="inline-flex h-10 items-center gap-2 rounded-md border border-line px-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-cream"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          <span>{open ? "Close" : "Menu"}</span>
        </button>
      </Container>

      {open && (
        <div
          ref={panelRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
          className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-line bg-white shadow-float"
        >
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 py-8">
            <h2 id="mobile-menu-title" className="sr-only">
              Site menu
            </h2>
            <div className="my-2 h-px bg-line" aria-hidden="true" />

            <ul className="flex flex-col gap-1">
              {mainNav.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "relative flex items-center justify-between rounded-lg px-4 py-3 text-lg font-medium transition-colors",
                        active
                          ? "bg-navy-900 text-white"
                          : "bg-cream text-charcoal hover:bg-gold-500/10",
                      )}
                    >
                      {active && (
                        <span
                          aria-hidden="true"
                          className="absolute bottom-2 left-0 top-2 w-1 rounded-r-full bg-gold-500"
                        />
                      )}
                      <span>{item.label}</span>
                      <ChevronRight
                        aria-hidden="true"
                        className={cn(
                          "h-4 w-4 shrink-0",
                          active ? "text-gold-400" : "text-muted",
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
