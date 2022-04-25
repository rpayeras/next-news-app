/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.cnn.com',
      'sportshub.cvsistatic.com'
    ]
  }
}

module.exports = nextConfig
