import SectionHeader from '../common/SectionHeader';
import type { CulturalTourDetail } from '@/types/cultural';

const CulturalHero = ({ tour }: { tour: CulturalTourDetail }) => {
  const { overview, meta } = tour;

  const paragraphs = overview
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  const { tripFacts } = meta;

  const facts = [
    { label: 'Start', value: tripFacts.start },
    { label: 'Destination', value: tripFacts.destination },
    { label: 'Key Areas', value: tripFacts.keyAreas },
    { label: 'Tour Type', value: tripFacts.tourType },
    { label: 'Transport', value: tripFacts.transport },
    { label: 'Terrain', value: tripFacts.terrain },
  ].filter((fact) => fact.value);

  return (
    <section className="w-full">
      <div className="page-wrapper mx-auto flex w-full flex-col gap-10 px-6 py-12 sm:px-10 lg:px-20 lg:py-20">
        <SectionHeader
          title="Overview"
          description="A quick look at what awaits on the tour."
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
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-center justify-between gap-4 border-b border-black/5 py-3.5 last:border-b-0"
                >
                  <dt className="text-sm text-gray-500">{fact.label}</dt>
                  <dd className="flex items-center justify-end gap-1.5 text-right text-sm font-bold text-gray-900">
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

export default CulturalHero;