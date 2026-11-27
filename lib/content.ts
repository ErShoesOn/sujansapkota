import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ArticleReference = {
  title: string;
  url: string;
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  publishedAt: string;
  updatedAt: string | null;
  keywords: string[];
  references: ArticleReference[];
  content: string;
};

const articlesDirectory = path.join(process.cwd(), "content", "articles");

function readArticleFile(fileName: string): Article {
  const filePath = path.join(articlesDirectory, fileName);
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);

  return {
    slug: data.slug ?? fileName.replace(/\.mdx?$/, ""),
    title: String(data.title ?? ""),
    description: String(data.description ?? ""),
    category: String(data.category ?? "Practical Procurement Guides"),
    author: String(data.author ?? "Er Sujan Sapkota"),
    publishedAt: String(data.publishedAt ?? ""),
    updatedAt: data.updatedAt ? String(data.updatedAt) : null,
    keywords: Array.isArray(data.keywords) ? data.keywords.map(String) : [],
    references: Array.isArray(data.references)
      ? data.references.map((reference: ArticleReference) => ({
          title: String(reference.title),
          url: String(reference.url),
        }))
      : [],
    content,
  };
}

export function getAllArticles(): Article[] {
  if (!fs.existsSync(articlesDirectory)) return [];

  return fs
    .readdirSync(articlesDirectory)
    .filter((file) => /\.mdx?$/.test(file))
    .map(readArticleFile)
    .filter((article) => article.title && article.publishedAt)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getArticleBySlug(slug: string): Article | null {
  return getAllArticles().find((article) => article.slug === slug) ?? null;
}

export function getArticleCategories(): string[] {
  return Array.from(new Set(getAllArticles().map((article) => article.category))).sort();
}

export function getRelatedArticles(currentSlug: string, limit = 3): Article[] {
  const current = getArticleBySlug(currentSlug);
  if (!current) return getAllArticles().slice(0, limit);

  return getAllArticles()
    .filter((article) => article.slug !== currentSlug)
    .sort((a, b) => {
      const score = (article: Article) =>
        (article.category === current.category ? 2 : 0) +
        article.keywords.filter((keyword) => current.keywords.includes(keyword)).length;
      return score(b) - score(a);
    })
    .slice(0, limit);
}
