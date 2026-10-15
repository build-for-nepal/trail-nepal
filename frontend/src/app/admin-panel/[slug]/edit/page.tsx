import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { AdminShell } from '@/components/admin/AdminShell';
import { ExperienceForm } from '@/components/admin/ExperienceForm';
import {
  DEMO_EXPERIENCES,
  TYPE_CONFIG,
  typeIdFromValue,
} from '@/components/admin/admin-helper';

export const dynamicParams = false;

export function generateStaticParams() {
  return DEMO_EXPERIENCES.map((item) => ({ slug: item.slug }));
}

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function AdminEditRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = DEMO_EXPERIENCES.find((entry) => entry.slug === slug);
  if (!item) notFound();

  const config = TYPE_CONFIG[typeIdFromValue(item.type)];

  return (
    <AdminShell>
      <ExperienceForm
        config={config}
        initialValues={item}
        backHref="/admin-panel/"
      />
    </AdminShell>
  );
}
