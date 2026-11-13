/**
 * SEO landing pages — long-tail location ("… from Pakistan", "… in Sialkot")
 * and affordability ("affordable app development") queries. Rendered by
 * src/app/[slug]/page.tsx at root-level URLs for maximum keyword strength.
 * ⚠️ NO PRICES ANYWHERE. Rates are confidential and discussed only once a lead
 * gets in touch — never reintroduce a figure, tier, or "from $X" into any
 * field, including metaTitle/metaDescription and FAQ questions. Third-party
 * market figures (what a US agency charges) are fine; ours are not.
 * Delivery stays 2-4 weeks. Don't copy-paste copy between
 * pages — Google devalues near-duplicates. Target search queries verbatim in
 * FAQ questions — that's what has been ranking.
 *
 * Pages with Search Console traffic are PROTECTED (see seo/protected.md): never
 * reword slug, title/accent (H1), metaTitle or an existing FAQ question. Add only.
 * Local copy voice + the "10-20k PKR template website" positioning live in
 * seo/references/voice.md. Those PKR figures are market prices, never ours.
 */

export type SeoPage = {
  slug: string;
  /** <title> without brand — layout template appends "| Granyyte" */
  metaTitle: string;
  metaDescription: string;
  /** Header pill label */
  label: string;
  /** Plain part of the H1 */
  title: string;
  /** Serif-italic lime part of the H1 */
  accent: string;
  headerDescription: string;
  specs: { label: string; value: string }[];
  /** Body paragraphs under "01 — Overview" */
  intro: string[];
  whyTitle: string;
  whyPoints: { title: string; description: string }[];
  /**
   * How we quote — process only, never a rate or a figure. Prices are
   * deliberately absent from this site and are discussed once someone gets in
   * touch, so don't reintroduce a tier table here.
   */
  quoteNote?: string;
  faqs: { question: string; answer: string }[];
  /** services.ts slug this page deepens */
  relatedService: string;
  /** projects.ts slugs to showcase */
  relatedProjects: string[];
  /**
   * Marks the Sialkot local-SEO cluster. Adds a LocalBusiness/
   * ProfessionalService + geo JSON-LD block and a cross-link to the other
   * Sialkot pages. Since 2026-11-13 these pages may carry full visible local
   * copy (Chand's call), but they stay off the homepage, main nav and the
   * international pages: they're reached from the footer "In Sialkot" column
   * and local blog posts.
   */
  localBusiness?: boolean;
};

/** Sialkot city-center coordinates — used for the local-SEO geo schema. */
export const sialkotGeo = { latitude: 32.4945, longitude: 74.5229 };

/**
 * Query phrasings Chand wants to rank for in Sialkot ("… company", "IT
 * company"). Emitted as JSON-LD `knowsAbout` on every Sialkot page. The
 * strongest of them now also have their own visible pages
 * (/software-house-sialkot, /web-design-sialkot).
 */
export const sialkotKnowsAbout = [
  "Software Development Company Sialkot",
  "IT Company Sialkot",
  "Web Design Company Sialkot",
  "App Development Company Sialkot",
  "Software House Sialkot",
];

export const seoPages: SeoPage[] = [
  {
    slug: "mobile-app-development-pakistan",
    metaTitle: "Mobile App Development in Pakistan | Hire an Expert App Developer",
    metaDescription:
      "Hire an expert mobile app developer from Pakistan. Granyyte builds iOS & Android apps in 2-4 weeks, delivering western-agency quality at Pakistani rates.",
    label: "Pakistan · Mobile Apps",
    title: "Mobile app development",
    accent: "from Pakistan.",
    headerDescription:
      "iOS and Android apps engineered in Sialkot, Pakistan and shipped to clients across Europe, the Middle East, and North America. Senior quality, fixed-price quotes, 2-4 week delivery.",
    specs: [
      { label: "Based in", value: "Sialkot, Pakistan" },
      { label: "Delivery", value: "2-4 weeks" },
      { label: "Quotes", value: "Fixed price" },
    ],
    intro: [
      "If you're looking for app development from Pakistan, you've probably noticed the range: everything from $5 gig sellers to full agencies quoting like they're in London. Granyyte sits deliberately in the middle of that gap. We're a senior software engineering agency in Pakistan, delivering the quality of a western agency at a fraction of the price.",
      "Our specialty is Flutter mobile app development: complete apps for iOS and Android designed, built, and launched from a single Flutter codebase. That covers marketplaces, booking systems, wellness apps, AI assistants, and B2B tools, all live on the App Store and Google Play. Every project gets a fixed price, a real timeline, and weekly demo builds you can tap through on your own phone.",
      "Being based in Pakistan is precisely why the pricing works. Our costs are local, but our standards, tooling, and communication are not. You get the same stack the best agencies use, including Flutter, FlutterFlow, Firebase, and Supabase, without the western overhead baked into the invoice.",
      "Here's the fastest test for app developers in Pakistan, and it works on us too. Ask for three apps that are live on the stores right now, then download one. It takes two minutes and quietly removes most of the market, because a Dribbble portfolio is a design portfolio, not an app. Ours include Bilge AI, used by more than 15,000 people in Turkey, the Zwipe car marketplace in the UAE, and AVC Dealer, the service app for an auction network across 25 US states.",
    ],
    whyTitle: "Why hire an app developer from Pakistan",
    whyPoints: [
      {
        title: "A fraction of western rates",
        description:
          "The same app a US or UK agency quotes at $15-40k costs a fraction of that with us. Not because the work is lesser, but because our overhead is Pakistani, not Californian.",
      },
      {
        title: "Certified, not anonymous",
        description:
          "You're working directly with Granyyte's founder, Chand Latif, a certified FlutterFlow expert, rather than a rotating outsourcing bench. You know exactly who's building your app.",
      },
      {
        title: "Timezone that works for you",
        description:
          "Pakistan (PKT) overlaps European mornings and US evenings, so you get same-day responses whether you're in Berlin, Dubai, or New York.",
      },
      {
        title: "Proven across three continents",
        description:
          "Apps shipped for clients in Poland, the UAE, Turkey, the UK, and North America. They're all live on the stores, and all built end to end from Pakistan.",
      },
    ],
    quoteNote:
      "Every project is quoted as a fixed price against a written scope, with a proposal within 1-2 days.",
    faqs: [
      {
        question: "How much does mobile app development cost in Pakistan?",
        answer:
          "It depends on scope, and we quote honestly rather than publish a number that would be wrong for your project. What moves the price is screen count, whether you need a custom backend, third-party integrations, and whether payments or chat are involved. What we can tell you upfront: building one Flutter codebase for both platforms is the single biggest saving, and the total typically lands several times below what a western agency quotes for identical scope. Send us a short description and you get a fixed price against a written scope within 1-2 days, free.",
      },
      {
        question: "Is it safe to outsource app development to Pakistan?",
        answer:
          "Yes, if you hire the right way. Work with a named agency that has a verifiable track record, published apps, fixed-price contracts, and full code ownership. We hand over complete source code and infrastructure access on every project, and our apps are live on the App Store and Google Play under real client accounts you can check.",
      },
      {
        question: "How long does it take to build an app from Pakistan?",
        answer:
          "Most of our apps ship in 2-4 weeks, whether iOS, Android, or both, since one Flutter codebase covers both platforms. Larger builds with heavy custom backends can take longer, and you'll know the real timeline before we start.",
      },
      {
        question: "Do you handle App Store and Google Play publishing from Pakistan?",
        answer:
          "Completely. We manage store listings, screenshots, review requirements, and submissions from here. Location makes no difference to the stores, and we resolve review feedback until your app is live.",
      },
      {
        question: "How do we communicate across timezones?",
        answer:
          "Pakistan's timezone overlaps European working hours and US mornings/evenings. You get weekly demo builds, direct WhatsApp/email access to us, and no account-manager layer standing between you and the people writing your code.",
      },
      {
        question: "Are you a mobile app development agency or a freelancer?",
        answer:
          "A lean, senior-led agency, deliberately so. You get the accountability and process of a mobile app development agency in Pakistan (contracts, fixed scope, store publishing, handover documentation) with the directness of working straight with the people building your app. No project managers relaying messages, no junior bench quietly doing the real work.",
      },
      {
        question: "How do I hire app developers in Pakistan without getting burned?",
        answer:
          "Check four things before you pay anything. Live apps you can download today, not screenshots. A named person who'll actually write your code. Full source code and store accounts handed to you at the end. And a fixed price against a written scope, because hourly billing on a loose brief is how a six-week app becomes a six-month one. Any mobile app developers in Pakistan worth hiring will pass all four without blinking.",
      },
      {
        question: "What makes a good Flutter development company in Pakistan?",
        answer:
          "Shipped Flutter apps on both stores, ideally for clients outside Pakistan, since that's where review standards are strictest. Someone senior on your project rather than a sales lead who disappears after the deposit. And honesty about when Flutter isn't the right tool, which is rarer than it should be. We build almost everything in Flutter and FlutterFlow, and we'll still tell you if your app needs native code.",
      },
    ],
    relatedService: "mobile-app-development",
    relatedProjects: ["bilge-ai", "poland-portal", "zwipe"],
  },
  {
    slug: "flutterflow-developer-pakistan",
    metaTitle: "Certified FlutterFlow Developer in Pakistan | FlutterFlow Development Services",
    metaDescription:
      "Hire a certified FlutterFlow expert from Pakistan. FlutterFlow development services with full apps in 2-4 weeks, and real exported Flutter code you own.",
    label: "Pakistan · FlutterFlow",
    title: "Certified FlutterFlow developer",
    accent: "from Pakistan.",
    headerDescription:
      "Officially certified by FlutterFlow, based in Pakistan, shipping production apps worldwide. The fastest legitimate route from idea to app store, at Pakistani rates.",
    specs: [
      { label: "Certification", value: "FlutterFlow Expert" },
      { label: "Delivery", value: "2-4 weeks" },
      { label: "Quotes", value: "Fixed price" },
    ],
    intro: [
      "FlutterFlow mobile app development from Pakistan is one of the best value propositions in software right now, and hiring a certified FlutterFlow developer makes the difference between a demo that impresses and a product that ships. Granyyte is founded by Chand Latif, an officially certified FlutterFlow expert building production apps from Sialkot, Pakistan for clients across Europe, the Middle East, and North America.",
      "FlutterFlow isn't a toy builder. It generates real Flutter code you fully own, which means your app runs natively on both iOS and Android and can be extended with hand-written code whenever you outgrow visual development. In our hands it cuts delivery to 2-4 weeks, roughly three times less time and money than native development for the same product.",
      "Combine that speed with Pakistani rates and a complete, store-published app costs a fraction of what a western agency charges. Often less than what one of their discovery phases would bill.",
    ],
    whyTitle: "Why a certified FlutterFlow expert from Pakistan",
    whyPoints: [
      {
        title: "Official FlutterFlow certification",
        description:
          "Certification means validated, examined skill in building production-grade FlutterFlow apps, verifiable through FlutterFlow's own credential system rather than a self-awarded badge.",
      },
      {
        title: "3x faster, 3x cheaper than native",
        description:
          "One visual-first codebase instead of two native ones. Same product, weeks instead of months, and Pakistani rates compound the savings.",
      },
      {
        title: "Real code, no lock-in",
        description:
          "FlutterFlow exports genuine Flutter/Dart code. You own it outright, and we extend it with custom code where visual development ends.",
      },
      {
        title: "Rescues and takeovers welcome",
        description:
          "Half-finished FlutterFlow project from another freelancer? We audit, fix, and ship stalled builds regularly.",
      },
    ],
    quoteNote: "Fixed-price proposal within 1-2 days of our first conversation.",
    faqs: [
      {
        question: "How much does a FlutterFlow developer from Pakistan cost?",
        answer:
          "Several times less than US and EU FlutterFlow agencies charge for the same build, because the engineering happens in Pakistan rather than California or Berlin. The exact figure depends on scope, so we quote per project rather than publish a rate card that would misprice most of them. Tell us what you are building and you get a fixed price against a written scope within 1-2 days.",
      },
      {
        question: "Are you actually certified in FlutterFlow?",
        answer:
          "Yes. Our founder holds an official FlutterFlow certification, verifiable through FlutterFlow University's credential link on our site. Certification is earned through examination, so it's a real signal of production-level skill rather than a marketing label.",
      },
      {
        question: "Can a FlutterFlow app really be production-quality?",
        answer:
          "Yes. FlutterFlow generates real Flutter code that compiles natively for iOS and Android. We've shipped marketplaces, AI assistants, booking platforms, and wellness apps this way, and they're all live on the App Store and Google Play. Where visual development hits a limit, we write custom Flutter code inside the same project.",
      },
      {
        question: "Can you take over my existing FlutterFlow project?",
        answer:
          "Absolutely. Takeovers are a regular part of our work. We start with a quick audit, tell you honestly what state the project is in, then quote a fixed price to finish and ship it.",
      },
      {
        question: "How fast can you deliver a FlutterFlow app from Pakistan?",
        answer:
          "Most FlutterFlow builds ship in 2-4 weeks including store submission. FlutterFlow eliminates most boilerplate, and one codebase covers both platforms. That's where the speed comes from.",
      },
      {
        question: "Are you a FlutterFlow mobile app development agency?",
        answer:
          "Yes. Granyyte runs like a FlutterFlow app development agency should, with fixed-price contracts, written scopes, store publishing, and full handover. The work is led by certified, senior FlutterFlow expertise rather than a bench of juniors behind a sales team. For most FlutterFlow projects that combination is strictly better: agency process, direct-line communication, and Pakistani pricing.",
      },
      {
        question: "When should you not use FlutterFlow?",
        answer:
          "When most of the app lives deep in the device: heavy Bluetooth hardware work, long-running background processing, or AR. You can still get there by writing custom Flutter code inside FlutterFlow, but at some point you're fighting the tool, and plain Flutter is the better call. We'll tell you which side of that line your app sits on in the first conversation. Being certified in something doesn't mean selling it for everything.",
      },
    ],
    relatedService: "mobile-app-development",
    relatedProjects: ["mindful-mantra", "thafath", "sacred-diary"],
  },
  {
    slug: "web-development-pakistan",
    metaTitle: "Website Development in Pakistan | Hire an Expert Web Developer",
    metaDescription:
      "Website development from Pakistan: fast, SEO-first sites and web apps built with React & Next.js. Fixed-price builds, delivered in 2-4 weeks.",
    label: "Pakistan · Web",
    title: "Website development",
    accent: "from Pakistan.",
    headerDescription:
      "SEO-first websites and web applications built in Pakistan with React and Next.js, engineered to rank on Google and convert visitors at a fraction of western agency prices.",
    specs: [
      { label: "Based in", value: "Sialkot, Pakistan" },
      { label: "Delivery", value: "2-4 weeks" },
      { label: "Quotes", value: "Fixed price" },
    ],
    intro: [
      "Website development from Pakistan has a reputation problem: cheap templates, slow turnarounds, and sites that never rank. We built Granyyte to be the counter-example. This is modern web development from Sialkot, Pakistan, on the same stack the fastest sites on the internet use: React, Next.js, TypeScript, and server-rendered, SEO-first architecture.",
      "Whether you need a conversion-focused business website, a dashboard, a booking portal, or a full SaaS product, we engineer it to load instantly, rank on Google, and work on every screen. The site you're reading is our own work, so check its speed and search presence as a live sample.",
      "Because we work from Pakistan, a high-end marketing site costs a fraction of a western agency invoice, and full web applications land well below the $10,000-plus those agencies quote. Same code quality, radically different overhead.",
    ],
    whyTitle: "Why hire a web developer from Pakistan",
    whyPoints: [
      {
        title: "SEO built in, not bolted on",
        description:
          "Server rendering, structured data, fast Core Web Vitals, and semantic markup mean every site ships technically ahead of most of its competition on day one.",
      },
      {
        title: "Modern stack, no page builders",
        description:
          "React, Next.js, and TypeScript, not a WordPress theme with fifty plugins. Your site is real engineering that you own outright.",
      },
      {
        title: "Prices that make sense",
        description:
          "The Pakistani cost base makes premium work affordable, from marketing sites through to full web applications. Every project is quoted as a fixed price against a written scope.",
      },
      {
        title: "End to end, no handoffs",
        description:
          "Design, build, deployment, analytics, and SEO all handled under one roof. No agency telephone game, no handoffs where quality dies.",
      },
    ],
    quoteNote: "Fixed quote after a short discovery call, usually within 1-2 days.",
    faqs: [
      {
        question: "How much does website development cost in Pakistan?",
        answer:
          "It scales with what you need: a landing page, a multi-page marketing site with a CMS, or a full web application with dashboards and payments are very different builds. Rather than publish a rate card that would misprice most projects, we scope yours and give you a fixed price against a written scope, usually within 1-2 days of a short call. Working from Pakistan is what keeps all of those tiers well below western agency quotes.",
      },
      {
        question: "Will my website actually rank on Google?",
        answer:
          "We build every site SEO-first: server-rendered HTML, structured data, fast Core Web Vitals, and clean semantic markup. Rankings also depend on your content and competition, but technically your site will be ahead of most of the market from day one. This very website is the proof of method.",
      },
      {
        question: "How long does a website take to build from Pakistan?",
        answer:
          "Most sites ship in 2-4 weeks, and smaller landing pages often within days. Larger web applications with custom backends can take longer, with the real timeline fixed in the proposal.",
      },
      {
        question: "Can you redesign or migrate my existing website?",
        answer:
          "Yes. We regularly migrate sites off WordPress, Wix, and page builders onto modern stacks, preserving your existing SEO with proper redirects while dramatically improving speed.",
      },
      {
        question: "Do you build e-commerce and web apps too, or just websites?",
        answer:
          "Both. Beyond marketing sites we build full products: dashboards, portals, booking systems, and SaaS applications with authentication, payments, and real-time features.",
      },
      {
        question: "How do I choose a website developer in Pakistan?",
        answer:
          "Open their last three client sites on your phone. If they take ages to load, look identical apart from the logo, or have a WordPress login sitting at /wp-admin, you've learned what you're buying. A good website developer in Pakistan can show you fast, distinct sites, explain how they handle security updates, and tell you who owns the code once it's done. You should, always.",
      },
      {
        question: "Do you work as offshore web developers for agencies and companies abroad?",
        answer:
          "Yes. A good share of our work is for clients in the UK, Europe, the Gulf, and the US, including the corporate site and operations platform for a UK surveyor-led repairs firm. You get offshore web developers in Pakistan whose working day overlaps yours, weekly previews, and everything handed over at the end. No white-label middleman taking a cut in between.",
      },
    ],
    relatedService: "web-development",
    relatedProjects: ["space-maintenance", "meridian-retail-wholesale-store", "poland-portal"],
  },
  {
    slug: "crm-development-pakistan",
    metaTitle: "CRM & Custom Software Development in Pakistan | Built Around Your Workflow",
    metaDescription:
      "CRM development from Pakistan: custom CRMs, internal tools, and business automation built around your workflows. Fixed pricing, delivered in 2-4 weeks.",
    label: "Pakistan · CRM & Software",
    title: "CRM & custom software development",
    accent: "from Pakistan.",
    headerDescription:
      "Custom CRMs, internal tools, and automation built in Pakistan around how your company actually works. You own the code, and the per-seat subscription bills stop.",
    specs: [
      { label: "Based in", value: "Sialkot, Pakistan" },
      { label: "Delivery", value: "2-4 weeks" },
      { label: "Quotes", value: "Fixed price" },
    ],
    intro: [
      "CRM development from Pakistan is how growing companies escape the subscription trap without western consulting prices. Instead of paying for five SaaS tools that each do 70% of the job, forever and per seat, you get one system shaped precisely around your pipeline, your fields, and your process. Built once, owned outright.",
      "We build custom CRMs, lead-management systems, admin dashboards, client portals, and workflow automation from Sialkot, Pakistan for businesses across Europe, the Gulf, and North America. Everything integrates through their APIs with the tools you already use, including payment processors, email platforms, calendars, and accounting software.",
      "Because the engineering happens in Pakistan, a custom CRM that would be a $30-60k consulting engagement in the US costs a small fraction of that with us. The handover standard stays the same: full source code, documentation, and infrastructure access.",
    ],
    whyTitle: "Why build your CRM with a Pakistani developer",
    whyPoints: [
      {
        title: "Break-even in months, not years",
        description:
          "At Pakistani development rates, a custom system often costs less than one year of the SaaS subscriptions it replaces. After that, it's simply free to own.",
      },
      {
        title: "Shaped to your workflow",
        description:
          "No more forcing your process into someone else's software. Your fields, your stages, your automations, and a 100% fit by definition.",
      },
      {
        title: "You own everything",
        description:
          "Full source code, database, and infrastructure handed over on completion. No lock-in, no per-seat pricing, no terms that change under you.",
      },
      {
        title: "Integrates with your stack",
        description:
          "Stripe, email platforms, calendars, accounting tools, and any service with an API. Your new system works with your existing tools rather than against them.",
      },
    ],
    quoteNote: "Scoped proposal with fixed pricing within 1-2 days of mapping your workflow.",
    faqs: [
      {
        question: "How much does CRM development cost in Pakistan?",
        answer:
          "It depends on whether you need a system around one core workflow or a multi-role platform with portals, reporting, and automation. We map your workflow first, then quote a fixed price against a written scope, because a published rate would be wrong for most of the systems we build. For context, comparable US and EU consulting engagements start around $30k, and building from Pakistan is what puts the same work within reach.",
      },
      {
        question: "Custom CRM vs. off-the-shelf: when is custom worth it?",
        answer:
          "When your team works around the tool instead of with it, when subscription sprawl crosses the cost of building, or when your workflow is your competitive edge. If an off-the-shelf tool fits 90% or more of your process, we'll tell you to buy it, honestly, in the first call.",
      },
      {
        question: "Can you integrate with the tools we already use?",
        answer:
          "Yes. We routinely integrate custom systems with payment processors, email platforms, calendars, accounting tools, and any service exposing an API. Your existing stack keeps working, with the new system as the hub.",
      },
      {
        question: "Who owns the code and the data?",
        answer:
          "You do, completely. Full source code, database, documentation, and infrastructure access are handed over on completion. No lock-in, no dependency on us, ever.",
      },
      {
        question: "How long does custom software take from Pakistan?",
        answer:
          "Focused tools and CRMs ship in 2-4 weeks. Larger multi-role systems take longer and are built phase by phase, with the timeline fixed in the proposal so it never becomes a moving target.",
      },
    ],
    relatedService: "custom-software",
    relatedProjects: ["mainxpert", "space-maintenance"],
  },
  {
    slug: "affordable-app-development",
    metaTitle: "Affordable App Development | Senior Quality, Fixed-Price Builds",
    metaDescription:
      "Affordable app development without the corner-cutting: complete iOS and Android apps built by certified senior engineers. Fixed prices against a written scope, 2-4 week delivery, code you own.",
    label: "Affordable Development",
    title: "Affordable app development",
    accent: "without the corner-cutting.",
    headerDescription:
      "Complete iOS and Android apps, prototypes, and full products with payments and admin panels, all with fixed prices, real timelines, and code you own. Built in Pakistan by certified senior engineers, without the western agency invoice.",
    specs: [
      { label: "Quotes", value: "Fixed price" },
      { label: "Code ownership", value: "100% yours" },
      { label: "Delivery", value: "2-4 weeks" },
    ],
    intro: [
      "\"Affordable app development\" usually means one of two scams: a $99 template with your logo on it, or a lowball quote that triples once you're committed. This page is the third option: real software, built in Pakistan by certified senior engineers, without the western agency overhead that inflates the invoice.",
      "The affordability isn't magic. Three structural advantages stack up: we build one Flutter codebase that runs on both iOS and Android instead of two native apps, we use FlutterFlow (where we're officially certified) to eliminate boilerplate, and our cost base is Sialkot, not San Francisco. Same product, roughly three times less time and money than native development, and 5 to 20 times less than a western agency invoice.",
      "We don't publish a rate card, because a number on a page is wrong for almost every project that reads it, and it invites exactly the lowball-then-inflate game we're trying to avoid. Instead you get a fixed quote against a written scope, a proposal within 1-2 days of a short call, weekly demo builds, and full code ownership on delivery, on every project including the smallest.",
    ],
    whyTitle: "What your budget actually buys",
    whyPoints: [
      {
        title: "No hourly billing, ever",
        description:
          "Every project is a fixed price tied to a written scope. Hourly billing on a vague scope is a blank check, and you'll never get one from us.",
      },
      {
        title: "Cheap isn't disposable",
        description:
          "Our smallest builds get the same clean architecture, real testing, and store-ready polish as the largest. The most expensive app is the one you have to rebuild.",
      },
      {
        title: "One codebase, both platforms",
        description:
          "Flutter means your budget buys iOS and Android together, not one platform now and a second invoice later.",
      },
      {
        title: "You own everything",
        description:
          "Source code, stores, and infrastructure are handed over on every project, whatever its size. Affordability without lock-in.",
      },
    ],
    quoteNote:
      "Every project is a fixed price against a written scope, quoted after a short call and usually back with you within 1-2 days. No hourly billing, and no number that moves once you're committed.",
    faqs: [
      {
        question: "How much does affordable app development cost?",
        answer:
          "We quote per project rather than publish a price list, because scope is what decides the number and a figure on a page would be wrong for most people reading it. Tell us what you're building and you'll have a fixed price against a written scope within 1-2 days, at no cost and with no obligation.",
      },
      {
        question: "What can I get on a small budget?",
        answer:
          "More than you'd expect, as long as the scope is focused. A clickable prototype, an MVP design, a landing page, bug fixes on an existing app, or a single-feature build are all realistic starting points. If your budget genuinely doesn't cover what you're describing, we'll say so on the first call rather than take the work and cut corners.",
      },
      {
        question: "What does a complete app include?",
        answer:
          "A store-published app with one core flow done excellently: clean UI, solid architecture, and both iOS and Android from a single Flutter codebase. Payments, real-time chat, and an admin panel are a step up in scope, and we'll tell you which of those your idea actually needs before quoting.",
      },
      {
        question: "Do you charge hourly or a fixed price?",
        answer:
          "Fixed price, always, tied to a written scope agreed before work starts. Hourly billing against a vague scope is a blank check, and you'll never get one from us. If the scope changes mid-project we requote that change openly rather than quietly running up the clock.",
      },
      {
        question: "Why is your development so much cheaper than agencies?",
        answer:
          "Three reasons. We're a lean Pakistan-based agency rather than an office of account managers in a western capital, one Flutter codebase covers iOS and Android instead of two native teams, and certified FlutterFlow expertise eliminates most boilerplate. The savings are structural, not corners being cut.",
      },
      {
        question: "Are cheap apps lower quality?",
        answer:
          "Cheap templates are. Efficiently-built custom apps aren't, because every project gets the same architecture standards, testing, and store-ready polish regardless of size. Our portfolio apps, live on both stores with real users, were all built this way.",
      },
    ],
    relatedService: "mobile-app-development",
    relatedProjects: ["bilge-ai", "mindful-mantra", "zwipe"],
  },
  {
    slug: "surveyor-management-software",
    metaTitle: "Surveyor Job Management Software | Custom Internal Tools for Surveying Firms",
    metaDescription:
      "Custom job management software for surveyor-led firms: job creation, instant WhatsApp and email quote requests, RAMS-enforced site visits, and tamper-proof records. Proven in a live case study and built in 2-4 weeks.",
    label: "Surveyors · Software",
    title: "Job management software",
    accent: "for surveyor-led firms.",
    headerDescription:
      "Custom internal tools that run a surveying company's whole operation, covering jobs, contractors, quotes, RAMS, site visits, and evidence trails. Already running a real reinstatement firm's daily operations.",
    specs: [
      { label: "Built for", value: "Surveyor-led firms" },
      { label: "Delivery", value: "2-4 weeks" },
      { label: "Proof", value: "Live case study" },
    ],
    intro: [
      "Most surveyor-led firms run on WhatsApp threads, email chains, paper RAMS, and photo folders scattered across phones. Off-the-shelf job management software almost fits, but it never quite matches how a surveying company actually works: survey, scope, quotes, client approval, scheduled visits, compliance evidence, then sign-off.",
      "We build custom job management software shaped around exactly that lifecycle. It isn't a template. Your surveyors create jobs with claim references, your approved contractors get job links on WhatsApp and email the moment work is ready, quotes come back the same day, and every site visit runs through a structured, RAMS-first form that locks into a tamper-proof record.",
      "This isn't theory. We designed and built the internal operations platform that Space Maintenance, a surveyor-led insurance reinstatement firm covering London and the South West, runs its daily business on. The full breakdown is public in the case study, and the same system can be shaped to your firm's workflow.",
    ],
    whyTitle: "What custom software fixes for a surveying firm",
    whyPoints: [
      {
        title: "Quote-chasing becomes instant",
        description:
          "Contractors receive the job link by WhatsApp and email the moment a job is created, then quote directly from their phone. No ring-arounds, no waiting days.",
      },
      {
        title: "Compliance enforced by software",
        description:
          "\"No RAMS, no work. No photos, no payment.\" It stops being a rule you chase and becomes one the system physically enforces before a visit can proceed.",
      },
      {
        title: "A tamper-proof evidence trail",
        description:
          "Every visit stores RAMS, photos from before, during, and after, plus customer sign-off, then locks read-only. When an insurer questions a claim, the record is one click away.",
      },
      {
        title: "You own it, with no per-seat pricing",
        description:
          "Built on Supabase and PostgreSQL, then handed over completely. Add surveyors, contractors, and jobs without the software bill scaling against you.",
      },
    ],
    quoteNote:
      "Fixed-price proposal within 1-2 days of a workflow call. Most systems ship in 2-4 weeks.",
    faqs: [
      {
        question: "What should job management software for a surveying company include?",
        answer:
          "The full job lifecycle: job creation with claim references, client and contractor profiles with insurance and accreditation documents, quote requests and approvals, scheduled site visits with RAMS and photo evidence, customer sign-off, incident reporting, and automatic notifications. That's exactly the scope of the system in our case study, which is running live at a surveyor-led reinstatement firm.",
      },
      {
        question: "How much does custom surveyor management software cost?",
        answer:
          "It depends on whether you need a system around one core workflow or a full operations platform with quoting, visit forms, incident reporting, and WhatsApp and email automation. We map your workflow on a short call and come back with a fixed price against a written scope. What we can say generally: it is usually a one-time cost comparable to what a year of the per-seat SaaS subscriptions it replaces would run you, and you own it outright afterwards.",
      },
      {
        question: "Can it enforce RAMS and photo compliance on site?",
        answer:
          "Yes, that's the core of the visit-link system we build. It's a structured on-site form where RAMS must be completed before work starts, photos are captured before, during, and after, and the customer signs off at the end. Half-finished visits reopen exactly where they were left, and completed visits lock read-only.",
      },
      {
        question: "We already use Joblogic. Can custom software work alongside it?",
        answer:
          "Yes. The system in our case study was designed to sit alongside Joblogic. Scheduling stays where your team already works, while the custom layer owns what off-the-shelf tools can't handle: RAMS enforcement, evidence capture, quote automation, and WhatsApp notifications.",
      },
      {
        question: "Can contractors really get job links on WhatsApp?",
        answer:
          "Yes. Via Brevo integration, job and visit links go out on WhatsApp and email simultaneously, and every role (surveyor, client, contractor) gets stage-by-stage notifications on both channels. Contractors quote and complete visit forms straight from their phone.",
      },
      {
        question: "How long does it take to build?",
        answer:
          "A focused system ships in 2-4 weeks. A full operations platform is built module by module, so your team starts using the first pieces within weeks rather than months. You get a fixed timeline and price in the proposal, usually within 1-2 days of our first call.",
      },
    ],
    relatedService: "custom-software",
    relatedProjects: ["surveyor-job-management-system", "space-maintenance"],
  },
  {
    slug: "mobile-app-development-sialkot",
    metaTitle: "Mobile App Development in Sialkot | Certified App Developer",
    metaDescription:
      "Hire a mobile app developer in Sialkot: certified Flutter & FlutterFlow engineers with apps live on the App Store and Google Play worldwide. Fixed-price builds delivered in 2-4 weeks.",
    label: "Sialkot · Mobile Apps",
    title: "Mobile app developer",
    accent: "in Sialkot.",
    headerDescription:
      "A certified Flutter and FlutterFlow team based right here in Sialkot, with apps live on the App Store and Google Play for clients on three continents. International-standard work, and you can meet us in person.",
    specs: [
      { label: "Based in", value: "Sialkot, Pakistan" },
      { label: "Delivery", value: "2-4 weeks" },
      { label: "Quotes", value: "Fixed price" },
    ],
    intro: [
      "Search for mobile app development in Sialkot and you mostly find two things: students building side projects, and Lahore or Karachi agencies that treat Sialkot as a remote lead. Granyyte is the third option, a senior, certified mobile app development agency based in Sialkot itself, with apps live on the App Store and Google Play for clients in Turkey, Poland, the UAE, and the UK.",
      "We do Flutter mobile app development, using one codebase that runs natively on both iOS and Android so your budget buys both platforms at once. With officially certified FlutterFlow expertise, we cut delivery to 2-4 weeks across marketplaces, booking systems, AI assistants, and business apps, each with a fixed price and weekly demo builds you tap through on your own phone.",
      "Hiring locally has real advantages the big-city agencies can't match. We can scope your app face to face in Sialkot, you can be invoiced in PKR, and support stays in your city rather than behind a ticket system three hundred kilometres away.",
    ],
    whyTitle: "Why hire an app developer in Sialkot",
    whyPoints: [
      {
        title: "International portfolio, local address",
        description:
          "Apps shipped for clients in Turkey, Poland, and the Gulf, all verifiable on the stores, built by an agency you can sit across a table from in Sialkot.",
      },
      {
        title: "Certified, not a side-gig",
        description:
          "Officially certified FlutterFlow expertise with years of production Flutter work behind it. You're hiring examined, store-proven skill rather than a student's weekend project.",
      },
      {
        title: "One codebase, both platforms",
        description:
          "Flutter mobile app development means iOS and Android from a single codebase, roughly three times less time and money than building two native apps.",
      },
      {
        title: "Face-to-face scoping and support",
        description:
          "Requirements over a sit-down meeting, weekly demo builds on your phone, and ongoing support from the same city and timezone as your business.",
      },
    ],
    quoteNote:
      "Fixed-price proposal within 1-2 days. Sialkot clients can scope in person and be invoiced in PKR.",
    faqs: [
      {
        question: "How much does mobile app development cost in Sialkot?",
        answer:
          "The same way we quote worldwide: scope first, then a fixed price against a written scope, usually within 1-2 days of a short call. Being local doesn't change the price. It just adds face-to-face scoping, same-city support, and PKR invoicing if you prefer it.",
      },
      {
        question: "Are there professional mobile application developers in Sialkot?",
        answer:
          "Fewer than you'd hope. Most serious engineers leave for Lahore, Islamabad, or remote-only work, which is why local businesses end up with students or distant agencies. We run Granyyte from Sialkot deliberately, with an international client base, apps live on both stores that you can verify right now, and an office address in this city.",
      },
      {
        question: "Can we meet in person to discuss the app?",
        answer:
          "Yes, and that's half the point of hiring an app developer in Sialkot instead of a remote agency. We can map your requirements across a table, and you'll keep getting weekly demo builds on your own phone as the app takes shape.",
      },
      {
        question: "Do you build apps for Sialkot's exporters and manufacturers?",
        answer:
          "Yes. Across sports goods, surgical instruments, and leather, Sialkot's exporters increasingly need order-tracking apps, B2B buyer catalogs, and internal tools for production and dispatch. We build those as mobile apps, web systems, or both connected to one backend.",
      },
      {
        question: "Will my app be built with Flutter or native code?",
        answer:
          "Flutter, which compiles to real native code for both iOS and Android from one codebase. You get native performance and both platforms for roughly a third of the cost and time of writing two separate native apps. Where it speeds things up further, we use FlutterFlow, where we're officially certified.",
      },
      {
        question: "How do I check if an app developer in Sialkot is any good?",
        answer:
          "Ask for App Store and Google Play links to apps they built that are live right now, then install one in front of them. A PDF of screenshots isn't an app, and \"we did it for a client, it's private\" five times in a row is a pattern. Ours are on the work page, from a 15,000-user AI app in Turkey to a car marketplace in the UAE. Go ahead and download them.",
      },
      {
        question: "Can you finish an app another developer started and left?",
        answer:
          "Yes, and in this city it happens more than it should. We start with a short audit of the code and the store accounts, tell you plainly whether it's worth finishing or cheaper to rebuild, then quote a fixed price for whichever makes sense. Either way you end up owning the full source code, which is often the thing the last developer never handed over.",
      },
    ],
    relatedService: "mobile-app-development",
    relatedProjects: ["bilge-ai", "mindful-mantra", "zwipe"],
    localBusiness: true,
  },
  {
    slug: "web-development-sialkot",
    metaTitle: "Website Development in Sialkot | Web Developer for Exporters & Local Business",
    metaDescription:
      "Hire a website developer in Sialkot: SEO-first business and import/export websites built with Next.js, engineered to rank on Google and win international buyers. Delivered in 2-4 weeks.",
    label: "Sialkot · Web",
    title: "Website developer",
    accent: "in Sialkot.",
    headerDescription:
      "SEO-first websites for Sialkot's businesses and exporters, engineered with React and Next.js to rank on Google, load instantly, and turn international buyers into inquiries.",
    specs: [
      { label: "Based in", value: "Sialkot, Pakistan" },
      { label: "Delivery", value: "2-4 weeks" },
      { label: "Quotes", value: "Fixed price" },
    ],
    intro: [
      "Sialkot is an export city built on sports goods, surgical instruments, and leather. Your next buyer in Germany, the UK, or the US will Google your company before they ever reply to an email, and most Sialkot business websites fail that moment with slow WordPress templates that never rank and look a decade old on a phone. Website development in Sialkot deserves better engineering than that.",
      "We build websites the way modern software companies do, with React, Next.js, TypeScript, server rendering, and an SEO-first approach. No page builders, no plugin stacks. We deliver company sites, export catalogs, booking portals, and full web applications, each engineered to load instantly and rank for the searches your customers actually type. The site you're reading is our own work, so check its speed and its Google presence as the live sample.",
      "Import export website development is a specialty. That means product catalogs organized the way B2B buyers browse, certifications and factory credentials presented for trust, and inquiry and RFQ forms that land directly on your WhatsApp and email so a buyer in another timezone never waits for a reply.",
      "A word on price, because it's the first thing everyone here asks. You can get a website in Sialkot for 10,000 or 20,000 rupees, and plenty of people do. What usually arrives is a theme bought once and resold to forty businesses, your logo swapped in, the admin login left open at /wp-admin, and thirty plugins nobody will ever update. If you need three pages and none of that bothers you, honestly, go for it. If the site has to win a buyer in Germany and still be standing (and ranking) in two years, you need an engineer. That's us.",
    ],
    whyTitle: "Why hire a web developer in Sialkot",
    whyPoints: [
      {
        title: "Built to win international buyers",
        description:
          "Export-focused sites: B2B product catalogs, certification and audit trust signals, and RFQ forms wired straight to your WhatsApp and email.",
      },
      {
        title: "SEO built in, not bolted on",
        description:
          "Server rendering, structured data, and fast Core Web Vitals mean your site starts technically ahead of nearly every competing Sialkot business site.",
      },
      {
        title: "Real code, no template traps",
        description:
          "No rented WordPress themes or page-builder lock-in. Your website is real engineering, handed over completely, hosted where you control it.",
      },
      {
        title: "Face-to-face, not a ticket queue",
        description:
          "Scope the site face to face in Sialkot, get it maintained from the same city, and reach the people who build it directly, with no layers in between.",
      },
    ],
    quoteNote:
      "Fixed quote within 1-2 days. Sialkot clients can be invoiced in PKR and meet in person.",
    faqs: [
      {
        question: "How much does website development cost in Sialkot?",
        answer:
          "A landing page, a multi-page company or export-catalog site, and a full web application are very different builds, so we scope yours rather than quote from a list. Every quote is fixed against a written scope and comes back within 1-2 days, with PKR invoicing available for Sialkot clients.",
      },
      {
        question: "Do you build import export websites in Sialkot?",
        answer:
          "Yes, it's one of the main things Sialkot businesses need. An import export website developer has to think like a B2B buyer: clear product catalogs, certifications and factory credibility up front, fast loading on any connection, and inquiry forms that reach you instantly on WhatsApp and email. That's exactly how we build them.",
      },
      {
        question: "Will my website rank on Google in my buyers' countries?",
        answer:
          "Technically, your site will launch ahead of most competitors, with server-rendered HTML, structured data, clean semantics, and fast Core Web Vitals. Those are the factors Google rewards everywhere. Actual rankings also depend on your content and competition, and we'll tell you honestly what it takes for your product keywords.",
      },
      {
        question: "Can you redesign our existing company website?",
        answer:
          "Yes. We regularly move Sialkot businesses off old WordPress and Wix sites onto a modern stack, preserving existing Google rankings with proper redirects while transforming speed and design.",
      },
      {
        question: "Do you handle domain, hosting, and maintenance?",
        answer:
          "End to end: domain setup, hosting and deployment, analytics, Search Console, and ongoing maintenance. It all comes from the same city as your business, so support is a call or a visit away rather than a ticket queue.",
      },
      {
        question: "What should a web developer in Sialkot actually deliver?",
        answer:
          "A site that's yours: the code, the domain and the hosting account in your name, not the developer's. Pages that open fast on a phone, a contact form that actually reaches someone, security updates handled, and the basics Google needs (proper titles, a sitemap, Search Console set up). If a quote doesn't mention any of that, ask. If the answer is \"don't worry about it\", worry about it.",
      },
      {
        question: "Why not just buy a 15,000 rupee website?",
        answer:
          "If you need a few pages to show you exist, it can be fine, and we'll say so. The catch is what's usually inside: a reused template, plugins that go out of date within months, no real SEO, and nobody accountable when it gets hacked. For an exporter, a slow or broken site costs a lot more than it saved the first time a serious buyer looks you up.",
      },
      {
        question: "Is there a website developer near me in Sialkot I can meet in person?",
        answer:
          "Yes, that's us. We're based in Sialkot, so we can scope your website across a table, show you live sites we've built on a laptop, and stay a short drive away when you need changes later. Most of our clients are abroad, which is exactly why the work holds up to international buyers.",
      },
    ],
    relatedService: "web-development",
    relatedProjects: ["space-maintenance", "meridian-retail-wholesale-store", "poland-portal"],
    localBusiness: true,
  },
  {
    slug: "software-development-sialkot",
    metaTitle: "Custom Software Development in Sialkot | Inventory, School & Attendance Systems",
    metaDescription:
      "Custom software development in Sialkot by senior software engineers: inventory management systems, school management software, attendance systems, and export-order tools. You own the code, with no monthly per-seat fees.",
    label: "Sialkot · Software",
    title: "Software development",
    accent: "in Sialkot.",
    headerDescription:
      "Senior software engineers in Sialkot building the systems local businesses actually run on, including inventory, school management, attendance, POS, and export-order tracking. You own it outright, with no per-seat monthly bills.",
    specs: [
      { label: "Based in", value: "Sialkot, Pakistan" },
      { label: "Delivery", value: "2-4 weeks" },
      { label: "Quotes", value: "Fixed price" },
    ],
    intro: [
      "Most factories, exporters, and schools in Sialkot still run on registers, Excel sheets, and WhatsApp groups. When they search for custom software development in Sialkot, they mostly find resellers pushing rigid off-the-shelf packages. We're a software engineering agency in Sialkot that builds systems from scratch, shaped around how your business actually operates, the same way we built the operations platform a UK surveying firm runs its daily business on (the full case study is public on this site).",
      "These are the systems Sialkot businesses ask for most. Inventory management software for manufacturers and traders, covering stock, purchases, sales, and low-stock alerts across godowns. School management systems for schools and academies, with admissions, fee tracking, attendance, results, and parent notifications on WhatsApp. Attendance management systems for staff with leave tracking and payroll-ready reports. And order-tracking tools that follow an export order from inquiry to shipment.",
      "The economics favor custom heavily here. Built once, the software is yours, with full source code, your own database, and no per-user monthly fees that punish you for growing. And unlike a Lahore software house, we work in your city, so scoping happens face to face, support doesn't cross a timezone, and invoicing can be in PKR.",
    ],
    whyTitle: "Systems we build for Sialkot businesses",
    whyPoints: [
      {
        title: "Inventory management systems",
        description:
          "Stock, purchases, sales, and transfers across godowns and shops, with barcoding, low-stock alerts, and the reports your accountant actually asks for.",
      },
      {
        title: "School management software",
        description:
          "Admissions, fee vouchers and tracking, class attendance, results, and automatic parent notifications on WhatsApp, all in one system for the whole school or academy.",
      },
      {
        title: "Attendance & HR systems",
        description:
          "Staff check-in and check-out, shifts, leave management, and payroll-ready monthly exports for offices, factories, and multi-branch teams.",
      },
      {
        title: "Export order tracking & CRMs",
        description:
          "Follow every order from buyer inquiry through production, QC, and shipment, with statuses your team updates in seconds and automatic notifications to your buyers.",
      },
    ],
    quoteNote:
      "Fixed-price proposal within 1-2 days of mapping your workflow. PKR invoicing available for Sialkot clients.",
    faqs: [
      {
        question: "How much does an inventory management system cost in Sialkot?",
        answer:
          "It depends on whether you need a focused system around one stock workflow or a multi-branch platform with purchasing, reporting, and user roles. We scope it with you and quote a fixed price, invoiced in PKR if you prefer. Crucially, it's a one-time cost either way. There's no per-user monthly subscription, and the software is yours outright.",
      },
      {
        question: "Do you build school management software in Sialkot?",
        answer:
          "Yes. School management systems are one of the most requested builds, covering admissions, fee vouchers and payment tracking, class-wise attendance, exam results, and automatic parent notifications on WhatsApp, SMS, and email. They're sized for a single academy or a multi-campus school, and priced as a one-time build you own.",
      },
      {
        question: "Can you build an attendance management system for our staff?",
        answer:
          "Yes. Staff attendance systems covering check-in and check-out, shift schedules, leave requests, and monthly payroll-ready reports are among the quicker builds we do, usually delivered within 2-4 weeks. They can also plug into a larger HR or payroll workflow later.",
      },
      {
        question: "Which industries in Sialkot do you build software for?",
        answer:
          "Any business with a workflow: sports goods and surgical instrument manufacturers, leather exporters, trading houses, schools and academies, clinics, retail shops, and service businesses. The system is shaped around your process, and that's the entire point of custom software over a ready-made package.",
      },
      {
        question: "Is custom software better than buying ready-made software?",
        answer:
          "Not always, and we'll tell you honestly in the first meeting. If an off-the-shelf package fits 90% of your process, buy it. Custom wins when your workflow doesn't fit the template, when per-user monthly fees keep climbing, or when you need support for Urdu-speaking staff, WhatsApp notifications, and your own reports, which packaged software rarely does well here.",
      },
      {
        question: "Are you a software house in Sialkot?",
        answer:
          "Granyyte is a lean, senior-led software agency in Sialkot, deliberately so. You deal directly with the people building your software rather than a sales layer over a junior bench. The portfolio on this site, including apps live on both stores and a UK firm's operations platform, is all Granyyte's work.",
      },
      {
        question: "How do I find a good software developer in Sialkot?",
        answer:
          "Ignore the title on the business card and look at what's running. A good software developer in Sialkot can show you a system real people use every day, explain it without hiding behind jargon, and tell you who owns the code when it's done. Reselling a ready-made package with your logo on the login screen is installation, not development. Nothing wrong with it, as long as everyone calls it that.",
      },
      {
        question: "Do you build POS and billing software for shops in Sialkot?",
        answer:
          "Yes. Point of sale and billing for retail shops, wholesalers and multi-branch traders, with stock that updates as you sell, daily closing reports, and Urdu-friendly receipts if your staff prefer them. It can grow into full inventory management later instead of being thrown away when you open a second branch.",
      },
      {
        question: "Can you build a CRM for an export business in Sialkot?",
        answer:
          "Yes. An export CRM tracks every buyer, sample request, quote and order in one place, so nothing lives only in one salesman's WhatsApp. It's shaped around how your team actually follows up, with reminders for the buyers who went quiet and reports showing which markets are paying off.",
      },
    ],
    relatedService: "custom-software",
    relatedProjects: ["surveyor-job-management-system", "mainxpert"],
    localBusiness: true,
  },
  {
    slug: "software-house-sialkot",
    metaTitle: "Software House in Sialkot | Apps, Websites & Custom Software",
    metaDescription:
      "A software house in Sialkot with apps live in Turkey, the UAE, Poland and the US. Websites, mobile apps and custom business software, built by engineers you can meet.",
    label: "Sialkot · Software House",
    title: "Software house",
    accent: "in Sialkot.",
    headerDescription:
      "Websites, mobile apps and custom business software, engineered here and shipped to clients in Turkey, the UAE, Poland, the UK and the US. Not a template shop. You'll notice the difference in about a week.",
    specs: [
      { label: "Based in", value: "Sialkot, Pakistan" },
      { label: "Clients in", value: "TR · AE · PL · UK · US" },
      { label: "Quotes", value: "Fixed price" },
    ],
    intro: [
      "Search for a software house in Sialkot and you'll find dozens. A lot of them sell the same three things: a WordPress theme with your logo on it for 10,000 or 20,000 rupees, a ready-made package for everything else, and a business card that says \"expert\". Some of them are perfectly fine for what they are. Very few have ever shipped software for a client outside Pakistan.",
      "Granyyte is a software house in Sialkot that does the other kind of work. We write the code ourselves, from scratch. An AI app used by more than 15,000 people in Turkey. A car marketplace in the UAE. The service app for an auction network spread across 25 US states. The operations platform a UK repairs firm runs every job through. Same engineers, same city as you.",
      "The difference shows up in places you won't see on day one, like whether the site gets hacked in month four, or whether the next developer can read the code at all. If you need a few simple pages and none of that worries you, a cheaper shop will do, and we'll happily tell you so. If you want it engineered properly, that's us.",
    ],
    whyTitle: "What makes a software house in Sialkot worth hiring",
    whyPoints: [
      {
        title: "Work you can download today",
        description:
          "Apps live on the App Store and Google Play for real clients abroad. Ask any software house in Sialkot to show you the same. It tends to be a short conversation.",
      },
      {
        title: "Engineers, not resellers",
        description:
          "We build in Flutter, Next.js and Supabase. No reselling a package and calling it custom, and no theme with the demo text still sitting in the footer.",
      },
      {
        title: "Security and SEO from the first commit",
        description:
          "No admin panel left open to the internet, dependencies kept up to date, pages Google can actually read, and a sitemap that exists. Boring things. They're the ones that matter.",
      },
      {
        title: "Down the road, not across the world",
        description:
          "Scope it across a table in Sialkot, pay in PKR, and get support from the people who wrote the code instead of a ticket number.",
      },
    ],
    quoteNote:
      "Fixed price against a written scope, usually within 1-2 days of the first meeting. You can come to us, or we'll come to you.",
    faqs: [
      {
        question: "Which is the best software house in Sialkot?",
        answer:
          "The one that can show you live work and lets you meet the person writing your code. We'd like that to be us, but test anyone, us included, with four questions. Can I see something live right now? Who writes the code? Do I own the source when it's done? Is the price fixed against a written scope? You'd be surprised how many fail the first one.",
      },
      {
        question: "What do software companies in Sialkot actually build?",
        answer:
          "Mostly business websites, ready-made packages (accounting, POS, school software) that get resold and installed, and a smaller number of genuinely custom systems. We sit in that last group, plus mobile apps, which not many software companies in Sialkot ship to the App Store and Google Play at all.",
      },
      {
        question: "Why are some software houses in Sialkot so cheap?",
        answer:
          "Because the same template gets sold again and again. Buy a theme once, change the logo and the phone number, deliver it forty times. That's how a 15,000 rupee website works, and for a tiny brochure site it can be enough. What you don't get is security upkeep, real SEO, or code anyone can extend later, so the cheap version often turns into the expensive one around the time you need it to grow.",
      },
      {
        question: "Are you an IT company? Do you do networking and CCTV?",
        answer:
          "We're a software company, not an IT company in the cables and routers sense. If you need office networking, CCTV, or a printer that finally works, call a local IT vendor. If you need software built, whether that's a website, an app, or a system for your factory or school, call us.",
      },
      {
        question: "How much does a software house in Sialkot charge?",
        answer:
          "Across the market, anything from 10,000 rupees for a template website to several lakh for a custom system. We don't publish a rate, because the right number depends on what you're building. You get a fixed quote against a written scope within a day or two, free, and with PKR invoicing.",
      },
      {
        question: "Do you only work with businesses in Sialkot?",
        answer:
          "No. Most of our clients are abroad, in Turkey, Poland, the UAE, the UK and the US. Businesses in Sialkot simply get the extra option of meeting us in person, which honestly makes scoping a lot faster.",
      },
    ],
    relatedService: "custom-software",
    relatedProjects: ["bilge-ai", "surveyor-job-management-system", "avc-dealer"],
    localBusiness: true,
  },
  {
    slug: "web-design-sialkot",
    metaTitle: "Web Design Company in Sialkot | Custom Websites, Not Templates",
    metaDescription:
      "A web design company in Sialkot that designs and codes every site from scratch. Fast, secure, SEO-ready websites for exporters and local businesses, delivered in 2-4 weeks.",
    label: "Sialkot · Web Design",
    title: "Web design company",
    accent: "in Sialkot.",
    headerDescription:
      "Websites designed and coded from scratch for exporters, schools, clinics and shops. No reskinned theme, no plugin pile, and no Lorem ipsum still hiding in the footer.",
    specs: [
      { label: "Based in", value: "Sialkot, Pakistan" },
      { label: "Built with", value: "Next.js, not templates" },
      { label: "Delivery", value: "2-4 weeks" },
    ],
    intro: [
      "Most web design in Sialkot isn't really design. It's picking a theme from a marketplace, swapping in the logo and the phone number, and calling the job done. That's how you get a website for 10,000 or 20,000 rupees, and it's why so many business sites in the city look like the same site wearing a different hat.",
      "We're a web design company in Sialkot that starts from a blank page. We work out who has to trust you (an importer in Germany, a parent choosing a school, a patient choosing a clinic), design for that person, then code it by hand in Next.js so it loads fast on a phone and Google can read every page. The site you're on right now is the sample. Check how quickly it opened.",
      "For exporters, design does more selling than people expect. A buyer abroad decides in seconds whether you're a real factory or a middleman with a stock photo. Clean product pages, visible certifications and an inquiry form that lands on your WhatsApp beat any image slider ever made. Our Meridian concept store shows the idea for apparel: one catalogue, a switch between retail and wholesale pricing, MOQs on every product, and a quote form built for importers.",
      "The honest bit: if you need a three-page site for a small shop and you're happy never to touch it again, a cheap template is fine, and we'll tell you so. When the website has to earn money, have it engineered.",
    ],
    whyTitle: "Why hire a web designer in Sialkot who also writes the code",
    whyPoints: [
      {
        title: "Designed for your buyer, not the theme",
        description:
          "Layout, copy order and calls to action built around the person who has to say yes, whether that's an importer comparing suppliers or a parent comparing schools.",
      },
      {
        title: "Hand-coded, so it's fast",
        description:
          "No page builder and no 6 MB hero image. Pages open quickly on 4G in Sialkot and on broadband in Berlin, which is where your buyer probably is.",
      },
      {
        title: "Secure by default",
        description:
          "No WordPress login waiting at /wp-admin and no thirty plugins begging for updates. Far fewer doors for a bot to rattle.",
      },
      {
        title: "SEO designed in",
        description:
          "Proper headings, structured data, a real sitemap, and page titles that aren't all called \"Home\". Google notices, and so do your buyers.",
      },
    ],
    quoteNote:
      "Fixed quote within 1-2 days of a first chat. Sialkot clients can sit with us to review designs in person and pay in PKR.",
    faqs: [
      {
        question: "Which is the best web design company in Sialkot?",
        answer:
          "Judge any web design company in Sialkot by its last three client sites, opened on your own phone. Are they fast? Do they look different from each other? Is the contact form working? Then ask who owns the code and hosting at the end. Our work, including sites for clients in the UK and apps live in four countries, is on the work page to check the same way.",
      },
      {
        question: "Why is website design in Sialkot so cheap from some agencies?",
        answer:
          "Because it's mostly not designed. A template bought once gets reused for dozens of clients with new colours and a new logo. That's fine for a very small brochure site. It's a problem when you need the site to rank, stay secure, or impress a buyer who has seen that exact theme on three other suppliers' sites that week.",
      },
      {
        question: "Do you design websites for export companies in Sialkot?",
        answer:
          "Yes, it's a big part of what we do. Sports goods, surgical instruments, leather and apparel exporters need product catalogues buyers can browse, certifications up front, and RFQ forms that reach the sales team instantly. We design those around how international buyers shortlist suppliers.",
      },
      {
        question: "Can a web designer in Sialkot make my website rank on Google?",
        answer:
          "We can make sure nothing technical holds it back, with fast pages, clean structure, structured data and Search Console set up from day one. Where it ranks also depends on your content and competition, and we'll tell you honestly what your keywords will take. We won't promise first place by Friday. Nobody honest can.",
      },
      {
        question: "What do I need to give you to get started?",
        answer:
          "Your logo if you have one, a rough list of products or services, and a few minutes on who your customers are. We'll handle the structure, the design and the build, and show you a working preview every week until it's live.",
      },
      {
        question: "Can you redesign our old WordPress website without losing Google rankings?",
        answer:
          "Yes. We map every old URL to its new home with permanent redirects before launch, so the rankings you've earned carry over. Then the new site does what the old one couldn't: open quickly, look current, and stop asking you to update plugins every Tuesday.",
      },
    ],
    relatedService: "web-development",
    relatedProjects: ["space-maintenance", "meridian-retail-wholesale-store", "poland-portal"],
    localBusiness: true,
  },
];

export function getSeoPage(slug: string) {
  return seoPages.find((p) => p.slug === slug);
}
