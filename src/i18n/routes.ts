import { type Locale } from "./locales";

/** Every page of the site, per locale. Add a page here first, then create its route files. */
export const routes = {
  home: { en: "/", pt: "/pt-br" },
  marksage: { en: "/projects/marksage", pt: "/pt-br/projects/marksage" },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteName = keyof typeof routes;

export function routeFor(name: RouteName, locale: Locale): string {
  return routes[name][locale];
}

/** Link to a section of the home page, from any page. */
export function sectionHref(locale: Locale, sectionId: string, fromHome: boolean): string {
  if (fromHome) return `#${sectionId}`;
  const home = routes.home[locale];
  return `${home === "/" ? "" : home}/#${sectionId}`;
}
