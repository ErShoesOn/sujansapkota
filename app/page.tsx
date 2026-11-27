import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { HeroCredentials } from "@/components/home/HeroCredentials";
import { Introduction } from "@/components/home/Introduction";
import { Expertise } from "@/components/home/Expertise";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ProfessionalStory } from "@/components/home/ProfessionalStory";
import { FeaturedArticles } from "@/components/home/FeaturedContent";
import { Learning } from "@/components/home/Learning";
import { HomeFAQ } from "@/components/home/HomeFAQ";
import { CTA } from "@/components/ui/CTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { faqSchema } from "@/lib/schema";
import { homeFaqs } from "@/lib/faqs";
import { site } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: site.title,
  description: site.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd value={faqSchema(homeFaqs)} />
      <Hero />
      <HeroCredentials />
      <Introduction />
      <Expertise />
      <ServicesPreview />
      <ProfessionalStory />
      <FeaturedArticles />
      <Learning />
      <HomeFAQ />
      <CTA />
    </>
  );
}
