'use client';

import { Gallery } from '@/components/details/Gallery';
import GearCheckList from '@/components/details/GearCheckList';
import TrekTimeline from '@/components/details/TrekTimeline';
import TreksExpect from '@/components/details/TreksExpect';
import TreksHeader from '@/components/details/TreksHeader';
import TreksSeason from '@/components/details/TreksSeason';
import TreksHero from '@/components/details/TreksHero';
import Footer from '@/components/layout/footer/Footer';
import TrialUpdate from '@/components/details/TrialUpdate';
import TreksAltitudeSickness from '@/components/details/altitudeSickness/TreksAltitudeSickness';
import { Suspense, useEffect, useRef, useState } from 'react';
import SubNav from 'src/components/layout/navigation/SubNav';
import { TREK_DETAILS } from '@/static/trekDetails';

type Props = {
  trekId: string;
};

const TrekDetailsContent = ({ trekId }: Props) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [showSubNav, setShowSubNav] = useState(false);

  // Resolve the trek's data once here (the composition root) and pass slices as
  // props; the shared detail sections stay presentational and content-agnostic.
  const trek = TREK_DETAILS[trekId];

  // "What to Expect" hero: prefer a portrait gallery image, else the first.
  const expectImage =
    trek?.gallery?.find((img) => img.type === 'portrait')?.url ||
    trek?.gallery?.[0]?.url ||
    '/images/ABC.jpg';

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const hero = heroRef.current;
      const rect = hero.getBoundingClientRect();

      // Trigger when user scrolls past middle of hero
      const triggerPoint = rect.height / 4;

      setShowSubNav(-rect.top >= triggerPoint);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-full flex flex-col bg-(--color-surface-page)">
      <TreksHeader trekId={trekId} />

      <div className="relative">
        {/* Animated Sticky Subnav */}
        <div
          className={`fixed top-0 left-0 w-full z-[999] transform transition-all duration-500 ease-out ${
            showSubNav
              ? 'translate-y-0 opacity-100'
              : '-translate-y-full opacity-0 pointer-events-none'
          }`}
        >
          <SubNav />
        </div>

        {/* Hero Section */}
        <div ref={heroRef}>
          <TreksHero trekId={trekId} />
        </div>

        <Suspense fallback={null}>
          <TrekTimeline trekId={trekId} />
        </Suspense>

        <TreksSeason
          seasonalPlanning={trek?.seasonalPlanning ?? []}
          region={trek?.region ?? ''}
          waypoints={trek?.timeline ?? []}
          name={trek?.name ?? ''}
          bestSeasons={trek?.meta?.bestSeasons}
        />
        <TreksExpect
          expectations={trek?.expectations ?? []}
          overview={trek?.overview ?? ''}
          imageSrc={expectImage}
          name={trek?.name ?? ''}
        />
        <TreksAltitudeSickness trekId={trekId} />
        {/* <TrialUpdate trekId={trekId} /> */}
        <GearCheckList gearChecklist={trek?.gearChecklist} />
        <Gallery images={trek?.gallery} />
      </div>

      <Footer />
    </div>
  );
};

export default TrekDetailsContent;
