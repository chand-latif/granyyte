import { ImageResponse } from "next/og";
import { getAllPosts, getPost, getTopicForPost } from "@/lib/content/posts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateImageMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  return [{ id: "post", size, contentType, alt: post?.title ?? "Granyyte" }];
}

/** Per-post share card. The generic site image on every post wastes social CTR. */
export default async function PostOgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  const topic = post ? getTopicForPost(post) : undefined;

  // Long headlines need to step down or they overflow the card.
  const title = post?.title ?? "Granyyte";
  const titleSize = title.length > 72 ? 56 : title.length > 48 ? 66 : 78;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0a0a0b",
          backgroundImage:
            "radial-gradient(circle at 20% 0%, rgba(200,243,29,0.15), transparent 55%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: 38, fontWeight: 700, color: "#fafaf9" }}>Granyyte</span>
            <span style={{ fontSize: 38, fontWeight: 700, color: "#c8f31d" }}>.</span>
          </div>
          {topic && (
            <span
              style={{
                display: "flex",
                fontSize: 22,
                color: "#c8f31d",
                border: "1px solid rgba(200,243,29,0.35)",
                borderRadius: 999,
                padding: "8px 22px",
              }}
            >
              {topic.name}
            </span>
          )}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: titleSize,
            fontWeight: 700,
            color: "#fafaf9",
            lineHeight: 1.08,
            letterSpacing: -2,
          }}
        >
          {title}
        </div>

        <div style={{ display: "flex", fontSize: 26, color: "#9f9fa3" }}>
          {post?.readingTime ?? ""} · granyyte.com/blog
        </div>
      </div>
    ),
    { ...size }
  );
}
