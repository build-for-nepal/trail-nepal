import type { CraftNearby } from '@/types/craft';

/** Nearby places shown under the itinerary. A place that matches a map pin is a
 *  button that frames the map on it, like the itinerary and the pins. */
const CraftNearbyList = ({
  nearby,
  onSelect,
  focusableNames,
}: {
  nearby: CraftNearby;
  /** Frame the map on the site with this name. */
  onSelect?: (name: string) => void;
  /** Place titles that have a map pin and so can be focused. */
  focusableNames?: Set<string>;
}) => (
  <div className="flex flex-col gap-1 rounded-2xl bg-[#EEF3FB] px-5 pt-4 pb-2">
    <h4
      className="text-sm font-semibold tracking-tight text-black/80 sm:text-base"
      style={{ fontFamily: 'var(--font-poppins), serif' }}
    >
      {nearby.title}
    </h4>

    <ul className="flex flex-col divide-y divide-black/5">
      {nearby.places.map((place) => {
        const canFocus = !!onSelect && !!focusableNames?.has(place.title);

        return (
          <li key={place.order} className="flex flex-col gap-0.5 py-3">
            {canFocus ? (
              <button
                type="button"
                onClick={() => onSelect?.(place.title)}
                className="w-fit cursor-pointer text-left text-sm font-semibold text-black/85 hover:underline"
              >
                {place.title}
              </button>
            ) : (
              <p className="text-sm font-semibold text-black/85">
                {place.title}
              </p>
            )}

            {place.description.map((paragraph, index) => (
              <p key={index} className="text-xs leading-relaxed text-black/70">
                {paragraph}
              </p>
            ))}
          </li>
        );
      })}
    </ul>
  </div>
);

export default CraftNearbyList;
