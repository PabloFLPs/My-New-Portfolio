import { type MetadataRoute } from "next";
import { site } from "@/content/data/site";
import { htmlLang, locales, type Locale } from "@/i18n/locales";
import { homePath, projectPath } from "@/i18n/routes";
import { caseStudySlugs } from "@/lib/caseStudies";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: ((locale: Locale) => string)[] = [
    homePath,
    ...caseStudySlugs().map((slug) => (locale: Locale) => projectPath(slug, locale)),
  ];
  return pages.map((pathFor) => ({
    url: `${site.url}${pathFor("en")}`,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [htmlLang[l], `${site.url}${pathFor(l)}`])),
    },
  }));
}
