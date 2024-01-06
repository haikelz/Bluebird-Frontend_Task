/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.bluebirdgroup.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
