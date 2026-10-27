// The web's map, from frontend/src/static/mapConstants.ts and hooks/useMapFeatures.ts.

export type LayerKey = 'satellite' | 'topo' | 'terrain';

export const LAYERS: Readonly<
  Record<LayerKey, { label: string; tiles: string[]; attribution: string }>
> = {
  satellite: {
    label: 'Satellite',
    tiles: [
      'https://clarity.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    ],
    attribution: '© Esri',
  },
  topo: {
    label: 'Topographical',
    tiles: [
      'https://a.tile.opentopomap.org/{z}/{x}/{y}.png',
      'https://b.tile.opentopomap.org/{z}/{x}/{y}.png',
      'https://c.tile.opentopomap.org/{z}/{x}/{y}.png',
    ],
    // OpenTopoMap's own wording for its credit.
    attribution:
      'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)',
  },
  terrain: {
    label: 'Terrain',
    tiles: [
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
    ],
    attribution: '© Esri',
  },
};

/** Esri's imagery has no tiles past zoom 17 in Nepal, so the map stretches zoom 17 beyond it. */
export const TILE_MAX_ZOOM = 17;
export const MIN_ZOOM = 6;
export const MAX_ZOOM = 16;
/** A heritage day can be three monuments tens of metres apart. */
export const CULTURAL_MAX_ZOOM = 19;

/** Showing a trek day centres it and nudges the zoom this much, never zooming out... */
export const DAY_FOCUS_ZOOM_STEP = 0.1;
/** ...and no closer than this. */
export const DAY_FOCUS_ZOOM_CEIL = 12.5;
/**
 * Framing a tour's sites stops at town scale: a day's sites can be tens of metres apart, and
 * client review asked twice for the map not to zoom in that far.
 */
export const SITES_FIT_MAX_ZOOM = 14;

export const TRAIL_GREEN = '#84b829';
export const PIN_ORANGE = '#f59e0b';

/** The route files are OpenStreetMap data, whose licence (ODbL) asks for this credit. */
export const ROUTE_ATTRIBUTION = '© OpenStreetMap contributors';
