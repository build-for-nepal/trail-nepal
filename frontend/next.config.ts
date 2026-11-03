import type { NextConfig } from 'next';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {
  trailingSlash: true,
  basePath,
  turbopack: {
    rules: {
      '*.svg': {
        condition: {
          all: [{ not: 'foreign' }, { path: /^src\/assets\/trivia\/.*\.svg$/ }],
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
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
};

export default nextConfig;
