export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  intro: string;
  problems: string[];
  scope: string[];
  process: { step: string; text: string }[];
  audience: string[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "tendering-and-bid-preparation",
    title: "Tendering and Bid Preparation",
    shortTitle: "Tendering & Bid Preparation",
    summary:
      "From spotting the right tender to submitting a complete, compliant bid — practical support at every step.",
    intro:
      "A good bid is more than a filled-in form. It is a careful reading of the tender document, an honest eligibility check, and a submission that meets the stated requirements. This service supports contractors who want to prepare bids with clarity and fewer last-minute surprises.",
    problems: [
      "Unsure whether a tender is worth pursuing or whether your firm is eligible.",
      "Difficulty interpreting tender conditions, eligibility criteria and evaluation requirements.",
      "Missing documents, inconsistent information or formatting errors in the bid.",
      "BOQ and financial proposal preparation under time pressure.",
      "Confusion around online submission requirements and deadlines.",
    ],
    scope: [
      "Tender opportunity analysis and initial eligibility assessment",
      "Tender document review and requirement mapping",
      "Technical proposal preparation support",
      "Financial proposal and BOQ review",
      "Bid documentation and compliance review",
      "Electronic bid submission guidance",
    ],
    process: [
      { step: "Review", text: "We read the tender notice and document, then identify the key requirements and risks." },
      { step: "Assess", text: "We check eligibility, documents and timeline against what the tender actually asks for." },
      { step: "Prepare", text: "We help organise the technical and financial information into a clear, complete bid." },
      { step: "Check", text: "We run a final compliance review before submission so avoidable gaps are caught early." },
    ],
    audience: [
      "New contractors preparing their first government tenders",
      "Small and medium contractors bidding regularly",
      "Class A, B, C and D contractors",
      "Suppliers and vendors responding to public tenders",
    ],
    faqs: [
      {
        question: "Can you guarantee that my bid will win?",
        answer:
          "No. Tender outcomes depend on evaluation by the procuring entity. The service focuses on preparing a clear, complete and compliant bid — it does not guarantee an award.",
      },
      {
        question: "Do you prepare bids for every tender?",
        answer:
          "Each assignment is reviewed first. Support is provided where the scope and timeline allow a proper, careful preparation process.",
      },
      {
        question: "Can you help with only a document review?",
        answer:
          "Yes. A focused review of your tender documents or draft bid can be requested as separate support.",
      },
    ],
  },
  {
    slug: "egp-and-bolpatra-support",
    title: "e-GP and Bolpatra Support",
    shortTitle: "e-GP & Bolpatra",
    summary:
      "Confident handling of bidder registration, account setup, digital signatures and online tender submission.",
    intro:
      "Nepal's public procurement system is increasingly electronic. Many capable contractors lose time because of account, authorisation or submission issues rather than the quality of their bid. This service focuses on the practical setup and troubleshooting needed to participate through the official e-GP portal.",
    problems: [
      "Not knowing where to start with bidder registration on Bolpatra.",
      "Confusion about representative authorisation and account roles.",
      "Two-Factor Authentication, digital signature or login problems.",
      "Uncertainty about uploading documents and submitting a bid online.",
      "Missing an important step in the electronic submission process.",
    ],
    scope: [
      "Bidder account registration guidance",
      "Representative authorisation setup",
      "Two-Factor Authentication (2FA) guidance",
      "Digital signature assistance",
      "e-GP account troubleshooting",
      "Electronic tender participation and online bid submission guidance",
    ],
    process: [
      { step: "Understand", text: "We identify what you are trying to do and what access your firm currently has." },
      { step: "Set up", text: "We guide you through registration, authorisation and security settings on the official portal." },
      { step: "Practise", text: "We walk through how documents are uploaded, checked and submitted online." },
      { step: "Support", text: "We help troubleshoot account-level issues as they arise during participation." },
    ],
    audience: [
      "Contractors new to online tendering",
      "Firms updating or recovering an existing e-GP account",
      "Representatives responsible for tender submission",
      "Teams that need internal training on Bolpatra",
    ],
    faqs: [
      {
        question: "Is Bolpatra the official e-GP portal?",
        answer:
          "PPMO's electronic procurement system is available through bolpatra.gov.np. Always confirm you are using the official portal and the current instructions published there.",
      },
      {
        question: "Can you register an account on my behalf?",
        answer:
          "Registration requires your firm's authentic information and authorisation. Guidance is provided so that your authorised representatives complete the process correctly.",
      },
      {
        question: "Do interface steps ever change?",
        answer:
          "Yes. Portal layouts and procedures can change. Follow the current on-screen instructions and official PPMO guidance rather than relying on older screenshots.",
      },
    ],
  },
  {
    slug: "contract-management",
    title: "Contract Management",
    shortTitle: "Contract Management",
    summary:
      "Practical support after the award — documentation, schedules, variations, extensions and contract closure.",
    intro:
      "Winning a tender is only the beginning. The contract phase brings work schedules, running bills, correspondence, variations and time extensions. This service helps contractors keep the contract record clear, timely and consistent with the agreed documents.",
    problems: [
      "Unclear obligations after contract signing.",
      "Work schedules that do not reflect site realities.",
      "Running bills and supporting documents prepared inconsistently.",
      "Variation orders and Extension of Time requests without proper records.",
      "Final bills and contract closure delayed by documentation gaps.",
    ],
    scope: [
      "Contract document review",
      "Work schedule preparation and planning",
      "Running bill documentation",
      "Variation orders",
      "Extension of Time (EOT) documentation",
      "Claims and contractual correspondence",
      "Contract implementation support",
      "Final bill documentation and contract closure",
    ],
    process: [
      { step: "Read", text: "We review the contract documents and clarify the key obligations and timelines." },
      { step: "Plan", text: "We help set up a practical schedule and documentation structure for implementation." },
      { step: "Record", text: "We support preparation of bills, correspondence and records as the work progresses." },
      { step: "Close", text: "We help organise final documentation and the closure process." },
    ],
    audience: [
      "Contractors managing active public contracts",
      "Project teams handling bills and variations",
      "Firms facing time extension or correspondence requirements",
      "Contractors preparing final bill documentation",
    ],
    faqs: [
      {
        question: "What does a contract management consultant actually do?",
        answer:
          "The work is mostly practical: reading the contract, keeping records consistent, helping prepare schedules and bills, and making sure correspondence is clear and timely.",
      },
      {
        question: "Can you help with an Extension of Time request?",
        answer:
          "Yes, with documenting the request and organising supporting information. Whether an extension is granted depends on the contract terms and the procuring entity's decision.",
      },
      {
        question: "Do you replace my site engineer or finance team?",
        answer:
          "No. The service provides guidance and documentation support; your team remains responsible for execution and decisions.",
      },
    ],
  },
  {
    slug: "procurement-training",
    title: "Procurement Training",
    shortTitle: "Procurement Training",
    summary:
      "Online and physical training that explains public procurement in plain language, with practical examples.",
    intro:
      "Training works best when it answers the questions participants actually face. Sessions are built around real procurement workflows — registration, tender preparation, evaluation basics and contract documentation — and are adapted to the experience level of the group.",
    problems: [
      "New staff do not know how the procurement cycle fits together.",
      "Teams rely on trial and error instead of a shared process.",
      "Staff confuse terminology such as eligibility, responsiveness and evaluation.",
      "Repeated account, documentation or submission mistakes.",
      "Little practical guidance after training ends.",
    ],
    scope: [
      "Online procurement training",
      "Physical workshops and institutional sessions",
      "Bidder account registration training",
      "Tender preparation training",
      "Bolpatra and e-GP training",
      "Public procurement laws and regulations overview",
      "Practical procurement documentation workshops",
    ],
    process: [
      { step: "Discuss", text: "We understand the group, their roles and the problems they want to solve." },
      { step: "Design", text: "We outline topics, examples and a practical format suited to online or in-person delivery." },
      { step: "Deliver", text: "We run the session with clear explanations and worked examples." },
      { step: "Follow up", text: "We make resources available and answer follow-up questions where practical." },
    ],
    audience: [
      "New and established contractors",
      "Procurement and project staff",
      "Engineering firms",
      "Organisations arranging procurement awareness sessions",
      "Students and professionals learning public procurement",
    ],
    faqs: [
      {
        question: "Do you offer online and in-person sessions?",
        answer:
          "Yes. Delivery format is planned with the organisation based on the topic, participants and location. Contact us to discuss requirements.",
      },
      {
        question: "Are certificates or fixed schedules published?",
        answer:
          "No fixed schedule, fee or certificate is published here. Details are shared directly for each confirmed training request.",
      },
      {
        question: "Can topics be customised?",
        answer:
          "Yes. Training content is adapted to the audience — for example, basics for new contractors or documentation practice for experienced teams.",
      },
    ],
  },
  {
    slug: "procurement-advisory-and-guidance",
    title: "Procurement Advisory and Guidance",
    shortTitle: "Procurement Advisory",
    summary:
      "Clear answers and practical guidance when a procurement question needs a second opinion.",
    intro:
      "Sometimes the need is not a full assignment but a clear answer: how to read a clause, what to check next, or how to respond to a procurement problem. This service provides focused professional guidance based on the specific situation you describe.",
    problems: [
      "A tender condition is unclear and you need a practical reading.",
      "You want a second look at a compliance question.",
      "A post-award issue needs a structured way forward.",
      "You need to understand which rule applies to your situation.",
      "You want a short discussion before committing to a tender.",
    ],
    scope: [
      "Public procurement guidance",
      "Procurement law and regulatory interpretation",
      "Tendering problem resolution",
      "Procurement compliance assistance",
      "Bid preparation guidance",
      "Contractual and post-award guidance",
    ],
    process: [
      { step: "Describe", text: "You share the context, documents and the specific question you want answered." },
      { step: "Clarify", text: "We ask focused questions and separate official requirements from professional interpretation." },
      { step: "Advise", text: "We explain the practical options, considerations and likely next steps." },
      { step: "Document", text: "Where useful, the key points are summarised for your records." },
    ],
    audience: [
      "Contractors evaluating a tender opportunity",
      "Organisations seeking a procurement second opinion",
      "Suppliers needing clarity on requirements",
      "Professionals working through a procurement issue",
    ],
    faqs: [
      {
        question: "Is this legal advice?",
        answer:
          "No. It is independent professional procurement guidance. Official laws, regulations and notices take precedence, and you should verify requirements for your own assignment.",
      },
      {
        question: "Can I ask a single short question?",
        answer:
          "Yes. Call or message me on WhatsApp and describe the question briefly so we can suggest the right level of support.",
      },
      {
        question: "Are opinions presented as government instructions?",
        answer:
          "No. Professional interpretation is clearly separated from official requirements, with references to authoritative sources where available.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
