import { caseStudyRoute } from "@/lib/caseStudyRoute";

const route = caseStudyRoute("en");

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
