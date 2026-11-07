import { type Dictionary } from "@/content/types";
import { about } from "./about";
import { ai } from "./ai";
import { caseStudy } from "./caseStudy";
import { footer } from "./footer";
import { hero } from "./hero";
import { meta } from "./meta";
import { nav } from "./nav";
import { work } from "./work";

/** Brazilian Portuguese, written per the PT-BR Writing Playbook (see AGENTS.md). Facts must match `en`. */
export const pt: Dictionary = { meta, nav, footer, hero, about, ai, work, caseStudy };
