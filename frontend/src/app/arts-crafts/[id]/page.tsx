import CraftDetailsContent from '@/components/details/CraftDetailsContent';
import { FALLBACK_OG_IMAGE, CRAFT_TOUR_OG_IMAGES } from '@/static/seo';
import { CRAFT_TOUR_DETAILS } from '@/static/craftTours';
import { Metadata } from 'next';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(CRAFT_TOUR_DETAILS).map((id) => ({ id }));
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
  const tour = CRAFT_TOUR_DETAILS[id];

  if (!tour) return {};

  const ogImage = CRAFT_TOUR_OG_IMAGES[id] ?? FALLBACK_OG_IMAGE;
  const sharedImg = `${BASE_URL}/ogimgs/${ogImage}`;

  return {
    title: `${tour.name} | Trails Nepal`,
    description: tour.overview,
    openGraph: {
      title: tour.name,
      description: tour.overview,
      url: `${BASE_URL}/arts-crafts/${id}`,
      images: [
        {
          url: sharedImg,
          width: 1200,
          height: 630,
          alt: tour.name,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: tour.name,
      description: tour.overview,
      images: [sharedImg],
    },
  };
}

export default async function CraftTourDetailPage({ params }: Props) {
  const { id } = await params;

  return (
    <main className="">
      <CraftDetailsContent tourId={id} />
    </main>
  );
}
