import { type CaseStudyCopy } from "@/content/types/caseStudy";

export const routeFlyoverStudio: CaseStudyCopy = {
  meta: {
    title: "Route Flyover Studio case study · Pablo Felipe",
    description:
      "Turns a GPS activity file into a cinematic vertical flyover video, entirely in the browser: no server, no API keys.",
  },
  eyebrow: "Case study · Route Flyover Studio",
  heading: { text: "Your run,", accent: "as a flyover." },
  lead: "Turns a GPS activity file into a cinematic 9:16 video of a 3D map chasing your route, with an animated stats HUD. Everything happens in the browser: no server, no API keys.",
  facts: [
    { value: "1080 × 1920", label: "vertical video, ready to post" },
    { value: "5", label: "file formats: GPX, FIT, GeoJSON, KML, Suunto" },
    { value: "0", label: "servers or API keys" },
    { value: "16", label: "decisions recorded as ADRs" },
  ],
  sections: [
    {
      heading: "The problem",
      blocks: [
        {
          type: "paragraph",
          text: "A GPS file holds a whole story: the route, the pace, the climbs, the heart rate. Shared as a screenshot of a flat map, most of it is lost.",
        },
        {
          type: "paragraph",
          text: "The studio turns it into a short vertical video, the format people actually post.",
        },
      ],
    },
    {
      heading: "The architecture",
      blocks: [
        {
          type: "paragraph",
          text: "React owns the settings the user edits. An imperative engine owns the map, the canvas, the animation loop and the export, and reports read-only state back. The render loop stays off React's critical path, and the inputs stay declarative.",
        },
        {
          type: "paragraph",
          text: "Each frame draws the MapLibre map and the HUD into a fixed 1080 × 1920 canvas, which is what gets encoded.",
        },
      ],
    },
    {
      heading: "The export",
      blocks: [
        {
          type: "paragraph",
          text: "MP4 export first used ffmpeg.wasm: a 30 MB core from a CDN, and too slow at 1080 × 1920. It was replaced by the browser's own WebCodecs H.264 encoder and an MP4 muxer. Frames are encoded as the flyover plays, hardware-accelerated where available.",
        },
        {
          type: "paragraph",
          text: "Where the browser can't encode H.264, the export falls back to WebM and says so.",
        },
      ],
    },
    {
      heading: "Decisions",
      blocks: [
        {
          type: "entries",
          items: [
            {
              name: "A fixed heading for the fly-in",
              body: "Rotating toward a moving target made the camera flip direction mid-turn. One fixed target keeps every hand-off smooth.",
            },
            {
              name: "Weather that admits when it's dry",
              body: "Recent activities use the forecast model, since the archive over-reports drizzle in humid climates. A manual override covers the rest.",
            },
            {
              name: "Scope cut on purpose",
              body: "Shareable links, a WebM option and a manual hour picker were removed to keep the studio focused.",
            },
          ],
        },
      ],
    },
  ],
  lessons: [
    "Keep an imperative engine out of React, and let it report state back.",
    "Measure a heavy dependency before keeping it: the browser already had a faster encoder.",
    "When an outside data source is wrong now and then, give people an override instead of chasing the model.",
  ],
  credit:
    "Built with AI assistance for implementation and review, in the workflow described under “How I work”. The design decisions on this page are mine.",
  more: {
    body: "Every non-obvious choice is recorded as a decision, with its context and consequences.",
    links: [
      {
        label: "Decision log",
        href: "https://github.com/PabloFLPs/activies-flyover-studio/blob/main/docs/DECISIONS.md",
      },
      { label: "README", href: "https://github.com/PabloFLPs/activies-flyover-studio#readme" },
    ],
  },
};
