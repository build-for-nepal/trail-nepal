export type LayerKey = 'satellite' | 'terrain' | 'topo';

export type GeoJSONData = GeoJSON.FeatureCollection<
  GeoJSON.LineString | GeoJSON.MultiLineString
>;

export interface MapClientProps {
  data: GeoJSONData | null;
  center: [number, number];
  trekId?: string;
}

export interface TrekkingMapProps {
  trekId?: string;
}

export interface LayerSwitcherProps {
  activeLayer: LayerKey;
  onChange: (key: LayerKey) => void;
}
