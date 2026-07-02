import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const alt = `${site.name} — We build software that ships.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
          backgroundImage: "radial-gradient(circle at 20% 0%, rgba(200,243,29,0.15), transparent 55%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ fontSize: 44, fontWeight: 700, color: "#fafaf9" }}>Granyyte</span>
          <span style={{ fontSize: 44, fontWeight: 700, color: "#c8f31d" }}>.</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 88,
              fontWeight: 700,
              color: "#fafaf9",
              lineHeight: 1.05,
              letterSpacing: -3,
            }}
          >
            We build software
          </span>
          <span
            style={{
              fontSize: 88,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -3,
              display: "flex",
            }}
          >
            <span style={{ color: "#fafaf9" }}>that&nbsp;</span>
            <span style={{ color: "#c8f31d" }}>ships.</span>
          </span>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#9f9fa3" }}>
          Mobile apps · Web platforms · Custom software — granyyte.com
        </div>
      </div>
    ),
    { ...size }
  );
}
