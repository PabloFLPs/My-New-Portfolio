import { type StackGroupId } from "../data/stack";
import { type DisplayHeading } from "./shared";

export type AboutCopy = {
  label: string;
  statement: DisplayHeading;
  stackLabels: Record<StackGroupId, string>;
  caption: string;
  profileLink: string;
};
