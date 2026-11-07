import { type ProjectKind } from "../data/projects";
import { type DisplayHeading } from "./shared";

export type WorkCopy = {
  label: string;
  heading: DisplayHeading;
  partLabel: string;
  kinds: Record<ProjectKind, string>;
  /** Per featured project: a one-line hook, what it is, my part in it, and one fact worth remembering. */
  featured: Record<string, { tagline: string; description: string; part: string; fact: string }>;
  moreTitle: string;
  /** Shown next to the collapsed "earlier projects" toggle. */
  moreHint: string;
  more: Record<string, { description: string }>;
};
