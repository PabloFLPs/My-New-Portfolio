import { getDictionary } from "@/content";
import { projectSlugs, type ProjectSlug } from "@/content/data/projects";
import { type CaseStudyCopy } from "@/content/types/caseStudy";
import { type Locale } from "@/i18n/locales";

export function isProjectSlug(value: string): value is ProjectSlug {
  return (projectSlugs as readonly string[]).includes(value);
}

export function getCaseStudy(locale: Locale, slug: ProjectSlug): CaseStudyCopy {
  return getDictionary(locale).caseStudies.studies[slug];
}
