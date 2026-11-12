import { ImageResponse } from "next/og";
import { type DisplayHeading } from "@/content/types/shared";
import { loadOgFonts } from "./fonts";
import { ogColors as c } from "./tokens";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

type OgImage = {
  /** Mono kicker above the heading, as on the site's section labels. */
  label: string;
  heading: DisplayHeading;
  /** One or two sentences under the heading. */
  lead: string;
  /** Large type for the home page's name; smaller for longer case study headings. */
  size: "name" | "title";
};

/**
 * A 1200×630 share image in the site's own type: the mono label, the serif heading with its italic accent, the lead,
 * and the site's name and address along the bottom.
 */
export async function renderOgImage({ label, heading, lead, size }: OgImage) {
  const headingSize = size === "name" ? 150 : 92;
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 80px 56px",
        backgroundColor: c.canvas,
        color: c.ink,
        fontFamily: "Hanken Grotesk",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontFamily: "JetBrains Mono",
            fontSize: 22,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: c["accent-soft"],
          }}
        >
          {label}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: 28,
            fontFamily: "Newsreader",
            fontSize: headingSize,
            lineHeight: 0.98,
            letterSpacing: size === "name" ? -5 : -2.5,
          }}
        >
          <span style={{ marginRight: headingSize * 0.24 }}>{heading.text}</span>
          <span style={{ fontStyle: "italic", color: c.accent }}>{heading.accent}</span>
        </div>
        <div
          style={{
            marginTop: 32,
            maxWidth: 980,
            fontSize: 28,
            lineHeight: 1.45,
            color: c.muted,
          }}
        >
          {lead}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: `1px solid ${c.line}`,
          paddingTop: 28,
        }}
      >
        <span style={{ fontFamily: "Newsreader", fontStyle: "italic", fontSize: 32 }}>Pablo Felipe</span>
        <span style={{ fontFamily: "JetBrains Mono", fontSize: 22, color: c.faint }}>
          pablofelps.vercel.app
        </span>
      </div>
    </div>,
    { ...ogSize, fonts: await loadOgFonts() },
  );
}
