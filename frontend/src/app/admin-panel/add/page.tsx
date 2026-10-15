import { Metadata } from 'next';

import { AdminCreatePage } from '@/components/admin/AdminCreatePage';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function AdminAddRoute() {
  return <AdminCreatePage />;
}
