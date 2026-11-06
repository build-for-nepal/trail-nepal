import type {
  CircleLayerSpecification,
  SymbolLayerSpecification,
} from '@maplibre/maplibre-react-native';

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

const iconFor = (mode: 'flight' | 'jeep' | 'bus') =>
  mode === 'flight' ? 'plane' : 'vehicle';

/** The pictures this trip's map draws, each once. */
export function imageSpecs(data: TrailMapData): ImageSpec[] {
  const sites = data.kind === 'sites';
  const specs = new Map<string, ImageSpec>();
  for (const pin of data.pins) {
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

/** The pins as features. `day` is the itinerary entry a press selects; `color` is the pin's. */
export function pinFeatures(
  data: TrailMapData,
  selected: ReadonlySet<string>,
): Points {
  const sites = data.kind === 'sites';
  return {
    type: 'FeatureCollection',
    features: data.pins.map((pin) => {
      const isSelected = selected.has(pin.key);
      return point(pin.lngLat, {
        key: pin.key,
        day: pin.days[0],
        icon: pinImage(pin, sites, isSelected),
        selected: isSelected ? 1 : 0,
        color: pin.color,
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

/** The flag, its pole standing 10 px above the point, as on the web. */
export const DECOR_FLAG_LAYOUT: SymbolLayerSpecification['layout'] = {
  ...SYMBOLS,
  'icon-image': 'flag',
  'icon-anchor': 'bottom',
  'icon-offset': FLAG_OFFSET,
};

/**
 * A site pin's picture is anchored at its bottom, 2 px under its tip, as the web anchors
 * it; a day pin is centred on its point. Later pins draw over earlier ones, as the web's
 * markers do, and a pulsing pin over them all.
 */
export function pinsLayout(sites: boolean): SymbolLayerSpecification['layout'] {
  return {
    ...SYMBOLS,
    'icon-image': ['get', 'icon'],
    'icon-anchor': sites ? 'bottom' : 'center',
    'symbol-sort-key': ['get', 'selected'],
  };
}

/**
 * A preview's pins: a dot in the pin's colour on each pin's point. A preview is too small
 * for the full pins, which would cover its route.
 */
export const PREVIEW_PIN_PAINT: CircleLayerSpecification['paint'] = {
  'circle-radius': 5,
  'circle-color': ['get', 'color'],
  'circle-stroke-color': '#ffffff',
  'circle-stroke-width': 2,
};
