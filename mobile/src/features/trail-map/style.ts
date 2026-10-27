import {
  LAYERS,
  ROUTE_ATTRIBUTION,
  TILE_MAX_ZOOM,
  TRAIL_GREEN,
} from './constants';
import type { LayerKey } from './constants';
import type { LngLat } from './types';

/**
 * The map's style: the chosen base layer under the route, drawn as on the web (a white
 * casing under a green line). A whole style rather than separate source components, the
 * way the web builds its map. A tour has no route, so its route source stays empty.
 */
export function mapStyle(layer: LayerKey, line: LngLat[]) {
  const base = LAYERS[layer];
  return {
    version: 8 as const,
    sources: {
      base: {
        type: 'raster' as const,
        tiles: base.tiles,
        tileSize: 256,
        maxzoom: TILE_MAX_ZOOM,
        attribution: base.attribution,
      },
      route: {
        type: 'geojson' as const,
        data: {
          type: 'FeatureCollection' as const,
          // A LineString needs two points, so a shorter line is left out.
          features:
            line.length >= 2
              ? [
                  {
                    type: 'Feature' as const,
                    properties: {},
                    geometry: {
                      type: 'LineString' as const,
                      coordinates: line,
                    },
                  },
                ]
              : [],
        },
        attribution: ROUTE_ATTRIBUTION,
      },
    },
    layers: [
      { id: 'base', type: 'raster' as const, source: 'base' },
      {
        id: 'route-casing',
        type: 'line' as const,
        source: 'route',
        paint: {
          'line-color': '#ffffff',
          'line-width': 7,
          'line-opacity': 0.85,
        },
        layout: { 'line-cap': 'round' as const, 'line-join': 'round' as const },
      },
      {
        id: 'route',
        type: 'line' as const,
        source: 'route',
        paint: { 'line-color': TRAIL_GREEN, 'line-width': 4.5 },
        layout: { 'line-cap': 'round' as const, 'line-join': 'round' as const },
      },
    ],
  };
}
