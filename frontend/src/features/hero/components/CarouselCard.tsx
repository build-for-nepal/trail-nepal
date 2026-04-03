import { useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Slide, CardOffset } from "../../../types/homepage";
import { TRANSITION_DURATION_MS, SHADOW_MAP } from "../constants";
import { getCardStyle } from "@/lib/helper";

interface CarouselCardProps {
  slide: Slide;
  offset: number;
  onClick: () => void;
}

const SIZES_MAP: Record<CardOffset, string> = {
  0: "384px", // 24rem
  1: "256px", // 16rem
  2: "192px", // 12rem
};

export const CarouselCard = ({ slide, offset, onClick }: CarouselCardProps) => {
  const s = getCardStyle(offset);
  const isActive = offset === 0;
  const isInteractive = !isActive && s.pointerEvents === "auto";

  const isVisibleOffset = offset in SHADOW_MAP;

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick();
      }
    },
    [onClick],
  );

  return (
    <div
      role={isInteractive ? "button" : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      aria-label={isInteractive ? `Go to slide: ${slide.title}` : undefined}
      aria-current={isActive ? true : undefined}
      onClick={isInteractive ? onClick : undefined}
      onKeyDown={isInteractive ? handleKeyDown : undefined}
      style={{
        transitionDuration: `${TRANSITION_DURATION_MS}ms`,
        left: `${s.leftRem}rem`,
        top: s.top,
        width: `${s.widthRem}rem`,
        height: `${s.heightRem}rem`,
        zIndex: s.zIndex,
        opacity: s.opacity,
        pointerEvents: s.pointerEvents,
      }}
      className={cn(
        "absolute transition-all ease-[cubic-bezier(0.25,1,0.5,1)]",
        "overflow-hidden shrink-0 group rounded-[2.5rem]",
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
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
  );
};
