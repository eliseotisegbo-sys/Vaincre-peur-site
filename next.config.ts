import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.chariowcdn.com" },
      { protocol: "https", hostname: "assets.chariowcdn.com" },
    ],
  },
};

export default nextConfig;
