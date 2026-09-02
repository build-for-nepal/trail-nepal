'use client';

import { useState } from 'react';
import {
  Cloud,
  CloudLightning,
  CloudRain,
  CloudSnow,
  CloudSun,
  LucideIcon,
  Moon,
  Snowflake,
  Sun,
  Wind,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { TREK_DETAILS } from '@/static/trekDetails';
import type { SeasonStatus } from '@/types/trek';
import type { WeatherDaily } from '@/types/weather';

type Props = {
  trekId: string;
  today: WeatherDaily | null;
};

const statusText: Record<SeasonStatus, string> = {
  peak: 'text-emerald-600',
  danger: 'text-rose-500',
  caution: 'text-amber-500',
};

const statusBadge: Record<SeasonStatus, { label: string; className: string }> =
  {
    peak: { label: 'Optimal', className: 'bg-emerald-50 text-emerald-600' },
    danger: { label: 'Danger', className: 'bg-rose-50 text-rose-500' },
    caution: { label: 'Caution', className: 'bg-amber-50 text-amber-600' },
  };

const trafficByStatus: Record<SeasonStatus, string> = {
  peak: 'High',
  danger: 'Very low',
  caution: 'Moderate',
};

const lower = (value: string) => value.trim().toLowerCase();

/** Expands the two-part season condition into a fuller, readable overview. */
const buildOverview = (
  monthName: string,
  label: string,
  detail: string,
  status: SeasonStatus,
): string => {
  const traffic = trafficByStatus[status].toLowerCase();

  const framing: Record<SeasonStatus, string> = {
    peak: `${monthName} is one of the prime windows for this trek.`,
    caution: `${monthName} is a transitional month that rewards flexible planning.`,
    danger: `${monthName} is a demanding time to be on the trail.`,
  };

  const closing: Record<SeasonStatus, string> = {
    peak: `Skies are typically stable and visibility is good, and trail traffic tends to be ${traffic}.`,
    caution: `Weather can shift quickly and conditions vary from day to day, with ${traffic} trail traffic.`,
    danger: `Expect tough going and frequently obscured mountain views, with ${traffic} trail traffic.`,
  };

  const conditions = detail
    ? `Conditions are shaped by ${lower(label)}, bringing ${lower(detail)}.`
    : `Conditions are shaped by ${lower(label)}.`;

  return [framing[status], conditions, closing[status]].join(' ');
};

const getStatus = (condition: string): SeasonStatus => {
  const normalized = condition.toLowerCase();

  if (
    normalized.includes('heavy rain') ||
    normalized.includes('peak monsoon') ||
    normalized.includes('extremely cold') ||
    normalized.includes('heavy snow')
  ) {
    return 'danger';
  }

  if (
    normalized.includes('monsoon') ||
    normalized.includes('freezing') ||
    normalized.includes('winter') ||
    normalized.includes('chill') ||
    normalized.includes('cloudy') ||
    normalized.includes('muddy')
  ) {
    return 'caution';
  }

  return 'peak';
};

const getIcon = (condition: string): LucideIcon => {
  const normalized = condition.toLowerCase();

  if (
    normalized.includes('thunder') ||
    normalized.includes('storm') ||
    normalized.includes('peak monsoon')
  )
    return CloudLightning;
  if (normalized.includes('snow')) return CloudSnow;
  if (
    normalized.includes('freezing') ||
    normalized.includes('extremely cold') ||
    normalized.includes('chill') ||
    (normalized.includes('cold') && !normalized.includes('rain'))
  )
    return Snowflake;
  if (normalized.includes('wind')) return Wind;
  if (
    normalized.includes('rain') ||
    normalized.includes('monsoon') ||
    normalized.includes('wet') ||
    normalized.includes('muddy') ||
    normalized.includes('drizzle')
  )
    return CloudRain;
  if (
    normalized.includes('overcast') ||
    normalized.includes('cloud') ||
    normalized.includes('fog')
  )
    return Cloud;
  if (normalized.includes('stable') || normalized.includes('cool')) return Moon;
  if (
    normalized.includes('bloom') ||
    normalized.includes('spring') ||
    normalized.includes('warm') ||
    normalized.includes('clear') ||
    normalized.includes('sun') ||
    normalized.includes('perfect') ||
    normalized.includes('popular') ||
    normalized.includes('visibility') ||
    normalized.includes('crisp')
  )
    return Sun;

  return CloudSun;
};

const TreksSeasonCalendar = ({ trekId, today }: Props) => {
  const now = new Date();
  const currentMonthIndex = now.getMonth();
  const [selectedIndex, setSelectedIndex] = useState(currentMonthIndex);

  const data = TREK_DETAILS[trekId];
  if (!data?.seasonalPlanning) return null;

  const months = data.seasonalPlanning.map((item, index) => {
    const [label, detail] = item.condition.split(' / ');

    return {
      index,
      abbr: item.month.toUpperCase(),
      label,
      detail: detail ?? '',
      status: getStatus(item.condition),
      icon: getIcon(item.condition),
    };
  });

  const selected =
    months.find((month) => month.index === selectedIndex) ??
    months[currentMonthIndex] ??
    months[0];
  const isCurrentSelected = selected.index === currentMonthIndex;
  const badge = statusBadge[selected.status];
  const monthFullName = new Date(
    now.getFullYear(),
    selected.index,
    1,
  ).toLocaleString('en-US', { month: 'long' });

  const formatTemp = (value: number) => `${Math.round(value)}°`;

  return (
    <div className="flex h-full flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h3 className="font-poppins text-2xl font-bold text-gray-900">
          Monthly Window
        </h3>
        <p className="font-poppins  leading-relaxed text-gray-600">
          Timing is everything in the Himalayas. The window for a safe ascent is
          narrow and dictated by the monsoon and winter winds.
        </p>
        {data.meta?.bestSeasons ? (
          <p className="font-poppins font-medium italic text-gray-700">
            Note: Peak Season to trek {data.name} is {data.meta.bestSeasons}
          </p>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col rounded-[24px] bg-[#EBF0F8] p-5 sm:p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {months.map((month) => {
            const Icon = month.icon;
            const isCurrent = month.index === currentMonthIndex;
            const isSelected = month.index === selected.index;

            return (
              <button
                type="button"
                key={month.abbr}
                onClick={() => setSelectedIndex(month.index)}
                aria-pressed={isSelected}
                title={month.detail || month.label}
                className={cn(
                  'relative flex  cursor-pointer flex-col items-center justify-center gap-2 rounded-xl bg-white px-2 py-4 text-center shadow-[0_1px_3px_rgba(15,23,42,0.08)] transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(15,23,42,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#376BB6]',
                  isSelected &&
                    'ring-2 ring-[#376BB6] ring-offset-2 ring-offset-[#EEF2F8]',
                )}
              >
                {isCurrent ? (
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1 whitespace-nowrap rounded-full border border-[#376BB6]/25 bg-white px-2 py-0.5 text-[9px] font-semibold text-[#376BB6] shadow-sm">
                    <span className="inline-block size-1.5 rounded-full bg-[#376BB6]" />
                    Current Month
                  </span>
                ) : null}

                <span className=" font-bold tracking-[0.08em] text-gray-700">
                  {month.abbr}
                </span>

                <Icon
                  className={statusText[month.status]}
                  size={26}
                  strokeWidth={2.25}
                />

                <span
                  className={cn(
                    'text-xs font-semibold leading-tight',
                    statusText[month.status],
                  )}
                >
                  {month.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex flex-1 flex-col border-t border-black/5 pt-5">
          <div className="flex items-center gap-3">
            <h4 className="font-poppins text-lg font-bold text-gray-900">
              {monthFullName}
            </h4>
            <span
              className={cn(
                'rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide',
                badge.className,
              )}
            >
              {badge.label}
            </span>
          </div>
          <p className="mt-1 font-poppins leading-relaxed text-gray-600">
            {buildOverview(
              monthFullName,
              selected.label,
              selected.detail,
              selected.status,
            )}
          </p>

          {isCurrentSelected && today ? (
            <>
              <p className="mt-4 font-poppins text-sm font-semibold text-gray-900">
                Today&rsquo;s Forecast :
              </p>
              <div className="mt-2 flex flex-wrap gap-x-10 gap-y-3">
                <div>
                  <p className="font-poppins text-2xl font-bold text-gray-900">
                    {formatTemp(today.tempMaxC)} / {formatTemp(today.tempMinC)}C
                  </p>
                  <p className="font-poppins text-gray-500">Day / Night</p>
                </div>
                <div>
                  <p className="font-poppins text-2xl font-bold text-gray-900">
                    {Math.round(today.precipMm)}mm
                  </p>
                  <p className="font-poppins text-gray-500">Rainfall</p>
                </div>
                <div>
                  <p className="font-poppins text-2xl font-bold text-gray-900">
                    {trafficByStatus[selected.status]}
                  </p>
                  <p className="font-poppins text-gray-500">Trail traffic</p>
                </div>
              </div>
            </>
          ) : (
            <p className="mt-3 font-poppins text-xs text-gray-400">
              Select the current month to see today&rsquo;s live forecast.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TreksSeasonCalendar;
