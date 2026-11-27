import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTA } from "@/components/ui/CTA";
import { videos, youtubeChannelUrl } from "@/content/videos";
import { videoSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "YouTube Tutorials | Public Procurement in Nepal",
  description:
    "Visit the official Learn With Sujan YT YouTube channel and find educational videos on public procurement, tendering, Bolpatra/e-GP and contract management in Nepal.",
  path: "/youtube",
});

export default function YouTubePage() {
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
        eyebrow="YouTube"
        title="Procurement tutorials on video"
        description="Step-by-step explanations for contractors who prefer to watch and follow along."
        breadcrumbs={[{ name: "YouTube", path: "/youtube" }]}
      />

      <section className="bg-cream py-16 sm:py-20">
        <Container>
          {videos.length > 0 ? (
            <>
              <SectionHeading
                eyebrow="Videos"
                title="Featured tutorials"
                description="Embeds use privacy-enhanced YouTube playback. Each video links to its original source."
              />
              <div className="mt-12 grid gap-8 lg:grid-cols-2">
                {videos.map((video) => (
                  <article key={video.id} id={video.id} className="rounded-xl border border-line bg-white p-5 shadow-soft">
                    <YouTubeEmbed videoId={video.videoId} title={video.title} />
                    <div className="mt-5 flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-gold-600">
                          {video.category}
                        </p>
                        <h2 className="mt-2 text-lg font-bold">{video.title}</h2>
                        <p className="mt-2 text-sm leading-relaxed text-muted">{video.description}</p>
                      </div>
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
            <div className="mx-auto max-w-3xl rounded-2xl border border-line bg-white p-9 text-center shadow-soft sm:p-12">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                <PlayCircle aria-hidden="true" className="h-7 w-7" />
              </span>
              <h2 className="mt-6 text-2xl font-bold tracking-tight">
                Watch on the official channel
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                Visit <strong>Learn With Sujan YT</strong> for the latest videos.
                Individual tutorials will be added to this page with titles,
                descriptions and related guides once their video details are confirmed.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href={youtubeChannelUrl} variant="gold">
                  Visit YouTube Channel
                </Button>
                <Button href="/knowledge-centre" variant="secondary">
                  Read Written Guides
                </Button>
              </div>
            </div>
          )}
        </Container>
      </section>

      <CTA />
    </>
  );
}
