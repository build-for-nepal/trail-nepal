import type { SymbolLayerSpecification } from '@maplibre/maplibre-react-native';

import type { LngLat, MapPin, TrailMapData } from '../types';
import type { ImageSpec } from './MapImages';
import { DayPin, SitePin } from './Pin';
import {
  DestinationFlag,
  FLAG_OFFSET,
  OriginDot,
  TransportIcon,
} from './RouteMarkers';

// What the map's symbol layers draw: the images, named, and the features that place them.

/** The image for a pin. Day pins differ by label, site pins by colour. */
export function pinImage(
  pin: MapPin,
  sites: boolean,
  selected: boolean,
): string {
  const base = sites
    ? `site-${pin.color.replace('#', '')}`
    : `day-${pin.label.replace(/[^0-9A-Za-z]+/g, '-')}`;
  return selected ? `${base}-selected` : base;
}

/** Every pin a map might show: its own, and those drawn for entries no pin marks. */
function allPins(data: TrailMapData): MapPin[] {
  const own = data.days.flatMap((day) => (day?.pin ? [day.pin] : []));
  return [...data.pins, ...own];
}

const iconFor = (mode: 'flight' | 'jeep' | 'bus') =>
  mode === 'flight' ? 'plane' : 'vehicle';

/** The pictures this trip's map draws, each once. */
export function imageSpecs(data: TrailMapData): ImageSpec[] {
  const sites = data.kind === 'sites';
  const specs = new Map<string, ImageSpec>();
  for (const pin of allPins(data)) {
    for (const selected of [false, true]) {
      const name = pinImage(pin, sites, selected);
      if (specs.has(name)) continue;
      specs.set(name, {
        name,
        element: sites ? (
          <SitePin pin={pin} selected={selected} />
        ) : (
          <DayPin pin={pin} selected={selected} />
        ),
      });
    }
  }
  if (data.flag) {
    specs.set('flag', { name: 'flag', element: <DestinationFlag /> });
  }
  for (const leg of data.access ?? []) {
    const name = iconFor(leg.mode);
    // Drawn pointing north; the layer turns it to the leg's bearing.
    if (!specs.has(name)) {
      specs.set(name, {
        name,
        element: <TransportIcon mode={leg.mode} bearing={0} />,
      });
    }
  }
  if (data.access?.length) {
    specs.set('origin', { name: 'origin', element: <OriginDot /> });
  }
  return [...specs.values()];
}

type Properties = Record<string, string | number>;
type Points = GeoJSON.FeatureCollection<GeoJSON.Point, Properties>;

function point(
  lngLat: LngLat,
  properties: Properties,
): GeoJSON.Feature<GeoJSON.Point, Properties> {
  return {
    type: 'Feature',
    geometry: { type: 'Point', coordinates: lngLat },
    properties,
  };
}

/** The pins as features. `day` is the itinerary entry a press selects. */
export function pinFeatures(
  data: TrailMapData,
  pins: MapPin[],
  selected: ReadonlySet<string>,
): Points {
  const sites = data.kind === 'sites';
  return {
    type: 'FeatureCollection',
    features: pins.map((pin) => {
      const isSelected = selected.has(pin.key);
      return point(pin.lngLat, {
        key: pin.key,
        day: pin.days[0],
        icon: pinImage(pin, sites, isSelected),
        selected: isSelected ? 1 : 0,
      });
    }),
  };
}

/** The flag, the transport icons and the origin dot as features. */
export function decorFeatures(data: TrailMapData): Points {
  const features: GeoJSON.Feature<GeoJSON.Point, Properties>[] = [];
  for (const leg of data.access ?? []) {
    features.push(
      point(leg.middle, {
        kind: 'icon',
        icon: iconFor(leg.mode),
        // As on the web, only the plane turns to face where it is going.
        rotate: leg.mode === 'flight' ? leg.bearing : 0,
      }),
    );
  }
  const origin = data.access?.[0]?.path[0];
  if (origin)
    features.push(point(origin, { kind: 'icon', icon: 'origin', rotate: 0 }));
  if (data.flag)
    features.push(point(data.flag, { kind: 'flag', icon: 'flag', rotate: 0 }));
  return { type: 'FeatureCollection', features };
}

/** Every symbol stays put and never hides another, as the pins did as views. */
const SYMBOLS: SymbolLayerSpecification['layout'] = {
  'icon-allow-overlap': true,
  'icon-ignore-placement': true,
};

/** The transport icons and the origin dot, centred on their points. */
export const DECOR_ICONS_LAYOUT: SymbolLayerSpecification['layout'] = {
  ...SYMBOLS,
  'icon-image': ['get', 'icon'],
  'icon-anchor': 'center',
  'icon-rotate': ['get', 'rotate'],
  // Turning with the map, so the plane keeps pointing along its arc.
  'icon-rotation-alignment': 'map',
};

/** The flag, its pole's foot on the point. */
export const DECOR_FLAG_LAYOUT: SymbolLayerSpecification['layout'] = {
  ...SYMBOLS,
  'icon-image': 'flag',
  'icon-anchor': 'bottom',
  'icon-offset': FLAG_OFFSET,
};

/** A site pin's tip marks the spot; a day pin is centred on it. */
export function pinsLayout(sites: boolean): SymbolLayerSpecification['layout'] {
  return {
    ...SYMBOLS,
    'icon-image': ['get', 'icon'],
    'icon-anchor': sites ? 'bottom' : 'center',
    // Higher keys draw later, so the selected pin lands on top of its neighbours.
    'symbol-sort-key': ['get', 'selected'],
  };
}
