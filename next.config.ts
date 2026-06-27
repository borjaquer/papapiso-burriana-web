import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static generation and optimize for production
  experimental: {
    optimizePackageImports: ["@/components", "@/lib"],
  },
  
  // Configure image optimization for Render
  images: {
    unoptimized: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
