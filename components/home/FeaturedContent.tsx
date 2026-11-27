import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { getAllArticles } from "@/lib/content";

export function FeaturedArticles() {
  const articles = getAllArticles().slice(0, 3);
  if (articles.length === 0) return null;

  return (
    <section className="bg-cream py-20 sm:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Knowledge Centre"
            title="Practical guides for contractors"
            description="Original, straightforward explanations of procurement procedures, documents and terminology."
          />
          <Button href="/knowledge-centre" variant="secondary">
            Visit Knowledge Centre
          </Button>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </Container>
    </section>
  );
}
