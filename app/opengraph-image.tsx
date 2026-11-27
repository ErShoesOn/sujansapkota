import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#061323",
          color: "#ffffff",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid #d6b36a",
              borderRadius: 12,
              color: "#d6b36a",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            SS
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: 1 }}>{site.name}</div>
            <div style={{ fontSize: 16, color: "#e6cc92", letterSpacing: 2 }}>
              PUBLIC PROCUREMENT CONSULTANT
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              width: 90,
              height: 4,
              background: "#c59a45",
              borderRadius: 4,
            }}
          />
          <div style={{ fontSize: 66, fontWeight: 700, lineHeight: 1.05 }}>
            Navigate Public Procurement
          </div>
          <div style={{ fontSize: 66, color: "#d6b36a", lineHeight: 1.05 }}>
            with Confidence.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, color: "#a8b4c4" }}>
          <div>Practical guidance for contractors in Nepal</div>
          <div>www.sapkotasujan.com.np</div>
        </div>
      </div>
    ),
    size,
  );
}
