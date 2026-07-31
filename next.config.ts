import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  experimental: {
    optimizeCss: true,
  },
  async redirects() {
    return [
      { source: "/work/ux-content", destination: "/work", permanent: true },
      { source: "/work/other", destination: "/work", permanent: true },
      { source: "/work/ai", destination: "/ai", permanent: true },
    ];
  },
  async headers() {
    // En dev los chunks de Turbopack reusan el mismo nombre de archivo, así que
    // cachearlos como "immutable" deja al navegador ejecutando código viejo.
    if (process.env.NODE_ENV !== "production") return [];

    return [
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
