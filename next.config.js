/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/gaza-coin",
  assetPrefix: "/gaza-coin/",
};

module.exports = nextConfig;
