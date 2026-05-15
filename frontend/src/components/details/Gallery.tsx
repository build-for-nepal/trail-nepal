'use client';

import { useRef, useState, useEffect } from 'react';
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

  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const activeRef = useRef(false);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (!activeRef.current) return;
      const delta = e.deltaY + e.deltaX;
      const atStart = el.scrollLeft <= 0 && delta < 0;
      const atEnd =
        el.scrollLeft >= el.scrollWidth - el.clientWidth - 1 && delta > 0;
      if (atStart || atEnd) return;
      e.preventDefault();
      el.scrollLeft += delta * 1.5;
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  if (!galleryData || galleryData.length === 0) return null;

  return (
    <section
      className="flex flex-col py-16 lg:py-24 w-full overflow-hidden bg-white"
      onClick={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-20 mb-10 lg:mb-14">
        <SectionHeader
          title="Gallery"
          description="Memories made during adventure"
        />
      </div>

      <div className="w-full pl-6 sm:pl-10 lg:pl-20">
        <div
          ref={containerRef}
          className={[
            'grid grid-rows-2 grid-flow-col gap-3 sm:gap-4 lg:gap-6',
            'overflow-x-auto pb-6 pr-6 sm:pr-10 lg:pr-20',
            '[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]',
            'h-100 sm:h-112.5 lg:h-137.5 xl:h-150',
            'auto-cols-[75vw] sm:auto-cols-[45vw] md:auto-cols-[35vw] lg:auto-cols-[28vw] xl:auto-cols-[22vw]',
            'select-none',
          ].join(' ')}
        >
          {galleryData.map((image, index) => {
            const bentoClass = BENTO_PATTERN[index % BENTO_PATTERN.length];

            return (
              <div
                key={image.id}
                className={`relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden group shadow-sm ${bentoClass}`}
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
