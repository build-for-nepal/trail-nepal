import PlanMyTripHeader from './PlanMyTripHeader';
import PlanMyTripLayout from './PlanMyTripLayout';

const PlanMyTripContent = () => {
  return (
    <main className="w-full flex flex-col bg-gray-100">
      <PlanMyTripHeader />
      <PlanMyTripLayout />
    </main>
  );
};

export default PlanMyTripContent;
