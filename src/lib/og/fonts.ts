import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * The site's three typefaces as `.woff` (the image renderer reads ttf, otf and woff, not woff2), from the static
 * Fontsource packages. Share images are generated at build time, so these are read once per image, never at request
 * time.
 */
const files = [
  {
    name: "Newsreader",
    style: "normal",
    weight: 400,
    file: "newsreader/files/newsreader-latin-400-normal.woff",
  },
  {
    name: "Newsreader",
    style: "italic",
    weight: 400,
    file: "newsreader/files/newsreader-latin-400-italic.woff",
  },
  {
    name: "Hanken Grotesk",
    style: "normal",
    weight: 400,
    file: "hanken-grotesk/files/hanken-grotesk-latin-400-normal.woff",
  },
  {
    name: "JetBrains Mono",
    style: "normal",
    weight: 500,
    file: "jetbrains-mono/files/jetbrains-mono-latin-500-normal.woff",
  },
] as const;

export async function loadOgFonts() {
  return Promise.all(
    files.map(async ({ file, ...font }) => ({
      ...font,
      data: await readFile(join(process.cwd(), "node_modules/@fontsource", file)),
    })),
  );
}
