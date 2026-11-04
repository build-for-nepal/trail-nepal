import { ExternalLink, MapPin } from 'lucide-react';

import SectionHeader from '../common/SectionHeader';
import type { CraftPlaceSection } from '@/types/craft';

const linkClass =
  'flex w-fit items-center gap-1.5 text-xs font-medium text-[#376BB6] hover:underline';

/** Numbered place cards; used for both "nearby" and "alternatives". */
const CraftPlaceList = ({
  section,
  id,
}: {
  section: CraftPlaceSection;
  id: string;
}) => {
  const { title, intro, places } = section;

  return (
    <section className="w-full">
      <div className="page-wrapper mx-auto flex w-full flex-col gap-10 px-6 py-12 sm:px-10 lg:px-20 lg:py-20">
        <SectionHeader title={title} description={intro} id={id} />

        <ol className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {places.map((place) => (
            <li
              key={place.order}
              className="flex flex-col gap-3 rounded-2xl border border-[#E2E8F0] bg-white p-6"
            >
              <h3 className="font-poppins text-base font-semibold text-gray-900">
                <span className="text-[#376BB6]">
                  {String(place.order).padStart(2, '0')} ·
                </span>{' '}
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
        </ol>
      </div>
    </section>
  );
};

export default CraftPlaceList;
