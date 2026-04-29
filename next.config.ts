import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  experimental: {
    optimizePackageImports: ["framer-motion"],
  },

  images: {
    unoptimized: true,
  },

  compress: true,
};

export default nextConfig;