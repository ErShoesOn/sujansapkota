import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerNav, officialSources, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div>
              <p className="text-base font-bold">{site.name}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/50">
                {site.role}
              </p>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/65">
              {site.description}
            </p>
          </div>

          <nav aria-label="Footer navigation" className="md:col-span-5">
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-gold-400">
              Explore
            </h2>
            <ul className="mt-5 grid grid-cols-3 gap-0">
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
                    className="rounded-sm text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>{site.brandMessage}</p>
        </div>
      </Container>
    </footer>
  );
}
