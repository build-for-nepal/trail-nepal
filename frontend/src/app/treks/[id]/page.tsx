import { Gallery } from "@/components/details/Gallery";
import GearCheckList from "@/components/details/GearCheckList";
import TrekTimeline from "@/components/details/TrekTimeline";
import TreksExpect from "@/components/details/TreksExpect";
import TreksHeader from "@/components/details/TreksHeader";
import TreksSeason from "@/components/treks/TreksSeason";
import TreksHero from "@/components/details/TreksHero";
import Footer from "@/components/layout/footer/Footer";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function TrekDetailPage({ params }: Props) {
  const { id } = await params;

  return (
    <main className="w-full flex flex-col bg-(--color-surface-page)">
      <TreksHeader trekId={id} />
      <TreksHero trekId={id} />
      <TrekTimeline trekId={id} />
      <TreksSeason trekId={id} />
      <TreksExpect trekId={id} />
      <Gallery trekId={id} />
      <GearCheckList trekId={id} />
      <Footer />
    </main>
  );
}
