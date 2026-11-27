import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  devIndicators: false,
  // Allows previewing the dev server from another device on the local network.
  allowedDevOrigins: ["192.168.1.70"],
  async redirects() {
    return [
      {
        source: "/training",
        destination: "/services/procurement-training",
        permanent: true,
      },
      {
        source: "/resources",
        destination: "/knowledge-centre/resources",
        permanent: true,
      },
      {
        source: "/youtube",
        destination: "/knowledge-centre",
        permanent: true,
      },
      {
        source: "/updates",
        destination: "/knowledge-centre",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
