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
      });
  } catch (e) {
    console.error('Error fitting bounds', e);
  }
}

export function buildPopupHTML(day: TrekTimelineDay): string {
  return `
    <div style="width:220px;font-family:system-ui,sans-serif;border-radius:12px;overflow:hidden;">
      <div style="background:var(--color-trail);padding:10px 12px;">
        <div style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:rgba(255,255,255,0.75);margin-bottom:3px;">Day ${day.day}</div>
        <div style="font-size:13px;font-weight:600;color:#fff;line-height:1.3;">${day.title}</div>
      </div>
      <div style="padding:10px 12px;background:#fff;">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px 16px;">
          <div>
            <div style="font-size:9px;font-weight:600;text-transform:uppercase;color:#9ca3af;margin-bottom:2px;">Elevation</div>
            <div style="font-size:12px;font-weight:700;color:#111827;">${day.stats?.elevation ?? 'N/A'}</div>
          </div>
          <div>
            <div style="font-size:9px;font-weight:600;text-transform:uppercase;color:#9ca3af;margin-bottom:2px;">Distance</div>
            <div style="font-size:12px;font-weight:700;color:#111827;">${day.stats?.distance ?? 'N/A'}</div>
          </div>
          <div style="grid-column:span 2;padding-top:7px;border-top:1px solid #f3f4f6;">
            <div style="font-size:9px;font-weight:600;text-transform:uppercase;color:#9ca3af;margin-bottom:2px;">Est. Time</div>
            <div style="font-size:12px;font-weight:700;color:#111827;">${day.stats?.duration ?? 'N/A'}</div>
          </div>
        </div>
      </div>
    </div>`;
}
