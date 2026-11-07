import { type Dictionary } from "@/content/types";
import { footer } from "./footer";
import { hero } from "./hero";
import { meta } from "./meta";
import { nav } from "./nav";

/** English is the source of truth for facts: every number, name and claim in `pt` must match it. */
export const en: Dictionary = { meta, nav, footer, hero };
