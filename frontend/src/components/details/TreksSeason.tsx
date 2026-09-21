import TreksSeasonContent from '@/components/details/season/TreksSeasonContent';
import type { TrekTimelineDay } from '@/types/trek';

type Props = {
  seasonalPlanning: { month: string; condition: string }[];
  region: string;
  /** Waypoints (trek days / hike sections) used to derive weather locations. */
  waypoints: TrekTimelineDay[];
  name: string;
  bestSeasons?: string;
};

const TreksSeason = ({
  seasonalPlanning,
  region,
  waypoints,
  name,
  bestSeasons,
}: Props) => {
  if (!seasonalPlanning || seasonalPlanning.length === 0) return null;

  return (
    <TreksSeasonContent
      seasonalPlanning={seasonalPlanning}
      name={name}
      bestSeasons={bestSeasons}
      region={region}
      waypoints={waypoints}
    />
  );
};

export default TreksSeason;
