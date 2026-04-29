'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

import { TRANSITION_DURATION_MS } from '../../../static/constants';
import { MobileCarouselProps } from '@/types/homepage';

const CARD_WIDTH = 106.875;
const CARD_HEIGHT = 126.563;
const GAP = 24;
const STRIDE = CARD_WIDTH + GAP;
const DURATION_S = TRANSITION_DURATION_MS / 1000;

export const MobileCarousel = ({
  slides,
  activeIndex,
  goToSlide,
}: MobileCarouselProps) => {
  const cardsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      slides.forEach((_, index) => {
        const el = cardsRef.current[index];
        if (!el) return;

        const rawOffset = (index - activeIndex + slides.length) % slides.length;
        let offset = rawOffset;
        if (rawOffset > slides.length / 2) offset -= slides.length;

        const xOffset = offset * STRIDE;
        const isActive = offset === 0;
        const isVisible = Math.abs(offset) <= 2;
        const targetScale = isActive ? 1.15 : 1;
        const targetOpacity = !isVisible ? 0 : Math.abs(offset) === 2 ? 0.5 : 1;
        const targetZIndex = isActive ? 30 : 20 - Math.abs(offset);

        if (isVisible) {
          gsap.set(el, { display: 'block', zIndex: targetZIndex });
        }

        gsap.to(el, {
          x: xOffset,
          scale: targetScale,
          opacity: targetOpacity,
          duration: DURATION_S,
          ease: 'power3.out',
          force3D: true,
          overwrite: 'auto',
          onComplete: () => {
            if (!isVisible) gsap.set(el, { display: 'none' });
          },
        });
      });
    });

    return () => ctx.revert();
  }, [activeIndex, slides]);

  return (
    <div className="absolute bottom-10 left-0 right-0 z-20 flex h-40 items-end justify-center lg:hidden overflow-hidden">
      <div className="relative flex h-full w-full items-end justify-center">
        {slides.map((slide, index) => {
          const rawOffset =
            (index - activeIndex + slides.length) % slides.length;
          let offset = rawOffset;
          if (rawOffset > slides.length / 2) offset -= slides.length;

          const xOffset = offset * STRIDE;
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
                display: isVisible ? 'block' : 'none',
                width: `${CARD_WIDTH}px`,
                height: `${CARD_HEIGHT}px`,
                bottom: 0,
                transform: `translate3d(${xOffset}px, 0, 0) scale(${isActive ? 1.15 : 1})`,
                transformOrigin: 'bottom center',
                opacity: Math.abs(offset) === 2 ? 0.5 : isVisible ? 1 : 0,
                zIndex: isActive ? 30 : 20 - Math.abs(offset),
                borderRadius: '9px',
                border: '1.125px solid #FFF',
                willChange: 'transform, opacity',
                backfaceVisibility: 'hidden',
              }}
              className="absolute overflow-hidden shadow-xl"
            >
              <Image
                src={slide.imageSrc}
                alt={slide.title}
                fill
                sizes="120px"
                quality={70}
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'low'}
                className="object-cover"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};
