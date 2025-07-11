/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "st.kp.yandex.net",
      },
      {
        protocol: "https",
        hostname: "imagetmdb.com",
      },
      {
        protocol: "https",
        hostname: "www.themoviedb.org",
      },
      {
        protocol: "https",
        hostname: "avatars.mds.yandex.net",
      },
      {
        protocol: "https",
        hostname: "image.openmoviedb.com",
      },
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
    ],
    formats: ["image/avif", "image/webp"],
    unoptimized: process.env.NODE_ENV === "production" ? true : false,
  },
  reactStrictMode: false,
  staticPageGenerationTimeout: 180,
  experimental: {
    optimizePackageImports: [
      "@splidejs/react-splide",
      "js-cookie",
      "react-tabs",
      "axios",
      "sonner",
      "zustand",
    ],
  },
};

module.exports = nextConfig;
