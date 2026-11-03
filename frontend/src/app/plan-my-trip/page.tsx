import PlanMyTripContent from '@/components/plan-my-trip';
import Footer from '@/components/layout/footer/Footer';

export default function PlanMyTripPage() {
  return (
    <main className="flex w-full flex-col overflow-x-clip bg-[#EBF0F8]">
      <PlanMyTripContent />
      <Footer />
    </main>
  );
}
