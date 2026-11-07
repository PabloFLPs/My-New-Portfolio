import { type Dictionary } from "@/content/types";
import { footer } from "./footer";
import { meta } from "./meta";
import { nav } from "./nav";

/** Brazilian Portuguese, written per the PT-BR Writing Playbook (see AGENTS.md). Facts must match `en`. */
export const pt: Dictionary = { meta, nav, footer };
