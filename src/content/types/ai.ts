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
  /** A concrete example, ending in a link to the case study. */
  example: { text: string; link: string };
  articleLink: string;
};
