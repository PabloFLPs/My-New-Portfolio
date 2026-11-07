import { type DisplayHeading, type MetaCopy } from "./shared";

export type CaseStudyCopy = {
  meta: MetaCopy;
  back: string;
  eyebrow: string;
  heading: DisplayHeading;
  lead: string;
  tryIt: string;
  readCode: string;
  imageAlt: string;
  facts: { value: string; label: string }[];
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  results: {
    heading: string;
    intro: string;
    columns: { engine: string; accuracy: string; shown: string; precision: string };
    rows: { engine: string; accuracy: string; shown: string; precision: string; shipped?: boolean }[];
    note: string;
  };
  notShipped: { heading: string; items: { name: string; verdict: string }[] };
  lessons: { heading: string; items: string[] };
  credit: string;
  more: { heading: string; body: string; modelsLink: string; storyLink: string };
};
