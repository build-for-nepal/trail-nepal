import {
  CalendarDays,
  CircleDollarSign,
  Clock,
  MapPin,
  Mountain,
  TrendingUp,
} from 'lucide-react';

import { TREK_DETAILS } from '@/static/trekDetails';
import { cn } from '@/lib/utils';
import { Props } from '@/types/trek';

/** Pulls the leading amount from a timeline price string, e.g.
 *  "NPR 2,800 (Accommodation: 800, Meals: 2,000)" -> 2800. */
const parseDayAmount = (price?: string): number => {
  if (!price) return 0;
  const match = price.match(/[\d,]+/);
  if (!match) return 0;
  return Number(match[0].replace(/,/g, '')) || 0;
};

const TreksHeader = ({ trekId }: Props) => {
  const data = TREK_DETAILS[trekId];
  if (!data) return null;

  const bgImage =
    data.gallery?.find((img) => img.type === 'hero')?.url ||
    data.gallery?.[0]?.url ||
    '';

  // Total the trek's estimated cost from the per-day timeline prices.
  // Only shown when at least one day has a price; otherwise a dash.
  const totalCost = data.timeline.reduce(
    (sum, day) => sum + parseDayAmount(day.price),
    0,
  );
  const estCost =
    totalCost > 0 ? `NPR ${totalCost.toLocaleString('en-US')}` : '-';

  const stats = [
    { icon: Clock, label: 'Duration', value: data.meta.duration },
    { icon: TrendingUp, label: 'Difficulty', value: data.meta.difficulty },
    { icon: Mountain, label: 'Elevation', value: data.meta.maxElevation },
    {
      icon: CalendarDays,
      label: 'Best Season',
      value: data.meta.bestSeasons.split(',')[0].trim(),
    },
    { icon: MapPin, label: 'Starting Point', value: data.meta.startingPoint },
    { icon: CircleDollarSign, label: 'Est. Cost', value: estCost },
  ];

  return (
    <header
      role="banner"
      className="page-wrapper relative w-full pb-8 overflow-hidden h-[100svh] min-h-[520px] bg-cover bg-center"
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 md:from-black/80 md:via-black/30 md:to-transparent"
      />

      <div className="absolute top-6 right-4 sm:right-8 z-20">
        <button className="flex items-center gap-2 bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-[8px] sm:rounded-full shadow-lg hover:bg-gray-50 transition-colors">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-[#8dc63f]"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 2C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2H6ZM13 3.5L18.5 9H14C13.4477 9 13 8.55228 13 8V3.5Z" />
          </svg>
        </button>
      </div>

      <div className="page-wrapper relative z-10 flex flex-col justify-end h-full pb-8 md:pb-8 px-4 sm:px-8 md:px-[--spacing-page-x] items-center md:items-start text-center md:text-left">
        <div className="flex flex-col gap-3 md:gap-2 max-w-[800px] items-center md:items-start">
          <h1 className="font-fraunces font-bold text-white text-[42px] leading-[1.1] sm:text-5xl md:text-6xl tracking-tight drop-shadow-lg max-w-[300px] md:max-w-none">
            {data.name.split(' (')[0]}
          </h1>

          {data.region && (
            <p className="text-white/95 text-xl sm:text-2xl font-bold mb-2 md:mb-2 drop-shadow-md">
              {data.region}
            </p>
          )}

          <p className="line-clamp-2 text-white/80 text-sm md:text-base leading-relaxed max-w-[320px] sm:max-w-[85%] drop-shadow-md">
            {data.summary}{' '}
          </p>
        </div>

        {/* Quick stats bar */}
        <div className="mt-6 w-full rounded-2xl bg-white/95 px-6 py-4 shadow-xl backdrop-blur-sm sm:px-6 md:mt-8">
          <div className="grid grid-cols-2 gap-x-4 gap-y-5 text-left sm:grid-cols-3 xl:grid-cols-6 xl:items-center xl:gap-0">
            {stats.map(({ icon: Icon, label, value }, index) => (
              <div
                key={label}
                className={cn(
                  'flex items-center gap-3 xl:flex-1 xl:px-4',
                  index > 0 && 'xl:border-l xl:border-gray-200',
                )}
              >
                <Icon
                  className="size-6 shrink-0 text-gray-700"
                  strokeWidth={1.75}
                />
                <div className="flex min-w-0 flex-col">
                  <span className="text-sm text-gray-500">{label}</span>
                  <span className="truncate text-[18px] font-bold text-gray-700">
                    {value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TreksHeader;
