import { getDictionary } from "@/content";
import { projectSlugs } from "@/content/data/projects";
import { type Locale } from "@/i18n/locales";
import { getCaseStudy, isProjectSlug } from "../caseStudies";
import { ogContentType, ogSize, renderOgImage } from "./image";

/**
 * What an `opengraph-image.tsx` file exports, for one language. Each locale's file re-exports it, like the page
 * routes do with `caseStudyRoute`. Everything is generated at build time.
 */
export function homeOgImage(locale: Locale) {
  const t = getDictionary(locale);
  return {
    alt: `${t.hero.firstName} ${t.hero.lastName} — ${t.hero.eyebrowMobile}`,
    Image: () =>
      renderOgImage({
        label: t.hero.eyebrow,
        heading: { text: t.hero.firstName, accent: t.hero.lastName },
        lead: t.hero.lead,
        size: "name",
      }),
  };
}

type Props = { params: Promise<{ slug: string }> };

export function caseStudyOgImage(locale: Locale) {
  const t = getDictionary(locale);
  return {
    alt: `${t.hero.firstName} ${t.hero.lastName} — ${t.caseStudies.labels.shareImageAlt}`,
    generateStaticParams: () => projectSlugs.map((slug) => ({ slug })),
    Image: async ({ params }: Props) => {
      const { slug } = await params;
      if (!isProjectSlug(slug)) throw new Error(`No case study for ${slug}`);
      const study = getCaseStudy(locale, slug);
      return renderOgImage({ label: study.eyebrow, heading: study.heading, lead: study.lead, size: "title" });
    },
  };
}

export { ogContentType, ogSize };
