import { CloudRain, LucideIcon, Snowflake, Sun } from 'lucide-react';

import { TREK_DETAILS } from '@/static/trekDetails';
import type { MonthData, Props, SeasonStatus } from '@/types/trek';

const statusStyles: Record<
  SeasonStatus,
  { bg: string; text: string; border: string }
> = {
  peak: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-600',
    border: 'bg-emerald-500',
  },
  danger: {
    bg: 'bg-rose-50',
    text: 'text-rose-500',
    border: 'bg-rose-500',
  },
  caution: {
    bg: 'bg-amber-50',
    text: 'text-amber-500',
    border: 'bg-amber-400',
  },
};

const parseSeasonData = (
  condition: string,
): { status: SeasonStatus; icon: LucideIcon } => {
  const lowerCaseDesc = condition.toLowerCase();

  if (
    lowerCaseDesc.includes('heavy rain') ||
    lowerCaseDesc.includes('peak monsoon') ||
    lowerCaseDesc.includes('extremely cold') ||
    lowerCaseDesc.includes('heavy snow')
  ) {
    const isCold =
      lowerCaseDesc.includes('snow') || lowerCaseDesc.includes('cold');
    return { status: 'danger', icon: isCold ? Snowflake : CloudRain };
  }

  if (
    lowerCaseDesc.includes('monsoon') ||
    lowerCaseDesc.includes('freezing') ||
    lowerCaseDesc.includes('winter') ||
    lowerCaseDesc.includes('cloudy') ||
    lowerCaseDesc.includes('muddy')
  ) {
    const isCold =
      lowerCaseDesc.includes('freezing') || lowerCaseDesc.includes('winter');
    return { status: 'caution', icon: isCold ? Snowflake : CloudRain };
  }

  return { status: 'peak', icon: Sun };
};

const TreksSeasonCalendar = ({ trekId }: Props) => {
  const data = TREK_DETAILS[trekId];
  if (!data?.seasonalPlanning) return null;

  const months: MonthData[] = data.seasonalPlanning.map((item) => {
    const parsedParams = parseSeasonData(item.condition);

    return {
      title: item.month.toUpperCase(),
      value: item.condition.split(' / ')[0],
      fullDescription: item.condition,
      status: parsedParams.status,
      icon: parsedParams.icon,
    };
  });

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6">
        {months.map((month) => {
          const style = statusStyles[month.status];
          const Icon = month.icon;

          return (
            <div
              key={month.title}
              title={month.fullDescription}
              className={`relative flex flex-col items-center gap-2 overflow-hidden rounded-xl px-2 py-6 text-center shadow-sm transition-transform hover:-translate-y-1 ${style.bg}`}
            >
              <div className="text-base font-bold tracking-wider text-gray-800 sm:text-lg">
                {month.title}
              </div>

              <Icon
                className={`${style.text} my-1`}
                size={28}
                strokeWidth={2.5}
              />

              <div
                className={`text-[11px] font-bold uppercase leading-snug tracking-wide sm:text-xs ${style.text}`}
              >
                {month.value}
              </div>

              <div
                className={`absolute bottom-0 left-0 h-1.5 w-full ${style.border}`}
              />
            </div>
          );
        })}
    </div>
  );
};

export default TreksSeasonCalendar;
