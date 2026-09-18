import { LayerKey } from '@/types/map';

export const SITE_MARKER_COLOR = '#f59e0b';

/** Background of the name-only hover tooltip shown over cultural site pins. */
export const SITE_TOOLTIP_BG = '#111827';

export const SITE_PIN_PATH =
  'M14 2 C8.2 2 3.5 6.8 3.5 12.6 C3.5 19.8 14 36 14 36 C14 36 24.5 19.8 24.5 12.6 C24.5 6.8 19.8 2 14 2 Z';

export const LAYER_THUMBNAILS: Record<LayerKey, string> = {
  satellite:
    'https://clarity.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/MapServer/tile/9/213/375',
  terrain:
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/9/213/375',
  topo: 'https://a.tile.opentopomap.org/9/375/213.png',
};

export const LAYERS: Record<
  LayerKey,
  { label: string; tiles: string[]; attribution: string }
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
    attribution: 'Map data: © OSM | Style: OpenTopoMap',
  },
  terrain: {
    label: 'Terrain',
    tiles: [
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
    ],
    attribution: '© <a href="https://www.esri.com/">Esri</a>',
  },
};

export const POPUP_STYLES = `
  .trail-popup .maplibregl-popup-content { padding: 0; border-radius: 0.75rem; box-shadow: 0 10px 25px rgba(0,0,0,0.25); overflow: hidden; }
  .trail-popup .maplibregl-popup-tip { border-top-color: var(--color-trail) !important; }

  /* Cultural sites use a compact dark name-only tooltip instead of the
     branded trek card, so the tip has to be re-coloured for every anchor
     MapLibre can pick (it flips the popup near the viewport edges). */
  .trail-popup--site .maplibregl-popup-content { background: ${SITE_TOOLTIP_BG}; border-radius: 0.5rem; box-shadow: 0 6px 18px rgba(0,0,0,0.3); }
  .trail-popup--site.maplibregl-popup-anchor-bottom .maplibregl-popup-tip,
  .trail-popup--site.maplibregl-popup-anchor-bottom-left .maplibregl-popup-tip,
  .trail-popup--site.maplibregl-popup-anchor-bottom-right .maplibregl-popup-tip { border-top-color: ${SITE_TOOLTIP_BG} !important; }
  .trail-popup--site.maplibregl-popup-anchor-top .maplibregl-popup-tip,
  .trail-popup--site.maplibregl-popup-anchor-top-left .maplibregl-popup-tip,
  .trail-popup--site.maplibregl-popup-anchor-top-right .maplibregl-popup-tip { border-bottom-color: ${SITE_TOOLTIP_BG} !important; }
  .trail-popup--site.maplibregl-popup-anchor-left .maplibregl-popup-tip { border-right-color: ${SITE_TOOLTIP_BG} !important; }
  .trail-popup--site.maplibregl-popup-anchor-right .maplibregl-popup-tip { border-left-color: ${SITE_TOOLTIP_BG} !important; }
`;
