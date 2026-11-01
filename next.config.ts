import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  cacheComponents: true,
  partialPrefetching: true,
  async rewrites() {
    const backend = process.env.BACKEND_URL ?? "http://localhost:3412";
    return [{ source: "/api/:path*", destination: `${backend}/api/:path*` }, { source: "/auth/:path*", destination: `${backend}/auth/:path*` }];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/team",
        destination: "/teams",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
