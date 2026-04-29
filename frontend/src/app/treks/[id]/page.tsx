import TrekDetailsContent from '@/components/details/TrekDetailsContent';
import { TREK_DETAILS } from '@/static/trekDetails';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(TREK_DETAILS).map((id) => ({ id }));
}

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function TrekDetailPage({ params }: Props) {
  const { id } = await params;

  return (
    <main className="">
      <TrekDetailsContent trekId={id} />
    </main>
  );
}
