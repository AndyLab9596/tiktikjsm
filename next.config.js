/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['image-cdn.hypb.st', 'lh3.googleusercontent.com']
  }
}

module.exports = nextConfig
