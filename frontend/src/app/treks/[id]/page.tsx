import { TREK_DETAILS } from '@/static/trekDetails';
import { redirect } from 'next/navigation';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(TREK_DETAILS).map((id) => ({ id }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export default async function TrekDetailRedirect({ params }: Props) {
  const { id } = await params;
  redirect(`/explore/${id}`);
}
