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
      "Native-quality iOS and Android apps built with Flutter and FlutterFlow. One codebase, every platform, shipped fast.",
    metaDescription:
      "Affordable mobile app development for iOS and Android from Pakistan. Granyyte builds native-quality Flutter apps and handles UI/UX, backend, and App Store deployment end to end.",
    intro:
      "Your users live on their phones, so your product should too. We design, build, and launch mobile apps that feel native on both iOS and Android from a single codebase, which cuts time-to-market roughly in half without cutting corners. We've shipped across nearly every category, from marketplaces and social platforms to meditation apps and field tools.",
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
          "Most apps ship in 2-4 weeks, whether it's mobile, web, or custom software. Larger products with heavier custom backends can take longer. We scope precisely before we start, so you get a real timeline instead of a moving target.",
      },
      {
        question: "Do you build for both iOS and Android?",
        answer:
          "Yes. Every app we build runs on both platforms from a single Flutter codebase, which means faster delivery and one consistent experience without doubling the budget.",
      },
      {
        question: "Do you handle App Store and Google Play publishing?",
        answer:
          "Completely. We manage store listings, screenshots, review requirements, and submissions, then resolve any review feedback until your app is live.",
      },
      {
        question: "What happens after launch?",
        answer:
          "We offer ongoing maintenance plans covering OS updates, bug fixes, and new features. Most of our clients keep working with us long after v1 ships.",
      },
      {
        question: "How much does it cost to build a mobile app?",
        answer:
          "Complete apps start around $500. Standard products with backend and payments land between $1,000 and $2,000, and complex platforms scope beyond that. Smaller work like prototypes, fixes, and single features starts from $100. Every quote is fixed against a written scope.",
      },
      {
        question: "Where are you based, and does it matter?",
        answer:
          "We build from Sialkot, Pakistan, for clients across Europe, the Middle East, and North America. It matters in one way only: our rates are a fraction of western agencies for the same stack and standards. Timezone overlap, weekly demo builds, and direct communication keep the distance irrelevant.",
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
      "Fast, SEO-ready websites and web apps built with React and Next.js, engineered to rank, convert, and scale.",
    metaDescription:
      "Affordable web development from Pakistan. SEO-first websites, web apps, and platforms built with React and Next.js, designed to rank on Google and convert visitors.",
    intro:
      "A slow, invisible website is a liability. We build web platforms that load instantly, rank on Google, and turn visitors into customers, from marketing sites and dashboards through to full SaaS products. Everything is server-rendered, performance-budgeted, and built on the same stack powering the fastest sites on the web.",
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
          "We build every site SEO-first: server-rendered HTML, structured data, fast Core Web Vitals, and clean semantic markup. Rankings also depend on content and competition, but technically your site will be ahead of most of the market on day one.",
      },
      {
        question: "Can you redesign or migrate my existing website?",
        answer:
          "Yes. We regularly migrate sites from WordPress, Wix, and page builders to modern stacks, preserving your SEO with proper redirects while dramatically improving speed.",
      },
      {
        question: "Do you build web apps, or just websites?",
        answer:
          "Both. Beyond marketing sites we build full products: dashboards, portals, booking systems, and SaaS applications with authentication, payments, and real-time features.",
      },
      {
        question: "How much does a website cost, and how fast can you deliver?",
        answer:
          "Websites start from a few hundred dollars and scale with scope. A focused marketing site sits at the low end, while full web applications with auth, payments, and dashboards cost more depending on complexity. We quote a fixed price after a short discovery call, usually within a day or two, and most sites ship in 2-4 weeks. Larger platforms can take longer.",
      },
      {
        question: "Why is web development from Pakistan so much cheaper?",
        answer:
          "Because the overhead is Pakistani while the stack and standards aren't. We build with the same React and Next.js tooling top western agencies use, so the price difference comes from cost of living, not corners being cut. Our own site is the live sample, so test its speed and search presence.",
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
      "CRMs, internal tools, and business automation built around how your company actually works, not the other way around.",
    metaDescription:
      "Custom software and CRM development from Pakistan. Internal tools, automation, and business systems designed around your workflows and built to scale with your company.",
    intro:
      "Off-the-shelf software forces your business into someone else's mold. We build custom systems shaped precisely around your workflows, including CRMs, operations tools, automation pipelines, and client portals. You end up with less manual work, fewer subscriptions, and software that becomes a competitive advantage instead of a monthly expense.",
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
          "When your team spends hours working around a tool's limitations, or you're paying for five subscriptions that almost do the job, custom software pays for itself. You own it, it fits exactly, and it scales with you.",
      },
      {
        question: "Can you integrate with the tools we already use?",
        answer:
          "Yes. We routinely integrate with payment processors, email platforms, calendars, accounting tools, and any service with an API, so your new system works with your existing stack rather than against it.",
      },
      {
        question: "Who owns the code?",
        answer:
          "You do. Full source code, documentation, and infrastructure access are handed over on completion. No lock-in, ever.",
      },
      {
        question: "How do we get started?",
        answer:
          "We start with a discovery call to map your workflows, then deliver a scoped proposal with fixed pricing and a delivery timeline, usually within a day or two. Most builds ship in 2-4 weeks, and only larger, more complex systems take longer.",
      },
      {
        question: "How much does a custom CRM cost?",
        answer:
          "A CRM built around one core workflow typically runs $1,000 to $2,500 with us, while multi-role systems with portals and reporting go from $2,500 to $5,000 and up. Automation scripts and integrations start from $100. Building from Pakistan is what makes those numbers possible, since comparable US consulting engagements start around $30k.",
      },
    ],
    relatedProjects: ["mainxpert", "poland-portal"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
