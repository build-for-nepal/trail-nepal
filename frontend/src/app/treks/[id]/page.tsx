import GearCheckList from "@/components/details/GearCheckList";
import TrekTimeline from "@/components/details/TrekTimeline";
import TreksHeader from "@/components/treks/TreksHeader";
import TreksLayout from "@/components/treks/TreksLayout";

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
      <GearCheckList trekId={id} />
    </main>
  );
}
