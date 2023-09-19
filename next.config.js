/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "img.freepik.com",
      "images.pexels.com",
    ],
  },
};

module.exports = nextConfig;
