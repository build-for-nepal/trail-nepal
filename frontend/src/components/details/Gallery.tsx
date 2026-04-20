"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import SectionHeader from "../common/SectionHeader";
import { TREK_DETAILS } from "@/static/trekDetails";
import { Props } from "@/types/trek";

const BENTO_PATTERN = [
  "row-span-2",
  "row-span-1",
  "row-span-1",
  "row-span-1",
  "row-span-1",
];

export const Gallery = ({ trekId }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const galleryData =
    trekId && TREK_DETAILS[trekId] ? TREK_DETAILS[trekId].gallery : null;

  // Converts vertical mouse wheel scrolling into horizontal scrolling for desktop
  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const onWheel = (e: WheelEvent) => {
      // Check if it's a standard vertical scroll (ignores horizontal trackpad swipes)
      if (e.deltaY !== 0 && e.deltaX === 0) {
        e.preventDefault();
        element.scrollLeft += e.deltaY;
      }
    };

    // passive: false is required to allow e.preventDefault()
    element.addEventListener("wheel", onWheel, { passive: false });
    return () => element.removeEventListener("wheel", onWheel);
  }, []);

  if (!galleryData || galleryData.length === 0) return null;

  return (
    <section className="page-wrapper flex flex-col gap-10 py-20 w-full overflow-hidden">
      <SectionHeader
        title="Gallery"
        description="Memories made during adventure"
      />

      <div className="w-full relative">
        <div
          ref={scrollRef}
          className="grid grid-rows-2 grid-flow-col gap-3 md:gap-4 overflow-x-auto px-4 sm:px-0 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] h-[350px] sm:h-[450px] lg:h-[500px] auto-cols-[65vw] sm:auto-cols-[40vw] md:auto-cols-[30vw] lg:auto-cols-[300px] xl:auto-cols-[320px] scroll-smooth"
        >
          {galleryData.map((image, index) => {
            const bentoClass = BENTO_PATTERN[index % BENTO_PATTERN.length];

            return (
              <div
                key={image.id}
                className={`relative w-full h-full rounded-[16px] md:rounded-[24px] overflow-hidden group cursor-pointer ${bentoClass}`}
              >
                <Image
                  src={image.url}
                  alt={image.alt || "Gallery Image"}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  sizes="(max-width: 768px) 70vw, (max-width: 1024px) 40vw, 320px"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
