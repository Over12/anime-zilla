import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.myanimelist.net",
        port: "",
        pathname: "/**",
      },
    ],
    // Configuraciones para manejar timeouts y optimización
    dangerouslyAllowSVG: true,
    minimumCacheTTL: 60,
    formats: ['image/webp', 'image/avif'],
  }
};

export default nextConfig;
