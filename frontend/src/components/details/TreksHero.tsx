import SectionHeader from '../common/SectionHeader';
import { TREK_DETAILS } from '@/static/trekDetails';
import { Props } from '@/types/trek';

const TreksHero = ({ trekId }: Props) => {
  const data = TREK_DETAILS[trekId];
  if (!data) return null;

  const { overview, timeline } = data;

  const paragraphs = overview
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  // Daily walking hours — min/max across the itinerary's per-day durations.
  const walkingHours: number[] = [];

  timeline.forEach((day) => {
    const duration = day.stats?.duration;

    if (!duration) return;

    const hoursMatch = duration.match(/(\d+(?:\.\d+)?)\s*(?:hrs?|hours?)/i);

    if (hoursMatch) {
      walkingHours.push(Number(hoursMatch[1]));
    }
  });

  const dailyWalkingHours = walkingHours.length
    ? `${Math.min(...walkingHours)}-${Math.max(...walkingHours)} hrs`
    : '—';

  // Acclimatization days — itinerary days explicitly marked as acclimatization.
  const acclimatizationDays = timeline.filter((day) =>
    /acclimatiz/i.test(day.title),
  ).length;

  const tripFacts = [
    ...(data.meta?.tripFacts?.flights !== 'None'
      ? [{ label: 'Flights', value: data.meta.tripFacts.flights }]
      : []),
    ...(data.meta?.tripFacts?.accommodation
      ? [{ label: 'Accommodation', value: data.meta.tripFacts.accommodation }]
      : []),
    { label: 'Daily Walking Hours', value: dailyWalkingHours },
    ...(data.meta?.tripFacts?.routeType
      ? [{ label: 'Route Type', value: data.meta.tripFacts.routeType }]
      : []),
    {
      label: 'Acclimatization Days',
      value: acclimatizationDays > 0 ? `${acclimatizationDays} days` : '—',
    },
    ...(data.meta?.tripFacts?.permits
      ? [{ label: 'Permits', value: data.meta.tripFacts.permits }]
      : []),
  ];

  return (
    <section className="w-full">
      <div className="page-wrapper mx-auto flex w-full flex-col gap-10 px-6 py-12 sm:px-10 lg:px-20 lg:py-20">
        <SectionHeader
          title="Trek Overview"
          description="A quick look at what awaits on the trail."
          id="overview"
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-12">
          {/* Overview text */}
          <div className="space-y-6 leading-relaxed text-gray-700 md:text-lg">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Trip Facts */}
          <aside className="h-fit rounded-2xl bg-[#EEF3FB] p-6 sm:p-7">
            <h3 className="text-lg font-bold text-gray-900">Trip Facts</h3>
            <dl className="mt-4 flex flex-col">
              {tripFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-center justify-between gap-4 border-b border-black/5 py-3.5 last:border-b-0"
                >
                  <dt className="text-sm text-gray-500">{fact.label}</dt>
                  <dd className="text-right text-sm font-bold text-gray-900">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default TreksHero;
