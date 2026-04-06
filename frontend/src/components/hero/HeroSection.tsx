"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { MobileCarousel } from "./MobileCarousel";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { CarouselCard } from "./CarouselCard";
import { SLIDES } from "@/static/homepageData";

export const HeroSection = () => {
  const router = useRouter();
  const { activeIndex, handleNext, handlePrev, goToSlide } = useHeroAnimation(
    SLIDES.length,
  );

  const bgLayersRef = useRef<(HTMLDivElement | null)[]>(
    Array(SLIDES.length).fill(null),
  );
  const textElemsRef = useRef<(HTMLElement | null)[]>(Array(3).fill(null));

  useEffect(() => {
    const bgLayers = bgLayersRef.current.filter(
      (el): el is HTMLDivElement => el !== null,
    );
    const textElems = textElemsRef.current.filter(
      (el): el is HTMLElement => el !== null,
    );

    if (bgLayers.length === 0) return;
    const activeLayer = bgLayersRef.current[activeIndex];
    if (!activeLayer) return;

    const tl = gsap.timeline();
    tl.to(bgLayers, { opacity: 0, duration: 0.8, ease: "power2.inOut" }).to(
      activeLayer,
      { opacity: 1, duration: 0.8, ease: "power2.inOut" },
      "<",
    );

    if (textElems.length > 0) {
      tl.fromTo(
        textElems,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" },
        "-=0.5",
      );
    }
    return () => {
      tl.kill();
    };
  }, [activeIndex]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <HeroBackground slides={SLIDES} bgLayersRef={bgLayersRef} />

      <div className="relative z-10 flex h-full w-full items-center px-4 md:px-8 lg:px-16 2xl:px-24">
        <div className="flex h-full w-full flex-col justify-center lg:grid lg:grid-cols-2 lg:items-center">
          <div className="flex w-full items-center justify-center lg:justify-start pb-24 lg:pb-0">
            <HeroContent
              slide={SLIDES[activeIndex]}
              onPrev={handlePrev}
              onNext={handleNext}
              onExplore={() => router.push("/explore")}
              textElemsRef={textElemsRef}
            />
          </div>

          {/* Desktop Carousel Cards */}
          <div className="relative hidden h-full w-full lg:block">
            {SLIDES.map((slide, index) => {
              const rawOffset =
                (index - activeIndex + SLIDES.length) % SLIDES.length;
              const offset = rawOffset === SLIDES.length - 1 ? -1 : rawOffset;
              return (
                <CarouselCard
                  key={slide.id}
                  slide={slide}
                  offset={offset}
                  onClick={() => goToSlide(index)}
                />
              );
            })}
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
