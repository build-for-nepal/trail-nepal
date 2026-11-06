import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://trails.buildfornepal.org';
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${BASE_URL}${BASE_PATH}/sitemap.xml`,
  };
}
