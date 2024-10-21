/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // default value is true
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "icon-library.com",
      },
      {
        protocol: "http",
        hostname: "image.tmdb.org",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "static-cse.canva.com",
      },
      {
        protocol: "https",
        hostname: "content-management-files.canva.com",
      },
      {
        protocol: "https",
        hostname: "moonsterleather.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
    ],
  },
};

export default nextConfig;
