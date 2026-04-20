import { Gallery } from "@/components/details/Gallery";
import GearCheckList from "@/components/details/GearCheckList";
import TrekTimeline from "@/components/details/TrekTimeline";
import TreksExpect from "@/components/treks/TreksExpect";
import TreksHeader from "@/components/treks/TreksHeader";
import TreksLayout from "@/components/treks/TreksLayout";
import TreksSeason from "@/components/treks/TreksSeason";

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
      <TreksLayout />
      <TrekTimeline trekId={id} />
      <Gallery trekId={id} />
      <TreksSeason />
      <TreksExpect />
      <GearCheckList trekId={id} />
    </main>
  );
}
