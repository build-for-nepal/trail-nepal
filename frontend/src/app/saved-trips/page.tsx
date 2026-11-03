import type { Metadata } from 'next';
import SavedTripsContent from '@/components/saved-trips/SavedTripsContent';
import Footer from '@/components/layout/footer/Footer';
import { buildTrailPins } from '@/lib/savedTripPins';

export const metadata: Metadata = {
  title: 'Saved trips | Trails Nepal',
  robots: { index: false },
};

export default function SavedTripsPage() {
  return (
    <main className="flex w-full flex-col overflow-x-clip bg-[#EBF0F8]">
      <div className="w-full px-4 pb-16 pt-[112px] md:px-8">
        <SavedTripsContent pins={buildTrailPins()} />
      </div>
      <Footer />
    </main>
  );
}
