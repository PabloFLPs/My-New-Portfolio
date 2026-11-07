/**
 * Copy types: the shape of every piece of user-facing text. Each locale must satisfy `Dictionary`,
 * so a missing or extra string in one language is a type error. Facts that don't change with the
 * language (URLs, years, stacks) live in `content/data/` instead.
 */
import { type AboutCopy } from "./about";
import { type FooterCopy } from "./footer";
import { type HeroCopy } from "./hero";
import { type NavCopy } from "./nav";
import { type MetaCopy } from "./shared";
import { type WorkCopy } from "./work";

export type { DisplayHeading, MetaCopy } from "./shared";

export type Dictionary = {
  meta: MetaCopy;
  nav: NavCopy;
  footer: FooterCopy;
  hero: HeroCopy;
  about: AboutCopy;
  work: WorkCopy;
};
