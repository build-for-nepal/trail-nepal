'use client';

import { Suspense, useEffect, useRef, useState } from 'react';

import { Gallery } from '@/components/details/Gallery';
import TreksExpect from '@/components/details/TreksExpect';
import TreksSeason from '@/components/details/TreksSeason';
import Footer from '@/components/layout/footer/Footer';
import SubNav, {
  CULTURAL_NAV_ITEMS,
} from '@/components/layout/navigation/SubNav';
import { CRAFT_TOUR_DETAILS } from '@/static/craftTours';

import CulturalHeader from './CulturalHeader';
import CulturalHero from './CulturalHero';
import CulturalSites, { toSiteWaypoints } from './CulturalSites';
import CraftPlaceList from './CraftPlaceList';
import CraftWorkshopOptions from './CraftWorkshopOptions';

type Props = {
  tourId: string;
};

// Same page as NatureDetailsContent, reading the arts & crafts records.
const CraftDetailsContent = ({ tourId }: Props) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [showSubNav, setShowSubNav] = useState(false);

  const tour = CRAFT_TOUR_DETAILS[tourId];

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

  const expectImage =
    tour.gallery?.find((img) => img.type === 'portrait')?.url ||
    tour.gallery?.[0]?.url ||
    '/images/ABC.jpg';

  // Craft-only sections are optional per workshop, so their anchors are added
  // only when the section renders (same approach as the cultural Entry Fees).
  const extraNavAfter: Record<string, { label: string; id: string } | null> = {
    overview: tour.workshopOptions ? { label: 'Options', id: 'options' } : null,
    sites: tour.nearby ? { label: 'Nearby', id: 'nearby' } : null,
    whattoexpect: tour.alternatives
      ? { label: 'Alternatives', id: 'alternatives' }
      : null,
  };
  const navItems = CULTURAL_NAV_ITEMS.flatMap((item) => {
    const extra = extraNavAfter[item.id];
    return extra ? [item, extra] : [item];
  });

  return (
    <div className="w-full flex flex-col bg-(--color-surface-page)">
      <CulturalHeader tour={tour} />

      <div className="relative">
        <div
          className={`fixed top-0 left-0 w-full z-[999] transform transition-all duration-500 ease-out ${
            showSubNav
              ? 'translate-y-0 opacity-100'
              : '-translate-y-full opacity-0 pointer-events-none'
          }`}
        >
          <SubNav items={navItems} />
        </div>

        <div ref={heroRef}>
          <CulturalHero tour={tour} />
        </div>

        {tour.workshopOptions && (
          <CraftWorkshopOptions options={tour.workshopOptions} />
        )}

        <Suspense fallback={null}>
          <CulturalSites tour={tour} />
        </Suspense>

        {tour.nearby && <CraftPlaceList section={tour.nearby} id="nearby" />}

        <TreksSeason
          seasonalPlanning={tour.seasonalPlanning}
          region={tour.region}
          waypoints={toSiteWaypoints(tour.sites)}
          name={tour.name}
          bestSeasons={tour.meta.bestSeasons}
          note={tour.bookingNote}
        />
        <TreksExpect
          expectations={tour.expectations}
          summary={tour.summary}
          imageSrc={expectImage}
          name={tour.name}
        />
        {tour.alternatives && (
          <CraftPlaceList section={tour.alternatives} id="alternatives" />
        )}
        <Gallery images={tour.gallery} />
      </div>

      <Footer />
    </div>
  );
};

export default CraftDetailsContent;
