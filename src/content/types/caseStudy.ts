import { type ProjectSlug } from "../data/projects";
import { type DisplayHeading, type MetaCopy } from "./shared";

/** The building blocks of a case study section, rendered in order. */
export type CaseStudyBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; columns: string[]; rows: { cells: string[]; highlight?: boolean }[] }
  | { type: "entries"; items: { name: string; body: string }[] };

export type CaseStudySection = { heading: string; blocks: CaseStudyBlock[] };

export type CaseStudyCopy = {
  meta: MetaCopy;
  eyebrow: string;
  heading: DisplayHeading;
  lead: string;
  facts: { value: string; label: string }[];
  sections: CaseStudySection[];
  lessons: string[];
  credit: string;
  more: { body: string; links: { label: string; href: string }[] };
};

/** Labels shared by every case study page. */
export type CaseStudyLabels = {
  back: string;
  tryIt: string;
  readCode: string;
  lessons: string;
  more: string;
  /** Alt text of a case study's share image, after the name: "Pablo Felipe — Case study". */
  shareImageAlt: string;
};

export type CaseStudiesCopy = {
  labels: CaseStudyLabels;
  /** Every featured project has a case study, in both languages. */
  studies: Record<ProjectSlug, CaseStudyCopy>;
};
