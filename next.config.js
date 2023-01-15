const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  swSrc: "service-worker.js",
  fallbacks: {
    document: "/_offline",
  },
});

const nextConfig = withPWA({
  generateSw: false,
  reactStrictMode: true,
});

module.exports = nextConfig;
