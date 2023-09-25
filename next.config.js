/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ingenieria-web-spotify-media-lw.s3.amazonaws.com'],
    unoptimized: true,
  },
  output: 'export',
};

module.exports = nextConfig;
