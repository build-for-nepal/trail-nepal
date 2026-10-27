import { isRunningInExpoGo } from 'expo';

import { MapPlaceholder } from './MapPlaceholder';
import type { TrailMapProps } from './NativeTrailMap';

export type { TrailMapProps };

// Expo Go has no MapLibre, and MapLibre looks up its native code as soon as it is imported,
// which would crash every screen that imports this one. So it is only loaded outside Expo
// Go, and Expo Go shows a note instead.
const NativeTrailMap = isRunningInExpoGo()
  ? null
  : // eslint-disable-next-line @typescript-eslint/no-require-imports -- an import would load it in Expo Go too
    (require('./NativeTrailMap') as typeof import('./NativeTrailMap'))
      .NativeTrailMap;

export function TrailMap(props: TrailMapProps) {
  if (!NativeTrailMap) {
    return (
      <MapPlaceholder message="The trail map needs the development build. Expo Go can’t show it." />
    );
  }
  return <NativeTrailMap {...props} />;
}
