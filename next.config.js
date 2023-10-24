/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    SERVER_ENDPOINT: process.env.SERVER_ENDPOINT,
  },
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "img.freepik.com",
      "images.pexels.com",
      "authjs.dev",
      "next-auth.js.org",
      "robohash.org",
      "images.unsplash.com",
      "avatars.dicebear.com",
      "avatars2.githubusercontent.com",
      "lavinephotography.com.au",
      "bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com",
      "tailus.io",
      "fakestoreapi.com",
      "whitmorerarebooks.com",
      "i.postimg.cc",
      "upload.wikimedia.org",
      "leadershipmemphis.org",
      "images.unsplash.com",
      "assets.bukalapak.com",
      "i.ibb.co",
    ],
  },
};

module.exports = nextConfig;
