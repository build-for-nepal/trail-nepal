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
 * "NPR 2,800 (Accommodation: 800, Meals: 2,000)" -> 2800. */
const parseDayAmount = (price?: string): number => {
  if (!price) return 0;

  const match = price.match(/[\d,]+/);
  if (!match) return 0;

  return Number(match[0].replace(/,/g, '')) || 0;
};

/** Converts full month names to 3-letter abbreviations. */
const formatBestSeason = (seasons?: string): string => {
  if (!seasons) return '';

  const months: Record<string, string> = {
    January: 'Jan',
    February: 'Feb',
    March: 'Mar',
    April: 'Apr',
    May: 'May',
    June: 'Jun',
    July: 'Jul',
    August: 'Aug',
    September: 'Sep',
    October: 'Oct',
    November: 'Nov',
    December: 'Dec',
  };

  return seasons
    .split(',')
    .map((season) =>
      season
        .trim()
        .replace(
          /January|February|March|April|May|June|July|August|September|October|November|December/g,
          (month) => months[month],
        ),
    )
    .join(', ');
};

const TreksHeader = ({ trekId }: Props) => {
  const data = TREK_DETAILS[trekId];
  if (!data) return null;

  const bgImage =
    data.gallery?.find((img) => img.type === 'hero')?.url ||
    data.gallery?.[0]?.url ||
    '';

  // Total the trek's estimated cost from the per-day timeline prices.
  const totalCost = data.timeline.reduce(
    (sum, day) => sum + parseDayAmount(day.price),
    0,
  );

  const estCost =
    totalCost > 0 ? `NPR ${totalCost.toLocaleString('en-US')}` : '-';

  const bestSeasons = formatBestSeason(data.meta.bestSeasons);

  const stats = [
    {
      icon: Clock,
      label: 'Duration',
      value: data.meta.duration,
    },
    {
      icon: TrendingUp,
      label: 'Difficulty',
      value: data.meta.difficulty,
    },
    {
      icon: Mountain,
      label: 'Elevation',
      value: data.meta.maxElevation,
    },
    {
      icon: CalendarDays,
      label: 'Peak Season',
      value: bestSeasons,
    },
    {
      icon: MapPin,
      label: 'Starting Point',
      value: data.meta.startingPoint,
    },
    // {
    //   icon: CircleDollarSign,
    //   label: 'Est. Cost',
    //   value: estCost,
    // },
  ];

  return (
    <header
      role="banner"
      className="page-wrapper relative w-full pb-8 overflow-hidden h-[100svh] min-h-[700px] bg-cover bg-center"
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 md:from-black/80 md:via-black/30 md:to-transparent"
      />

      <div className="absolute top-6 right-4 z-20 sm:right-8">
        <button className="flex items-center gap-2 rounded-[8px] bg-white px-3 py-1.5 shadow-lg transition-colors hover:bg-gray-50 sm:rounded-full sm:px-4 sm:py-2">
          <svg
            className="h-4 w-4 text-[#8dc63f] sm:h-5 sm:w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 2C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2H6ZM13 3.5L18.5 9H14C13.4477 9 13 8.55228 13 8V3.5Z" />
          </svg>
        </button>
      </div>

      <div className="page-wrapper relative z-10 flex h-full flex-col items-center justify-end px-4 pb-8 text-center sm:px-8 md:items-start md:px-[--spacing-page-x] md:pb-8 md:text-left">
        <div className="flex max-w-[800px] flex-col items-center gap-3 md:items-start md:gap-2">
          <h1 className="max-w-[300px] font-fraunces text-[42px] font-bold leading-[1.1] tracking-tight text-white drop-shadow-lg sm:text-5xl md:max-w-none md:text-6xl">
            {data.name.split(' (')[0]}
          </h1>

          {data.region && (
            <p className="mb-2 text-xl font-bold text-white/95 drop-shadow-md sm:text-2xl md:mb-2">
              {data.region}
            </p>
          )}

          <p className="line-clamp-2 max-w-[320px] text-sm leading-relaxed text-white/80 drop-shadow-md sm:max-w-[85%] md:text-base">
            {data.summary}
          </p>
        </div>

        {/* Quick stats bar */}
        <div className="mt-6 w-full rounded-2xl bg-white/95 px-6 py-4 shadow-xl backdrop-blur-sm sm:px-6 md:mt-8">
          <div className="grid grid-cols-2 gap-x-4 gap-y-5 text-left sm:grid-cols-3 xl:grid-cols-5 xl:items-center xl:gap-0">
            {stats.map(({ icon: Icon, label, value }, index) => (
              <div
                key={label}
                className={cn(
                  'flex items-center gap-3 xl:flex-1 xl:px-4',
                  index > 0 && 'xl:border-l xl:border-gray-200',
                )}
              >
                <Icon
                  className="size-5 shrink-0 text-gray-700 md:size-6"
                  strokeWidth={1.75}
                />

                <div className="flex min-w-0 flex-col">
                  <span className="text-sm text-gray-500">{label}</span>

                  <span className="break-words text-[13px] font-bold leading-tight text-gray-700 sm:text-[14px] md:text-[15px] xl:text-[16px]">
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
