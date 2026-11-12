import { type CaseStudiesCopy } from "@/content/types/caseStudy";
import { loreforge } from "./loreforge";
import { marksage } from "./marksage";
import { routeFlyoverStudio } from "./routeFlyoverStudio";
import { zollama } from "./zollama";

export const caseStudies: CaseStudiesCopy = {
  labels: {
    back: "Back to selected work",
    tryIt: "Try it live",
    readCode: "Read the code",
    lessons: "What I took from it",
    more: "Want the full detail?",
    shareImageAlt: "Case study",
  },
  studies: { marksage, zollama, loreforge, "route-flyover-studio": routeFlyoverStudio },
};
