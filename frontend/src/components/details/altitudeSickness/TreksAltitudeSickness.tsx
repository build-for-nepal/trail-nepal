'use client';

import { useState, useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { altitudeSicknessData } from '@/static/altitudesickness';
import { AlertTriangle, Check, ChevronDown, OctagonAlert } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionHeader from '@/components/common/SectionHeader';
import { cn } from '@/lib/utils';
import ContactInfoSidebar from './ContactInfoSidebar';
import Image from 'next/image';
import amsHeadache from 'src/assets/altitudesickness/ams-headache.svg';

const getSeverityStyle = (
  label: string,
): {
  cardStyle: string;
  titleStyle: string;
  descStyle: string;
  iconBg: string;
  icon: LucideIcon;
} => {
  const l = label.toLowerCase();

  if (l.includes('mild') || l.includes('possible')) {
    return {
      cardStyle: 'bg-[#F0FDF4] border border-[#BBF7D0]',
      titleStyle: 'text-[#14532D] font-bold',
      descStyle: 'text-[#166534]',
      iconBg: 'bg-[#22C55E]',
      icon: Check,
    };
  }

  if (l.includes('moderate') || l.includes('probable')) {
    return {
      cardStyle: 'bg-[#FEFCE8] border border-[#FEF08A]',
      titleStyle: 'text-[#713F12] font-bold',
      descStyle: 'text-[#854D0E]',
      iconBg: 'bg-[#EAB308]',
      icon: AlertTriangle,
    };
  }

  return {
    cardStyle: 'bg-[#FEF2F2] border border-[#FECACA]',
    titleStyle: 'text-[#7F1D1D] font-bold',
    descStyle: 'text-[#991B1B]',
    iconBg: 'bg-[#EF4444]',
    icon: OctagonAlert,
  };
};

type Props = { trekId: string };

const TreksAltitudeSickness = ({ trekId }: Props) => {
  const dataKeys = Object.keys(
    altitudeSicknessData,
  ) as (keyof typeof altitudeSicknessData)[];
  const lastKey = dataKeys[dataKeys.length - 1];

  const [openSet, setOpenSet] = useState<Set<string>>(new Set([lastKey]));
  const [showMore, setShowMore] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const animatingRef = useRef<Record<string, boolean>>({});

  useGSAP(
    () => {
      gsap.from('.altitude-accordion-item', {
        y: 28,
        opacity: 0,
        duration: 0.55,
        stagger: 0.1,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
      });
      gsap.from('.altitude-sidebar', {
        x: 24,
        opacity: 0,
        duration: 0.6,
        delay: 0.2,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
      });
    },
    { scope: sectionRef },
  );

  const animatePanel = (key: string, opening: boolean) => {
    const el = contentRefs.current[key];
    if (!el || animatingRef.current[key]) return;
    animatingRef.current[key] = true;

    if (opening) {
      // measure natural height
      gsap.set(el, { display: 'block', height: 'auto', overflow: 'hidden' });
      const h = el.offsetHeight;
      gsap.fromTo(
        el,
        { height: 0, opacity: 0 },
        {
          height: h,
          opacity: 1,
          duration: 0.42,
          ease: 'power3.out',
          onComplete: () => {
            gsap.set(el, { height: 'auto', overflow: 'visible' });
            animatingRef.current[key] = false;
          },
        },
      );
    } else {
      gsap.set(el, { overflow: 'hidden' });
      gsap.to(el, {
        height: 0,
        opacity: 0,
        duration: 0.32,
        ease: 'power3.in',
        onComplete: () => {
          gsap.set(el, { display: 'none' });
          animatingRef.current[key] = false;
        },
      });
    }
  };

  const toggleAccordion = (key: string) => {
    const isOpen = openSet.has(key);

    if (isOpen && openSet.size === 1) {
      // can't close the last open one – swap to the other end
      const idx = dataKeys.indexOf(key as (typeof dataKeys)[number]);
      const fallback =
        idx === dataKeys.length - 1
          ? dataKeys[0]
          : dataKeys[dataKeys.length - 1];

      setOpenSet(new Set([fallback]));
      animatePanel(key, false);
      animatePanel(fallback, true);
      return;
    }

    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
    animatePanel(key, !isOpen);
  };

  useEffect(() => {
    dataKeys.forEach((key) => {
      const el = contentRefs.current[key];
      if (!el) return;
      if (!openSet.has(key)) {
        gsap.set(el, { display: 'none', height: 0, opacity: 0 });
      } else {
        gsap.set(el, { display: 'block', height: 'auto', opacity: 1 });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={sectionRef} className={cn('w-full bg-[#EBF0F8]')}>
      <div className="mx-auto flex flex-col px-6 sm:px-10 lg:px-20 py-16 lg:py-24 gap-12 lg:gap-16">
        <SectionHeader
          title="Altitude & Safety"
          description="Comprehensive health guidance and immediate response tools for the high altitude trekker."
        />

        <div className="flex flex-col md:flex-row gap-5 items-stretch">
          {/* accordian */}
          <div className="flex-1 flex flex-col gap-3 min-w-0">
            {dataKeys.map((key) => {
              const item = altitudeSicknessData[key];
              const isOpen = openSet.has(key);

              return (
                <div
                  key={key}
                  className="altitude-accordion-item bg-white rounded-2xl shadow-sm overflow-hidden"
                >
                  {/* Header */}
                  <button
                    onClick={() => toggleAccordion(key)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span
                      className="text-[15px] text-gray-800 tracking-[-0.01em]"
                      style={{ fontFamily: "'Oldenburg', serif" }}
                    >
                      {key}
                    </span>
                    <span
                      className="shrink-0 ml-4 text-gray-400 transition-transform duration-300 cursor-pointer"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    >
                      <ChevronDown className="cursor-pointer" />
                    </span>
                  </button>

                  {/* Expandable content */}
                  <div
                    ref={(el) => {
                      contentRefs.current[key] = el;
                    }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="px-6 pb-7 flex flex-col gap-6">
                      {/* Description */}
                      <div>
                        <p className="text-[10px] font-bold tracking-widest uppercase text-[#30628A] mb-2">
                          What it is?
                        </p>
                        <p className="text-sm text-[#434843] leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Symptoms grid */}
                      <div>
                        <p className="text-[10px] font-bold tracking-widest uppercase text-[#30628A] mb-3">
                          Symptoms
                        </p>
                        <div className="grid grid-cols-4 gap-2">
                          {item.symptoms.map((s) => {
                            return (
                              <div
                                key={s.name}
                                className="flex flex-col items-center gap-1.5 bg-gray-50 rounded-xl py-3 px-1"
                              >
                                <span
                                  className={cn(
                                    'w-7 h-7 rounded-full flex items-center justify-center',
                                  )}
                                >
                                  <Image
                                    src={s.icon || amsHeadache}
                                    alt={s.name}
                                    className="w-full h-full"
                                  />
                                </span>
                                <span className="text-[10px] text-center text-[#0D1D2A] leading-tight">
                                  {s.name}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Severity levels */}
                      <div>
                        <p className="text-[10px] font-bold tracking-widest uppercase text-[#30628A] mb-3">
                          Severity Levels
                        </p>
                        <div className="flex flex-col gap-2">
                          {Object.entries(item.severity).map(
                            ([level, action], idx) => {
                              const style = getSeverityStyle(level);
                              const Icon = style.icon;

                              return (
                                <div
                                  key={level}
                                  className={cn(
                                    'flex gap-2 rounded-xl px-4 py-3 border',
                                    style.cardStyle,
                                  )}
                                >
                                  <span
                                    className={cn(
                                      'w-8 h-8 rounded-full flex items-center justify-center text-white text-[8px] font-bold shrink-0',
                                      style.iconBg,
                                    )}
                                  >
                                    <Icon className="w-4 h-4" />
                                  </span>
                                  <div className="flex flex-col gap-1">
                                    <p
                                      className={cn(
                                        'text-[11px] leading-relaxed font-bold capitalize',
                                        style.titleStyle,
                                      )}
                                    >
                                      {level}
                                    </p>
                                    <p
                                      className={cn(
                                        'text-[11px]',
                                        style.descStyle,
                                      )}
                                    >
                                      {action}
                                    </p>
                                  </div>
                                </div>
                              );
                            },
                          )}
                        </div>
                      </div>

                      {/* prevention tips */}
                      <div>
                        <p className="text-[10px] font-bold tracking-widest uppercase text-[#30628A] mb-3">
                          Prevention Tips
                        </p>
                        <ul className="flex flex-col gap-1.5">
                          {item.prevention_tips.map((tip) => (
                            <li key={tip} className="flex items-center gap-2">
                              <Check className="w-3 h-3 text-blue-500" />
                              <span className="text-[12px] text-gray-600 leading-relaxed">
                                {tip}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* sidebar  */}
          <div className="altitude-sidebar ">
            <ContactInfoSidebar
              trekId={trekId}
              showMore={showMore}
              setShowMore={setShowMore}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreksAltitudeSickness;
