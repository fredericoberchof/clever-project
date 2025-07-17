import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
};

module.exports = {
  images: {
    domains: ['images.pexels.com'],
  },
};

export default nextConfig;
