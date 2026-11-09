import type { NextConfig } from "next";
import { legacyRedirects } from "./src/data/legacy-redirects";

const nextConfig: NextConfig = {
  async redirects() {
    return legacyRedirects();
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi/**",
      },
    ],
  },
};

export default nextConfig;
