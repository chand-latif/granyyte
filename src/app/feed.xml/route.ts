import { site } from "@/config/site";
import { getAllPosts, getLatestModified } from "@/lib/content/posts";

export const dynamic = "force-static";

/** Minimal XML entity escaping for text nodes and attribute values. */
function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const posts = getAllPosts();
  const updated = getLatestModified(posts) ?? new Date().toISOString();

  const items = posts
    .map((post) => {
      const url = `${site.url}/blog/${post.slug}`;
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>${escapeXml(`${site.contact.email} (${site.founder.name})`)}</author>
${post.tags.map((tag) => `      <category>${escapeXml(tag)}</category>`).join("\n")}
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${site.name} Blog`)}</title>
    <link>${site.url}/blog</link>
    <description>${escapeXml(
      "Practical guides on mobile app development, FlutterFlow, web platforms, and custom software."
    )}</description>
    <language>en</language>
    <lastBuildDate>${new Date(updated).toUTCString()}</lastBuildDate>
    <atom:link href="${site.url}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
