import TreksSeasonContent from '@/components/details/season/TreksSeasonContent';
import { TREK_DETAILS } from '@/static/trekDetails';
import type { Props } from '@/types/trek';

const TreksSeason = ({ trekId }: Props) => {
  const data = TREK_DETAILS[trekId];
  if (!data?.seasonalPlanning) return null;

  return (
    <TreksSeasonContent
      trekId={trekId}
      region={data.region}
      timeline={data.timeline}
    />
  );
};

export default TreksSeason;
