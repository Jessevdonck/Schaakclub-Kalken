import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // 1. Output: 'export' blijft correct voor statische builds
  output: isProd ? "export" : undefined,

  // 2. FIX: basePath instellen op een lege string.
  // Dit zorgt ervoor dat alle paden relatief zijn aan de root (/) van je custom domain.
  basePath: isProd ? "" : undefined,

  // Optioneel, maar goed om toe te voegen voor custom domains
  assetPrefix: isProd ? "" : undefined,
};

export default nextConfig;
