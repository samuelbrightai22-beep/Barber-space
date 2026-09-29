import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // `standalone` works on Vercel, Netlify (with @netlify/plugin-nextjs), and
  // any Node host. It also keeps the z.ai sandbox happy.
  output: "standalone",
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
