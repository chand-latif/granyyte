import { ImageResponse } from "next/og";

// Raster PNG favicon alongside icon.svg. Google's favicon crawler reads a
// classic raster icon far more reliably than an SVG-only favicon, so this
// maximizes the chance the "G" mark shows in search results & browser tabs.
export const size = { width: 96, height: 96 };
export const contentType = "image/png";

export default function Icon() {
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
        }}
      >
        {/* Tight crop of the G mark, thicker stroke so it reads at 16px */}
        <svg
          width="78"
          height="78"
          viewBox="50 40 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 144 71.71 A 44 44 0 1 0 144 128.29 L 112.57 128.29 L 112.57 100"
            stroke="#c8f31d"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
