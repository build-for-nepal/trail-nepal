import TrekDetailsContent from '@/components/details/TrekDetailsContent';
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const trek = TREK_DETAILS[id];

  if (!trek) return {};

  const sharedImg =
    trek?.gallery?.find((img) => img.type === 'hero')?.url ||
    trek?.gallery?.[0]?.url ||
    'https://trails.buildfornepal.org/og-image.png';

  return {
    title: `${trek.name} | Trail Nepal`,
    description: trek?.overview,
    openGraph: {
      title: trek.name,
      description: trek?.overview,
      url: `https://trails.buildfornepal.org/treks/${id}`,
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
