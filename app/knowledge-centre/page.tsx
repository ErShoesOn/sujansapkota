import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { getAllArticles } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Knowledge Centre | Public Procurement Guides for Nepal",
  description:
    "Practical guides for Nepal's public procurement system, e-GP and Bolpatra, tender preparation and contract management.",
  path: "/knowledge-centre",
});

export default function KnowledgeCentrePage() {
  const articles = getAllArticles().map(({ slug, title, description, category, publishedAt }) => ({
    slug,
    title,
    description,
    category,
    publishedAt,
  }));

  return (
    <>
      <PageHeader
        eyebrow="Knowledge Centre"
        title="Practical procurement knowledge"
        description="Straightforward guides for contractors working with public tenders in Nepal."
        breadcrumbs={[{ name: "Knowledge Centre", path: "/knowledge-centre" }]}
      />

      <section className="bg-cream py-16 sm:py-20">
        <Container>
          {articles.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} headingLevel="h2" />
              ))}
            </div>
          ) : (
            <p className="rounded-xl border border-line bg-white p-8 text-sm text-muted">
              Articles are being prepared. Please check back soon.
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
