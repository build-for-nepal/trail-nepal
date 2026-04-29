'use client';

import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import { MobileCarousel } from './MobileCarousel';
import { useHeroAnimation } from '@/hooks/useHeroAnimation';
import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';
import { CarouselCard } from './CarouselCard';
import { SLIDES } from '@/static/homepageData';

const AUTO_ADVANCE_MS = 4500;

export const HeroSection = () => {
  const router = useRouter();
  const { activeIndex, handleNext, handlePrev, goToSlide } = useHeroAnimation(
    SLIDES.length,
  );

  const textElemsRef = useRef<(HTMLElement | null)[]>(Array(3).fill(null));

  // Background fade is now driven by CSS opacity — only the text needs JS
  // animation here, and we let GSAP clean up its inline transforms after.
  useEffect(() => {
    const textElems = textElemsRef.current.filter(
      (el): el is HTMLElement => el !== null,
    );
    if (textElems.length === 0) return;

    const tween = gsap.fromTo(
      textElems,
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
        force3D: true,
        clearProps: 'transform,willChange',
      },
    );
    return () => {
      tween.kill();
    };
  }, [activeIndex]);

  useEffect(() => {
    const id = window.setTimeout(handleNext, AUTO_ADVANCE_MS);
    return () => window.clearTimeout(id);
  }, [activeIndex, handleNext]);

  const handleExplore = useCallback(() => router.push('/explore'), [router]);

  const desktopCards = useMemo(
    () =>
      SLIDES.map((slide, index) => {
        const rawOffset = (index - activeIndex + SLIDES.length) % SLIDES.length;
        const offset = rawOffset === SLIDES.length - 1 ? -1 : rawOffset;
        return { slide, index, offset };
      }),
    [activeIndex],
  );

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <HeroBackground slides={SLIDES} activeIndex={activeIndex} />

      <div className="page-wrapper relative z-10 flex h-full items-center">
        <div className="flex h-full w-full flex-col justify-center lg:grid lg:grid-cols-2 lg:items-center">
          <div className="flex w-full items-center justify-center lg:justify-start pb-24 lg:pb-0">
            <HeroContent
              slide={SLIDES[activeIndex]}
              onPrev={handlePrev}
              onNext={handleNext}
              onExplore={handleExplore}
              textElemsRef={textElemsRef}
            />
          </div>

          {/* Desktop Carousel Cards */}
          <div className="relative hidden h-full w-full lg:block">
            {desktopCards.map(({ slide, index, offset }) => (
              <CarouselCard
                key={slide.id}
                slide={slide}
                offset={offset}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Sliding Carousel Component */}
      <MobileCarousel
        slides={SLIDES}
        activeIndex={activeIndex}
        goToSlide={goToSlide}
      />
    </section>
  );
};
