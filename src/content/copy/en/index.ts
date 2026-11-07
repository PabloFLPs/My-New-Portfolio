import { type Dictionary } from "@/content/types";
import { about } from "./about";
import { ai } from "./ai";
import { caseStudies } from "./caseStudies";
import { contact } from "./contact";
import { footer } from "./footer";
import { hero } from "./hero";
import { journey } from "./journey";
import { meta } from "./meta";
import { nav } from "./nav";
import { work } from "./work";
import { writing } from "./writing";

/** English is the source of truth for facts: every number, name and claim in `pt` must match it. */
export const en: Dictionary = {
  meta,
  nav,
  footer,
  hero,
  about,
  ai,
  work,
  journey,
  writing,
  contact,
  caseStudies,
};
