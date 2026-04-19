"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import startRoute from "@/assets/details/routestart.svg";
import FlagLine from "@/assets/details/flagline.svg";
import clock from "@/assets/details/clock.svg";
import mapLine from "@/assets/details/mapline.svg";
import blackMountain from "@/assets/details/blackmountain.svg";
import alertLine from "@/assets/details/alertline.svg";
import moneyBag from "@/assets/details/moneybag.svg";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

import SectionHeader from "../common/SectionHeader";
import { cn } from "@/lib/utils";
import { TrekDay } from "@/types/details";
import { trekDays } from "@/static/details";
import { TREK_DETAILS } from "@/static/trekDetails";

const AccordionItem = ({
  day,
  index,
  isFirst,
  isLast,
}: {
  day: TrekDay;
  index: number;
  isFirst: boolean;
  isLast: boolean;
}) => {
  const [open, setOpen] = useState(index === 0);
  const bodyRef = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!bodyRef.current) return;
      gsap.set(bodyRef.current, {
        height: open ? "auto" : 0,
        opacity: open ? 1 : 0,
      });
    },
    { scope: containerRef },
  );

  const toggle = () => {
    if (!bodyRef.current || !chevronRef.current) return;

    if (!open) {
      gsap.set(bodyRef.current, { height: "auto", display: "block" });
      const fullH = bodyRef.current.scrollHeight;
      gsap.fromTo(
        bodyRef.current,
        { height: 0, opacity: 0 },
        { height: fullH, opacity: 1, duration: 0.45, ease: "power3.out" },
      );
      gsap.to(chevronRef.current, {
        rotate: 180,
        duration: 0.35,
        ease: "power2.out",
      });
    } else {
      const currentH = bodyRef.current.scrollHeight;
      gsap.set(bodyRef.current, { height: currentH });
      gsap.to(bodyRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.45,
        ease: "power3.inOut",
        onComplete: () => {
          if (bodyRef.current) gsap.set(bodyRef.current, { display: "none" });
        },
      });
      gsap.to(chevronRef.current, {
        rotate: 0,
        duration: 0.35,
        ease: "power2.out",
      });
    }

    setOpen((prev) => !prev);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "bg-white overflow-hidden transition-shadow duration-200",
        "border border-[#E2E8F0] rounded-2xl",
        open ? "shadow-sm" : "hover:shadow-sm",
      )}
    >
      {/* ── Header ── */}
      <button
        onClick={toggle}
        className="w-full flex items-center gap-3 px-5 py-4 text-left focus:outline-none cursor-pointer"
        aria-expanded={open}
      >
        {/* leading icon */}
        <span className="shrink-0 w-5 h-5 flex items-center justify-center">
          {isFirst ? (
            <Image src={startRoute} alt="start" width={18} height={18} />
          ) : isLast ? (
            <Image src={FlagLine} alt="finish" width={18} height={18} />
          ) : (
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: "#376BB6" }}
            />
          )}
        </span>

        <span
          className="flex-1 text-sm sm:text-[15px] font-semibold tracking-tight text-black/80"
          style={{ fontFamily: "'Oldenburg', serif" }}
        >
          {day.title}
        </span>

        <span
          ref={chevronRef}
          className="shrink-0 text-black"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <ChevronDown size={18} strokeWidth={2} />
        </span>
      </button>

      {/* ── Body ── */}
      <div
        ref={bodyRef}
        className="overflow-hidden"
        style={{ display: open ? "block" : "none" }}
      >
        <div className="px-5 pb-5 flex flex-col gap-4">
          {/* description */}
          {day.content && (
            <p className="text-sm text-black/90 leading-relaxed cursor-text select-text">
              {day.content}
            </p>
          )}

          {/* accommodation — mapped from data */}
          {day.accommodations && day.accommodations.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-black/70 uppercase tracking-wider mb-2 cursor-text select-text">
                Accommodation Detail
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-y-3 gap-x-12">
                {day.accommodations.map((acc, i) => (
                  <div
                    key={i}
                    className="flex flex-col cursor-text select-text"
                  >
                    {acc.name && (
                      <span className="text-sm font-medium text-black/70">
                        {acc.name}
                      </span>
                    )}
                    {acc.phone && (
                      <span className="text-sm font-medium text-black/80">
                        {acc.phone}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* divider */}
          {(day.stats || day.price) && (
            <div className="h-px bg-[#E2E8F0] w-full" />
          )}

          {/* stats + price */}
          {(day.stats || day.price) && (
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {day.stats && (
                <>
                  {day.stats.distance && (
                    <StatPill
                      icon={clock}
                      alt="time"
                      value={day.stats.distance}
                    />
                  )}
                  {day.stats.walk && (
                    <StatPill
                      icon={mapLine}
                      alt="distance"
                      value={day.stats.walk}
                    />
                  )}
                  {day.stats.elevation && (
                    <StatPill
                      icon={blackMountain}
                      alt="elevation"
                      value={day.stats.elevation}
                    />
                  )}
                  {day.stats.note && (
                    <span className="flex items-center gap-1 text-xs font-medium text-red-400 cursor-text select-text">
                      <Image
                        src={alertLine}
                        alt="alert"
                        width={14}
                        height={14}
                      />
                      {day.stats.note}
                    </span>
                  )}
                </>
              )}

              {day.price && (
                <span className="ml-auto flex items-center gap-1.5 text-sm font-bold text-black cursor-text select-text">
                  <Image src={moneyBag} alt="price" width={18} height={18} />
                  {day.price}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const StatPill = ({
  icon,
  alt,
  value,
}: {
  icon?: string | null;
  alt?: string;
  value: string;
}) => (
  <span className="flex items-center justify-center gap-1 text-xs text-black cursor-text select-text">
    {icon ? (
      <Image src={icon} alt={alt ?? "stats"} width={14} height={14} />
    ) : null}
    {value}
  </span>
);

const TrekTimeline = ({ trekId }: { trekId?: string }) => {
  const days =
    trekId && TREK_DETAILS[trekId] ? TREK_DETAILS[trekId].timeline : trekDays;

  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".accordion-item", {
        y: 24,
        opacity: 0,
        duration: 0.5,
        stagger: 0.09,
        ease: "power3.out",
        clearProps: "transform,opacity",
      });
    },
    { scope: sectionRef },
  );

  return (
    <div
      ref={sectionRef}
      className="page-wrapper py-20 flex flex-col gap-6 bg-[#EBF0F8]"
    >
      <SectionHeader
        title="Trek Timeline"
        description="Day-by-day breakdown of your journey"
      />

      <div className="flex flex-col w-full gap-3">
        {days.map((day, index) => (
          <div key={day.id ?? index} className="accordion-item">
            <AccordionItem
              day={day}
              index={index}
              isFirst={index === 0}
              isLast={index === days.length - 1}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrekTimeline;
