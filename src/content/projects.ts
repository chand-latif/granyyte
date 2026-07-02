export type Project = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  platforms: ("iOS" | "Android" | "Web")[];
  tech: string[];
  /** Tailwind gradient classes for the placeholder cover art */
  cover: string;
  /** Big initial(s) shown on the placeholder cover */
  mark: string;
  featured: boolean;
  problem: string;
  solution: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "poland-portal",
    name: "Poland Portal",
    tagline: "The lifestyle companion for expats, locals, and tourists in Poland",
    category: "Lifestyle Platform",
    platforms: ["iOS", "Android"],
    tech: ["Flutter", "Firebase", "REST APIs"],
    cover: "from-rose-500/25 via-red-500/10 to-transparent",
    mark: "PP",
    featured: true,
    problem:
      "Expats and tourists arriving in Poland had information scattered across dozens of websites, Facebook groups, and outdated blogs — no single trusted place for city guides, local news, listings, and deals.",
    solution:
      "We built a unified lifestyle platform bringing city guides, curated news, local listings, and exclusive discounts into one polished app — with content management tooling so the team can publish updates in minutes.",
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
    featured: true,
    problem:
      "Automotive professionals were documenting vehicle condition with ad-hoc photos and paper forms — inconsistent, slow, and impossible to standardize across teams and locations.",
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
    featured: true,
    problem:
      "Meditation apps are either rigid guided programs or basic sound loops — users wanting to layer Solfeggio frequencies, binaural waves, and ambient soundscapes into their own practice had no good option.",
    solution:
      "We engineered a customizable audio mixing experience where users blend frequencies, binaural beats, and soundscapes into personal sessions — with a precise audio engine that keeps every layer in sync.",
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
    featured: true,
    problem:
      "Car buyers in the UAE faced cluttered classified sites full of stale listings and slow email-based contact — while sellers struggled to reach serious buyers quickly.",
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
    featured: false,
    problem:
      "The Algerian Berber (Amazigh) community had no dedicated matchmaking platform respecting their cultural and religious values — mainstream dating apps were a poor fit for people seeking serious, marriage-focused relationships.",
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
    featured: false,
    problem:
      "People practicing spiritual journaling — recording dreams, meditations, and insights — were forced into generic note apps with no support for transcription, sharing, or the natural cycles their practice follows.",
    solution:
      "We built a dedicated spiritual journal with voice transcription for capturing insights the moment they arrive, lunar phase tracking woven through the experience, and private sharing for trusted circles.",
    outcome:
      "A niche journaling app with features no general-purpose competitor offers, live on both iOS and Android.",
  },
  {
    slug: "alligned-rei",
    name: "Alligned REI",
    tagline: "A full CRM and business management platform for any industry",
    category: "Custom CRM / SaaS",
    platforms: ["Web"],
    tech: ["React", "Node.js", "PostgreSQL", "Automation"],
    cover: "from-teal-500/25 via-cyan-500/10 to-transparent",
    mark: "AR",
    featured: true,
    problem:
      "Growing teams were juggling leads in spreadsheets, appointments in calendars, and follow-ups in memory — losing deals in the gaps between disconnected tools.",
    solution:
      "We built a versatile web-based CRM covering the full pipeline: lead management, team coordination, appointment scheduling, pipeline tracking, and automated follow-ups — adaptable to any industry's sales process.",
    outcome:
      "One system replacing a patchwork of tools — automated follow-ups alone recover deals that previously slipped through the cracks.",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const featuredProjects = projects.filter((p) => p.featured);
