import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // NOTE: do NOT set `output: "standalone"` here.
  // - z.ai sandbox uses `next dev`, which ignores `output`.
  // - Netlify's `@netlify/plugin-nextjs` plugin docs explicitly warn that
  //   `output: "standalone"` can cause issues with their runtime.
  // - Vercel doesn't need it either.
  // If you ever want a self-contained Node build (Docker/VM), run
  // `bun run build:standalone` after temporarily setting it here.
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    // Local /images/* assets are served from /public and don't need remotePatterns.
    // If you later load images from external domains, add them here:
    // remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  // Allow the z.ai sandbox preview host to hit the Next.js dev server without
  // triggering cross-origin warnings. This is dev-only and has zero effect on
  // production builds (Vercel / Netlify).
  allowedDevOrigins: ["*.space-z.ai"],
};

export default nextConfig;
