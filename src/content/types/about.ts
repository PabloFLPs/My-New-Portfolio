import { type DisplayHeading } from "./shared";

export type AboutCopy = {
  label: string;
  statement: DisplayHeading;
  stackLabels: { frontEnd: string; backEnd: string };
  caption: string;
  profileLink: string;
};
