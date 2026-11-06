import { MapPlaceholder } from './MapPlaceholder';
import type { TrailMapProps } from './NativeTrailMap';

// MapLibre React Native has no web version, so the static web export shows this instead.
// The website has its own map.
export function TrailMap(_props: TrailMapProps) {
  return <MapPlaceholder message="The trail map is in the Trails Nepal app." />;
}
