import { Metadata } from 'next';

import { AdminPanelPage } from '@/components/admin/AdminPanelPage';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function AdminPanelRoute() {
  return <AdminPanelPage />;
}
