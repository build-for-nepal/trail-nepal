import { TreksHeader } from "@/components/treks/TreksHeader";
import TreksLayout from "@/components/treks/TreksLayout";


export default function TrekDetailPage() {
  return (
    <main className="w-full flex flex-col bg-[var(--color-surface-page)]">
      <TreksHeader />
      <TreksLayout />
    </main>
  );
}
