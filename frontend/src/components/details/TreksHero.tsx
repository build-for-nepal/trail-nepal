import { Calendar, Activity, Clock, MapPin, Mountain } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { TREK_DETAILS } from '@/static/trekDetails';
import { Props } from '@/types/trek';
import SubNav from 'src/components/layout/navigation/SubNav';

const TreksHero = ({ trekId }: Props) => {
  const data = TREK_DETAILS[trekId];
  if (!data) return null;

  const { meta, overview } = data;

  const cleanSeason = meta.bestSeasons?.split(',')[0] || '';
  const cleanStartingPoint = meta.startingPoint?.split(' (')[0] || '';

  const stats = [
    {
      icon: <Clock className="h-5 w-5 md:h-6 md:w-6 text-white" />,
      title: 'Duration',
      value: meta.duration,
    },
    {
      icon: <Activity className="h-5 w-5 md:h-6 md:w-6 text-white" />,
      title: 'Difficulty',
      value: meta.difficulty,
    },
    {
      icon: <Mountain className="h-5 w-5 md:h-6 md:w-6 text-white" />,
      title: 'Elevation',
      value: meta.maxElevation,
    },
    {
      icon: <Calendar className="h-5 w-5 md:h-6 md:w-6 text-white" />,
      title: 'Best Season',
      value: cleanSeason,
    },
    {
      icon: <MapPin className="h-5 w-5 md:h-6 md:w-6 text-white" />,
      title: 'Starting Point',
      value: cleanStartingPoint,
    },
  ];

  const chunkSize = 2;
  const rows = [];
  for (let i = 0; i < stats.length; i += chunkSize) {
    rows.push(stats.slice(i, i + chunkSize));
  }

  return (
    <section className="w-full flex flex-col">
      <div className="page-wrapper bg-[#4276b2] w-full py-6 md:py-8">
        <div className="page-wrapper w-full mx-auto px-2 sm:px-8">
          {/* mobile view */}
          <div className="flex flex-col gap-6 md:hidden">
            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`grid grid-cols-2 gap-4 ${
                  row.length === 1 ? 'flex justify-center' : ''
                }`}
              >
                {row.map((stat) => (
                  <div
                    className={`flex flex-col items-center justify-center px-1 ${
                      row.length === 1 ? 'col-span-2 max-w-50 mx-auto' : ''
                    }`}
                    key={stat.title}
                  >
                    <div className="mb-1 md:mb-2">{stat.icon}</div>
                    <div className="text-[16px] sm:text-[16px] font-bold text-white tracking-wide mb-0.5 md:mb-1 text-center whitespace-nowrap">
                      {stat.title}
                    </div>
                    <div className="text-[12px] sm:text-[12px] text-white/90 text-center whitespace-nowrap">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* desktop view - from md */}
          <div className="hidden md:flex flex-row justify-around items-center w-full">
            {stats.map((stat) => (
              <div
                className="flex flex-col items-center justify-center px-1"
                key={stat.title}
              >
                <div className="mb-1 md:mb-2">{stat.icon}</div>
                <div className="text-[12px] sm:text-[14px] md:text-[18px] lg:text-[22px] font-bold text-white tracking-wide mb-0.5 md:mb-1 text-center whitespace-nowrap">
                  {stat.title}
                </div>
                <div className="text-[9px] sm:text-[12px] md:text-[13px] lg:text-[22px] text-white/90 text-center whitespace-nowrap">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="page-wrapper mx-auto flex flex-col px-6 sm:px-10 lg:px-20 py-12 lg:py-20 gap-8 w-full">
        <SectionHeader
          title="Trek Overview"
          description="Everything you need to know about the journey"
          id="overview"
        />
        <div className="space-y-6 text-gray-700 leading-relaxed md:text-lg">
          <p>{overview}</p>
        </div>
      </div>
    </section>
  );
};

export default TreksHero;
