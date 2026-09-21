'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {
  ChevronDown,
  ChevronsDownUp,
  ChevronsUpDown,
  Route,
} from 'lucide-react';

import SectionHeader from '../common/SectionHeader';
import CulturalMap from './map/CulturalMap';
import Image from 'next/image';
import startRoute from '@/assets/details/routestart.svg';
import FlagLine from '@/assets/details/flagline.svg';
import { cn } from '@/lib/utils';
import { SITE_MARKER_COLOR } from '@/static/mapConstants';
import type { CulturalTourDay, CulturalTourDetail } from '@/types/cultural';
import type { SiteGroupFocus } from '@/types/map';
import type { TrekTimelineDay } from '@/types/trek';

// Adapt cultural sites into the map/weather waypoint shape (TrekTimelineDay).
// The season section derives weather locations from `coordinates` and `title`;
// site names come through clean because labelFromTitle strips trek/hike
// prefixes. Cultural popups are built by buildSitePopupHTML, so `variant` is
// only used to keep the waypoint type honest.
export const toSiteWaypoints = (
  sites: CulturalTourDetail['sites'],
): TrekTimelineDay[] =>
  sites.map((site) => ({
    day: String(site.order).padStart(2, '0'),
    title: site.name,
    description: site.description,
    coordinates: site.coordinates,
    variant: 'site',
    stats: {
      distance: null,
      duration: null,
    },
  }));

const DayItem = ({
  day,
  isFirst,
  isLast,
  open,
  onToggle,
  suppressScrollRef,
  listRef,
}: {
  day: CulturalTourDay;
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

  const paragraphs = (day.description || '')
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div
      ref={containerRef}
      className={cn(
        'overflow-hidden bg-white transition-shadow duration-200',
        'rounded-2xl border border-[#E2E8F0]',
        open ? 'shadow-sm' : 'hover:shadow-sm',
      )}
    >
      {/* Header */}
      <button
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center gap-3 px-5 py-4 text-left focus:outline-none"
        aria-expanded={open}
      >
        {/* Start icon on day 01, finish flag on the last day, plain dots
            between — matches TrekTimeline so the two itinerary accordions read
            the same. The per-day colour still distinguishes the pins on the
            map; client review asked for the coloured pin to be dropped from
            this list. */}
        <span className="flex h-5 w-5 shrink-0 items-center justify-center">
          {isFirst ? (
            <Image src={startRoute} alt="start" width={18} height={18} />
          ) : isLast ? (
            <Image src={FlagLine} alt="finish" width={18} height={18} />
          ) : (
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: '#376BB6' }}
            />
          )}
        </span>

        <span
          className="flex-1 text-sm font-semibold tracking-tight text-black/80 sm:text-base"
          style={{ fontFamily: 'var(--font-poppins), serif' }}
        >
          {day.day} : {day.title}
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
        <div className="flex flex-col gap-4 px-5 pb-5">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="cursor-text text-sm leading-relaxed text-black/90 select-text"
            >
              {paragraph}
            </p>
          ))}

          {day.transport && (
            <div className="flex items-center gap-2 text-xs text-black/70">
              <Route size={14} strokeWidth={2} className="shrink-0" />
              <span className="cursor-text select-text">{day.transport}</span>
            </div>
          )}

          {day.highlights.length > 0 && (
            <>
              <div className="h-px w-full bg-[#E2E8F0]" />
              {/* Plain text, not links: several authored highlights (transfer
                  legs, "Meditation spaces") name no mappable site, so making
                  them buttons would produce dead controls. Focus is day-level. */}
              <p className="cursor-text text-xs leading-relaxed text-black/70 italic select-text">
                <span className="font-semibold not-italic">Highlights: </span>
                {day.highlights.join(' · ')}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const CulturalSites = ({ tour }: { tour: CulturalTourDetail }) => {
  const { sites, itinerary } = tour;

  // Pin colour per site, inherited from the itinerary day that covers it.
  // Memoised because CulturalMapClient tears down and rebuilds every marker
  // whenever this array's identity changes.
  const siteColors = useMemo(() => {
    const dayById = new Map(itinerary.map((day) => [day.id, day]));
    return sites.map((site) => {
      const day = site.dayId ? dayById.get(site.dayId) : undefined;
      return day?.color ?? SITE_MARKER_COLOR;
    });
  }, [sites, itinerary]);

  // Sites belonging to each day, as positions into `sites` — the map frames
  // this group when a day opens.
  const siteIndicesByDay = useMemo(() => {
    const grouped = new Map<string, number[]>();
    sites.forEach((site, index) => {
      if (!site.dayId) return;
      const existing = grouped.get(site.dayId);
      if (existing) existing.push(index);
      else grouped.set(site.dayId, [index]);
    });
    return grouped;
  }, [sites]);

  // Reverse lookup for map pin clicks: site position → itinerary day position.
  const dayIndexBySite = useMemo(() => {
    const dayOrder = new Map(itinerary.map((day, index) => [day.id, index]));
    return sites.map((site) =>
      site.dayId ? (dayOrder.get(site.dayId) ?? -1) : -1,
    );
  }, [sites, itinerary]);

  // First day open by default. Each /cultural-tours/[id] page remounts per
  // static param, so the initial state is correct without a reset effect.
  const [openStates, setOpenStates] = useState<boolean[]>(() =>
    itinerary.map((_, i) => i === 0),
  );

  const allOpen = openStates.length > 0 && openStates.every(Boolean);

  // No focus is requested on mount, so the map keeps its whole-tour framing
  // until the reader actually picks a day.
  const [focus, setFocus] = useState<SiteGroupFocus | null>(null);

  const focusDay = useCallback(
    (index: number) => {
      const day = itinerary[index];
      const indices = day ? (siteIndicesByDay.get(day.id) ?? []) : [];
      if (indices.length === 0) return;
      setFocus((prev) => ({ indices, nonce: (prev?.nonce ?? 0) + 1 }));
    },
    [itinerary, siteIndicesByDay],
  );

  const toggleItem = (index: number) => {
    const willOpen = !openStates[index];
    setOpenStates((prev) => prev.map((v, i) => (i === index ? !v : v)));
    if (willOpen) focusDay(index);
  };

  // Clicking a pin opens the day that covers it and reframes on that day.
  const openFromMap = useCallback(
    (siteIndex: number) => {
      const dayIndex = dayIndexBySite[siteIndex];
      if (dayIndex < 0) return;
      setOpenStates((prev) => prev.map((_, i) => i === dayIndex));
      focusDay(dayIndex);
    },
    [dayIndexBySite, focusDay],
  );

  const suppressScrollRef = useRef(false);
  const toggleAll = () => {
    suppressScrollRef.current = true;
    setOpenStates(itinerary.map(() => !allOpen));
    setTimeout(() => {
      suppressScrollRef.current = false;
    }, 700);
  };

  const sectionRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('.cultural-site-item', {
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

  if (!sites || sites.length === 0) return null;

  return (
    <div ref={sectionRef} className="relative flex flex-col gap-6 bg-[#EBF0F8]">
      <div className="page-wrapper flex flex-col gap-8 py-20">
        <SectionHeader
          title="Sites & Itinerary"
          description="A day-by-day plan of the sites you'll visit, mapped below."
          id="sites"
        />

        <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-sm lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)]">
          {/* Day-by-day itinerary */}
          <div className="flex flex-col p-4 sm:p-6 lg:h-[640px]">
            <div className="mb-4 flex shrink-0 items-center justify-between gap-3">
              <h3
                className="text-xl font-bold tracking-tight text-black/90"
                style={{ fontFamily: 'var(--font-poppins), serif' }}
              >
                {itinerary.length} - days itinerary
              </h3>

              <button
                onClick={toggleAll}
                className="flex cursor-pointer items-center gap-1.5 rounded-full border border-[#E2E8F0] px-3 py-1.5 text-xs font-semibold text-[#376BB6] transition-colors hover:bg-[#376BB6]/5"
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
              {itinerary.map((day, index) => (
                <div key={day.id} className="cultural-site-item">
                  <DayItem
                    day={day}
                    isFirst={index === 0}
                    isLast={index === itinerary.length - 1}
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
            <CulturalMap
              sites={sites}
              onSiteClick={openFromMap}
              focus={focus}
              siteColors={siteColors}
              overviewZoom={tour.mapOverviewZoom}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulturalSites;
