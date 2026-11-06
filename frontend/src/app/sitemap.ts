import { MetadataRoute } from 'next';
import { CULTURAL_TOUR_DETAILS } from '@/static/culturalTours';
import { HIKE_DETAILS } from '@/static/hikeDetails';
import { NATURE_TOUR_DETAILS } from '@/static/natureTours';
import { TREK_DETAILS } from '@/static/trekDetails';

export const dynamic = 'force-static';

// https, unlike the pages' Open Graph fallback: the live site redirects http to
// https, and a sitemap should list the final URLs, not redirects.
const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://trails.buildfornepal.org';
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

const STATIC_PATHS = ['/', '/explore/', '/compare/'];

// The records each detail route's generateStaticParams reads, so the sitemap
// lists exactly the pages the static export builds.
const DETAIL_ROUTES = [
  { segment: 'treks', ids: Object.keys(TREK_DETAILS) },
  { segment: 'hikes', ids: Object.keys(HIKE_DETAILS) },
  { segment: 'cultural-tours', ids: Object.keys(CULTURAL_TOUR_DETAILS) },
  { segment: 'nature-wildlife', ids: Object.keys(NATURE_TOUR_DETAILS) },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const detailPaths = DETAIL_ROUTES.flatMap(({ segment, ids }) =>
    ids.map((id) => `/${segment}/${id}/`),
  );

  // Trailing slashes match `trailingSlash: true`; without them every URL would
  // point at a redirect.
  return [...STATIC_PATHS, ...detailPaths].map((path) => ({
    url: `${BASE_URL}${BASE_PATH}${path}`,
  }));
}
