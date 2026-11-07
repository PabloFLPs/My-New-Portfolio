import { type ElementType } from "react";
import { type DisplayHeading } from "@/content/types/shared";

type Props = {
  heading: DisplayHeading;
  as?: ElementType;
  className?: string;
  /** Colour of the italic part; display sizes use the accent, smaller ones the softer tone. */
  accentClassName?: string;
};

/** Serif heading with an italic accent part, the design's signature: "Selected *work*". */
export function Display({ heading, as: Tag = "h2", className = "", accentClassName = "text-accent" }: Props) {
  return (
    <Tag className={`font-serif font-normal ${className}`}>
      {heading.text} <span className={`italic ${accentClassName}`}>{heading.accent}</span>
    </Tag>
  );
}
