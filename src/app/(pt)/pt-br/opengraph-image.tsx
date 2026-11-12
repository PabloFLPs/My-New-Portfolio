import { homeOgImage, ogContentType, ogSize } from "@/lib/og/routes";

const image = homeOgImage("pt");

export const alt = image.alt;
export const size = ogSize;
export const contentType = ogContentType;
export default image.Image;
