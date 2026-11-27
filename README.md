# sapkotasujan.com.np

Official professional website of **Er Sujan Sapkota**, Public Procurement Consultant (Nepal).

Built with **Next.js (App Router) + TypeScript + Tailwind CSS** for deployment on **Vercel**.

## Project purpose

A professional personal brand, procurement support, and knowledge & learning platform focused on Nepal's public procurement system.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Markdown/MDX-ready content architecture
- GitHub + Vercel

## Getting started

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm start
```

Type-check:

```bash
npm run typecheck
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in verified values:

- `NEXT_PUBLIC_SITE_URL` — canonical site URL (default: `https://sapkotasujan.com.np`)
- `NEXT_PUBLIC_PHONE` — verified phone number (defaults to `+9779851398513`)
- `NEXT_PUBLIC_WHATSAPP` — verified WhatsApp number/link (defaults to `+9779851398513`)
- `NEXT_PUBLIC_EMAIL` — verified email address (defaults to `ersapkotasujan@gmail.com`)
- `NEXT_PUBLIC_YOUTUBE_URL` — official YouTube channel (defaults to `https://www.youtube.com/@LearnWithSujanYT`)
- `NEXT_PUBLIC_FACEBOOK_URL` — official Facebook page (defaults to `https://www.facebook.com/LearnwithSujanYT`)
- `NEXT_PUBLIC_TIKTOK_URL` — official TikTok account (defaults to `https://www.tiktok.com/@learnwithsujanyt`)
- `NEXT_PUBLIC_GA_ID` — Google Analytics 4 Measurement ID
- `NEXT_PUBLIC_GSC_VERIFICATION` — Google Search Console verification token
- `NEXT_PUBLIC_BING_VERIFICATION` — Bing Webmaster Tools verification token

**Do not commit `.env` files or credentials.**

## Content

Articles, updates, and resources live in `content/` as Markdown files with frontmatter. The site auto-discovers published content for listings, sitemap, and structured data.

## SEO / AEO / GEO

- Dynamic `app/sitemap.ts` and `app/robots.ts`
- Per-page metadata and canonical URLs
- JSON-LD structured data (Person, WebSite, Service, Article, BreadcrumbList)
- Question-based educational content and FAQs

## Deployment (Vercel)

1. Push this folder to a GitHub repository on the `main` branch (Git must be installed locally, or use GitHub Desktop).
2. Connect that GitHub repository to Vercel.
3. Set environment variables in Vercel project settings (see `.env.example`). Do not upload `.env.local`.
4. Configure production domain `sapkotasujan.com.np` and enforce HTTPS/canonical redirects.
5. Deploy from `main`; use preview deployments for branches.
6. After deploy, verify: `/`, `/sitemap.xml`, `/robots.txt`, metadata, and canonical redirects.

## Post-deploy search setup

- Submit sitemap in Google Search Console and Bing Webmaster Tools.
- Verify domain ownership (use env verification tokens).
- Monitor indexing and Core Web Vitals.

## Notes

- WhatsApp and phone are displayed as `+977 98513 98513` (override with `NEXT_PUBLIC_WHATSAPP` and `NEXT_PUBLIC_PHONE`). Until a separate phone number is verified, both buttons use this number.
- Email is configured as `ersapkotasujan@gmail.com` (override with `NEXT_PUBLIC_EMAIL`).
- YouTube channel: `https://www.youtube.com/@LearnWithSujanYT` (override with `NEXT_PUBLIC_YOUTUBE_URL`). Individual videos are added only after verified video IDs are supplied.
- The contact page has no inquiry form; it links directly to a phone call, WhatsApp, email, Facebook and TikTok.
- Social profile links are configurable through `NEXT_PUBLIC_FACEBOOK_URL` and `NEXT_PUBLIC_TIKTOK_URL`.
- Analytics IDs are placeholders until verified values are provided.
- Legal/regulatory content should be verified against current PPMO/official sources before publishing updates.
