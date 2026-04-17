/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Отключаем Turbopack на время, чтобы билд стабильно работал
  experimental: {
    turbopack: false
  }
}

module.exports = nextConfig