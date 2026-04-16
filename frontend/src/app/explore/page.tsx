import { ExploreHeader } from "@/components/explore/header/ExploreHeader";
import ExploreLayout from "@/components/explore/treks/ExploreLayout";
import Footer from "@/components/explore/Footer";

export default function ExplorePage() {
  return (
    <main className="w-full flex flex-col bg-[var(--color-surface-page)]">
      <ExploreHeader />
      <ExploreLayout />
      <Footer />
    </main>
  );
}
