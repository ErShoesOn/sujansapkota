import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/content";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

const staticPages = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/services", priority: 0.8 },
  { path: "/knowledge-centre", priority: 0.8 },
  { path: "/updates", priority: 0.6 },
  { path: "/training", priority: 0.7 },
  { path: "/resources", priority: 0.7 },
  { path: "/youtube", priority: 0.6 },
  { path: "/contact", priority: 0.9 },
  { path: "/privacy", priority: 0.3 },
  { path: "/disclaimer", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");

  const pages = staticPages.map(({ path, priority }) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly" as const,
    priority,
  }));

  const servicePages = services.map((service) => ({
    url: `${base}/services/${service.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const articles = getAllArticles().map((article) => ({
    url: `${base}/knowledge-centre/${article.slug}`,
    lastModified: article.updatedAt || article.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...servicePages, ...articles];
}
