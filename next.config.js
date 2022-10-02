/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  webpack: config => {
    config.resolve.modules.push(path.resolve('./'))
    config.module.rules.push({ test: /\.svg$/, use: ['@svgr/webpack'] })

    return config
  },
}

module.exports = nextConfig
