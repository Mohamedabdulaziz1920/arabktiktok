const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  webpack: (config, { isServer }) => {
    // عطّل مكتبة canvas في الـ client و server
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