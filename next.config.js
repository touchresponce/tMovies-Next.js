/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "st.kp.yandex.net",
      "avatars.mds.yandex.net",
      "www.themoviedb.org",
      "imagetmdb.com",
    ],
    // unoptimized: true,
    formats: ["image/webp"],
  },
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
