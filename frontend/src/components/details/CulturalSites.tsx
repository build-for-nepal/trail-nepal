'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ChevronDown, ChevronsDownUp, ChevronsUpDown, Clock } from 'lucide-react';

import SectionHeader from '../common/SectionHeader';
import CulturalMap from './map/CulturalMap';
import { cn } from '@/lib/utils';
import type { CulturalSite } from '@/types/cultural';
import type { TrekTimelineDay } from '@/types/trek';
import type { DayFocus } from '@/types/map';

const SiteItem = ({
  site,
  open,
  onToggle,
  suppressScrollRef,
  listRef,
}: {
  site: CulturalSite;
  open: boolean;
  onToggle: () => void;
  suppressScrollRef: React.RefObject<boolean>;
  listRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const didMount = useRef(false);

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

  const paragraphs = (site.description || '')
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
        <span className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full text-white text-[11px] font-bold"
          style={{ backgroundColor: '#376BB6' }}
        >
          {String(site.order).padStart(2, '0')}
        </span>

        <span
          className="flex-1 text-sm sm:text-base font-semibold tracking-tight text-black/80"
          style={{ fontFamily: 'var(--font-poppins), serif' }}
        >
          {site.name}
        </span>

        {site.isHighlight && (
          <span className="hidden sm:inline-flex items-center rounded-full bg-[#8dc63f]/15 px-2.5 py-0.5 text-[10px] font-bold text-[#4d7c16]">
            Highlight
          </span>
        )}

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

          {(site.openHours || site.entryInfo) && (
            <>
              <div className="h-px bg-[#E2E8F0] w-full" />
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {site.openHours && (
                  <span className="flex items-center justify-center gap-1 text-xs text-black cursor-text select-text">
                    <Clock size={14} strokeWidth={2.2} />
                    {site.openHours}
                  </span>
                )}
                {site.entryInfo && (
                  <span className="text-xs font-medium text-[#b45309] cursor-text select-text">
                    {site.entryInfo}
                  </span>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// Adapt cultural sites into the map/weather waypoint shape (TrekTimelineDay).
// The season section derives weather locations from `coordinates` and `title`;
// site names come through clean because labelFromTitle strips trek/hike
// prefixes. Cultural popups are built by buildSitePopupHTML, so `variant` is
// only used to keep the waypoint type honest.
export const toSiteWaypoints = (sites: CulturalSite[]): TrekTimelineDay[] =>
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

const CulturalSites = ({
  sites,
  tourName,
}: {
  sites: CulturalSite[];
  tourName: string;
}) => {
  const [openStates, setOpenStates] = useState<boolean[]>(() =>
    sites.map((_, i) => i === 0),
  );

  const allOpen = openStates.length > 0 && openStates.every(Boolean);

  const [focus, setFocus] = useState<DayFocus | null>(null);
  const focusSite = useCallback((index: number) => {
    setFocus((prev) => ({ index, nonce: (prev?.nonce ?? 0) + 1 }));
  }, []);

  const toggleItem = (index: number) => {
    const willOpen = !openStates[index];
    setOpenStates((prev) => prev.map((v, i) => (i === index ? !v : v)));
    if (willOpen) focusSite(index);
  };

  const openFromMap = useCallback(
    (index: number) => {
      setOpenStates((prev) => prev.map((_, i) => i === index));
      focusSite(index);
    },
    [focusSite],
  );

  const suppressScrollRef = useRef(false);
  const toggleAll = () => {
    suppressScrollRef.current = true;
    setOpenStates(sites.map(() => !allOpen));
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
      <div className="page-wrapper py-20 flex flex-col gap-8">
        <SectionHeader
          title="Heritage Sites"
          description="The places that make up the tour"
          id="sites"
        />

        <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-sm lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)]">
          {/* Site list */}
          <div className="flex flex-col p-4 sm:p-6 lg:h-[640px]">
            <div className="mb-4 flex shrink-0 items-center justify-between gap-3">
              <h3
                className="text-xl font-bold tracking-tight text-black/90"
                style={{ fontFamily: 'var(--font-poppins), serif' }}
              >
                {tourName} Sites
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
              {sites.map((site, index) => (
                <div key={site.order || index} className="cultural-site-item">
                  <SiteItem
                    site={site}
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
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulturalSites;