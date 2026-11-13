export type Project = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  platforms: ("iOS" | "Android" | "Web")[];
  tech: string[];
  /** Tailwind gradient classes for the cover backdrop */
  cover: string;
  /** Big initial(s) shown when there's no app icon */
  mark: string;
  /** Real app icon shown on the cover (public path) — for apps */
  icon?: string;
  /** Full-bleed website screenshot cover (public path) — for web projects */
  screenshot?: string;
  /** Optional logo overlaid on the screenshot cover */
  logo?: string;
  /** Live store / product links */
  links?: {
    appStore?: string;
    playStore?: string;
    web?: string;
    /** In store review: shows a dimmed, non-clickable "Coming soon to the App Store" badge */
    appStoreSoon?: boolean;
  };
  /** Internal/confidential tool — case study shows a "Private" pill instead of store links */
  private?: boolean;
  /**
   * Concept / demo build (no client). Shows a "Concept" pill and a "Live demo"
   * button. Never attach client names, users or results to a concept.
   */
  concept?: boolean;
  /** Optional SEO overrides for the case-study page (defaults derive from name/tagline) */
  metaTitle?: string;
  metaDescription?: string;
  featured: boolean;
  problem: string;
  solution: string;
  outcome: string;
  /** Optional long-form case study: "What the system does" checklist */
  features?: string[];
  /** Optional long-form case study: "How a job flows" numbered steps */
  workflow?: { step: string; description: string }[];
  /**
   * Phone screenshots shown in a "Screens" row on the case study. Hidden when
   * empty. Files live in public/projects/<slug>/.
   */
  gallery?: { src: string; alt: string }[];
  /** Heading for the workflow section. Defaults to "How a job flows". */
  workflowTitle?: string;
};

export const projects: Project[] = [
  {
    slug: "bilge-ai",
    name: "Bilge AI",
    tagline: "Every major AI model (Claude, GPT, Gemini & Grok) in one Turkish-first app",
    category: "AI Assistant",
    platforms: ["iOS", "Android"],
    tech: ["Flutter", "Anthropic Claude", "OpenAI", "Google Gemini", "xAI Grok"],
    cover: "from-indigo-500/25 via-violet-500/10 to-transparent",
    mark: "BA",
    icon: "/projects/bilge-ai.jpg",
    links: {
      appStore: "https://apps.apple.com/ae/app/bilge-ai-t%C3%BCrk-yapay-zeka/id6751204067",
      playStore: "https://play.google.com/store/apps/details?id=com.bilge.ai",
    },
    featured: true,
    problem:
      "Turkish users wanting the best of AI had to juggle several separate apps and subscriptions. ChatGPT, Claude, Gemini, and Grok were all English-first, and none of them were truly fluent in Turkish language or cultural context. Great models, but a fragmented, foreign-feeling experience.",
    solution:
      "We built a single, Turkish-first AI app that puts every frontier model behind one native interface. It integrates the OpenAI, Anthropic Claude, Google Gemini, and xAI Grok APIs so users get official-app-quality access to all of them in one place. It's tuned for Turkish language and culture, answers fast, and keeps every conversation encrypted.",
    outcome:
      "A multi-model AI assistant built specifically for Turkey. It's live on the App Store and Google Play, giving 15,000+ users access to every major AI model in one app, with no subscription-juggling or app-switching.",
  },
  {
    slug: "surveyor-job-management-system",
    name: "Space Maintenance Ops Platform",
    metaTitle: "Surveyor Job Management Software: Case Study",
    metaDescription:
      "Case study: custom job management software for a surveyor-led firm. Job creation, instant WhatsApp and email quote requests, six-step site visits with RAMS and sign-off, plus incident reporting. This is the internal tool running Space Maintenance's operations.",
    tagline:
      "The internal job-management system running a surveyor-led reinstatement firm, from claim to sign-off",
    category: "Surveyor Job Management",
    platforms: ["Web"],
    tech: ["Supabase", "PostgreSQL", "Brevo", "WhatsApp + Email Automation"],
    cover: "from-teal-500/25 via-cyan-600/10 to-transparent",
    mark: "OS",
    logo: "/projects/space-logo.png",
    private: true,
    featured: true,
    problem:
      "Space Maintenance, a surveyor-led insurance reinstatement firm working across London and the South West, was running jobs the way most surveying businesses do: WhatsApp threads, email chains, paper RAMS, and photo folders scattered across phones. Getting quotes meant chasing contractors one by one. Compliance rules like \"No RAMS, no work. No photos, no payment\" existed on paper but couldn't be enforced. And when a claim was questioned months later, assembling the evidence trail meant archaeology.",
    solution:
      "We built them a single operations platform that owns the entire job lifecycle. Surveyors create jobs with the claim essentials, and clients and contractors live in the system as full profiles, with trades, coverage areas, insurance and accreditation documents included. The moment a job is ready, contractors receive the job link by WhatsApp and email simultaneously (via Brevo) and can quote instantly from their phone. The client accepts, the admin schedules, and the contractor gets a unique visit link with a six-step on-site form covering RAMS, before photos, progress, after photos, customer sign-off, and completion, saving as you go. Close it mid-job today, reopen it tomorrow, and everything is exactly where it was left. On completion it locks read-only as a tamper-proof record. An incident-reporting module with escalation logic and RIDDOR screening handles the days when things go wrong.",
    outcome:
      "Quoting now starts the minute a job is created, with notifications landing on WhatsApp and email instantly for every role: surveyor, client, and contractor. Compliance is enforced by the software instead of chased by the admin, so no RAMS means the visit can't proceed and no photos means no completion. Every job carries its own complete evidence trail. And because it runs on Supabase with no per-seat pricing, the firm scales its job volume and team without the software bill scaling with it. This is the system Space Maintenance runs its daily operations on.",
    features: [
      "Job creation by surveyors, with client, address, claim reference, priority, and job type in one record",
      "Client & contractor profiles with full supplier onboarding: trades, coverage areas, insurance and accreditation documents",
      "Job links pushed to contractors by WhatsApp + email (Brevo) the moment a job is ready",
      "Contractors quote directly from the link; clients review and accept in the same system",
      "Unique per-visit links for on-site execution: one link, one visit, full audit trail",
      "Six-step visit form: RAMS → before photos → progress → after photos → customer sign-off → completion",
      "Save-as-you-go state: a half-completed visit reopens exactly where it was left, even days later",
      "Completed visits lock read-only, giving tamper-proof job records for insurers and disputes",
      "Incident reporting with escalation logic and RIDDOR screening",
      "Instant WhatsApp + email notifications to surveyors, clients, and contractors at every stage",
    ],
    workflow: [
      {
        step: "Survey & job creation",
        description:
          "The surveyor logs the job with claim reference, property, client, priority, and job type. This becomes the master record everything else attaches to.",
      },
      {
        step: "Instant quote requests",
        description:
          "Approved contractors matching the trade receive the job link by WhatsApp and email at the same moment. No ring-arounds, no waiting.",
      },
      {
        step: "Quote & client approval",
        description:
          "Contractors submit quotes from the link; the client reviews and accepts in the system, with every decision recorded.",
      },
      {
        step: "Scheduled visit link",
        description:
          "On confirmation, the contractor gets a unique visit link with scope, address, access notes, and the six-step form in one mobile-first page.",
      },
      {
        step: "On-site execution",
        description:
          "RAMS before work starts, photos before, during, and after, then customer sign-off at the end. Everything saves step by step, stays resumable across days, and locks when complete.",
      },
      {
        step: "Review & records",
        description:
          "The completed record lands with the admin for review, with compliance evidence, photos, and sign-off attached to the job forever.",
      },
    ],
  },
  {
    slug: "space-maintenance",
    name: "Space Maintenance",
    tagline:
      "A conversion-focused website for a surveyor-led building repairs & maintenance firm",
    category: "Corporate Website",
    platforms: ["Web"],
    tech: ["JavaScript", "HTML5 / CSS3", "SEO", "Responsive"],
    cover: "from-red-500/25 via-rose-600/10 to-transparent",
    mark: "SM",
    screenshot: "/projects/space-maintenance.jpg",
    logo: "/projects/space-logo.png",
    links: {
      web: "https://spacebmr.co.uk",
    },
    featured: true,
    problem:
      "Space Maintenance had a professional, surveyor-led delivery model but no digital presence to match. They needed a site that could convince national insurers, loss adjusters, managing agents, and housing providers that they were a structured delivery partner rather than just another contractor.",
    solution:
      "We designed and built a fast, SEO-first corporate website that sells the process rather than just the labour. It covers clear service breakdowns, a step-by-step delivery model, project case studies, client testimonials, and a dedicated supply-chain recruitment funnel, all wrapped in a credible B2B brand with conversion-focused CTAs.",
    outcome:
      "A polished, conversion-ready web presence that lets a B2B building-services firm pitch to national clients with confidence. It's live across London and the South West at spacebmr.co.uk.",
  },
  {
    slug: "avc-dealer",
    name: "AVC Dealer",
    tagline:
      "Gate passes, condition reports and floor plan payments for dealers across a US auto auction network",
    category: "Auto Auction Services",
    platforms: ["iOS"],
    tech: ["Flutter", "FlutterFlow", "Firebase"],
    cover: "from-orange-600/25 via-red-500/10 to-transparent",
    mark: "AVC",
    icon: "/projects/avc-dealer.webp",
    links: {
      appStore: "https://apps.apple.com/pk/app/avc-dealer/id1351709612",
    },
    featured: true,
    problem:
      "A dealer buying at an auction two states away needs a condition report before the car runs, a gate pass to get it off the lot, floor plan payment arranged, and transport booked. All of that meant phone calls, one auction at a time, each with its own service desk and its own hold music. Sellers had the same problem in reverse when they wanted run numbers reserved for consignment.",
    solution:
      "We built the dealer-facing app that takes those calls off the phone. Every request type gets its own short form: reports, floor plan payments, gate passes, transportation, inspections, arbitration, and run numbers for consignment. A dealer picks the auction, submits, and the request lands with the right desk. The app also keeps the auction platforms and industry tools a dealer uses on sale day within reach, and live assistance is still a tap away when a request needs a person.",
    outcome:
      "It's live on the App Store as the service app for a support network covering more than 50 auction locations across 25 US states, from Phoenix to Boston. Dealers buying on simulcast or online spend less time on hold and more time bidding.",
  },
  {
    slug: "meridian-retail-wholesale-store",
    name: "Meridian",
    metaTitle: "Retail & Wholesale Apparel Store: Export E-commerce Concept",
    metaDescription:
      "Concept build: one apparel and textile store that sells retail and wholesale from the same catalogue, with MOQ volume pricing, RFQ forms, private label requests and six currencies.",
    tagline:
      "One store for single pieces and full containers: retail and wholesale apparel from the same catalogue",
    category: "Retail & Wholesale E-commerce",
    platforms: ["Web"],
    tech: ["Next.js", "React", "Tailwind CSS", "B2B Wholesale", "Multi-currency"],
    cover: "from-orange-500/25 via-amber-600/10 to-transparent",
    mark: "ME",
    screenshot: "/projects/meridian.jpg",
    links: {
      web: "https://retail-wholesale-site.vercel.app/",
    },
    concept: true,
    featured: true,
    problem:
      "Apparel and textile exporters usually run two half-websites. A retail shop for single orders, and for wholesale buyers a PDF catalogue, an email address and a lot of patience. The importer who wants 500 hoodies has to ask for prices, wait for a reply across a timezone, and then ask again about MOQ, fabric weight and shipping terms. Plenty of them simply move on to the next supplier.",
    solution:
      "We built Meridian as a concept store that treats both buyers as first-class. One catalogue, one switch in the header: Retail shows piece prices and a normal cart, Wholesale shows MOQs and tiered volume pricing on every product. Products carry the specs trade buyers actually filter by, like GSM and fabric blend. Wholesale buyers can request a quote with quantities and a private-label option, and pages for capabilities, QC and shipping terms answer the questions a buyer would otherwise email about. Prices switch between six currencies, from USD and EUR to AED and PKR.",
    outcome:
      "A working storefront concept with sample products, showing how an exporter can sell to a shopper and an importer from the same site without either one feeling like an afterthought. The brand, catalogue and backend (payments, order management, quote emails) are wired per client, and three switchable visual themes show how far one build can be restyled.",
    features: [
      "Retail / Wholesale switch in the header that reprices the entire catalogue instantly",
      "Wholesale mode with MOQ and tiered volume pricing on every product (three quantity bands)",
      "Six currencies: USD, EUR, GBP, AED, AUD and PKR",
      "Shop by category (fitness, casual, streetwear, sportswear, workwear, fabrics and textiles)",
      "Filters trade buyers use: size range, fabric weight in GSM bands, and price",
      "Request-for-quotation form with estimated quantity and a private-label / custom branding option",
      "Wholesale programme page covering private label, AQL 2.5 quality control, FOB / CIF incoterms and multi-currency",
      "Capabilities and sustainability pages that answer buyer due-diligence questions up front",
      "Cart that knows which mode you're in, plus wishlist, account and order screens",
      "Three switchable visual themes from one codebase (Editorial Light, Noir Dark, Hybrid)",
    ],
    workflowTitle: "How a buyer orders",
    workflow: [
      {
        step: "Pick a mode",
        description:
          "A shopper stays in Retail. A buyer for a store or brand flips to Wholesale, and every price on the site changes to volume pricing with the MOQ shown.",
      },
      {
        step: "Browse like a buyer",
        description:
          "Categories and filters work the way trade buyers think: fabric weight, size range and price, with fabric specs on every product card.",
      },
      {
        step: "Price in your currency",
        description:
          "Switch between USD, EUR, GBP, AED, AUD and PKR, so a buyer in Dubai and a buyer in Manchester both see numbers they can use.",
      },
      {
        step: "Order or request a quote",
        description:
          "Retail buyers add pieces to the cart. Wholesale buyers build a volume order at trade prices, or send a quote request with quantities and private-label needs.",
      },
      {
        step: "Due diligence, answered",
        description:
          "Capabilities, QC, incoterms and sustainability pages cover what an importer checks before trusting a new supplier.",
      },
    ],
  },
  {
    slug: "scamalicious",
    name: "SCAMalicious",
    metaTitle: "SCAMalicious: Anti-Scam App Built in Flutter (Case Study)",
    metaDescription:
      "Case study: SCAMalicious, an anti-scam mobile app with an instant scam-risk check, an AI chat assistant on OpenAI and Grok, country-by-country scam reporting and RevenueCat subscriptions. 5,000+ downloads on Google Play.",
    tagline: "A pocket scam detector: check a situation, learn the warning signs, and report fraud in your country",
    category: "Scam Protection / Safety",
    platforms: ["iOS", "Android"],
    tech: [
      "Flutter",
      "FlutterFlow",
      "Firebase",
      "Cloud Functions",
      "OpenAI",
      "xAI Grok",
      "RevenueCat",
      "Custom APIs",
    ],
    cover: "from-blue-600/25 via-amber-500/10 to-transparent",
    mark: "SC",
    icon: "/projects/scamalicious.png",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.TitanZenLimited.scammobileapp",
      appStoreSoon: true,
    },
    featured: true,
    problem:
      "Scams change faster than people's instincts do. One week it's a fake delivery text, the next it's a voice call from \"the bank\" or a prize that needs a small fee first. Most people only learn the warning signs after they've been caught, and even then they rarely know which authority to report it to. The client wanted an app that helps people stop and check before they pay, click or reply.",
    solution:
      "We built SCAMalicious for iOS and Android in Flutter and FlutterFlow, on Firebase with Cloud Functions behind it. The core is a scam-risk check: pick the type of scam you're worried about, answer a few quick questions, and get an instant result, saved to your history so you can look back at past checks. Around it sit a learning centre and warning-signs guides, a community space where people share their own scam stories, and country-by-country reporting that points you to the right fraud authority. An in-app AI assistant, running on OpenAI and Grok models through custom APIs, answers questions in plain language, and RevenueCat handles in-app subscriptions on both stores.",
    outcome:
      "SCAMalicious is live on Google Play with more than 5,000 downloads, and the App Store version is in review. The app keeps receiving updates, and its mix of instant checks, learning content and reporting gives people something useful to do in the moment they suspect a scam, instead of after.",
    features: [
      "Scam-risk check: choose a scam type, answer a few questions, get an instant likelihood result",
      "History of every check you've run, so you can revisit past results",
      "Learning centre and warning-signs guides for common scam types",
      "Report a scam: pick your country and get the right fraud authority contacts",
      "Anti-scam community where people share their stories and lessons",
      "AI chat assistant powered by OpenAI and Grok models, served through custom APIs",
      "Server-side logic on Firebase Cloud Functions, plus custom APIs for the AI models",
      "In-app subscriptions and purchases on both stores via RevenueCat",
      "Accounts with sign-in, built on Firebase",
      "One Flutter codebase for iOS and Android, built with FlutterFlow plus custom Flutter code",
    ],
    workflowTitle: "How a check works",
    workflow: [
      {
        step: "Something feels off",
        description:
          "A suspicious text, call, listing or prize. The user opens the app and picks the type of scam it looks like.",
      },
      {
        step: "Answer a few questions",
        description:
          "A short set of plain-language questions about what happened, with no jargon to decode.",
      },
      {
        step: "Get an instant result",
        description:
          "The app gives a scam-risk result straight away and saves it to the user's history.",
      },
      {
        step: "Learn or ask",
        description:
          "Read the warning signs for that scam type, or ask the AI assistant a follow-up question in plain language.",
      },
      {
        step: "Report it",
        description:
          "If it is a scam, the user picks their country and gets the right authority to report it to.",
      },
    ],
    gallery: [],
  },
  {
    slug: "poland-portal",
    name: "Poland Portal",
    tagline: "The lifestyle companion for expats, locals, and tourists in Poland",
    category: "Lifestyle Platform",
    platforms: ["iOS", "Android"],
    tech: ["Flutter", "Firebase", "REST APIs"],
    cover: "from-rose-500/25 via-red-500/10 to-transparent",
    mark: "PP",
    icon: "/projects/poland-portal.avif",
    links: {
      appStore: "https://apps.apple.com/us/app/poland-portal/id6745757845",
      playStore: "https://play.google.com/store/apps/details?id=com.mycompany.gurbette",
    },
    featured: true,
    problem:
      "Expats and tourists arriving in Poland had information scattered across dozens of websites, Facebook groups, and outdated blogs. There was no single trusted place for city guides, local news, listings, and deals.",
    solution:
      "We built a unified lifestyle platform bringing city guides, hand-picked news, local listings, and exclusive discounts into one polished app, with content management tooling so the team can publish updates in minutes.",
    outcome:
      "A single go-to companion app for the expat community in Poland, live on both the App Store and Google Play with a growing user base across major Polish cities.",
  },
  {
    slug: "mainxpert",
    name: "MainXpert",
    tagline: "Vehicle valuation and damage documentation for automotive professionals",
    category: "Automotive B2B Tool",
    platforms: ["iOS", "Android"],
    tech: ["Flutter", "Firebase", "Custom APIs"],
    cover: "from-sky-500/25 via-blue-500/10 to-transparent",
    mark: "MX",
    icon: "/projects/mainxpert.avif",
    links: {
      appStore: "https://apps.apple.com/pk/app/mainxpert/id6737765201",
      playStore: "https://play.google.com/store/apps/details?id=com.mycompany.mainxpert",
    },
    featured: true,
    problem:
      "Automotive professionals were documenting vehicle condition with ad-hoc photos and paper forms. The process was inconsistent, slow, and impossible to standardize across teams and locations.",
    solution:
      "We built a guided photography workflow that walks inspectors through every required angle, then compiles standardized valuation and damage reports into a centralized system accessible to the whole organization.",
    outcome:
      "Consistent, professional vehicle reports produced in a fraction of the time, with centralized records replacing scattered photo folders and paperwork.",
  },
  {
    slug: "mindful-mantra",
    name: "Mindful Mantra",
    tagline: "Personalized meditation with Solfeggio frequencies and binaural waves",
    category: "Health & Wellness",
    platforms: ["iOS", "Android"],
    tech: ["Flutter", "Firebase", "Audio Engine"],
    cover: "from-violet-500/25 via-purple-500/10 to-transparent",
    mark: "MM",
    icon: "/projects/mindful-mantra.webp",
    links: {
      appStore: "https://apps.apple.com/us/app/mindful-mantra/id6698892936",
      playStore:
        "https://play.google.com/store/apps/details?id=com.mindfulmantrastudio.meditation",
    },
    featured: true,
    problem:
      "Meditation apps are either rigid guided programs or basic sound loops. Users who wanted to layer Solfeggio frequencies, binaural waves, and ambient soundscapes into their own practice had no good option.",
    solution:
      "We engineered a customizable audio mixing experience where users blend frequencies, binaural beats, and soundscapes into personal sessions, backed by a precise audio engine that keeps every layer in sync.",
    outcome:
      "A meditation app that stands apart in a crowded category, live on both platforms with deeply personalized relaxation sessions as its signature feature.",
  },
  {
    slug: "zwipe",
    name: "Zwipe",
    tagline: "A smarter way to buy and sell cars in the UAE",
    category: "Automotive Marketplace",
    platforms: ["iOS", "Android"],
    tech: ["Flutter", "Firebase", "Real-time Chat"],
    cover: "from-lime-400/25 via-green-500/10 to-transparent",
    mark: "ZW",
    icon: "/projects/zwipe.webp",
    links: {
      appStore: "https://apps.apple.com/pk/app/zwipe-marketplace/id6743154752",
      playStore: "https://play.google.com/store/apps/details?id=com.mycompany.zwipe",
    },
    featured: true,
    problem:
      "Car buyers in the UAE faced cluttered classified sites full of stale listings and slow email-based contact, while sellers struggled to reach serious buyers quickly.",
    solution:
      "We built a fast, swipe-friendly marketplace: browse quickly, save what you like, and chat with sellers instantly through built-in real-time messaging. Listing creation is streamlined so sellers go live in minutes.",
    outcome:
      "A modern car marketplace live in the UAE on both iOS and Android, turning a frustrating multi-day process into same-session conversations between buyers and sellers.",
  },
  {
    slug: "thafath",
    name: "THAFATH",
    tagline: "Halal matchmaking for the Amazigh community",
    category: "Social / Matchmaking",
    platforms: ["Android"],
    tech: ["Flutter", "Firebase", "Realtime DB"],
    cover: "from-amber-500/25 via-orange-500/10 to-transparent",
    mark: "TH",
    icon: "/projects/thafath.jpg",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.mythafath.datingapplication3",
    },
    featured: false,
    problem:
      "The Algerian Berber (Amazigh) community had no dedicated matchmaking platform that respected their cultural and religious values. Mainstream dating apps were a poor fit for people seeking serious, marriage-focused relationships.",
    solution:
      "We built a halal matchmaking app designed around the community's values: intentional profiles, respectful communication flows, and features built for serious relationships and marriage rather than casual swiping.",
    outcome:
      "A culturally authentic platform serving a community overlooked by mainstream apps, live on Google Play.",
  },
  {
    slug: "sacred-diary",
    name: "Sacred Diary",
    tagline: "Spiritual journaling with lunar phase tracking",
    category: "Lifestyle / Wellness",
    platforms: ["iOS", "Android"],
    tech: ["Flutter", "Firebase", "Speech-to-Text"],
    cover: "from-indigo-500/25 via-blue-600/10 to-transparent",
    mark: "SD",
    icon: "/projects/sacred-diary.png",
    links: {
      appStore: "https://apps.apple.com/pk/app/sacred-diary/id6756674238",
      playStore: "https://play.google.com/store/apps/details?id=com.flutterflow.sacrednetworkapp",
    },
    featured: false,
    problem:
      "People practicing spiritual journaling, recording dreams, meditations, and insights, were forced into generic note apps with no support for transcription, sharing, or the natural cycles their practice follows.",
    solution:
      "We built a dedicated spiritual journal with voice transcription for capturing insights the moment they arrive, lunar phase tracking woven through the experience, and private sharing for trusted circles.",
    outcome:
      "A niche journaling app with features no general-purpose competitor offers, live on both iOS and Android.",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const featuredProjects = projects.filter((p) => p.featured);
