import { type DisplayHeading } from "./shared";

export type AiCopy = {
  label: string;
  heading: DisplayHeading;
  intro: string;
  roles: { kicker: string; title: string; tools: string; body: string }[];
  loopTitle: string;
  loop: { step: string; body: string }[];
  ownershipTitle: string;
  ownership: string[];
  /** A worked example of the ownership list, ending in a link to its case study. */
  example: { label: string; title: string; body: string[]; outcomes: string[]; link: string };
  articleLink: string;
};
