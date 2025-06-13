import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  basePath: isProduction ? '/aeyez-report' : '',
  assetPrefix: isProduction ? '/aeyez-report/' : '',
  output: 'export',  // Enable static exports for GitHub Pages
};

export default nextConfig;
