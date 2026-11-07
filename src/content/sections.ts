/**
 * Home page sections, in page order. The number shown next to each label ("01 — About") comes from
 * this order, so reordering or adding a section never means renumbering copy by hand.
 */
export const homeSections = ["about", "work"] as const;

export type HomeSectionId = (typeof homeSections)[number];

export function sectionNumber(id: HomeSectionId): string {
  return String(homeSections.indexOf(id) + 1).padStart(2, "0");
}
