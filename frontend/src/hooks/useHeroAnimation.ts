import { TRANSITION_DURATION_MS } from '@/static/constants';
import { useState, useRef, useCallback, useEffect } from 'react';

export const useHeroAnimation = (totalSlides: number) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const isAnimating = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      isAnimating.current = false;
    };
  }, []);

  const goToSlide = useCallback(
    (next: number) => {
      if (
        !Number.isInteger(next) ||
        next < 0 ||
        next >= totalSlides ||
        isAnimating.current ||
        next === activeIndexRef.current
      )
        return;

      isAnimating.current = true;
      activeIndexRef.current = next;
      setActiveIndex(next);

      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        isAnimating.current = false;
        timerRef.current = null;
      }, TRANSITION_DURATION_MS);
    },
    [totalSlides],
  );

  const handleNext = useCallback(
    () => goToSlide((activeIndexRef.current + 1) % totalSlides),
    [totalSlides, goToSlide],
  );

  const handlePrev = useCallback(
    () => goToSlide((activeIndexRef.current - 1 + totalSlides) % totalSlides),
    [totalSlides, goToSlide],
  );

  return { activeIndex, handleNext, handlePrev, goToSlide };
};
