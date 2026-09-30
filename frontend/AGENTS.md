# frontend — agent guide

Scope: **`frontend/` only** (Next.js 16.2.1, React 19.2.4, Tailwind v4).
Read the root `AGENTS.md` first — folder standard, TypeScript rules, change
discipline, and git conventions are there and are not repeated here.

---

## 1. Commands and the gate

Run from `frontend/`.

| Command | Purpose |
| --- | --- |
| `npm run dev` | dev server on :3000 (one is often already running — reuse it) |
| `npm run typecheck` | `tsc --noEmit` |
| `npx eslint <changed files>` | lint — **scope it**, see the baseline below |
| `npx prettier --write <changed files>` | format |
| `npm run build` | static export into `out/` |

```
npm run typecheck  &&  npx eslint <changed files>  &&  npm run build
```

### Lint baseline

`npx eslint .` reports **66 problems (33 errors, 33 warnings)**, all
pre-existing. Scope lint to your changed files or your own signal is buried.
Leave the baseline alone unless you are already in the file — but know which is
which, because not all of it is noise:

| Count | Rule | Status |
| --- | --- | --- |
| 21 | `ts/no-unused-vars` | noise, safe to clear in passing |
| 10 | `rh/set-state-in-effect` | React 19 cascading-render warning; real but not urgent |
| 8 | `ts/no-explicit-any` | **violates root §3** — `CompareSection.tsx` (4), `TrekkingMap.tsx` (2), `useTrekkingData.ts`, `types/homepage.ts` |
| 7 | `rh/exhaustive-deps` | mostly deliberate ref deps (`HikeRoute`, `CulturalSites`, `TrekTimeline`, `useMapFeatures`) |
| 5 | `rh/rules-of-hooks` | **real bug risk — all five in `details/map/ElevationProfile.tsx:124-167`** |
| 4 | `next/no-img-element` | deliberate: `output: 'export'` disables optimization anyway |
| 4 | `ts/no-require-imports` | git-ignored local scripts in `scripts/`, out of scope |
| 3 | `react/no-unescaped-entities` | noise |
| 2 | `rh/static-components` | `FilterSidebar.tsx` |
| 1 | `ts/no-empty-object-type` | `ui/chart.tsx` — the stub, see §4 |
| 1 | `jsx-a11y/role-has-required-aria-props` | **`search/SearchBarInner.tsx:168`** — a hand-rolled control missing required ARIA, see §4 |

Do not add to this list. The `any` and `rules-of-hooks` rows are the two worth
fixing on sight.

---

## 2. Hard constraint: this is a static export

`next.config.ts` sets `output: 'export'`, `trailingSlash: true`,
`images: { unoptimized: true }`. It deploys to GitHub Pages. **There is no Node
process in production.** Therefore:

- **No** API routes, route handlers, middleware, server actions, ISR, or
  revalidation. None survive `output: 'export'`.
- **No** `next/image` optimization — compress images before committing.
  `public/images/**/originals/` is git-ignored for this reason.
- **No** request-time data. Everything is baked at build time from `src/static`.
- Keep the trailing slash in hand-written hrefs: `/treks/foo/`.
- Only `NEXT_PUBLIC_*` env vars exist and they are inlined into the bundle —
  treat them as public. Nothing needing a secret can live here.

Next 16 + React 19 differ from most training data. When an API behaves
unexpectedly, check `node_modules/next/dist/docs/`.

---

## 3. Structure: current vs target

The target is the feature-slice layout in root `AGENTS.md` §2. This app is
**layer-first today** and not migrated. New code goes in a feature slice; move
existing files only when you are already touching them.

Shared and staying put: `app/` (keep routes thin), `components/ui/`,
`components/layout/`, `components/common/`, `lib/utils.ts`, `static/`.

| Today | Target |
| --- | --- |
| `components/home/**` | `features/home/` |
| `components/explore/**` + `hooks/useFilters.ts` | `features/explore/` |
| `components/compare/**` | `features/compare/` |
| `components/details/Treks*`, `TrekTimeline`, `TrekDetailsContent`, `season/Treks*`, `altitudeSickness/**` | `features/treks/` |
| `components/details/Hike*` | `features/hikes/` |
| `components/details/Cultural*`, `details/map/CulturalMap*` | `features/cultural-tours/` |
| `components/details/{Gallery,StarRating,FoodMenu,GearCheckList,OverallReview,TrailUpdateCard,TrialUpdate*}` | `features/trip-details/` — **shared capability** |
| `components/details/map/**`, `hooks/useMapFeatures.ts`, `lib/mapHelper.ts`, `static/mapConstants.ts`, `types/map.ts` | `features/map/` — **shared capability** |
| `components/details/season/Weather*`, `hooks/useWeatherForecast.ts`, `lib/weather/**`, `types/weather.ts` | `features/weather/` — **shared capability** |
| `components/search/**` + `hooks/useTrekSearch.ts` | `features/search/` — **shared capability** |
| `components/home/trivia/*`, `details/TrekTrivia`, `static/triviaQuestions.ts` | `features/trivia/` — **shared capability** |

`components/details/` holds **24 components flat, 39 including its
subfolders**, mixing all three trip types plus shared pieces — it is the main
thing this migration fixes. The four shared capabilities are shared precisely
because trek, hike, and cultural detail pages all consume them; per the
dependency rule they may not import back into
`features/treks|hikes|cultural-tours`.

**Duplication the current layout has already produced.** Fix opportunistically,
not as a sweep:

| Problem | Files |
| --- | --- |
| Two different `TrekCard` | `explore/treks/TrekCard.tsx`, `home/popularTreks/TrekCard.tsx` |
| Duplicate `FeatureItem`, one nested wrongly | `home/whyTrialNepal/`, `home/estimateCost/whyTrialNepal/` |
| Misspellings in exported names | `NoComapre.tsx`; `TrialUpdate.tsx` vs `TrailUpdateCard.tsx` |

---

## 4. Components: shadcn/ui is installed — use it

`components.json` is configured (style `radix-nova`, base `neutral`, lucide
icons, alias `@/components/ui`). Adding a primitive is one command:

```
npx shadcn@latest add sidebar dropdown-menu select accordion popover tooltip
```

**Present today (9):** `button`, `checkbox`, `command`, `dialog`, `input`,
`input-group`, `sheet`, `textarea`, and `chart`. Note `chart.tsx` is **not**
shadcn's chart — it is a bare `<svg>` wrapper with an empty props interface
(the `no-empty-object-type` lint entry). Real charts use `chart.js` +
`react-chartjs-2`.

**Hand-rolled controls that should be primitives.** This is not a style
preference — `search/SearchBarInner.tsx:168` already fails
`jsx-a11y/role-has-required-aria-props`, which is exactly the class of bug
hand-rolling produces: a `role` set without the ARIA props that role requires.
Keyboard nav, focus traps, and escape/outside-click handling get lost the same
way. Do not add to this list; convert an entry when you next touch it:

| Hand-rolled | Use instead |
| --- | --- |
| `details/season/WeatherLocationDropdown.tsx` — manual `open` state, outside-click ref, `hoveredId` | `select` or `dropdown-menu` |
| `compare/TrekSelectModal.tsx` — hand-built modal | `dialog` |
| `HikeRoute`, `CulturalSites`, `TrekTimeline`, `TreksAltitudeSickness`, `ContactInfoSidebar` — five separate `ChevronDown` accordions | `accordion` |
| `search/SearchBarInner.tsx` — `role` without its required ARIA props | `command` (as `SearchSuggestions.tsx` already does) |

The five accordions are a genuine task, not a drop-in swap: they carry a
deliberate GSAP height animation and map-linked exclusive-open behaviour (§9).
New accordions start from the primitive.

**Import Radix through the unified `radix-ui` package**, as
`components/ui/dialog.tsx` and `checkbox.tsx` do:

```tsx
import { Dialog as DialogPrimitive } from 'radix-ui';
```

`explore/filter/FilterSidebar.tsx` currently imports `@radix-ui/react-dialog`
and `@radix-ui/react-visually-hidden` directly. **Those are not in
`package.json`** — it resolves only through npm hoisting and will break on a
lockfile change. Fix it to the unified import when you touch that file.

---

## 5. Styling

Tailwind v4 with CSS-variable design tokens. Non-negotiable:

- **Tailwind utilities only.** Never create `*.module.css`, a per-component
  `.css` file, styled-components, or any second styling system.
- No inline `style={{...}}` when a utility exists. (Genuine exceptions: values
  computed at runtime, e.g. map overlay positioning.)
- Prefer design tokens (`bg-brand-primary`, `var(--color-trail)`) over raw hex.
- Prefer scale values (`mt-4`, `gap-6`) over arbitrary ones (`mt-[17px]`).
  Arbitrary values are for pixel-accurate requirements, not convenience.
- `cn()` from `@/lib/utils` for conditional classes.
- Follow the breakpoints already used nearby; do not invent new ones.

---

## 6. Content model

Content is **static TypeScript, not a CMS**. `src/static/*.ts` exports records
typed by `src/types/*.ts`. Some are large (`trekDetails.ts` ~137 KB,
`culturalTours.ts` ~46 KB, `triviaQuestions.ts` ~44 KB) — **grep for the id, do
not read them end to end.**

| File | Holds |
| --- | --- |
| `static/trek.ts` | `TREKS`, `HIKES`, `CULTURAL_TOURS` — the card/list records |
| `static/trekDetails.ts` | trek detail records |
| `static/hikeDetails.ts` | hike detail records |
| `static/culturalTours.ts` | `CULTURAL_TOUR_DETAILS` |
| `static/seo.ts` | per-id OG image map (falls back to `FALLBACK_OG_IMAGE`) |

Routes set `dynamicParams = false` and derive params from the detail records, so
**a missing or malformed detail record is a build failure, not a runtime 404**.
A green `npm run build` is therefore real coverage for data edits — always run it
after touching `src/static`.

**Adding a trip.** The id is the join key and must match exactly in all four:
the detail record, the list record in `static/trek.ts`, the `static/seo.ts`
entry, and the folder `public/images/<id>/`.

### Content consistency rule — raised in client review three times

For every trip type, the list record's `description` must be the **same string**
as the matching detail record's `summary`, and that string must be the
operator's authored Description **verbatim from the source PDF**:

- `TREKS[].description` == `TREK_DETAILS[id].summary`
- `HIKES[].description` == `HIKE_DETAILS[id].summary`
- `CULTURAL_TOURS[].description` == `CULTURAL_TOUR_DETAILS[id].summary`

**Never hand-trim copy to fit a card.** `TrekCard`'s description block is
`min-h-[75px]` — a floor, not a clamp, so long copy grows the card rather than
clipping. If it overflows, change the layout, not the words.

### TrekCard layout, settled in review

One card component serves trek, hike, and cultural. `mt-auto` lives on the
**metrics row**, not the CTA: slack must collapse *above* the stats so the stats
rest directly on the button and CTAs stay flush across a row of unequal cards.
The grid is `grid-cols-1 sm:grid-cols-2 xl:grid-cols-3`, so **3-up needs a
≥1280 px viewport** — zoom out before judging card alignment in a narrow panel.

---

## 7. Map subsystem

Three surfaces (trek, hike, cultural) share one hook, so changes are
cross-cutting. Canonical files: `hooks/useMapFeatures.ts` (~41 KB,
`useMapInit(center, maxZoom = 16)`), `lib/mapHelper.ts`,
`static/mapConstants.ts`, `types/map.ts`.

**Coordinates are stored `[lat, lng]`.** GeoJSON and MapLibre both want
`[lng, lat]`; the inversion happens downstream. Do not "fix" static data to
match MapLibre. Nepal is near 27 N / 84 E, so a swapped pair lands in the Indian
Ocean and is obvious on the map.

**Zoom is layered and clamps silently.** A `fitBounds({ maxZoom })` above the
map's own ceiling is ignored, so raising a fit cap alone does nothing.

- map default `maxZoom: 16`; cultural passes `CULTURAL_MAX_ZOOM = 19`
- Esri Clarity imagery has **no native tiles past z17** in Nepal and answers
  z18+ with a non-CORS error. Raster sources declare `maxzoom: 17` and let
  MapLibre overzoom. **Do not raise that.**
- `terrain-dem` tops out ~z15 and is capped there.
- 3D terrain magnifies effective ground scale ~2.3× vs the flat-mercator scale
  implied by the zoom number. Do not reason from the zoom integer alone.
- Mercator resolution: `156543.03 * cos(lat) / 2^z` m/px.

**Popup tips need all six anchor variants.** The tip is a CSS triangle whose
visible border side depends on the anchor MapLibre picks, and it flips near
viewport edges: `-bottom*` → `border-top-color`, `-top*` →
`border-bottom-color`, `-left` → `border-right-color`, `-right` →
`border-left-color`.

**Marker rebuild trap.** Marker effects depend on the colour array and click
callback. A parent computing either inline instead of with `useMemo` /
`useCallback` tears down and rebuilds every marker on every render.

**Focus nonce.** `DayFocus { index, nonce }` bumps `nonce` per request so
re-selecting the same day re-triggers the effect. Keep it — the shape is shared
by several prop types, so do not repurpose it.

---

## 8. Coordinate provenance

Every coordinate in static data carries an OSM provenance comment. Preserve them.

```ts
// OSM way/456385566 (Lumbini monastic zone)
coordinates: [27.4785789, 83.2758587],
```

Rules from two near-misses (a restaurant and a `highway=path` almost shipped as
monument pins):

- **Verify tags, not names.** A matching name is not a matching feature.
- **Prefer Nominatim over Overpass.** Overpass mirrors are rate-limited and one
  returns HTTP 200 with `elements: []` — silently reporting zero results instead
  of erroring. Sanity-check any mirror with a query that must match.
- Nominatim: `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&q=`
  with a `User-Agent` header; sleep ~1.2 s between calls.
- Source-document spellings often miss — try transliterations ("Mahaboudha" →
  "Mahabuddha", "Siddha Gufa" → "Siddha Cave").

---

## 9. Patterns to copy, not reinvent

- **Accordion linked to a map:** `components/details/HikeRoute.tsx` is
  canonical — `SectionItem` with GSAP height animation (`gsap.set` initial,
  `fromTo` height → `auto` on complete), `openStates[]` in the parent,
  `toggleItem` for multi-open, `openFromMap` for exclusive open,
  `suppressScrollRef` + `listRef` for scroll-into-view. `CulturalSites.tsx`
  mirrors it; keep the two in step.
- **Itinerary markers:** `components/details/TrekTimeline.tsx` — start icon on
  the first row, plain `#376BB6` dot thereafter.
- **Popups:** `buildPopupHTML` in `lib/mapHelper.ts` (220 px, green
  `var(--color-trail)` header, white body). Always escape interpolated content
  with the existing `escapeHTML` helper.

---

## 10. Stale docs

Root `README.md` claims the maps use "Leaflet + react-leaflet". **They use
MapLibre GL** (`maplibre-gl` ^5.24). Fix it if you are already editing the
README; do not follow it.
