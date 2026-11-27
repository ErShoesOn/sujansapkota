import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { ArticleExplorer } from "@/components/articles/ArticleExplorer";
import { CTA } from "@/components/ui/CTA";
import { getAllArticles, getArticleCategories } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Knowledge Centre | Public Procurement Guides for Nepal",
  description:
    "Practical guides, explanations and FAQs on Nepal's public procurement system, e-GP and Bolpatra, tender preparation, bid evaluation and contract management.",
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
  const categories = getArticleCategories();

  return (
    <>
      <PageHeader
        eyebrow="Knowledge Centre"
        title="Practical procurement knowledge"
        description="Straightforward guides, explanations and answers for contractors working with public tenders in Nepal."
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
        </Container>
      </section>

      <CTA
        title="Have a procurement question we should explain?"
        description="Suggest a topic or ask a question — practical, original guides are built around what contractors actually need."
      />
    </>
  );
}
