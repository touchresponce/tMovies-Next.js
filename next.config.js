/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "st.kp.yandex.net",
      "avatars.mds.yandex.net",
      "www.themoviedb.org",
      "imagetmdb.com",
    ],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
