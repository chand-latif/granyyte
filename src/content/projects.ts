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
  };
  /** Internal/confidential tool — case study shows a "Private" pill instead of store links */
  private?: boolean;
  featured: boolean;
  problem: string;
  solution: string;
  outcome: string;
  /** Optional long-form case study: "What the system does" checklist */
  features?: string[];
  /** Optional long-form case study: "How a job flows" numbered steps */
  workflow?: { step: string; description: string }[];
};

export const projects: Project[] = [
  {
    slug: "bilge-ai",
    name: "Bilge AI",
    tagline: "Every major AI model — Claude, GPT, Gemini & Grok — in one Turkish-first app",
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
      "Turkish users wanting the best of AI had to juggle several separate apps and subscriptions — ChatGPT, Claude, Gemini, Grok — each English-first and none truly fluent in Turkish language and cultural context. Great models, but a fragmented, foreign-feeling experience.",
    solution:
      "I built a single, Turkish-first AI app that puts every frontier model behind one native interface — integrating the OpenAI, Anthropic Claude, Google Gemini, and xAI Grok APIs so users get official-app-quality access to all of them in one place. It's tuned for Turkish language and culture, answers fast, and keeps every conversation encrypted.",
    outcome:
      "A multi-model AI assistant built specifically for Turkey — live on the App Store and Google Play, giving 15,000+ users access to every major AI model in one app, with no subscription-juggling or app-switching.",
  },
  {
    slug: "surveyor-job-management-system",
    name: "Space Maintenance Ops Platform",
    tagline:
      "The internal job-management system running a surveyor-led reinstatement firm — from claim to sign-off",
    category: "Surveyor Job Management",
    platforms: ["Web"],
    tech: ["Supabase", "PostgreSQL", "Brevo", "WhatsApp + Email Automation"],
    cover: "from-teal-500/25 via-cyan-600/10 to-transparent",
    mark: "OS",
    logo: "/projects/space-logo.png",
    private: true,
    featured: true,
    problem:
      "Space Maintenance — a surveyor-led insurance reinstatement firm working across London and the South West — was running jobs the way most surveying businesses do: WhatsApp threads, email chains, paper RAMS, and photo folders scattered across phones. Getting quotes meant chasing contractors one by one. Compliance rules like \"No RAMS, no work — no photos, no payment\" existed on paper but couldn't be enforced. And when a claim was questioned months later, assembling the evidence trail meant archaeology.",
    solution:
      "I built them a single operations platform that owns the entire job lifecycle. Surveyors create jobs with the claim essentials; clients and contractors live in the system as full profiles — trades, coverage areas, insurance and accreditation documents included. The moment a job is ready, contractors receive the job link by WhatsApp and email simultaneously (via Brevo) and can quote instantly from their phone. Client accepts, admin schedules, and the contractor gets a unique visit link: a six-step on-site form — RAMS, before photos, progress, after photos, customer sign-off, completion — that saves as you go. Close it mid-job today, reopen it tomorrow, everything is exactly where it was left. On completion it locks read-only: a tamper-proof record. An incident-reporting module with escalation logic and RIDDOR screening handles the days when things go wrong.",
    outcome:
      "Quoting now starts the minute a job is created — notifications land on WhatsApp and email instantly, for every role: surveyor, client, and contractor. Compliance is enforced by the software instead of chased by the admin: no RAMS means the visit can't proceed, no photos means no completion. Every job carries its own complete evidence trail. And because it runs on Supabase with no per-seat pricing, the firm scales its job volume and team without the software bill scaling with it. This is the system Space Maintenance runs its daily operations on.",
    features: [
      "Job creation by surveyors — client, address, claim reference, priority, and job type in one record",
      "Client & contractor profiles with full supplier onboarding: trades, coverage areas, insurance and accreditation documents",
      "Job links pushed to contractors by WhatsApp + email (Brevo) the moment a job is ready",
      "Contractors quote directly from the link; clients review and accept in the same system",
      "Unique per-visit links for on-site execution — one link, one visit, full audit trail",
      "Six-step visit form: RAMS → before photos → progress → after photos → customer sign-off → completion",
      "Save-as-you-go state: a half-completed visit reopens exactly where it was left, even days later",
      "Completed visits lock read-only — tamper-proof job records for insurers and disputes",
      "Incident reporting with escalation logic and RIDDOR screening",
      "Instant WhatsApp + email notifications to surveyors, clients, and contractors at every stage",
    ],
    workflow: [
      {
        step: "Survey & job creation",
        description:
          "The surveyor logs the job with claim reference, property, client, priority, and job type — the master record everything else attaches to.",
      },
      {
        step: "Instant quote requests",
        description:
          "Approved contractors matching the trade receive the job link by WhatsApp and email at the same moment — no ring-arounds, no waiting.",
      },
      {
        step: "Quote & client approval",
        description:
          "Contractors submit quotes from the link; the client reviews and accepts in the system, with every decision recorded.",
      },
      {
        step: "Scheduled visit link",
        description:
          "On confirmation, the contractor gets a unique visit link — scope, address, access notes, and the six-step form in one mobile-first page.",
      },
      {
        step: "On-site execution",
        description:
          "RAMS before work starts, photos before/during/after, customer sign-off at the end — saved step by step, resumable across days, locked when complete.",
      },
      {
        step: "Review & records",
        description:
          "The completed record lands with the admin for review — compliance evidence, photos, and sign-off attached to the job forever.",
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
      "Space Maintenance had a professional, surveyor-led delivery model — but no digital presence to match. They needed a site that could convince national insurers, loss adjusters, managing agents and housing providers that they were a structured delivery partner, not just another contractor.",
    solution:
      "I designed and built a fast, SEO-first corporate website that sells the process, not just the labour: clear service breakdowns, a step-by-step delivery model, project case studies, client testimonials, and a dedicated supply-chain recruitment funnel — all wrapped in a credible B2B brand with conversion-focused CTAs.",
    outcome:
      "A polished, conversion-ready web presence that lets a B2B building-services firm pitch to national clients with confidence — live across London and the South West at spacebmr.co.uk.",
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
      "Expats and tourists arriving in Poland had information scattered across dozens of websites, Facebook groups, and outdated blogs — no single trusted place for city guides, local news, listings, and deals.",
    solution:
      "I built a unified lifestyle platform bringing city guides, curated news, local listings, and exclusive discounts into one polished app — with content management tooling so the team can publish updates in minutes.",
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
      "Automotive professionals were documenting vehicle condition with ad-hoc photos and paper forms — inconsistent, slow, and impossible to standardize across teams and locations.",
    solution:
      "I built a guided photography workflow that walks inspectors through every required angle, then compiles standardized valuation and damage reports into a centralized system accessible to the whole organization.",
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
      "Meditation apps are either rigid guided programs or basic sound loops — users wanting to layer Solfeggio frequencies, binaural waves, and ambient soundscapes into their own practice had no good option.",
    solution:
      "I engineered a customizable audio mixing experience where users blend frequencies, binaural beats, and soundscapes into personal sessions — with a precise audio engine that keeps every layer in sync.",
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
      "Car buyers in the UAE faced cluttered classified sites full of stale listings and slow email-based contact — while sellers struggled to reach serious buyers quickly.",
    solution:
      "I built a fast, swipe-friendly marketplace: browse quickly, save what you like, and chat with sellers instantly through built-in real-time messaging. Listing creation is streamlined so sellers go live in minutes.",
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
      "The Algerian Berber (Amazigh) community had no dedicated matchmaking platform respecting their cultural and religious values — mainstream dating apps were a poor fit for people seeking serious, marriage-focused relationships.",
    solution:
      "I built a halal matchmaking app designed around the community's values: intentional profiles, respectful communication flows, and features built for serious relationships and marriage rather than casual swiping.",
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
      "People practicing spiritual journaling — recording dreams, meditations, and insights — were forced into generic note apps with no support for transcription, sharing, or the natural cycles their practice follows.",
    solution:
      "I built a dedicated spiritual journal with voice transcription for capturing insights the moment they arrive, lunar phase tracking woven through the experience, and private sharing for trusted circles.",
    outcome:
      "A niche journaling app with features no general-purpose competitor offers, live on both iOS and Android.",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const featuredProjects = projects.filter((p) => p.featured);
