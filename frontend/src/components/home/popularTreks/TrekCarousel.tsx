"use client";

import { useRef, useEffect } from "react";
import TrekCard from "./TrekCard";
import { Trek } from "@/types/trek";

const TrekCarousel = ({ treks }: { treks: Trek[] }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const offsetX = useRef(0);
  const dragStartOffset = useRef(0);
  const animationRef = useRef<number | null>(null);
  const speed = 0.5;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const tick = () => {
      if (!isDragging.current) {
        offsetX.current -= speed;

        // Reset when we've scrolled one full copy width
        const halfWidth = track.scrollWidth / 2;
        if (Math.abs(offsetX.current) >= halfWidth) {
          offsetX.current += halfWidth;
        }
      }

      track.style.transform = `translateX(${offsetX.current}px)`;
      animationRef.current = requestAnimationFrame(tick);
    };

    animationRef.current = requestAnimationFrame(tick);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX;
    dragStartOffset.current = offsetX.current;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    offsetX.current = dragStartOffset.current + (e.pageX - startX.current);
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX;
    dragStartOffset.current = offsetX.current;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    offsetX.current =
      dragStartOffset.current + (e.touches[0].pageX - startX.current);
  };

  const onTouchEnd = () => {
    isDragging.current = false;
  };

  const loopedTreks = [...treks, ...treks];

  return (
    <div
      ref={containerRef}
      className="-mx-4 md:-mx-10 overflow-hidden cursor-grab active:cursor-grabbing select-none"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        ref={trackRef}
        className="flex gap-4 md:gap-6 px-4 md:px-10 pb-4 will-change-transform"
        style={{ width: "max-content" }}
      >
        {loopedTreks.map((trek, i) => (
          <div key={`${trek.id}-${i}`} className="shrink-0 w-[304px]">
            <TrekCard {...trek} href={`/treks/${trek.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrekCarousel;
