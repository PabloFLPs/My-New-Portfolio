import { type ProjectKind } from "../data/projects";
import { type DisplayHeading } from "./shared";

export type WorkCopy = {
  label: string;
  heading: DisplayHeading;
  partLabel: string;
  kinds: Record<ProjectKind, string>;
  featured: Record<string, { description: string; part: string; visualAlt: string }>;
  moreTitle: string;
  more: Record<string, { description: string }>;
};
