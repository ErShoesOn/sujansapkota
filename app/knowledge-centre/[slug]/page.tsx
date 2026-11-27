import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowRight, CalendarDays, ExternalLink, UserRound } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTA } from "@/components/ui/CTA";
import {
  getAllArticles,
  getArticleBySlug,
  getRelatedArticles,
} from "@/lib/content";
import { formatDate } from "@/lib/format";
import { createMetadata } from "@/lib/metadata";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article)
    return createMetadata({ title: "Article Not Found", description: "", noIndex: true });

  return createMetadata({
    title: `${article.title} | Er Sujan Sapkota`,
    description: article.description,
    path: `/knowledge-centre/${article.slug}`,
    type: "article",
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt ?? undefined,
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article.slug);

  return (
    <>
      <JsonLd
        value={[
          articleSchema(article),
          breadcrumbSchema([
            { name: "Knowledge Centre", path: "/knowledge-centre" },
            { name: article.title, path: `/knowledge-centre/${article.slug}` },
          ]),
        ]}
      />

      <PageHeader
        eyebrow={article.category}
        title={article.title}
        description={article.description}
        breadcrumbs={[
          { name: "Knowledge Centre", path: "/knowledge-centre" },
          { name: article.title, path: `/knowledge-centre/${article.slug}` },
        ]}
      >
        <div className="mt-7 flex flex-wrap gap-x-7 gap-y-2 text-xs text-muted">
          <span className="inline-flex items-center gap-2">
            <UserRound aria-hidden="true" className="h-4 w-4 text-gold-600" />
            {article.author}
          </span>
          <span className="inline-flex items-center gap-2">
            <CalendarDays aria-hidden="true" className="h-4 w-4 text-gold-600" />
            Published {formatDate(article.publishedAt)}
          </span>
          {article.updatedAt && (
            <span className="inline-flex items-center gap-2">
              <CalendarDays aria-hidden="true" className="h-4 w-4 text-gold-600" />
              Updated {formatDate(article.updatedAt)}
            </span>
          )}
        </div>
      </PageHeader>

      <section className="bg-cream py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-14">
          <article className="prose-content rounded-2xl border border-line bg-white p-7 shadow-soft sm:p-10">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.content}</ReactMarkdown>

            {article.references.length > 0 && (
              <div className="mt-12 border-t border-line pt-6">
                <h2 className="text-lg font-bold">References and official sources</h2>
                <ul className="mt-4 space-y-2">
                  {article.references.map((reference) => (
                    <li key={reference.url} className="flex gap-2 text-sm">
                      <ExternalLink aria-hidden="true" className="mt-1 h-3.5 w-3.5 shrink-0 text-gold-600" />
                      <a href={reference.url} target="_blank" rel="noopener noreferrer">
                        {reference.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-12 rounded-xl border border-gold-400/40 bg-cream p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-600">
                General guidance
              </p>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/80">
                This article provides general professional guidance for public
                procurement in Nepal. Official laws, regulations, notices and the
                applicable tender documents take precedence. Verify current
                requirements for your own procurement assignment.
              </p>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-xl border border-line bg-white p-6 shadow-soft">
              <p className="eyebrow">About the author</p>
              <p className="mt-4 text-sm font-bold text-navy-900">{article.author}</p>
              <p className="mt-1 text-xs text-muted">{site.role}</p>
              <p className="mt-3 text-xs leading-relaxed text-muted">
                {site.role} with 7+ years of experience helping contractors and
                businesses navigate Nepal&apos;s public procurement system.
              </p>
              <Link
                href="/about"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-navy-700 hover:text-gold-600"
              >
                Full profile <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="rounded-xl border border-line bg-navy-900 p-6 text-white">
              <p className="eyebrow text-gold-300">Need specific help?</p>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Discuss your tender or contract question directly.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-gold-500 px-5 py-2.5 text-xs font-semibold text-navy-950 hover:bg-gold-400"
              >
                Call or WhatsApp
              </Link>
            </div>
          </aside>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="bg-white py-14">
          <Container>
            <h2 className="text-2xl font-bold tracking-tight">Related guides</h2>
            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {related.map((item) => (
                <ArticleCard key={item.slug} article={item} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTA />
    </>
  );
}
