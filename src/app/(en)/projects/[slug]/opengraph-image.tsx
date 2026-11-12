import { caseStudyOgImage, ogContentType, ogSize } from "@/lib/og/routes";

const image = caseStudyOgImage("en");

export const alt = image.alt;
export const size = ogSize;
export const contentType = ogContentType;
export const dynamicParams = false;
export const generateStaticParams = image.generateStaticParams;
export default image.Image;
