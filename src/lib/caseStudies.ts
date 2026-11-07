import { getDictionary } from "@/content";
import { projectSlugs, type ProjectSlug } from "@/content/data/projects";
import { type CaseStudyCopy } from "@/content/types/caseStudy";
import { type Locale } from "@/i18n/locales";

/** Projects with a case study page. Tests make sure both languages have the same ones. */
export function caseStudySlugs(): ProjectSlug[] {
  const studies = getDictionary("en").caseStudies.studies;
  return projectSlugs.filter((slug) => studies[slug] !== undefined);
}

export function isProjectSlug(value: string): value is ProjectSlug {
  return (projectSlugs as readonly string[]).includes(value);
}

export function getCaseStudy(locale: Locale, slug: ProjectSlug): CaseStudyCopy | undefined {
  return getDictionary(locale).caseStudies.studies[slug];
}
