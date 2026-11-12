import { type JourneyKind } from "../data/journey";
import { type DisplayHeading } from "./shared";

export type JourneyCopy = {
  label: string;
  heading: DisplayHeading;
  intro: string;
  now: string;
  kinds: Record<JourneyKind, string>;
  items: Record<string, { role: string; institution: string }>;
};
