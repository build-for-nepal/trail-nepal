"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import { TRANSITION_DURATION_MS } from "../../../static/constants";
import { MobileCarouselProps } from "@/types/homepage";

export const MobileCarousel = ({
  slides,
  activeIndex,
  goToSlide,
}: MobileCarouselProps) => {
  const cardsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const cardWidth = 106.875;
  const cardHeight = 126.563;
  const gap = 24;

  useEffect(() => {
    slides.forEach((_, index) => {
      const el = cardsRef.current[index];
      if (!el) return;

      const rawOffset = (index - activeIndex + slides.length) % slides.length;
      let offset = rawOffset;
      if (rawOffset > slides.length / 2) offset -= slides.length;

      const xOffset = offset * (cardWidth + gap);
      const isActive = offset === 0;
      const isVisible = Math.abs(offset) <= 2;

      const targetScale = isActive ? 1.15 : 1;
      const targetOpacity = Math.abs(offset) === 2 ? 0.5 : 1;
      const targetZIndex = isActive ? 30 : 20 - Math.abs(offset);

      const duration = TRANSITION_DURATION_MS / 1000;

      if (isVisible) {
        // Bring it back to the DOM and update z-index immediately
        gsap.set(el, { display: "block", zIndex: targetZIndex });

        gsap.to(el, {
          x: xOffset,
          scale: targetScale,
          opacity: targetOpacity,
          duration: duration,
          ease: "power3.out",
        });
      } else {
        // Animate out to 0 opacity, then hide it from DOM to save rendering performance
        gsap.to(el, {
          x: xOffset,
          scale: targetScale,
          opacity: 0,
          duration: duration,
          ease: "power3.out",
          onComplete: () => {
            gsap.set(el, { display: "none" });
          },
        });
      }
    });
  }, [activeIndex, slides, cardWidth, gap]);

  return (
    <div className="absolute bottom-10 left-0 right-0 z-20 flex h-40 items-end justify-center lg:hidden overflow-hidden">
      <div className="relative flex h-full w-full items-end justify-center">
        {slides.map((slide, index) => {
          // Calculate initial state for the very first render to prevent layout shifts
          const rawOffset =
            (index - activeIndex + slides.length) % slides.length;
          let offset = rawOffset;
          if (rawOffset > slides.length / 2) offset -= slides.length;

          const xOffset = offset * (cardWidth + gap);
          const isActive = offset === 0;
          const isVisible = Math.abs(offset) <= 2;

          return (
            <button
              key={slide.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              onClick={() => goToSlide(index)}
              style={{
                display: isVisible ? "block" : "none",
                width: `${cardWidth}px`,
                height: `${cardHeight}px`,
                bottom: "0px",
                transform: `translate(${xOffset}px, 0px) scale(${isActive ? 1.15 : 1})`,
                transformOrigin: "bottom center",
                opacity:
                  Math.abs(offset) === 2 ? 0.5
                  : isVisible ? 1
                  : 0,
                zIndex: isActive ? 30 : 20 - Math.abs(offset),
                borderRadius: "9px",
                border: "1.125px solid #FFF",
                background: "lightgray 50% / cover no-repeat",
              }}
              className="absolute overflow-hidden shadow-xl"
            >
              <Image
                src={slide.imageSrc}
                alt={slide.title}
                fill
                sizes="110px"
                className="object-cover"
                priority={isActive}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};
