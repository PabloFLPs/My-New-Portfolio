import { type MetadataRoute } from "next";
import { site } from "@/content/data/site";
import { htmlLang, locales } from "@/i18n/locales";
import { routes } from "@/i18n/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(routes).map((route) => ({
    url: `${site.url}${route.en}`,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [htmlLang[l], `${site.url}${route[l]}`])),
    },
  }));
}
