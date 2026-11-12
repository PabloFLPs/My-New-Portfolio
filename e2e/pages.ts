import { type Page } from "@playwright/test";
import { projectSlugs } from "../src/content/data/projects";
import { htmlLang, locales, type Locale } from "../src/i18n/locales";
import { homePath, projectPath } from "../src/i18n/routes";

/** Every page on the site, in both languages: the list the smoke tests walk. */
export const pages = locales.flatMap((locale) => [
  { path: homePath(locale), locale, lang: htmlLang[locale] },
  ...projectSlugs.map((slug) => ({ path: projectPath(slug, locale), locale, lang: htmlLang[locale] })),
]) satisfies { path: string; locale: Locale; lang: string }[];

/** Phone (small and common) and desktop. */
export const widths = [320, 390, 1280] as const;

/**
 * Collects what the browser reports as broken while a test runs: console errors, uncaught exceptions,
 * Content-Security-Policy violations and failed same-origin requests.
 */
export function watchForProblems(page: Page) {
  const problems: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`exception: ${error.message}`));
  page.on("response", (response) => {
    if (response.status() >= 400 && response.url().startsWith("http://localhost")) {
      problems.push(`${response.status()}: ${response.url()}`);
    }
  });
  return problems;
}

/** Same-origin CSP violations show up as console errors; this catches them as events too, with the directive. */
export async function listenForCspViolations(page: Page) {
  await page.addInitScript(() => {
    document.addEventListener("securitypolicyviolation", (event) => {
      console.error(`CSP ${event.violatedDirective} blocked ${event.blockedURI}`);
    });
  });
}

/**
 * For machines that can't reach GitHub (sandboxes, offline): set E2E_OFFLINE=1 and the GitHub avatar, which the
 * image optimizer fetches from avatars.githubusercontent.com, is replaced by a 1×1 PNG. CI runs without it.
 */
export async function stubAvatarWhenOffline(page: Page) {
  if (!process.env.E2E_OFFLINE) return;
  const pixel = Buffer.from(
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
    "base64",
  );
  await page.route(/\/_next\/image\?url=https%3A%2F%2Favatars\.githubusercontent\.com/, (route) =>
    route.fulfill({ status: 200, contentType: "image/png", body: pixel }),
  );
}
