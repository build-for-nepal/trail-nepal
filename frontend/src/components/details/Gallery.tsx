'use client';

import Image from 'next/image';
import SectionHeader from '../common/SectionHeader';
import { TREK_DETAILS } from '@/static/trekDetails';
import { Props } from '@/types/trek';

const BENTO_PATTERN = [
  'row-span-2',
  'row-span-1',
  'row-span-1',
  'row-span-1',
  'row-span-1',
];

export const Gallery = ({ trekId }: Props) => {
  const galleryData =
    trekId && TREK_DETAILS[trekId] ? TREK_DETAILS[trekId].gallery : null;

  if (!galleryData || galleryData.length === 0) return null;

  return (
    <section className="flex flex-col py-16 lg:py-24 w-full overflow-hidden bg-white">
      {/* Header stays constrained to your standard page width */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-20 mb-10 lg:mb-14">
        <SectionHeader
          title="Gallery"
          description="Memories made during adventure"
        />
      </div>

      <div className="w-full pl-6 sm:pl-10 lg:pl-20">
        <div
          className="
            grid grid-rows-2 grid-flow-col gap-3 sm:gap-4 lg:gap-6 
            overflow-x-auto pb-6 pr-6 sm:pr-10 lg:pr-20
            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] 
            h-[400px] sm:h-[450px] lg:h-[550px] xl:h-[600px]
            auto-cols-[75vw] sm:auto-cols-[45vw] md:auto-cols-[35vw] lg:auto-cols-[28vw] xl:auto-cols-[22vw]
            scroll-smooth
          "
        >
          {galleryData.map((image, index) => {
            const bentoClass = BENTO_PATTERN[index % BENTO_PATTERN.length];

            return (
              <div
                key={image.id}
                className={`relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer shadow-sm ${bentoClass}`}
              >
                <Image
                  src={image.url}
                  alt={image.alt || 'Gallery Image'}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
