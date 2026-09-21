import { CalendarDays, Clock, MapPin, TrendingUp } from 'lucide-react';

import { cn } from '@/lib/utils';
import type { CulturalTourDetail } from '@/types/cultural';

/** Converts full month names to 3-letter abbreviations (mirrors TreksHeader). */
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

const CulturalHeader = ({ tour }: { tour: CulturalTourDetail }) => {
  const bgImage =
    tour.gallery?.find((img) => img.type === 'hero')?.url ||
    tour.gallery?.[0]?.url ||
    '';

  // Same stat set, order, labels and icons as TreksHeader and HikeHeader, minus
  // their Elevation stat: these tours stay in valleys and hill towns, so a peak
  // altitude is not a planning figure a reader needs up front.
  const stats = [
    { icon: Clock, label: 'Duration', value: tour.meta.duration },
    { icon: TrendingUp, label: 'Difficulty', value: tour.meta.difficulty },
    {
      icon: CalendarDays,
      label: 'Peak Season',
      value: formatBestSeason(tour.meta.bestSeasons),
    },
    { icon: MapPin, label: 'Starting Point', value: tour.meta.startingPoint },
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

      <div className="page-wrapper relative z-10 flex h-full flex-col items-center justify-end px-4 pb-8 text-center sm:px-8 md:items-start md:px-[--spacing-page-x] md:pb-8 md:text-left">
        <div className="flex max-w-[800px] flex-col items-center gap-3 md:items-start md:gap-2">
          <h1 className="max-w-[300px] font-fraunces text-[42px] font-bold leading-[1.1] tracking-tight text-white drop-shadow-lg sm:text-5xl md:max-w-none md:text-6xl">
            {tour.name.split(' (')[0]}
          </h1>

          {tour.region && (
            <p className="mb-2 text-xl font-bold text-white/95 drop-shadow-md sm:text-2xl md:mb-2">
              {tour.region}
            </p>
          )}

          {/* No line clamp, unlike TreksHeader and HikeHeader: this paragraph is
              the operator's authored Description verbatim, and clamping it to
              two lines cut the longer tours off mid-sentence. */}
          <p className="max-w-[320px] text-sm leading-relaxed text-white/80 drop-shadow-md sm:max-w-[85%] md:text-base">
            {tour.summary}
          </p>
        </div>

        {/* Quick stats bar */}
        <div className="mt-6 w-full rounded-2xl bg-white/95 px-6 py-4 shadow-xl backdrop-blur-sm sm:px-6 md:mt-8">
          <div className="grid grid-cols-2 gap-x-4 gap-y-5 text-left sm:grid-cols-3 xl:grid-cols-4 xl:items-center xl:gap-0">
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

export default CulturalHeader;
