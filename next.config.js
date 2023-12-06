/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "st.kp.yandex.net",
      "avatars.mds.yandex.net",
      "www.themoviedb.org",
      "imagetmdb.com",
    ],
    unoptimized: true,
  },
  reactStrictMode: false,
  staticPageGenerationTimeout: 180,
};

module.exports = nextConfig;
