import { site } from "./site";

export type BreadcrumbItem = { name: string; path: string };

function absolute(path: string) {
  return new URL(path, `${site.url}/`).toString();
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    jobTitle: site.role,
    sameAs: [site.youtubeUrl],
    description:
      "Public Procurement Consultant with 10+ years of experience helping contractors and businesses navigate Nepal's public procurement system.",
    knowsAbout: [
      "Public Procurement in Nepal",
      "Tendering and Bid Preparation",
      "e-GP and Bolpatra",
      "Contract Management",
      "Procurement Training",
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "MBA (Project Management), Bachelor in Engineering",
    },
    worksFor: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: "en",
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absolute(path),
    provider: {
      "@type": "Person",
      name: site.name,
      url: site.url,
    },
    areaServed: {
      "@type": "Country",
      name: "Nepal",
    },
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string | null;
  author: string;
  imageAlt?: string | null;
}) {
  const url = absolute(`/knowledge-centre/${article.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    mainEntityOfPage: url,
    url,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      "@type": "Person",
      name: article.author,
      url: site.url,
      jobTitle: site.role,
    },
    publisher: {
      "@type": "Person",
      name: site.name,
      url: site.url,
    },
    inLanguage: "en",
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function videoSchema(video: {
  title: string;
  description: string;
  videoId: string;
  publishedAt: string;
  thumbnailUrl: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.publishedAt,
    embedUrl: `https://www.youtube-nocookie.com/embed/${video.videoId}`,
    url: `https://www.youtube.com/watch?v=${video.videoId}`,
  };
}
