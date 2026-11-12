import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { listenForCspViolations, pages, stubAvatarWhenOffline, watchForProblems, widths } from "./pages";

for (const { path, lang } of pages) {
  for (const width of widths) {
    test(`${path} at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await listenForCspViolations(page);
      await stubAvatarWhenOffline(page);
      const problems = watchForProblems(page);

      const response = await page.goto(path, { waitUntil: "networkidle" });
      expect(response?.status()).toBe(200);
      await expect(page.locator("html")).toHaveAttribute("lang", lang);
      await expect(page.locator("h1")).toHaveCount(1);

      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow, "page scrolls sideways").toBeLessThanOrEqual(0);

      const { violations } = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();
      const serious = violations
        .filter((v) => v.impact === "serious" || v.impact === "critical")
        .map((v) => `${v.id} (${v.impact}): ${v.nodes.map((n) => n.target.join(" ")).join(", ")}`);
      expect(serious, "accessibility").toEqual([]);

      expect(problems, "browser problems").toEqual([]);
    });
  }

  test(`${path} has a working share image`, async ({ page, request }) => {
    await page.goto(path);
    const content = await page.locator('meta[property="og:image"]').getAttribute("content");
    expect(content).toBeTruthy();
    const url = new URL(content ?? "");
    const image = await request.get(url.pathname + url.search);
    expect(image.status()).toBe(200);
    expect(image.headers()["content-type"]).toBe("image/png");
  });
}
