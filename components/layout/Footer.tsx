import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { footerNav, officialSources, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-md border border-gold-500/40 font-display text-lg font-semibold text-gold-400">
                SS
              </span>
              <div>
                <p className="text-base font-bold">{site.name}</p>
                <p className="text-xs uppercase tracking-[0.14em] text-white/50">
                  {site.role}
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/65">
              {site.description}
            </p>
            <p className="mt-6 max-w-md text-xs leading-relaxed text-white/45">
              Independent professional guidance. Not affiliated with PPMO or the
              Government of Nepal. Guidance does not guarantee tender awards.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="md:col-span-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-gold-400">
              Explore
            </h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-sm text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-gold-400">
              Official sources
            </h2>
            <ul className="mt-5 space-y-4">
              {officialSources.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-start gap-1.5 rounded-sm text-sm text-white/70 transition-colors hover:text-white"
                  >
                    <span>{source.label}</span>
                    <ExternalLink
                      aria-hidden="true"
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-60 transition-opacity group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold text-gold-400 hover:text-gold-300"
            >
              Call or WhatsApp <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>{site.brandMessage}</p>
        </div>
      </Container>
    </footer>
  );
}
