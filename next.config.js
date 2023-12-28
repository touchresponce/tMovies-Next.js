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
    ],
    // unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  reactStrictMode: false,
  staticPageGenerationTimeout: 180,
};

module.exports = nextConfig;
