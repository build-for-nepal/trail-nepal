'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import startRoute from '@/assets/details/routestart.svg';
import FlagLine from '@/assets/details/flagline.svg';
import clock from '@/assets/details/clock.svg';
import mapLine from '@/assets/details/mapline.svg';
import blackMountain from '@/assets/details/blackmountain.svg';
import alertLine from '@/assets/details/alertline.svg';
import moneyBag from '@/assets/details/moneybag.svg';
import Image from 'next/image';
import { ChevronDown, ChevronsDownUp, ChevronsUpDown } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { cn } from '@/lib/utils';
import { TrekTimelineDay } from '@/types/trek';
import { TREK_DETAILS } from '@/static/trekDetails';
import TrekkingMap from './map/TrekkingMap';
// import FoodMenu from './FoodMenu';

const AccordionItem = ({
  day,
  isFirst,
  isLast,
  open,
  onToggle,
  suppressScrollRef,
  listRef,
}: {
  day: TrekTimelineDay;
  isFirst: boolean;
  isLast: boolean;
  open: boolean;
  onToggle: () => void;
  suppressScrollRef: React.RefObject<boolean>;
  listRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const didMount = useRef(false);

  // Set the initial open/closed state once, without animating.
  useGSAP(
    () => {
      if (!bodyRef.current) return;
      gsap.set(bodyRef.current, {
        height: open ? 'auto' : 0,
        opacity: open ? 1 : 0,
        display: open ? 'block' : 'none',
      });
      if (chevronRef.current)
        gsap.set(chevronRef.current, { rotate: open ? 180 : 0 });
    },
    { scope: containerRef },
  );

  // Animate whenever the controlled `open` prop changes (after first mount).
  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }
    const body = bodyRef.current;
    const chevron = chevronRef.current;
    if (!body || !chevron) return;

    // Cancel any in-flight tween so rapid toggles animate from the current
    // height instead of snapping to full/zero first.
    gsap.killTweensOf(body);
    const startH = body.getBoundingClientRect().height;

    if (open) {
      gsap.set(body, { display: 'block', height: 'auto' });
      const fullH = body.scrollHeight;
      gsap.fromTo(
        body,
        { height: startH, opacity: startH === 0 ? 0 : 1 },
        {
          height: fullH,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          onComplete: () => gsap.set(body, { height: 'auto' }),
        },
      );
      gsap.to(chevron, { rotate: 180, duration: 0.4, ease: 'power2.out' });

      // Scroll this day's header up into view *at the same time* as it expands,
      // so it reads as one motion (skipped during "Expand all"). The item's own
      // top position is stable while it grows, so the target is accurate now.
      const list = listRef.current;
      const item = containerRef.current;
      if (!suppressScrollRef.current && list && item) {
        const delta =
          item.getBoundingClientRect().top - list.getBoundingClientRect().top;
        if (Math.abs(delta - 12) > 4) {
          const target = Math.max(0, list.scrollTop + delta - 12);
          gsap.to(list, {
            scrollTop: target,
            duration: 0.5,
            ease: 'power2.out',
          });
        }
      }
    } else {
      gsap.set(body, { height: startH });
      gsap.to(body, {
        height: 0,
        opacity: 0,
        duration: 0.45,
        ease: 'power2.inOut',
        onComplete: () => gsap.set(body, { display: 'none' }),
      });
      gsap.to(chevron, { rotate: 0, duration: 0.4, ease: 'power2.out' });
    }
  }, [open]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'bg-white overflow-hidden transition-shadow duration-200',
        'border border-[#E2E8F0] rounded-2xl',
        open ? 'shadow-sm' : 'hover:shadow-sm',
      )}
    >
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 px-5 py-4 text-left focus:outline-none cursor-pointer"
        aria-expanded={open}
      >
        <span className="shrink-0 w-5 h-5 flex items-center justify-center">
          {isFirst ? (
            <Image src={startRoute} alt="start" width={18} height={18} />
          ) : isLast ? (
            <Image src={FlagLine} alt="finish" width={18} height={18} />
          ) : (
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: '#376BB6' }}
            />
          )}
        </span>

        <span
          className="flex-1 text-sm sm:text-base font-semibold tracking-tight text-black/80"
          style={{ fontFamily: 'var(--font-poppins), serif' }}
        >
          {day.day ? `Day ${day.day} : ${day.title}` : day.title}
        </span>

        <span
          ref={chevronRef}
          className="shrink-0 text-black"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <ChevronDown size={18} strokeWidth={2} />
        </span>
      </button>

      {/* Body */}
      <div
        ref={bodyRef}
        className="overflow-hidden"
        style={{ display: open ? 'block' : 'none' }}
      >
        <div className="px-5 pb-5 flex flex-col gap-4">
          {(day.description || day.content) &&
            (day.description || day.content || '')
              .split(/\n{2,}/)
              .map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm text-black/90 leading-relaxed cursor-text select-text"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}

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

          {(day.stats || day.price) && (
            <div className="h-px bg-[#E2E8F0] w-full" />
          )}

          {(day.stats || day.price) && (
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {day.stats && (
                <>
                  {(day.stats.duration || day.stats.walk) && (
                    <StatPill
                      icon={clock}
                      alt="time"
                      value={(day.stats.duration || day.stats.walk) as string}
                    />
                  )}
                  {day.stats.distance && (
                    <StatPill
                      icon={mapLine}
                      alt="distance"
                      value={day.stats.distance}
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
                <span className="flex items-center gap-1.5 text-sm font-bold text-black cursor-text select-text">
                  <Image src={moneyBag} alt="price" width={18} height={18} />
                  {(() => {
                    const str = day.price as string;
                    const idx = str.indexOf('(');
                    if (idx === -1) return str;
                    return (
                      <>
                        <span>{str.slice(0, idx)}</span>
                        <span className="font-normal text-black/50 text-xs">
                          {str.slice(idx)}
                        </span>
                      </>
                    );
                  })()}
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
      <Image src={icon} alt={alt ?? 'stats'} width={14} height={14} />
    ) : null}
    {value}
  </span>
);

const TrekTimeline = ({ trekId }: { trekId?: string }) => {
  // const hasFoodMenu = !!(trekId && TREK_DETAILS[trekId]?.foodMenu);
  const [hasPrice, setHasPrice] = useState(false);

  const days =
    trekId && TREK_DETAILS[trekId] ? TREK_DETAILS[trekId].timeline : [];

  // Controlled open/closed state for every accordion item (first day open by default).
  const [openStates, setOpenStates] = useState<boolean[]>(() =>
    days.map((_, i) => i === 0),
  );

  // Keep the open-state array in sync if the trek (and its day count) changes.
  useEffect(() => {
    setOpenStates(days.map((_, i) => i === 0));
  }, [days.length]);

  const allOpen = openStates.length > 0 && openStates.every(Boolean);

  const toggleItem = (index: number) =>
    setOpenStates((prev) => prev.map((v, i) => (i === index ? !v : v)));
  const openDayFromMap = useCallback((index: number) => {
    setOpenStates((prev) => prev.map((_, i) => i === index));
  }, []);
  // While an "Expand all" is in flight, items skip their scroll-into-view.
  const suppressScrollRef = useRef(false);
  const toggleAll = () => {
    suppressScrollRef.current = true;
    setOpenStates(days.map(() => !allOpen));
    setTimeout(() => {
      suppressScrollRef.current = false;
    }, 700);
  };

  const sectionRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (days && days.length > 0 && days.some((day) => day.price)) {
      setHasPrice(true);
    } else {
      setHasPrice(false);
    }
  }, [days]);

  // ── GSAP accordion stagger on mount
  useGSAP(
    () => {
      gsap.from('.accordion-item', {
        y: 24,
        opacity: 0,
        duration: 0.5,
        stagger: 0.09,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
      });
    },
    { scope: sectionRef },
  );

  if (!days || days.length === 0) return null;

  return (
    <div ref={sectionRef} className="relative flex flex-col gap-6 bg-[#EBF0F8]">
      <div className="page-wrapper py-20 flex flex-col gap-8">
        <SectionHeader
          title="Trek Timeline"
          description="Day-by-day breakdown of your journey"
          id="timeline"
        />

        {/* ── Split view: itinerary list (left) + map (right), merged as one card ── */}
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-sm lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)]">
          {/* Itinerary list */}
          <div className="flex flex-col p-4 sm:p-6 lg:h-[640px]">
            <div className="mb-4 flex shrink-0 items-center justify-between gap-3">
              <h3
                className="text-xl font-bold tracking-tight text-black/90"
                style={{ fontFamily: 'var(--font-poppins), serif' }}
              >
                {days.length} - day itinerary
              </h3>

              <button
                onClick={toggleAll}
                className="flex items-center gap-1.5 rounded-full border border-[#E2E8F0] px-3 py-1.5 text-xs font-semibold text-[#376BB6] transition-colors hover:bg-[#376BB6]/5 cursor-pointer"
              >
                {allOpen ? (
                  <ChevronsDownUp size={14} />
                ) : (
                  <ChevronsUpDown size={14} />
                )}
                {allOpen ? 'Close all' : 'Expand all'}
              </button>
            </div>

            <div
              ref={listRef}
              className="flex max-h-[520px] flex-col gap-3 overflow-y-auto pr-1 lg:max-h-none lg:flex-1"
            >
              {days.map((day, index) => (
                <div
                  key={day.id || day.day || index}
                  className="accordion-item"
                >
                  <AccordionItem
                    day={day}
                    isFirst={index === 0}
                    isLast={index === days.length - 1}
                    open={openStates[index] ?? false}
                    onToggle={() => toggleItem(index)}
                    suppressScrollRef={suppressScrollRef}
                    listRef={listRef}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="h-[420px] w-full bg-gray-100 lg:h-[640px]">
            <TrekkingMap trekId={trekId} onDayClick={openDayFromMap} />
          </div>
        </div>

        {/* ── Cost breakdown note ── */}
        <div className="flex items-center justify-center gap-2 text-center text-[#4B5563]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p className="text-sm font-medium italic">
            {hasPrice
              ? 'Estimated costs are approximate and may vary based on accommodation, meals, transportation, personal spending, and permit requirements.'
              : "We're currently preparing a detailed cost breakdown for this trek to help you plan better."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrekTimeline;
