'use client';

import { Suspense, useEffect, useRef, useState } from 'react';

import { Gallery } from '@/components/details/Gallery';
import TreksExpect from '@/components/details/TreksExpect';
import TreksSeason from '@/components/details/TreksSeason';
import Footer from '@/components/layout/footer/Footer';
import SubNav, {
  CULTURAL_NAV_ITEMS,
} from '@/components/layout/navigation/SubNav';
import { CULTURAL_TOUR_DETAILS } from '@/static/culturalTours';

import CulturalEntryFees from './CulturalEntryFees';
import CulturalHeader from './CulturalHeader';
import CulturalHero from './CulturalHero';
import CulturalSites, { toSiteWaypoints } from './CulturalSites';

type Props = {
  tourId: string;
};

/**
 * Entry Fees is hidden for now. The section and its sub-nav anchor are both gated
 * on this one switch, so flipping it back to `true` restores the feature without
 * touching anything else. The component and the per-tour `entryFees` data are
 * left in place deliberately.
 */
const SHOW_ENTRY_FEES = false;

const CulturalDetailsContent = ({ tourId }: Props) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [showSubNav, setShowSubNav] = useState(false);

  const tour = CULTURAL_TOUR_DETAILS[tourId];

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

  if (!tour) return null;

  // "What to Expect" hero: prefer a portrait gallery image, else the first.
  const expectImage =
    tour.gallery?.find((img) => img.type === 'portrait')?.url ||
    tour.gallery?.[0]?.url ||
    '/images/ABC.jpg';

  // Only tours with ticketed monuments publish a fee table, so the Entry Fees
  // anchor is added per tour instead of sitting in the shared cultural anchor
  // set — otherwise the other tours would carry a link to a missing section.
  const showEntryFees = SHOW_ENTRY_FEES && Boolean(tour.entryFees);

  const navItems = showEntryFees
    ? CULTURAL_NAV_ITEMS.flatMap((item) =>
        item.id === 'sites'
          ? [item, { label: 'Entry Fees', id: 'entryfees' }]
          : [item],
      )
    : CULTURAL_NAV_ITEMS;

  return (
    <div className="w-full flex flex-col bg-(--color-surface-page)">
      <CulturalHeader tour={tour} />

      <div className="relative">
        {/* Animated Sticky Subnav */}
        <div
          className={`fixed top-0 left-0 w-full z-[999] transform transition-all duration-500 ease-out ${
            showSubNav
              ? 'translate-y-0 opacity-100'
              : '-translate-y-full opacity-0 pointer-events-none'
          }`}
        >
          <SubNav items={navItems} />
        </div>

        {/* Overview */}
        <div ref={heroRef}>
          <CulturalHero tour={tour} />
        </div>

        <Suspense fallback={null}>
          <CulturalSites tour={tour} />
        </Suspense>

        {showEntryFees && tour.entryFees && (
          <CulturalEntryFees entryFees={tour.entryFees} />
        )}

        <TreksSeason
          seasonalPlanning={tour.seasonalPlanning}
          region={tour.region}
          waypoints={toSiteWaypoints(tour.sites)}
          name={tour.name}
          bestSeasons={tour.meta.bestSeasons}
        />
        <TreksExpect
          expectations={tour.expectations}
          summary={tour.summary}
          imageSrc={expectImage}
          name={tour.name}
        />
        <Gallery images={tour.gallery} />
      </div>

      <Footer />
    </div>
  );
};

export default CulturalDetailsContent;
