/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/gaza-coin" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/gaza-coin/" : "",
  trailingSlash: true,
};

module.exports = nextConfig;
