import {
  LAYERS,
  LAYER_KEYS,
  ROUTE_ATTRIBUTION,
  TILE_MAX_ZOOM,
  TRAIL_GREEN,
} from './constants';
import type { LayerKey } from './constants';
import type { AccessLeg, LngLat } from './types';

/** The source, and its one layer, that draws a base layer's tiles. */
export const baseSourceId = (key: LayerKey) => `base-${key}`;

/**
 * The map's style: every base layer, `layer` the one showing, under the route, drawn as on
 * the web (a white casing under a green line), with the journey to the trailhead as dashed
 * white arcs beneath it. A whole style rather than separate source components, the way the
 * web builds its map. A tour has no route, so its route source stays empty.
 *
 * A changed style reloads the whole map, pins and all, so it doesn't change with the
 * layer: the map shows another base layer by visibility (see NativeTrailMap). A hidden
 * layer loads no tiles. As a JSON string, which the map takes as is.
 */
export function mapStyle(
  layer: LayerKey,
  line: LngLat[],
  access: AccessLeg[] = [],
): string {
  const baseSources = Object.fromEntries(
    LAYER_KEYS.map((key) => [
      baseSourceId(key),
      {
        type: 'raster' as const,
        tiles: LAYERS[key].tiles,
        tileSize: 256,
        maxzoom: TILE_MAX_ZOOM,
        attribution: LAYERS[key].attribution,
      },
    ]),
  );
  const baseLayers = LAYER_KEYS.map((key) => ({
    id: baseSourceId(key),
    type: 'raster' as const,
    source: baseSourceId(key),
    layout: { visibility: key === layer ? 'visible' : 'none' },
  }));
  return JSON.stringify({
    version: 8 as const,
    sources: {
      ...baseSources,
      access: {
        type: 'geojson' as const,
        data: {
          type: 'FeatureCollection' as const,
          features: access.map((leg) => ({
            type: 'Feature' as const,
            properties: {},
            geometry: { type: 'LineString' as const, coordinates: leg.path },
          })),
        },
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
      ...baseLayers,
      {
        id: 'access',
        type: 'line' as const,
        source: 'access',
        paint: {
          'line-color': '#ffffff',
          'line-width': 2,
          'line-opacity': 0.7,
          'line-dasharray': [3, 4],
        },
        layout: { 'line-cap': 'round' as const, 'line-join': 'round' as const },
      },
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
  });
}
