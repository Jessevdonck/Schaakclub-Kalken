import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Only use export mode for production builds (GitHub Pages)
  output: process.env.NODE_ENV === "production" ? "export" : undefined,
  basePath: process.env.NODE_ENV === "production" ? "/Schaakclub-Kalken" : undefined,
};

export default nextConfig;
