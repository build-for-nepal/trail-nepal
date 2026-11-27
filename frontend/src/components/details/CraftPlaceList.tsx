import { ExternalLink, MapPin } from 'lucide-react';

import SectionHeader from '../common/SectionHeader';
import { cn } from '@/lib/utils';
import type { CraftPlaceSection } from '@/types/craft';

const linkClass =
  'flex w-fit items-center gap-1.5 text-xs font-medium text-[#376BB6] hover:underline';

/** Full-width section of place cards, e.g. "alternatives". */
const CraftPlaceList = ({
  section,
  id,
  columns = 2,
}: {
  section: CraftPlaceSection;
  id: string;
  /** Cards per row on large screens; 1 keeps them stacked full-width. */
  columns?: 1 | 2 | 3;
}) => {
  const { title, intro, places } = section;

  return (
    <section className="w-full">
      <div className="page-wrapper mx-auto flex w-full flex-col gap-10 px-6 py-12 sm:px-10 lg:px-20 lg:py-20">
        <SectionHeader title={title} description={intro} id={id} />

        {/* Wrapping flex rather than a grid, so a short last row (two cards
            in a three-column section) sits centred instead of hugging the
            left. Card widths match the old grid tracks across the gap-5. */}
        <ul className="flex flex-wrap justify-center gap-5">
          {places.map((place) => (
            <li
              key={place.order}
              className={cn(
                'flex w-full flex-col gap-3 rounded-2xl border border-[#E2E8F0] bg-white p-6',
                columns !== 1 && 'md:w-[calc((100%-1.25rem)/2)]',
                columns === 3 && 'lg:w-[calc((100%-2.5rem)/3)]',
              )}
            >
              <h3 className="font-poppins text-base font-semibold text-gray-900">
                {place.title}
              </h3>

              {place.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="font-poppins text-sm leading-relaxed text-gray-700"
                >
                  {paragraph}
                </p>
              ))}

              {place.note && (
                <p className="rounded-xl bg-[#EEF3FB] px-4 py-3 font-poppins text-sm leading-relaxed text-gray-700">
                  <span className="font-semibold text-gray-900">
                    {place.note.title}:
                  </span>{' '}
                  {place.note.description}
                </p>
              )}

              {(place.reference || place.mapUrl) && (
                <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-1">
                  {place.reference && (
                    <a
                      href={place.reference.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      <ExternalLink size={14} strokeWidth={2} />
                      {place.reference.label}
                    </a>
                  )}
                  {place.mapUrl && (
                    <a
                      href={place.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      <MapPin size={14} strokeWidth={2} />
                      View on map
                    </a>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CraftPlaceList;
