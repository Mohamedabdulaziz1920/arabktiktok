/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // 👇 عطّل مكتبة canvas من أنه يبني في بيئة Vercel
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,
      }
    } else {
      config.externals = [...(config.externals || []), 'canvas']
    }

    return config
  },
}

module.exports = nextConfig