import type { LucideIcon } from "lucide-react";
import { Smartphone, Globe, Cog } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  excerpt: string;
  metaDescription: string;
  intro: string;
  deliverables: string[];
  tech: string[];
  faqs: { question: string; answer: string }[];
  relatedProjects: string[];
};

export const services: Service[] = [
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    icon: Smartphone,
    excerpt:
      "Native-quality iOS and Android apps built with Flutter and FlutterFlow — one codebase, every platform, shipped fast.",
    metaDescription:
      "Mobile app development services for iOS and Android. Granyyte builds native-quality Flutter apps — UI/UX, backend, and App Store deployment handled end to end.",
    intro:
      "Your users live on their phones — your product should too. I design, build, and launch mobile apps that feel native on both iOS and Android from a single codebase, cutting time-to-market roughly in half without cutting corners. From marketplaces and social platforms to meditation apps and field tools, I've shipped across nearly every category.",
    deliverables: [
      "iOS & Android apps from one Flutter codebase",
      "UI/UX design tailored to platform conventions",
      "Backend, database, and API integration (Firebase, Supabase, custom)",
      "Push notifications, in-app purchases, analytics",
      "App Store & Google Play submission handled for you",
      "Post-launch maintenance and iteration",
    ],
    tech: ["Flutter", "FlutterFlow", "Dart", "Firebase", "Supabase", "REST APIs"],
    faqs: [
      {
        question: "How long does it take to build a mobile app?",
        answer:
          "Most apps ship in 2–4 weeks, whether it's mobile, web, or custom software. Larger products with heavier custom backends can extend beyond that. I scope precisely before I start, so you get a real timeline — not a moving target.",
      },
      {
        question: "Do you build for both iOS and Android?",
        answer:
          "Yes — every app I build runs on both platforms from a single Flutter codebase, which means faster delivery and one consistent experience without doubling the budget.",
      },
      {
        question: "Do you handle App Store and Google Play publishing?",
        answer:
          "Completely. I manage store listings, screenshots, review requirements, and submissions — and resolve any review feedback until your app is live.",
      },
      {
        question: "What happens after launch?",
        answer:
          "I offer ongoing maintenance plans covering OS updates, bug fixes, and new features. Most of my clients keep working with me long after v1 ships.",
      },
    ],
    relatedProjects: ["poland-portal", "zwipe", "mindful-mantra"],
  },
  {
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Web Platforms",
    icon: Globe,
    excerpt:
      "Fast, SEO-ready websites and web apps built with React and Next.js — engineered to rank, convert, and scale.",
    metaDescription:
      "Web development services by Granyyte. SEO-first websites, web apps, and platforms built with React and Next.js — designed to rank on Google and convert visitors.",
    intro:
      "A slow, invisible website is a liability. I build web platforms that load instantly, rank on Google, and turn visitors into customers — from marketing sites and dashboards to full SaaS products. Server-rendered, performance-budgeted, and built on the same stack powering the fastest sites on the web.",
    deliverables: [
      "Marketing sites, dashboards, and full web applications",
      "SEO-first architecture: server rendering, structured data, Core Web Vitals",
      "Responsive design that works on every screen",
      "CMS and content workflows when you need them",
      "Authentication, payments, and third-party integrations",
      "Deployment, monitoring, and performance budgets",
    ],
    tech: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"],
    faqs: [
      {
        question: "Will my website rank on Google?",
        answer:
          "I build every site SEO-first: server-rendered HTML, structured data, fast Core Web Vitals, and clean semantic markup. Rankings also depend on content and competition, but technically your site will be ahead of most of the market on day one.",
      },
      {
        question: "Can you redesign or migrate my existing website?",
        answer:
          "Yes. I regularly migrate sites from WordPress, Wix, and page builders to modern stacks — preserving your SEO with proper redirects while dramatically improving speed.",
      },
      {
        question: "Do you build web apps, or just websites?",
        answer:
          "Both. Beyond marketing sites I build full products — dashboards, portals, booking systems, and SaaS applications with authentication, payments, and real-time features.",
      },
      {
        question: "How much does a website cost — and how fast can you deliver?",
        answer:
          "Websites start from a few hundred dollars and scale with scope — a focused marketing site is the low end, while full web applications with auth, payments, and dashboards cost more depending on complexity. I quote a fixed price after a short discovery call, usually within 1–2 days, and most sites ship in 2–4 weeks — larger platforms can extend beyond that.",
      },
    ],
    relatedProjects: ["poland-portal", "zwipe"],
  },
  {
    slug: "custom-software",
    title: "Custom Software Development",
    shortTitle: "Custom Software",
    icon: Cog,
    excerpt:
      "CRMs, internal tools, and business automation built around how your company actually works — not the other way around.",
    metaDescription:
      "Custom software development by Granyyte. CRMs, internal tools, automation, and business systems designed around your workflows — built to scale with your company.",
    intro:
      "Off-the-shelf software forces your business into someone else's mold. I build custom systems — CRMs, operations tools, automation pipelines, and client portals — shaped precisely around your workflows. The result: less manual work, fewer subscriptions, and software that becomes a competitive advantage instead of a monthly expense.",
    deliverables: [
      "Custom CRMs and lead-management systems",
      "Internal tools and admin dashboards",
      "Workflow automation and third-party integrations",
      "Client portals and booking systems",
      "Data migration from spreadsheets and legacy tools",
      "Training, documentation, and long-term support",
    ],
    tech: ["Node.js", "React", "PostgreSQL", "Firebase", "REST APIs", "Flutter"],
    faqs: [
      {
        question: "Why build custom instead of using off-the-shelf software?",
        answer:
          "When your team spends hours working around a tool's limitations — or you're paying for five subscriptions that almost do the job — custom software pays for itself. You own it, it fits exactly, and it scales with you.",
      },
      {
        question: "Can you integrate with the tools we already use?",
        answer:
          "Yes. I routinely integrate with payment processors, email platforms, calendars, accounting tools, and any service with an API — your new system works with your existing stack, not against it.",
      },
      {
        question: "Who owns the code?",
        answer:
          "You do. Full source code, documentation, and infrastructure access are handed over on completion. No lock-in, ever.",
      },
      {
        question: "How do we get started?",
        answer:
          "I start with a discovery call to map your workflows, then deliver a scoped proposal with fixed pricing and a delivery timeline — usually within 1–2 days. Most builds ship in 2–4 weeks, extending only for larger, more complex systems.",
      },
    ],
    relatedProjects: ["mainxpert", "poland-portal"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
