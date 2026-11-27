const whatsappDigits = (
  process.env.NEXT_PUBLIC_WHATSAPP?.trim() || "+9779851398513"
).replace(/\D/g, "");

const phoneDigits = (
  process.env.NEXT_PUBLIC_PHONE?.trim() || "+9779851398513"
).replace(/\D/g, "");

const contactEmail = process.env.NEXT_PUBLIC_EMAIL?.trim() || "ersapkotasujan@gmail.com";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://www.sapkotasujan.com.np"
).replace(/\/$/, "");

const youtubeUrl =
  process.env.NEXT_PUBLIC_YOUTUBE_URL?.trim() ||
  "https://www.youtube.com/@LearnWithSujanYT";

const facebookUrl =
  process.env.NEXT_PUBLIC_FACEBOOK_URL?.trim() ||
  "https://www.facebook.com/LearnwithSujanYT";

const tiktokUrl =
  process.env.NEXT_PUBLIC_TIKTOK_URL?.trim() ||
  "https://www.tiktok.com/@learnwithsujanyt";

function formatPhone(digits: string) {
  if (digits.startsWith("977") && digits.length === 13) {
    const national = digits.slice(3);
    return `+977 ${national.slice(0, 5)} ${national.slice(5)}`;
  }
  if (digits.length === 10) {
    return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
  }
  return digits ? `+${digits}` : "";
}

export const site = {
  name: "Er Sujan Sapkota",
  role: "Public Procurement Consultant",
  url: siteUrl,
  title: "Er Sujan Sapkota | Public Procurement Consultant in Nepal",
  description:
    "Practical procurement support, tendering assistance and professional guidance for contractors and businesses navigating Nepal's public procurement system.",
  tagline: "Navigate Public Procurement with Confidence.",
  brandMessage: "Practical Procurement Solutions. Professional Guidance. Better Opportunities.",
  locale: "en_NP",
  youtubeUrl,
  facebookUrl,
  tiktokUrl,
  contact: {
    phoneDisplay: formatPhone(phoneDigits),
    phoneUrl: `tel:+${phoneDigits}`,
    whatsappDisplay: formatPhone(whatsappDigits),
    whatsappUrl: `https://wa.me/${whatsappDigits}`,
    email: contactEmail,
  },
};

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Knowledge Centre", href: "/knowledge-centre" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Procurement Training", href: "/services/procurement-training" },
  { label: "Knowledge Centre", href: "/knowledge-centre" },
  { label: "Resources", href: "/knowledge-centre/resources" },
  { label: "Videos", href: "/knowledge-centre#videos" },
  { label: "Updates", href: "/knowledge-centre#updates" },
  { label: "Average Bid Calculator", href: "/average-bid-calculator" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export const officialSources: { label: string; href: string; note: string }[] = [
  {
    label: "Public Procurement Monitoring Office (PPMO)",
    href: "https://ppmo.gov.np/",
    note: "Regulator and official source of procurement rules, notices and guidance.",
  },
  {
    label: "PPMO e-GP / Bolpatra Portal",
    href: "https://bolpatra.gov.np/",
    note: "Official electronic procurement system used for online tender participation.",
  },
];
