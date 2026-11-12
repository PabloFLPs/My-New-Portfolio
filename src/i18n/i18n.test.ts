import { describe, expect, it } from "vitest";
import { formatDate } from "./format";
import { otherLocale } from "./locales";
import { homePath, localized, projectPath, sectionHref } from "./routes";

describe("routes", () => {
  it("put English at the root and Portuguese under /pt-br", () => {
    expect(localized(homePath)).toEqual({ en: "/", pt: "/pt-br" });
    expect(localized((l) => projectPath("zollama", l))).toEqual({
      en: "/projects/zollama",
      pt: "/pt-br/projects/zollama",
    });
  });

  it("link to home sections from any page", () => {
    expect(sectionHref("en", "work", true)).toBe("#work");
    expect(sectionHref("en", "work", false)).toBe("/#work");
    expect(sectionHref("pt", "work", false)).toBe("/pt-br/#work");
    expect(otherLocale("pt")).toBe("en");
  });
});

describe("formatDate", () => {
  it("formats ISO dates per language, independent of the time zone", () => {
    expect(formatDate("2026-06-25", "en")).toBe("Jun 25, 2026");
    expect(formatDate("2026-06-25", "pt")).toBe("25 de jun. de 2026");
  });
});
