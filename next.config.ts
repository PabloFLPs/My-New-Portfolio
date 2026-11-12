import { type NextConfig } from "next";
import { securityHeaders } from "./src/lib/securityHeaders";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // The avatar is fetched by Next's image optimizer on the server; visitors' browsers never contact GitHub.
    remotePatterns: [{ protocol: "https", hostname: "avatars.githubusercontent.com" }],
  },
  async headers() {
    const environment = {
      production: process.env.NODE_ENV === "production",
      vercelPreview: process.env.VERCEL_ENV === "preview",
    };
    return [{ source: "/:path*", headers: securityHeaders(environment) }];
  },
};

export default nextConfig;
