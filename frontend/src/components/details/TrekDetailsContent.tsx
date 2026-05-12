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

type Props = {
  trekId: string;
};

const TrekDetailsContent = ({ trekId }: Props) => {
  return (
    <div className="w-full flex flex-col bg-(--color-surface-page)">
      <TreksHeader trekId={trekId} />
      <TreksHero trekId={trekId} />
      <TrekTimeline trekId={trekId} />
      <TreksSeason trekId={trekId} />
      <TreksExpect trekId={trekId} />
      <TreksAltitudeSickness trekId={trekId} />
      <Gallery trekId={trekId} />
      {/* <TrialUpdate trekId={trekId} /> */}
      <GearCheckList trekId={trekId} />
      <Footer />
    </div>
  );
};

export default TrekDetailsContent;
