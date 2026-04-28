"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import type {
  Slide,
  CardOffset,
  CarouselCardProps,
} from "../../../types/homepage";
import {
  TRANSITION_DURATION_MS,
  SHADOW_MAP,
  SIZES_MAP,
} from "../../../static/constants";
import { getCardStyle } from "@/lib/helper";

export const CarouselCard = ({ slide, offset, onClick }: CarouselCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const s = getCardStyle(offset);

  const isActive = offset === 0;
  const isInteractive = !isActive && s.pointerEvents === "auto";
  const isVisibleOffset = offset in SHADOW_MAP;

  const initialStyles = useRef({
    left: `${s.leftRem}rem`,
    top: s.top,
    width: `${s.widthRem}rem`,
    height: `${s.heightRem}rem`,
    zIndex: s.zIndex,
    opacity: s.opacity,
    pointerEvents: s.pointerEvents,
  }).current;

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick();
      }
    },
    [onClick],
  );

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.set(cardRef.current, {
      zIndex: s.zIndex,
      pointerEvents: s.pointerEvents,
    });

    gsap.to(cardRef.current, {
      left: `${s.leftRem}rem`,
      top: s.top,
      width: `${s.widthRem}rem`,
      height: `${s.heightRem}rem`,
      opacity: s.opacity,
      duration: TRANSITION_DURATION_MS / 1000,
      ease: "power3.out",
    });
  }, [s]);

  return (
    <div
      ref={cardRef}
      role={isInteractive ? "button" : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      aria-label={isInteractive ? `Go to slide: ${slide.title}` : undefined}
      aria-current={isActive ? true : undefined}
      onClick={isInteractive ? onClick : undefined}
      onKeyDown={isInteractive ? handleKeyDown : undefined}
      style={initialStyles}
      className={cn(
        "absolute overflow-hidden shrink-0 group rounded-[2.5rem]",
        isVisibleOffset && SHADOW_MAP[offset as CardOffset],
        isActive && "border-[5px] border-white",
        isInteractive &&
          "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
      )}
    >
      <Image
        src={slide.imageSrc}
        alt={slide.title}
        fill
        sizes={isVisibleOffset ? SIZES_MAP[offset as CardOffset] : "192px"}
        priority={Math.abs(offset) <= 1}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
  );
};
