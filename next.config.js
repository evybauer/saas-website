/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig 