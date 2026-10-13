import TrekCard from "@/components/explore/treks/TrekCard";
import { TREKS } from "@/static/trek";
import { ExploreTrekCardProps } from "@/types/trek";

const PlanMyTripLayout = () => {
  return (
    <div className="page-wrapper mx-auto max-w-[1920px] px-6 py-8 md:px-8 lg:px-20">
      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="h-fit rounded-lg bg-white p-6 shadow-sm">
          <h2 className="font-poppins text-lg font-semibold text-gray-900">Trip Preferences</h2>
          <p className="mt-2 font-poppins text-sm text-gray-600">Add your preferences to personalize recommendations.</p>
          <div className="mt-6 space-y-4">
            <div className="rounded-md border border-dashed border-gray-300 p-4 text-center">
              <p className="font-poppins text-sm text-gray-500">Planning filters coming soon</p>
            </div>
          </div>
        </aside>
        <section>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-poppins text-lg font-semibold text-gray-900">Recommended Treks</h2>
            <span className="font-poppins text-sm text-gray-600">{TREKS.length} treks available</span>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {TREKS.map((trek) => {
              const cardProps: ExploreTrekCardProps = {
                ...trek,
                href: trek.type === "hike" ? `/hikes/${trek.id}/` : trek.type === "cultural" ? `/cultural-tours/${trek.id}/` : `/treks/${trek.id}/`,
                isHike: trek.type === "hike",
                isCultural: trek.type === "cultural",
              };
              return <TrekCard key={trek.id} {...cardProps} />;
            })}
          </div>
        </section>
      </div>
    </div>
  );
};
export default PlanMyTripLayout;
