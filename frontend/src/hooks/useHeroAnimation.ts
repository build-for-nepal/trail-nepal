import { TRANSITION_DURATION_MS } from "@/static/constants";
import { useState, useRef, useCallback, useEffect } from "react";

export const useHeroAnimation = (totalSlides: number) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const isAnimating = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Cleanup timers safely
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const goToSlide = useCallback(
    (next: number) => {
      // Normalize negative indexes to safely wrap around endlessly
      const normalizedNext = ((next % totalSlides) + totalSlides) % totalSlides;

      if (
        !Number.isInteger(normalizedNext) ||
        isAnimating.current ||
        normalizedNext === activeIndexRef.current
      ) {
        return;
      }

      isAnimating.current = true;
      activeIndexRef.current = normalizedNext;
      setActiveIndex(normalizedNext);

      if (timerRef.current) clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        isAnimating.current = false;
        timerRef.current = null;
      }, TRANSITION_DURATION_MS);
    },
    [totalSlides],
  );

  const handleNext = useCallback(() => {
    goToSlide(activeIndexRef.current + 1);
  }, [goToSlide]);

  const handlePrev = useCallback(() => {
    goToSlide(activeIndexRef.current - 1);
  }, [goToSlide]);

  return { activeIndex, handleNext, handlePrev, goToSlide };
};
