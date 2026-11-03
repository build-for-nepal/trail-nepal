import { Suspense } from 'react';
import { Metadata } from 'next';

import { AdminEditPage } from '@/components/admin/AdminEditPage';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

// The site is a static export, so there is no per-experience route to
// pre-render. The experience is picked with `?id=` and loaded in the browser.
export default function AdminEditRoute() {
  return (
    <Suspense>
      <AdminEditPage />
    </Suspense>
  );
}
