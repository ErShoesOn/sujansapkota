export type Resource = {
  slug: string;
  title: string;
  description: string;
  intendedUse: string;
  fileType: string;
  fileName: string;
  href: string;
};

/**
 * Only publish materials that have been checked for accuracy.
 * Every downloadable file carries a general-guidance disclaimer.
 */
export const resources: Resource[] = [
  {
    slug: "public-procurement-act-2063",
    title: "The Public Procurement Act, 2063 (2007)",
    description:
      "PDF reference copy of the Public Procurement Act, 2063 (2007).",
    intendedUse: "Use as a reference for public procurement law and procedures.",
    fileType: "PDF (.pdf)",
    fileName: "public-procurement-act-2063.pdf",
    href: "/downloads/public-procurement-act-2063.pdf",
  },
  {
    slug: "public-procurement-regulation-2064",
    title: "The Public Procurement Regulation, 2064 (2007)",
    description:
      "PDF reference copy of the Public Procurement Regulation, 2064 (2007).",
    intendedUse: "Use as a reference for public procurement rules and procedures.",
    fileType: "PDF (.pdf)",
    fileName: "public-procurement-regulation-2064.pdf",
    href: "/downloads/public-procurement-regulation-2064.pdf",
  },
  {
    slug: "representative-authorisation",
    title: "Representative Authorisation",
    description:
      "A PDF reference document related to authorising a representative for procurement work.",
    intendedUse: "Use as a reference when preparing representative authorisation documents.",
    fileType: "PDF (.pdf)",
    fileName: "representative-authorisation.pdf",
    href: "/downloads/representative-authorisation.pdf",
  },
  {
    slug: "letter-of-technical-bid",
    title: "Letter of Technical Bid",
    description:
      "PDF reference copy of a Letter of Technical Bid.",
    intendedUse: "Use as a reference when preparing a technical bid letter.",
    fileType: "PDF (.pdf)",
    fileName: "letter-of-technical-bid.pdf",
    href: "/downloads/letter-of-technical-bid.pdf",
  },
  {
    slug: "letter-of-price-bid",
    title: "Letter of Price Bid",
    description:
      "PDF reference copy of a Letter of Price Bid.",
    intendedUse: "Use as a reference when preparing a price bid letter.",
    fileType: "PDF (.pdf)",
    fileName: "letter-of-price-bid.pdf",
    href: "/downloads/letter-of-price-bid.pdf",
  },
  {
    slug: "jv-agreement-and-jv-poa",
    title: "JV Agreement and JV POA",
    description:
      "PDF reference document covering a joint venture agreement and power of attorney.",
    intendedUse: "Use as a reference when preparing joint venture bidding documents.",
    fileType: "PDF (.pdf)",
    fileName: "jv-agreement-and-jv-poa.pdf",
    href: "/downloads/jv-agreement-and-jv-poa.pdf",
  },
];
