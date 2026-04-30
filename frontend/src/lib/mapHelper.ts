import maplibregl from 'maplibre-gl';
import { TrekTimelineDay } from '@/types/trek';
import { GeoJSONData } from '@/types/map';

export function fitToBounds(m: maplibregl.Map, data: GeoJSONData) {
  try {
    const bounds = new maplibregl.LngLatBounds();
    let hasCoords = false;

    const extend = (coords: GeoJSON.Position[]) =>
      coords.forEach(([lng, lat]) => {
        bounds.extend([lng, lat]);
        hasCoords = true;
      });

    data.features.forEach((f) => {
      if (f.geometry.type === 'LineString') extend(f.geometry.coordinates);
      else if (f.geometry.type === 'MultiLineString')
        f.geometry.coordinates.forEach(extend);
    });

    if (hasCoords)
      m.fitBounds(bounds, {
        padding: 120,
        duration: 2000,
        pitch: 62,
        bearing: -15,
      });
  } catch (e) {
    console.error('Error fitting bounds', e);
  }
}

export function buildPopupHTML(day: TrekTimelineDay): string {
  return `
    <div class="bg-white rounded-xl overflow-hidden w-56">
      <div class="trail-popup-header px-3 py-2 text-white">
        <span class="text-[10px] uppercase font-bold tracking-wider opacity-90">Day ${day.day}</span>
        <h4 class="text-sm font-semibold leading-tight mt-0.5">${day.title}</h4>
      </div>
      <div class="p-3 grid grid-cols-2 gap-y-2 gap-x-4 text-xs">
        <div>
          <span class="block text-gray-500 mb-0.5 text-[10px] uppercase">Elevation</span>
          <strong class="text-gray-800">${day.stats?.elevation ?? 'N/A'}</strong>
        </div>
        <div>
          <span class="block text-gray-500 mb-0.5 text-[10px] uppercase">Distance</span>
          <strong class="text-gray-800">${day.stats?.distance ?? 'N/A'}</strong>
        </div>
        <div class="col-span-2 pt-1 border-t border-gray-100">
          <span class="block text-gray-500 mb-0.5 text-[10px] uppercase">Est. Time</span>
          <strong class="text-gray-800">${day.stats?.duration ?? 'N/A'}</strong>
        </div>
      </div>
    </div>`;
}
