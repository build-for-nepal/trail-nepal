import HikeDetailsContent from '@/components/details/HikeDetailsContent';
import { FALLBACK_OG_IMAGE, HIKE_OG_IMAGES } from '@/static/seo';
import { HIKE_DETAILS } from '@/static/hikeDetails';
import { Metadata } from 'next';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(HIKE_DETAILS).map((id) => ({ id }));
}

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || 'http://trails.buildfornepal.org';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const hike = HIKE_DETAILS[id];

  if (!hike) return {};

  const ogImage = HIKE_OG_IMAGES[id] ?? FALLBACK_OG_IMAGE;
  const sharedImg = `${BASE_URL}/ogimgs/${ogImage}`;

  return {
    title: `${hike.name} | Trails Nepal`,
    description: hike.overview,
    openGraph: {
      title: hike.name,
      description: hike.overview,
      url: `${BASE_URL}/hikes/${id}`,
      images: [
        {
          url: sharedImg,
          width: 1200,
          height: 630,
          alt: hike.name,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: hike.name,
      description: hike.overview,
      images: [sharedImg],
    },
  };
}

export default async function HikeDetailPage({ params }: Props) {
  const { id } = await params;

  return (
    <main className="">
      <HikeDetailsContent hikeId={id} />
    </main>
  );
}
