import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <Container className="max-w-2xl text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-900 text-gold-400">
          <SearchX aria-hidden="true" className="h-8 w-8" />
        </span>
        <p className="eyebrow mt-8">404</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          This page could not be found
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          The link may have changed, or the page may not exist. You can return to the
          homepage or explore the knowledge centre.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white hover:bg-navy-800"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/knowledge-centre"
            className="inline-flex items-center rounded-full border border-navy-900/20 bg-white px-6 py-3 text-sm font-semibold text-navy-900 hover:border-gold-500"
          >
            Knowledge Centre
          </Link>
        </div>
      </Container>
    </section>
  );
}
