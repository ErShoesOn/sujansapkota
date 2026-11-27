import { site } from "@/lib/site";

/**
 * Add verified YouTube videos here once titles and video IDs are confirmed.
 *
 * type Video = {
 *   id: string;
 *   title: string;
 *   description: string;
 *   videoId: string; // YouTube watch ID, e.g. "abcdefghijk"
 *   category: string;
 *   publishedAt: string;
 *   featured?: boolean;
 *   relatedArticleSlug?: string;
 * };
 *
 * Embeds use youtube-nocookie.com for privacy-enhanced playback.
 * VideoObject schema is only generated for entries added here.
 */
export type Video = {
  id: string;
  title: string;
  description: string;
  videoId: string;
  category: string;
  publishedAt: string;
  featured?: boolean;
  relatedArticleSlug?: string;
};

export const videos: Video[] = [];
export const youtubeChannelUrl = site.youtubeUrl;
