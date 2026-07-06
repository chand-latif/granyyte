export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  readingTime: string;
  tags: string[];
};

// Blog is "Coming soon" for now. To bring it back, move the archived entries
// below into this array — the index page, post pages, and sitemap all read
// from here, so restoring is a one-step edit. The MDX files remain in
// src/content/posts/.
export const posts: Post[] = [];

/* ARCHIVED — restore by moving these back into the array above:
  {
    slug: "flutterflow-vs-native-development",
    title: "FlutterFlow vs. Native Development: What to Choose in 2026",
    description:
      "FlutterFlow, Flutter, or fully native Swift/Kotlin? A certified FlutterFlow expert breaks down cost, speed, performance, and when each approach actually makes sense.",
    date: "2026-07-02",
    readingTime: "7 min read",
    tags: ["FlutterFlow", "Mobile Development", "Strategy"],
  },
  {
    slug: "mobile-app-development-cost",
    title: "How Much Does It Cost to Build a Mobile App in 2026?",
    description:
      "Real-world mobile app development costs in 2026 — from MVP to full product. What drives the price up, where you can save, and how agencies actually quote.",
    date: "2026-07-02",
    readingTime: "8 min read",
    tags: ["Pricing", "Mobile Development", "Planning"],
  },
  {
    slug: "custom-software-vs-off-the-shelf",
    title: "Custom Software vs. Off-the-Shelf: A Decision Guide",
    description:
      "Paying for five SaaS tools that almost fit? Here's a practical framework for deciding when custom software pays for itself — and when it doesn't.",
    date: "2026-07-02",
    readingTime: "6 min read",
    tags: ["Custom Software", "Business", "Strategy"],
  },
*/

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
