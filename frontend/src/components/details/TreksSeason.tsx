import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { Sun, Snowflake, CloudRain, LucideIcon } from 'lucide-react';
import { TREK_DETAILS } from '@/static/trekDetails';
import { MonthData, Props, SeasonStatus } from '@/types/trek';

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
): { status: 'peak' | 'caution' | 'danger'; icon: LucideIcon } => {
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

const TreksSeason = ({ trekId }: Props) => {
  const data = TREK_DETAILS[trekId];
  if (!data || !data.seasonalPlanning) return null;

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
    <section className="w-full  flex flex-col justify-center py-16 lg:py-24 bg-white">
      <div className="page-wrapper mx-auto w-full  px-6 sm:px-10 lg:px-20 flex flex-col gap-14">
        <SectionHeader
          title="When Should I go?"
          description={`Climbing windows and weather for ${data.name.split(' (')[0]}`}
        />

        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap gap-6 justify-start lg:justify-end text-sm sm:text-base">
            <div className="flex items-center gap-2 font-semibold">
              <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
              PEAK
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <span className="w-3 h-3 rounded-full bg-rose-500"></span>
              DANGER
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <span className="w-3 h-3 rounded-full bg-amber-400"></span>
              CAUTION
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {months.map((month) => {
              const style = statusStyles[month.status];
              const Icon = month.icon;

              return (
                <div
                  key={month.title}
                  title={month.fullDescription} // Shows full text on hover
                  className={`flex flex-col py-6 px-2 rounded-xl items-center text-center gap-2 relative overflow-hidden transition-transform hover:-translate-y-1 cursor-help shadow-sm ${style.bg}`}
                >
                  <div className="font-bold text-base sm:text-lg tracking-wider text-gray-800">
                    {month.title}
                  </div>

                  <Icon
                    className={`${style.text} my-1`}
                    size={28}
                    strokeWidth={2.5}
                  />

                  <div
                    className={`text-[11px] sm:text-xs font-bold uppercase tracking-wide leading-snug ${style.text}`}
                  >
                    {month.value}
                  </div>

                  <div
                    className={`absolute bottom-0 left-0 w-full h-1.5 ${style.border}`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreksSeason;
