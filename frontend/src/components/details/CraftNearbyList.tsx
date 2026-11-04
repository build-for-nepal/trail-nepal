import type { CraftNearby } from '@/types/craft';

/** Compact numbered list of nearby places, shown under the itinerary. */
const CraftNearbyList = ({ nearby }: { nearby: CraftNearby }) => (
  <div className="flex flex-col gap-1 rounded-2xl bg-[#EEF3FB] px-5 pt-4 pb-2">
    <h4
      className="text-sm font-semibold tracking-tight text-black/80 sm:text-base"
      style={{ fontFamily: 'var(--font-poppins), serif' }}
    >
      {nearby.title}
    </h4>

    <ol className="flex flex-col divide-y divide-black/5">
      {nearby.places.map((place) => (
        <li key={place.order} className="flex gap-3 py-3">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[10px] font-bold text-[#376BB6] shadow-[0_1px_2px_rgba(15,23,42,0.08)]">
            {String(place.order).padStart(2, '0')}
          </span>
          <div className="flex flex-col gap-0.5">
            <p className="text-sm font-semibold text-black/85">{place.title}</p>
            {place.description.map((paragraph, index) => (
              <p
                key={index}
                className="cursor-text text-xs leading-relaxed text-black/70 select-text"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </li>
      ))}
    </ol>
  </div>
);

export default CraftNearbyList;
