import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
    {
      protocol: 'https',
      hostname: "media.rawg.io",
      
    },
    {
      protocol: 'https',
      hostname: "placehold.co",
      
    }
  
  ],
  },
};

export default nextConfig;
