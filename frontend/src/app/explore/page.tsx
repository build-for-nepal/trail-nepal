import { ExploreHeader } from '@/components/explore/header/ExploreHeader';
import ExploreLayout from '@/components/explore/treks/ExploreLayout';
import Footer from '@/components/layout/footer/Footer';

export default function ExplorePage() {
  return (
    <main className="w-full flex flex-col bg-gray-100">
      <ExploreHeader />
      <ExploreLayout />
      <Footer />
    </main>
  );
}
