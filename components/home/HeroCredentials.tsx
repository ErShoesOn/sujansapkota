import { BadgeCheck, GraduationCap, MapPin, Route } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function HeroCredentials() {
  return (
    <section className="bg-cream py-14 sm:py-16">
      <Container>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center gap-3 rounded-xl border border-line bg-white p-4 shadow-soft">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-gold-400">
              <BadgeCheck aria-hidden="true" className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold text-navy-900">7+ years</p>
              <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
                Experience
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-line bg-white p-4 shadow-soft">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-gold-400">
              <GraduationCap aria-hidden="true" className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold leading-snug text-navy-900">
                MBA (Project Management)
              </p>
              <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
                Qualification
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-line bg-white p-4 shadow-soft">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-gold-400">
              <Route aria-hidden="true" className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold text-navy-900">Roads and Bridges</p>
              <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
                Specialization
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-line bg-white p-4 shadow-soft">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-gold-400">
              <MapPin aria-hidden="true" className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold text-navy-900">Nepal</p>
              <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
                Focus
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
