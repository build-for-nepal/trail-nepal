import maplibregl from 'maplibre-gl';
import { TrekTimelineDay } from '@/types/trek';
import { GeoJSONData } from '@/types/map';

export function fitToBounds(
  m: maplibregl.Map,
  data: GeoJSONData,
  extraPoints?: [number, number][], // [lng, lat]
) {
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

    extraPoints?.forEach(([lng, lat]) => {
      bounds.extend([lng, lat]);
      hasCoords = true;
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

export function buildGroupedPopupHTML(days: TrekTimelineDay[]): string {
  const uid = Math.random().toString(36).slice(2, 7);

  const tabs = days
    .map(
      (day, i) => `
    <button
      id="tab-${uid}-${i}"
      onclick="
        document.querySelectorAll('[data-panel-${uid}]').forEach(function(p){p.style.display='none'});
        document.querySelectorAll('[data-tab-${uid}]').forEach(function(t){t.style.background='transparent';t.style.color='rgba(255,255,255,0.6)';t.style.borderBottom='2px solid transparent'});
        document.getElementById('panel-${uid}-${i}').style.display='block';
        this.style.background='transparent';this.style.color='#fff';this.style.borderBottom='2px solid #fff';
      "
      data-tab-${uid}
      style="flex:1;padding:6px 4px;border:none;border-bottom:2px solid ${i === 0 ? '#fff' : 'transparent'};
        background:transparent;color:${i === 0 ? '#fff' : 'rgba(255,255,255,0.6)'};
        font-size:10px;font-weight:700;cursor:pointer;font-family:system-ui,sans-serif;
        text-transform:uppercase;letter-spacing:0.05em;"
    >Day ${day.day}</button>`,
    )
    .join('');

  const panels = days
    .map(
      (day, i) => `
    <div id="panel-${uid}-${i}" data-panel-${uid} style="display:${i === 0 ? 'block' : 'none'};">
      <div style="background:var(--color-trail);padding:8px 12px 10px;">
        <div style="font-size:13px;font-weight:600;color:#fff;line-height:1.3;">${day.title}</div>
      </div>
      <div style="padding:10px 12px;background:#fff;display:grid;grid-template-columns:1fr 1fr;gap:8px 16px;">
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
    </div>`,
    )
    .join('');

  return `
    <div style="width:220px;font-family:system-ui,sans-serif;border-radius:12px;overflow:hidden;">
      <div style="background:var(--color-trail);display:flex;padding:0 4px;gap:2px;">
        ${tabs}
      </div>
      ${panels}
    </div>`;
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
