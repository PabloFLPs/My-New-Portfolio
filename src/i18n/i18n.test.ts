import { describe, expect, it } from "vitest";
import { formatDate } from "./format";
import { otherLocale } from "./locales";
import { routeFor, routes, sectionHref } from "./routes";

describe("routes", () => {
  it("give every page a path in both languages, PT under /pt-br", () => {
    for (const route of Object.values(routes)) {
      expect(route.en.startsWith("/pt-br")).toBe(false);
      expect(route.pt.startsWith("/pt-br")).toBe(true);
    }
  });

  it("link to home sections from any page", () => {
    expect(sectionHref("en", "work", true)).toBe("#work");
    expect(sectionHref("en", "work", false)).toBe("/#work");
    expect(sectionHref("pt", "work", false)).toBe("/pt-br/#work");
    expect(routeFor("marksage", "pt")).toBe("/pt-br/projects/marksage");
    expect(otherLocale("pt")).toBe("en");
  });
});

describe("formatDate", () => {
  it("formats ISO dates per language, independent of the time zone", () => {
    expect(formatDate("2026-06-25", "en")).toBe("Jun 25, 2026");
    expect(formatDate("2026-06-25", "pt")).toBe("25 de jun. de 2026");
  });
});
