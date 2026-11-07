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

/** Brazilian Portuguese, written per the PT-BR Writing Playbook (see AGENTS.md). Facts must match `en`. */
export const pt: Dictionary = {
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
