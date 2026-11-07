import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/case-study/CaseStudyPage";
import { type Locale } from "@/i18n/locales";
import { localized, projectPath } from "@/i18n/routes";
import { caseStudySlugs, getCaseStudy, isProjectSlug } from "./caseStudies";
import { pageMetadata } from "./metadata";

type Props = { params: Promise<{ slug: string }> };

/**
 * Everything a `projects/[slug]` route exports, for one language. Each locale's route file re-exports
 * it, so both languages build the same pages from the same code.
 */
export function caseStudyRoute(locale: Locale) {
  return {
    generateStaticParams: () => caseStudySlugs().map((slug) => ({ slug })),

    generateMetadata: async ({ params }: Props): Promise<Metadata> => {
      const { slug } = await params;
      const study = isProjectSlug(slug) ? getCaseStudy(locale, slug) : undefined;
      if (!isProjectSlug(slug) || !study) return {};
      return pageMetadata(
        localized((l) => projectPath(slug, l)),
        locale,
        study.meta,
      );
    },

    Page: async function Page({ params }: Props) {
      const { slug } = await params;
      if (!isProjectSlug(slug) || !getCaseStudy(locale, slug)) notFound();
      return <CaseStudyPage locale={locale} slug={slug} />;
    },
  };
}
