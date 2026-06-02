'use client';

import { useRef, useState, useEffect } from 'react';
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
import { ChevronDown } from 'lucide-react';
import { Map, List, UtensilsCrossed } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { cn } from '@/lib/utils';
import { TrekTimelineDay } from '@/types/trek';
import { TREK_DETAILS } from '@/static/trekDetails';
import TrekkingMap from './map/TrekkingMap';
import FoodMenu from './FoodMenu';
import { useSearchParams } from 'next/navigation';

type tabsValue = 'journey' | 'overview' | 'foodmenu';

const AccordionItem = ({
  day,
  index,
  isFirst,
  isLast,
}: {
  day: TrekTimelineDay;
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
        height: open ? 'auto' : 0,
        opacity: open ? 1 : 0,
      });
    },
    { scope: containerRef },
  );

  const toggle = () => {
    if (!bodyRef.current || !chevronRef.current) return;

    if (!open) {
      gsap.set(bodyRef.current, { height: 'auto', display: 'block' });
      const fullH = bodyRef.current.scrollHeight;
      gsap.fromTo(
        bodyRef.current,
        { height: 0, opacity: 0 },
        { height: fullH, opacity: 1, duration: 0.45, ease: 'power3.out' },
      );
      gsap.to(chevronRef.current, {
        rotate: 180,
        duration: 0.35,
        ease: 'power2.out',
      });
    } else {
      const currentH = bodyRef.current.scrollHeight;
      gsap.set(bodyRef.current, { height: currentH });
      gsap.to(bodyRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.45,
        ease: 'power3.inOut',
        onComplete: () => {
          if (bodyRef.current) gsap.set(bodyRef.current, { display: 'none' });
        },
      });
      gsap.to(chevronRef.current, {
        rotate: 0,
        duration: 0.35,
        ease: 'power2.out',
      });
    }

    setOpen((prev) => !prev);
  };

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
        onClick={toggle}
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
          className="flex-1 text-sm sm:text-[15px] font-semibold tracking-tight text-black/80"
          style={{ fontFamily: "'Oldenburg', serif" }}
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
          {(day.description || day.content) && (
            <p
              className="text-sm text-black/90 leading-relaxed cursor-text select-text space-y-4"
              dangerouslySetInnerHTML={{
                __html: day.description || day.content || '',
              }}
            />
          )}

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
                <span className="ml-auto flex items-center gap-1.5 text-sm font-bold text-black cursor-text select-text">
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
  const searchParams = useSearchParams();
  const validTabs: tabsValue[] = ['journey', 'overview', 'foodmenu'];
  const tabParam = searchParams.get('tab') as tabsValue;
  const [hasPrice, setHasPrice] = useState(false);
  const [activeView, setActiveView] = useState<tabsValue>(
    validTabs.includes(tabParam) ? tabParam : 'journey',
  );

  const setTabUrl = (tab: tabsValue) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('tab', tab);
    window.history.replaceState(null, '', `?${params.toString()}`);
  };

  const [bannerVisible, setBannerVisible] = useState(false);

  const days =
    trekId && TREK_DETAILS[trekId] ? TREK_DETAILS[trekId].timeline : [];

  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (days && days.length > 0 && days.some((day) => day.price)) {
      setHasPrice(true);
    } else {
      setHasPrice(false);
    }
  }, [days]);
  // ── Scroll-triggered banner
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setBannerVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ── GSAP accordion stagger on tab switch
  useGSAP(
    () => {
      if (activeView === 'overview') {
        gsap.from('.accordion-item', {
          y: 24,
          opacity: 0,
          duration: 0.5,
          stagger: 0.09,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        });
      }
    },
    { scope: sectionRef, dependencies: [activeView] },
  );

  if (!days || days.length === 0) return null;

  return (
    <div
      ref={sectionRef}
      className="relative  flex flex-col gap-6 bg-[#EBF0F8]"
    >
      {/* ── Scroll-triggered banner ── */}

      <div
        className={cn(
          'overflow-hidden sticky top-[48px] z-40 h-20 transition-all duration-500 ease-in-out',
          bannerVisible ? 'opacity-100' : 'opacity-0 pointer-events-none',
        )}
      >
        {!hasPrice && (
          <div className="flex items-center justify-center gap-2 px-4 py-3.5 sm:px-20 text-sm text-[#22416F] border-b  bg-yellow-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <p className="text-xs font-medium text-center">
              We're currently preparing a detailed cost breakdown for this trek
              to help you plan better.
            </p>
            <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#22416F]/10 tracking-wide flex-shrink-0">
              <span className="shimmer-text">Coming soon</span>
            </span>
          </div>
        )}
        {hasPrice && (
          <div className="flex items-center justify-center gap-2 px-4 py-3.5 sm:px-20 text-sm text-[#22416F] border-b  bg-yellow-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <p className="text-xs font-medium text-center">
              Estimated costs are approximate and may vary based on
              accommodation, meals, transportation, personal spending, and
              permit requirements.
            </p>
          </div>
        )}
      </div>

      <div className="page-wrapper pb-20  flex flex-col gap-6">
        <SectionHeader
          title="Trek Timeline"
          description="Day-by-day breakdown of your journey"
          id="timeline"
        />

        <div className="mx-auto flex items-center bg-white rounded-full p-1 shadow-sm border border-gray-200">
          <button
            onClick={() => {
              setTabUrl('journey');
              setActiveView('journey');
            }}
            className={cn(
              'flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300',
              activeView === 'journey'
                ? 'bg-[#84b829] text-white shadow-md'
                : 'text-gray-500 hover:text-gray-900',
            )}
          >
            <Map size={18} />
            Journey
          </button>
          <button
            onClick={() => {
              setTabUrl('overview');
              setActiveView('overview');
            }}
            className={cn(
              'flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300',
              activeView === 'overview'
                ? 'bg-[#84b829] text-white shadow-md'
                : 'text-gray-500 hover:text-gray-900',
            )}
          >
            <List size={18} />
            Overview
          </button>
          <button
            onClick={() => {
              setTabUrl('foodmenu');
              setActiveView('foodmenu');
            }}
            className={cn(
              'flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300',
              activeView === 'foodmenu'
                ? 'bg-[#84b829] text-white shadow-md'
                : 'text-gray-500 hover:text-gray-900',
            )}
          >
            <UtensilsCrossed size={18} />
            Food Menu
          </button>
        </div>

        <div className="w-full">
          {activeView === 'overview' ? (
            <div className="flex flex-col w-full gap-3">
              {days.map((day, index) => (
                <div
                  key={day.id || day.day || index}
                  className="accordion-item"
                >
                  <AccordionItem
                    day={day}
                    index={index}
                    isFirst={index === 0}
                    isLast={index === days.length - 1}
                  />
                </div>
              ))}
            </div>
          ) : activeView === 'journey' ? (
            <div className="w-full h-150 rounded-2xl overflow-hidden shadow-sm border border-gray-200 bg-gray-100 flex items-center justify-center">
              <TrekkingMap trekId={trekId} />
            </div>
          ) : (
            <FoodMenu />
          )}
        </div>
      </div>
    </div>
  );
};

export default TrekTimeline;
