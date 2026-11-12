import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { ogColors } from "./tokens";

describe("share image colours", () => {
  const css = readFileSync("src/app/globals.css", "utf8");

  it.each(Object.entries(ogColors))("%s matches globals.css", (name, hex) => {
    expect(css).toMatch(new RegExp(`--color-${name}:\\s*${hex};`, "i"));
  });
});
