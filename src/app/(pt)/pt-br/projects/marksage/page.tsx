import { MarksageCaseStudy } from "@/components/case-study/MarksageCaseStudy";
import { getDictionary } from "@/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("marksage", "pt", getDictionary("pt").caseStudy.meta);

export default function Page() {
  return <MarksageCaseStudy locale="pt" />;
}
