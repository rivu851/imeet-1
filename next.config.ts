import type { NextConfig } from "next";

const VERCEL_BACKEND_ORIGIN = "https://imeet-be-n19i.onrender.com";

function isPrivateIpv4(host: string) {
  const octets = host.split(".").map(Number);
  if (octets.length !== 4 || octets.some((part) => !Number.isInteger(part) || part < 0 || part > 255)) return false;
  const [a, b] = octets;
  return a === 0 || a === 10 || a === 127 || (a === 169 && b === 254) ||
    (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168) ||
    (a === 100 && b >= 64 && b <= 127) || a >= 224;
}

function backendOrigin() {
  const configured = process.env.BACKEND_URL?.trim();
  const value = configured || (process.env.VERCEL === "1" || process.env.NODE_ENV === "production"
    ? VERCEL_BACKEND_ORIGIN
    : "http://localhost:3412");
  let parsed: URL;
  try {
    parsed = new URL(value);
  } catch {
    throw new Error("BACKEND_URL must be an absolute HTTP(S) origin, such as https://api.example.com.");
  }
  const hostname = parsed.hostname.replace(/^\[|\]$/g, "").toLowerCase();
  if (!(["http:", "https:"].includes(parsed.protocol)) || parsed.username || parsed.password ||
      (parsed.pathname !== "/" && parsed.pathname !== "") || parsed.search || parsed.hash) {
    throw new Error("BACKEND_URL must contain only the absolute HTTP(S) backend origin, without credentials, path, query, or fragment.");
  }
  if (process.env.NODE_ENV === "production" &&
      (hostname === "localhost" || hostname.endsWith(".localhost") || hostname.endsWith(".local") || isPrivateIpv4(hostname) || hostname === "::1")) {
    throw new Error("BACKEND_URL points to a local or private host. Production deployments need a publicly reachable Express backend origin.");
  }
  if (process.env.VERCEL === "1" && parsed.protocol !== "https:") {
    throw new Error("BACKEND_URL must use HTTPS on Vercel so authentication cookies and participant data remain protected.");
  }
  return parsed.origin;
}

const nextConfig: NextConfig = {
  agentRules: false,
  cacheComponents: true,
  partialPrefetching: true,
  async rewrites() {
    const backend = backendOrigin();
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
