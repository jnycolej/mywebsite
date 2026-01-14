import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    domains: ['cdn.simpleicons.org'],
  }
};

export default nextConfig;
