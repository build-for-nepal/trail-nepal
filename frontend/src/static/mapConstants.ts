import { LayerKey } from '@/types/map';

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
`;
