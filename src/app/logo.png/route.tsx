import { ImageResponse } from "next/og";

// Square raster brand mark for structured data (Organization.logo / image).
// Google requires a real image URL (PNG/JPG), not inline SVG, for the logo.
export const contentType = "image/png";
export const size = { width: 512, height: 512 };
// Prerender as a static asset (site is fully SSG).
export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0b",
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(200,243,29,0.18), transparent 60%)",
        }}
      >
        <svg
          width="360"
          height="360"
          viewBox="50 40 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 144 71.71 A 44 44 0 1 0 144 128.29 L 112.57 128.29 L 112.57 100"
            stroke="#c8f31d"
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
