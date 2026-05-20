import TrekDetailsContent from '@/components/details/TrekDetailsContent';
import { FALLBACK_OG_IMAGE, OG_IMAGES } from '@/static/seo';
import { TrekIdEnum } from '@/static/trek';
import { TREK_DETAILS } from '@/static/trekDetails';
import { Metadata } from 'next';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(TREK_DETAILS).map((id) => ({ id }));
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
  const trek = TREK_DETAILS[id];

  if (!trek) return {};

  const sharedImg = OG_IMAGES[id as TrekIdEnum]
    ? `${BASE_URL}/ogimgs/${OG_IMAGES[id as TrekIdEnum]}`
    : `${BASE_URL}/ogimgs/${FALLBACK_OG_IMAGE}`;

  return {
    title: `${trek.name} | Trail Nepal`,
    description: trek?.overview,
    openGraph: {
      title: trek.name,
      description: trek?.overview,
      url: `${BASE_URL}/explore/${id}`,
      images: [
        {
          url: sharedImg,
          width: 1200,
          height: 630,
          alt: trek.name,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: trek.name,
      description: trek?.overview,
      images: [sharedImg],
    },
  };
}

export default async function TrekDetailPage({ params }: Props) {
  const { id } = await params;

  return (
    <main className="">
      <TrekDetailsContent trekId={id} />
    </main>
  );
}
