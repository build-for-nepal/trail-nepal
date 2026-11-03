import { Suspense } from 'react';
import type { Metadata } from 'next';
import SharedTripView from '@/components/plan-my-trip/SharedTripView';
import Footer from '@/components/layout/footer/Footer';

export const metadata: Metadata = {
  title: 'Shared trip | Trails Nepal',
  robots: { index: false },
};

export default function SharedTripPage() {
  return (
    <main className="flex w-full flex-col overflow-x-clip bg-[#EBF0F8]">
      <div className="min-h-screen w-full px-4 pb-20 pt-[112px] md:px-8">
        {/* useSearchParams needs a Suspense boundary in a static export. */}
        <Suspense fallback={null}>
          <SharedTripView />
        </Suspense>
      </div>
      <Footer />
    </main>
  );
}
