import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import type { Article } from "@/lib/content";
import { formatDate } from "@/lib/format";

type ArticleCardData = Pick<
  Article,
  "slug" | "title" | "description" | "category" | "publishedAt"
>;

export function ArticleCard({ article }: { article: ArticleCardData }) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-line bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-card">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-navy-900/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-navy-700">
          {article.category}
        </span>
        <ArrowUpRight
          aria-hidden="true"
          className="h-4 w-4 text-muted transition-colors group-hover:text-gold-600"
        />
      </div>

      <h3 className="mt-5 text-lg font-bold leading-snug tracking-tight">
        <Link href={`/knowledge-centre/${article.slug}`} className="rounded-sm">
          {article.title}
        </Link>
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{article.description}</p>

      <p className="mt-6 flex items-center gap-2 border-t border-line pt-4 text-xs text-muted">
        <CalendarDays aria-hidden="true" className="h-3.5 w-3.5" />
        {formatDate(article.publishedAt)}
      </p>
    </article>
  );
}
