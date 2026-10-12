import PlanMyTripContent from '@/components/plan-my-trip';
import Footer from '@/components/layout/footer/Footer';

export default function PlanMyTripPage() {
  return (
    <main className="w-full flex flex-col bg-gray-100">
      <PlanMyTripContent />
      <Footer />
    </main>
  );
}
