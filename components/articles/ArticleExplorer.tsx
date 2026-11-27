"use client";

import { useState } from "react";
import { ArticleCard } from "./ArticleCard";
import { cn } from "@/lib/utils";

export type ArticleSummary = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
};

export function ArticleExplorer({
  articles,
  categories,
}: {
  articles: ArticleSummary[];
  categories: string[];
}) {
  const [category, setCategory] = useState<string>("All");
  const visible =
    category === "All"
      ? articles
      : articles.filter((article) => article.category === category);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter articles by category">
        {["All", ...categories].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            aria-pressed={category === item}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-semibold transition-colors sm:text-sm",
              category === item
                ? "border-navy-900 bg-navy-900 text-white"
                : "border-line bg-white text-muted hover:border-gold-500 hover:text-navy-900",
            )}
          >
            {item}
          </button>
        ))}
      </div>

      <p className="mt-6 text-xs text-muted" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "article" : "articles"}
      </p>

      <div className="mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
