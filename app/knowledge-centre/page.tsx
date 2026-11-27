import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Info, PlayCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { ArticleExplorer } from "@/components/articles/ArticleExplorer";
import { Button } from "@/components/ui/Button";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTA } from "@/components/ui/CTA";
import { getAllArticles, getArticleCategories } from "@/lib/content";
import { officialSources } from "@/lib/site";
import { videoSchema } from "@/lib/schema";
import { videos, youtubeChannelUrl } from "@/content/videos";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Knowledge Centre | Public Procurement Guides for Nepal",
  description:
    "Practical guides, videos, reference documents and dated procurement updates for Nepal's public procurement system, e-GP and Bolpatra, tender preparation and contract management.",
  path: "/knowledge-centre",
});

const updateCoverage = [
  ["PPMO notices", "Announcements published by the regulator."],
  ["Act and regulations", "Amendments to public procurement law and rules."],
  ["Directives", "Procedural guidance and instructions."],
  ["e-GP / Bolpatra", "System changes and participation updates."],
  ["Government announcements", "Relevant procurement-related announcements."],
  ["Professional commentary", "Clearly separated from official announcements."],
];

export default function KnowledgeCentrePage() {
  const articles = getAllArticles().map(({ slug, title, description, category, publishedAt }) => ({
    slug,
    title,
    description,
    category,
    publishedAt,
  }));
  const categories = getArticleCategories();

  return (
    <>
      {videos.map((video) => (
        <JsonLd
          key={video.id}
          value={videoSchema({
            title: video.title,
            description: video.description,
            videoId: video.videoId,
            publishedAt: video.publishedAt,
            thumbnailUrl: `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`,
          })}
        />
      ))}

      <PageHeader
        eyebrow="Knowledge Centre"
        title="Practical procurement knowledge"
        description="Straightforward guides, videos, reference documents and updates for contractors working with public tenders in Nepal."
        breadcrumbs={[{ name: "Knowledge Centre", path: "/knowledge-centre" }]}
      />

      <section className="bg-cream py-16 sm:py-20">
        <Container>
          {articles.length > 0 ? (
            <ArticleExplorer articles={articles} categories={categories} />
          ) : (
            <p className="rounded-xl border border-line bg-white p-8 text-sm text-muted">
              Articles are being prepared. Please check back soon.
            </p>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/knowledge-centre/resources"
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:border-gold-500"
            >
              Downloadable resources <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link
              href="/services/procurement-training"
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:border-gold-500"
            >
              Procurement training <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      <section id="videos" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <Container>
          {videos.length > 0 ? (
            <>
              <div className="max-w-3xl">
                <p className="eyebrow">Videos</p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                  Featured tutorials
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  Embeds use privacy-enhanced YouTube playback. Each video links to its
                  original source.
                </p>
              </div>
              <div className="mt-10 grid gap-8 lg:grid-cols-2">
                {videos.map((video) => (
                  <article
                    key={video.id}
                    id={video.id}
                    className="rounded-xl border border-line bg-cream p-5 shadow-soft"
                  >
                    <YouTubeEmbed videoId={video.videoId} title={video.title} />
                    <div className="mt-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-gold-600">
                        {video.category}
                      </p>
                      <h3 className="mt-2 text-lg font-bold">{video.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {video.description}
                      </p>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-4 border-t border-line pt-4 text-sm">
                      <a
                        href={`https://www.youtube.com/watch?v=${video.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-semibold text-navy-700 hover:text-gold-600"
                      >
                        Watch on YouTube <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                      </a>
                      {video.relatedArticleSlug && (
                        <Link
                          href={`/knowledge-centre/${video.relatedArticleSlug}`}
                          className="inline-flex items-center gap-1.5 font-semibold text-navy-700 hover:text-gold-600"
                        >
                          Related guide <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </>
          ) : (
            <div className="mx-auto max-w-3xl rounded-2xl border border-line bg-cream p-9 text-center shadow-soft sm:p-12">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                <PlayCircle aria-hidden="true" className="h-7 w-7" />
              </span>
              <h2 className="mt-6 text-2xl font-bold tracking-tight">
                Watch on the official channel
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                Visit <strong>Learn With Sujan YT</strong> for the latest videos.
                Individual tutorials will be listed here with titles, descriptions and
                related guides once their details are confirmed.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href={youtubeChannelUrl} variant="gold">
                  Visit YouTube Channel
                </Button>
                <Button href="/knowledge-centre/resources" variant="secondary">
                  Read Written Guides
                </Button>
              </div>
            </div>
          )}
        </Container>
      </section>

      <section id="updates" className="scroll-mt-24 bg-cream py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <div className="max-w-3xl">
              <p className="eyebrow">Procurement updates</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                Updates that matter to contractors
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                Accurate, dated and properly sourced. Official announcements are
                clearly distinguished from personal professional commentary.
              </p>
            </div>
            <div className="mt-8 space-y-4 text-sm leading-relaxed text-charcoal/85 sm:text-base">
              <p>
                Each published update includes a clear headline, a short summary, the
                publication date, an effective date where applicable, a link to the
                official source, and an explanation of practical implications where
                useful.
              </p>
              <p>
                Until verified updates are prepared, use the official sources below to
                check current information directly.
              </p>
            </div>
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-gold-400/40 bg-white p-6">
              <Info aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
              <p className="text-sm leading-relaxed text-charcoal/85">
                <strong className="text-navy-900">No verified updates published yet.</strong>{" "}
                Updates will appear here only after the official source, dates and
                practical implications have been checked.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-line bg-white p-7 shadow-soft">
              <p className="eyebrow">What this section covers</p>
              <dl className="mt-5 divide-y divide-line">
                {updateCoverage.map(([title, text]) => (
                  <div key={title} className="py-3">
                    <dt className="text-sm font-semibold text-navy-900">{title}</dt>
                    <dd className="mt-1 text-xs leading-relaxed text-muted">{text}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h3 className="text-lg font-bold tracking-tight">Official sources</h3>
              <div className="mt-4 grid gap-4">
                {officialSources.map((source) => (
                  <a
                    key={source.href}
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-xl border border-line bg-white p-5 transition-colors hover:border-gold-400"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className="font-semibold text-navy-900">{source.label}</p>
                      <ExternalLink
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 text-gold-600"
                      />
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{source.note}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTA
        title="Have a procurement question we should explain?"
        description="Suggest a topic or ask a question — practical, original guides are built around what contractors actually need."
      />
    </>
  );
}
