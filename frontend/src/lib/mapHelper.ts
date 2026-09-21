import maplibregl from 'maplibre-gl';
import { TrekTimelineDay } from '@/types/trek';
import { CulturalSite } from '@/types/cultural';
import { GeoJSONData } from '@/types/map';

export function fitToBounds(
  m: maplibregl.Map,
  data: GeoJSONData,
  extraPoints?: [number, number][], // [lng, lat]
  opts?: Partial<maplibregl.FitBoundsOptions>,
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
      else if (f.geometry.type === 'Point') extend([f.geometry.coordinates]);
    });

    extraPoints?.forEach(([lng, lat]) => {
      bounds.extend([lng, lat]);
      hasCoords = true;
    });

    if (hasCoords)
      m.fitBounds(bounds, {
        padding: 120,
        duration: 2000,
        ...opts,
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
      class="trek-day-tab"
      data-day-pos="${i}"
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
    >${day.variant === 'section' ? day.day : `Day ${day.day}`}</button>`,
    )
    .join('');

  const panels = days
    .map((day, i) => {
      // Hikes ('section') drop the elevation cell; treks keep it.
      const isSection = day.variant === 'section';
      const elevationCell = isSection
        ? ''
        : `<div>
          <div style="font-size:9px;font-weight:600;text-transform:uppercase;color:#9ca3af;margin-bottom:2px;">Elevation</div>
          <div style="font-size:12px;font-weight:700;color:#111827;">${day.stats?.elevation ?? 'N/A'}</div>
        </div>`;
      const timeCellStyle = isSection
        ? ''
        : 'grid-column:span 2;padding-top:7px;border-top:1px solid #f3f4f6;';

      return `
    <div id="panel-${uid}-${i}" data-panel-${uid} style="display:${i === 0 ? 'block' : 'none'};">
      <div style="background:var(--color-trail);padding:8px 12px 10px;">
        <div style="font-size:13px;font-weight:600;color:#fff;line-height:1.3;">${day.title}</div>
      </div>
      <div style="padding:10px 12px;background:#fff;display:grid;grid-template-columns:1fr 1fr;gap:8px 16px;">
        ${elevationCell}
        <div>
          <div style="font-size:9px;font-weight:600;text-transform:uppercase;color:#9ca3af;margin-bottom:2px;">Distance</div>
          <div style="font-size:12px;font-weight:700;color:#111827;">${day.stats?.distance ?? 'N/A'}</div>
        </div>
        <div style="${timeCellStyle}">
          <div style="font-size:9px;font-weight:600;text-transform:uppercase;color:#9ca3af;margin-bottom:2px;">Est. Time</div>
          <div style="font-size:12px;font-weight:700;color:#111827;">${day.stats?.duration ?? 'N/A'}</div>
        </div>
      </div>
    </div>`;
    })
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
  // Hikes ('section') have no per-section elevation and no "Day" label; treks
  // ('day', the default) keep the elevation cell and the "Day N" eyebrow.
  const isSection = day.variant === 'section';

  const eyebrow = isSection
    ? ''
    : `<div style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:rgba(255,255,255,0.75);margin-bottom:3px;">Day ${day.day}</div>`;

  const elevationCell = isSection
    ? ''
    : `<div>
            <div style="font-size:9px;font-weight:600;text-transform:uppercase;color:#9ca3af;margin-bottom:2px;">Elevation</div>
            <div style="font-size:12px;font-weight:700;color:#111827;">${day.stats?.elevation ?? 'N/A'}</div>
          </div>`;

  // Without the elevation cell, Est. Time sits beside Distance as a normal
  // second column instead of a full-width row.
  const timeCellStyle = isSection
    ? ''
    : 'grid-column:span 2;padding-top:7px;border-top:1px solid #f3f4f6;';

  return `
    <div style="width:220px;font-family:system-ui,sans-serif;border-radius:12px;overflow:hidden;">
      <div style="background:var(--color-trail);padding:10px 12px;">
        ${eyebrow}
        <div style="font-size:13px;font-weight:600;color:#fff;line-height:1.3;">${day.title}</div>
      </div>
      <div style="padding:10px 12px;background:#fff;">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px 16px;">
          ${elevationCell}
          <div>
            <div style="font-size:9px;font-weight:600;text-transform:uppercase;color:#9ca3af;margin-bottom:2px;">Distance</div>
            <div style="font-size:12px;font-weight:700;color:#111827;">${day.stats?.distance ?? 'N/A'}</div>
          </div>
          <div style="${timeCellStyle}">
            <div style="font-size:9px;font-weight:600;text-transform:uppercase;color:#9ca3af;margin-bottom:2px;">Est. Time</div>
            <div style="font-size:12px;font-weight:700;color:#111827;">${day.stats?.duration ?? 'N/A'}</div>
          </div>
        </div>
      </div>
    </div>`;
}

const escapeHTML = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (ch) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      })[ch] ?? ch,
  );

/**
 * Hover tooltip for cultural site pins. Mirrors `buildPopupHTML`'s chrome (same
 * 220px width, green header band, white body) so the cultural map reads as the
 * same product as the trek and hike maps — client review asked for it to "be
 * similar to previous trek design". No stats grid: a site has no elevation,
 * distance or duration, so the body carries one short line of copy instead.
 *
 * Prefers `site.tooltip`, the short hover-length line, and falls back to the
 * full `description` for any site that has not been given one yet.
 */
export function buildSitePopupHTML(site: CulturalSite): string {
  const body = site.tooltip ?? site.description;

  return `
    <div style="width:220px;font-family:system-ui,sans-serif;border-radius:12px;overflow:hidden;">
      <div style="background:var(--color-trail);padding:10px 12px;">
        <div style="font-size:13px;font-weight:600;color:#fff;line-height:1.3;">${escapeHTML(site.name)}</div>
      </div>
      <div style="padding:10px 12px;background:#fff;">
        <div style="font-size:11px;font-weight:500;line-height:1.45;color:#4b5563;">${escapeHTML(body)}</div>
      </div>
    </div>`;
}
