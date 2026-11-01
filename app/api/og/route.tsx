import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") || "Free Podcast Creator Tools";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            backgroundColor: "#0A0A16",
            padding: "80px",
            fontFamily: "sans-serif",
            position: "relative",
          }}
        >
          {/* Top Brand Bar */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                backgroundColor: "#F97316",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                fontWeight: "bold",
                color: "#FFFFFF",
              }}
            >
              🎙️
            </div>
            <div style={{ display: "flex", fontSize: "28px", fontWeight: "800", color: "#FFFFFF" }}>
              Pod Studio <span style={{ color: "#F97316", marginLeft: "8px" }}>Tools</span>
            </div>
          </div>

          {/* Central Title */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "900px" }}>
            <div
              style={{
                fontSize: "18px",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "#F97316",
              }}
            >
              100% Free • Client-Side Audio Suite
            </div>
            <div
              style={{
                fontSize: "56px",
                fontWeight: "900",
                color: "#FFFFFF",
                lineHeight: "1.15",
              }}
            >
              {title}
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              borderTop: "1px solid #25244C",
              paddingTop: "24px",
              color: "#94A3B8",
              fontSize: "18px",
            }}
          >
            <div>podstudiotools.com</div>
            <div>Apple &amp; Spotify 2026 Standards</div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    return new Response("Failed to generate OG image", { status: 500 });
  }
}
