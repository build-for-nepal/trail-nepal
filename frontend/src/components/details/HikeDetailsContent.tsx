'use client';

import { Suspense, useEffect, useRef, useState } from 'react';

import { Gallery } from '@/components/details/Gallery';
import GearCheckList from '@/components/details/GearCheckList';
import TrekTrivia from '@/components/details/TrekTrivia';
import TreksExpect from '@/components/details/TreksExpect';
import TreksSeason from '@/components/details/TreksSeason';
import Footer from '@/components/layout/footer/Footer';
import SubNav, { HIKE_NAV_ITEMS } from '@/components/layout/navigation/SubNav';
import { HIKE_DETAILS } from '@/static/hikeDetails';

import HikeHeader from './HikeHeader';
import HikeHero from './HikeHero';
import HikeRoute, { toWaypoints } from './HikeRoute';

type Props = {
  hikeId: string;
};

// Day hikes carry a light pack, so the weight-band thresholds sit well below the
// multi-day trek defaults ({ light: 3, optimal: 7, heavy: 12 }).
const HIKE_LOAD_THRESHOLDS = { light: 2, optimal: 4, heavy: 7 };

const HikeDetailsContent = ({ hikeId }: Props) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [showSubNav, setShowSubNav] = useState(false);

  const hike = HIKE_DETAILS[hikeId];

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const triggerPoint = rect.height / 4;

      setShowSubNav(-rect.top >= triggerPoint);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!hike) return null;

  // "What to Expect" hero: prefer a portrait gallery image, else the first.
  const expectImage =
    hike.gallery?.find((img) => img.type === 'portrait')?.url ||
    hike.gallery?.[0]?.url ||
    '/images/ABC.jpg';

  return (
    <div className="w-full flex flex-col bg-(--color-surface-page)">
      <HikeHeader hike={hike} />

      <div className="relative">
        {/* Animated Sticky Subnav */}
        <div
          className={`fixed top-0 left-0 w-full z-[999] transform transition-all duration-500 ease-out ${
            showSubNav
              ? 'translate-y-0 opacity-100'
              : '-translate-y-full opacity-0 pointer-events-none'
          }`}
        >
          <SubNav items={HIKE_NAV_ITEMS} />
        </div>

        {/* Overview */}
        <div ref={heroRef}>
          <HikeHero hike={hike} />
        </div>

        <Suspense fallback={null}>
          <HikeRoute route={hike.route} geojsonId={hike.id} />
        </Suspense>

        <TreksSeason
          seasonalPlanning={hike.seasonalPlanning}
          region={hike.region}
          waypoints={toWaypoints(hike.route)}
          name={hike.name}
          bestSeasons={hike.meta.bestSeasons}
        />
        <TreksExpect
          expectations={hike.expectations}
          summary={hike.summary}
          imageSrc={expectImage}
          name={hike.name}
        />
        <GearCheckList
          gearChecklist={hike.gearChecklist}
          loadThresholds={HIKE_LOAD_THRESHOLDS}
        />
        <Gallery images={hike.gallery} />
        <TrekTrivia trekId={hikeId} triviaNameOverride={hike.name} />
      </div>

      <Footer />
    </div>
  );
};

export default HikeDetailsContent;
