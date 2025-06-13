import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  basePath: process.env.NODE_ENV === 'production' ? '/aeyez-report' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/aeyez-report/' : '',
};

export default nextConfig;
