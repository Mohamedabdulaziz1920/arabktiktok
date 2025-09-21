/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // عطّل canvas وقت الـ build في client والـ server
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,
      };
    } else {
      config.externals = [...(config.externals || []), 'canvas'];
    }
    return config;
  },
};

module.exports = nextConfig;