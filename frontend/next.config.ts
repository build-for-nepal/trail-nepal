import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  turbopack: {
    rules: {
      '*.svg': {
        condition: {
          all: [
            { not: 'foreign' },
            { path: /^src\/assets\/trivia\/.*\.svg$/ },
          ],
        },
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      include: /[\\/]src[\\/]assets[\\/]trivia[\\/]/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
