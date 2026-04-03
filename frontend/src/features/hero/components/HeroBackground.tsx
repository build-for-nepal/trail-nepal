import type { MutableRefObject } from "react";
import Image from "next/image";
import type { Slide } from "../../../types/homepage";

interface HeroBackgroundProps {
  slides: Slide[];
  bgLayersRef: MutableRefObject<(HTMLDivElement | null)[]>;
}

export const HeroBackground = ({
  slides,
  bgLayersRef,
}: HeroBackgroundProps) => (
  <div className="absolute inset-0 z-0" aria-hidden="true">
    {slides.map((slide, index) => (
      <div
        key={slide.id}
        ref={(el) => {
          bgLayersRef.current[index] = el;
        }}
        style={{ opacity: index === 0 ? 1 : 0 }}
        className="absolute inset-0"
      >
        <Image
          src={slide.imageSrc}
          alt=""
          fill
          priority={index === 0}
          className="object-cover brightness-[0.65]"
        />
      </div>
    ))}
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
  </div>
);
