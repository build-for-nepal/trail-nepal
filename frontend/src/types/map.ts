export type LayerKey = 'satellite' | 'terrain' | 'topo';

export type GeoJSONData = GeoJSON.FeatureCollection<
  GeoJSON.LineString | GeoJSON.MultiLineString
>;

/**
 * A request to center/zoom the map onto a specific itinerary day.
 * `nonce` bumps on every request so re-selecting the same day still re-triggers
 * the fly-to (object identity changes even when `index` is unchanged).
 */
export interface DayFocus {
  index: number;
  nonce: number;
}

export interface MapClientProps {
  data: GeoJSONData | null;
  center: [number, number];
  trekId?: string;
  onDayClick?: (index: number) => void;
  focus?: DayFocus | null;
}

export interface TrekkingMapProps {
  trekId?: string;
  onDayClick?: (index: number) => void;
  focus?: DayFocus | null;
}

export interface LayerSwitcherProps {
  activeLayer: LayerKey;
  onChange: (key: LayerKey) => void;
  className?: string;
}
