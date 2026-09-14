'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { ChevronDown, ChevronsDownUp, ChevronsUpDown } from 'lucide-react';

import startRoute from '@/assets/details/routestart.svg';
import FlagLine from '@/assets/details/flagline.svg';
import clock from '@/assets/details/clock.svg';
import mapLine from '@/assets/details/mapline.svg';

import SectionHeader from '../common/SectionHeader';
import { cn } from '@/lib/utils';
import type { HikeRouteSection } from '@/types/hike';
import type { TrekTimelineDay } from '@/types/trek';
import { DayFocus } from '@/types/map';
import TrekkingMap from './map/TrekkingMap';

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

const SectionItem = ({
  section,
  isFirst,
  isLast,
  open,
  onToggle,
  suppressScrollRef,
  listRef,
}: {
  section: HikeRouteSection;
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

      const list = listRef.current;
      const item = containerRef.current;
      if (!suppressScrollRef.current && list && item) {
        const delta =
          item.getBoundingClientRect().top - list.getBoundingClientRect().top;
        if (Math.abs(delta - 12) > 4) {
          const maxScroll = list.scrollHeight - list.clientHeight;
          const target = Math.min(
            Math.max(0, list.scrollTop + delta - 12),
            Math.max(0, maxScroll),
          );
          gsap.killTweensOf(list);
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

  const paragraphs = (section.description || '')
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

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
          {section.order} · {section.title}
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
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-sm text-black/90 leading-relaxed cursor-text select-text"
            >
              {paragraph}
            </p>
          ))}

          {section.terrain && (
            <div className="flex flex-col gap-1">
              <p className="text-xs font-semibold text-black/70 uppercase tracking-wider cursor-text select-text">
                Terrain
              </p>
              <p className="text-sm text-black/80 cursor-text select-text">
                {section.terrain}
              </p>
            </div>
          )}

          {(section.distanceMark || section.timeMark) && (
            <>
              <div className="h-px bg-[#E2E8F0] w-full" />
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {section.timeMark && (
                  <StatPill icon={clock} alt="time" value={section.timeMark} />
                )}
                {section.distanceMark && (
                  <StatPill
                    icon={mapLine}
                    alt="distance"
                    value={section.distanceMark}
                  />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// Adapt hike route sections into the map's waypoint shape (TrekTimelineDay).
// The map keys markers off `day` (label), `coordinates`, and `isDestination`;
// the season section reuses it to derive weather locations.
export const toWaypoints = (route: HikeRouteSection[]): TrekTimelineDay[] =>
  route.map((s) => ({
    day: s.order,
    title: s.title,
    description: s.description,
    coordinates: s.coordinates,
    isDestination: s.isDestination,
    variant: 'section',
    stats: {
      distance: s.distanceMark ?? null,
      duration: s.timeMark ?? null,
    },
  }));

const HikeRoute = ({
  route,
  geojsonId,
}: {
  route: HikeRouteSection[];
  geojsonId: string;
}) => {
  // First section open by default. Each /hikes/[id] page remounts per static
  // param, so the initial state is correct without a reset effect.
  const [openStates, setOpenStates] = useState<boolean[]>(() =>
    route.map((_, i) => i === 0),
  );

  const allOpen = openStates.length > 0 && openStates.every(Boolean);

  const [focus, setFocus] = useState<DayFocus | null>(null);
  const focusSection = useCallback((index: number) => {
    setFocus((prev) => ({ index, nonce: (prev?.nonce ?? 0) + 1 }));
  }, []);

  const toggleItem = (index: number) => {
    const willOpen = !openStates[index];
    setOpenStates((prev) => prev.map((v, i) => (i === index ? !v : v)));
    if (willOpen) focusSection(index);
  };

  const openFromMap = useCallback(
    (index: number) => {
      setOpenStates((prev) => prev.map((_, i) => i === index));
      focusSection(index);
    },
    [focusSection],
  );

  const suppressScrollRef = useRef(false);
  const toggleAll = () => {
    suppressScrollRef.current = true;
    setOpenStates(route.map(() => !allOpen));
    setTimeout(() => {
      suppressScrollRef.current = false;
    }, 700);
  };

  const sectionRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('.hike-route-item', {
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

  if (!route || route.length === 0) return null;

  return (
    <div ref={sectionRef} className="relative flex flex-col gap-6 bg-[#EBF0F8]">
      <div className="page-wrapper py-20 flex flex-col gap-8">
        <SectionHeader
          title="Trail Route"
          description="Section-by-section breakdown of the walk"
          id="route"
        />

        <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-sm lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)]">
          {/* Section list */}
          <div className="flex flex-col p-4 sm:p-6 lg:h-[640px]">
            <div className="mb-4 flex shrink-0 items-center justify-between gap-3">
              <h3
                className="text-xl font-bold tracking-tight text-black/90"
                style={{ fontFamily: 'var(--font-poppins), serif' }}
              >
                {route.length} - section route
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
              style={{ overflowAnchor: 'none', scrollBehavior: 'auto' }}
              className="flex max-h-[520px] flex-col gap-3 overflow-y-auto pr-1 lg:max-h-none lg:flex-1"
            >
              {route.map((section, index) => (
                <div key={section.order || index} className="hike-route-item">
                  <SectionItem
                    section={section}
                    isFirst={index === 0}
                    isLast={index === route.length - 1}
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
            <TrekkingMap
              geojsonId={geojsonId}
              waypoints={toWaypoints(route)}
              flagAtStart={false}
              onDayClick={openFromMap}
              focus={focus}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HikeRoute;
