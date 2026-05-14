'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import type { HeroBackgroundProps } from '../../../types/homepage';
import { TRANSITION_DURATION_MS } from '../../../static/constants';

type IdleHandle = number;
type RequestIdleCallback = (
  cb: () => void,
  opts?: { timeout: number },
) => IdleHandle;
type CancelIdleCallback = (id: IdleHandle) => void;

export const HeroBackground = ({
  slides,
  activeIndex,
}: HeroBackgroundProps) => {
  // Defer mounting non-priority slide images until the browser is idle so the
  // first slide and the rest of the page render without contention.
  const [mountSecondary, setMountSecondary] = useState(false);

  useEffect(() => {
    const w = window as unknown as {
      requestIdleCallback?: RequestIdleCallback;
      cancelIdleCallback?: CancelIdleCallback;
    };
    let idleId: IdleHandle | undefined;
    let timerId: number | undefined;
    if (w.requestIdleCallback) {
      idleId = w.requestIdleCallback(() => setMountSecondary(true), {
        timeout: 2000,
      });
    } else {
      timerId = window.setTimeout(() => setMountSecondary(true), 1200);
    }
    return () => {
      if (idleId !== undefined) w.cancelIdleCallback?.(idleId);
      if (timerId !== undefined) window.clearTimeout(timerId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;
        const shouldMount = index === 0 || mountSecondary;
        return (
          <div
            key={slide.id}
            style={{
              opacity: isActive ? 1 : 0,
              transition: `opacity ${TRANSITION_DURATION_MS}ms ease-in-out`,
              willChange: 'opacity',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
            }}
            className="absolute inset-0"
          >
            {shouldMount && (
              <Image
                src={slide.imageSrc}
                alt=""
                fill
                sizes="100vw"
                preload={index === 0}
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'low'}
                className="object-cover"
              />
            )}
          </div>
        );
      })}
      {/* Overlays replace the brightness filter on the image — filters force
          repaints during opacity transitions, plain semi-opaque divs do not. */}
      <div className="pointer-events-none absolute inset-0 bg-black/40" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-black/80 via-black/30 to-transparent" />
    </div>
  );
};
