'use client';

import { useRef, useState, useCallback } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { ElevationPoint } from '@/types/trek';

interface Props {
  points: ElevationPoint[];
  onHover: (point: ElevationPoint | null) => void;
}

// SVG logical coordinate space (viewBox)
const CW = 520;
const CH = 100;
const PL = 28;
const PR = 40;
const PT = 0;
const PB = 10;
const TW = PL + CW + PR; // 632 — viewBox width only, not rendered width
const TH = PT + CH + PB; // 158

const HANDLE_H = 44;
const SPARKLINE_W = 100;
const SPARKLINE_H = 20;

// Theme
const GREEN = '#8dc63f';
const GREEN_DARK = '#5a8f20';
const GREEN_MID = '#6fb12e';
const TEXT_DARK = '#111827';
const TEXT_MID = '#6b7280';
const TEXT_LIGHT = '#9ca3af';
const BORDER = '#e5e7eb';
const RED_DESCENT = '#e05a5a';

function statAscent(pts: ElevationPoint[]) {
  return Math.round(
    pts.reduce(
      (s, p, i) => (i > 0 ? s + Math.max(0, p.e - pts[i - 1].e) : s),
      0,
    ),
  );
}
function statDescent(pts: ElevationPoint[]) {
  return Math.round(
    pts.reduce(
      (s, p, i) => (i > 0 ? s + Math.max(0, pts[i - 1].e - p.e) : s),
      0,
    ),
  );
}

export default function ElevationProfile({ points, onHover }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [open, setOpen] = useState(false);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  if (!points.length) return null;

  const maxDist = points[points.length - 1].d;
  const elevs = points.map((p) => p.e);
  const minE = Math.min(...elevs);
  const maxE = Math.max(...elevs);

  const rawRange = maxE - minE || 1;
  const ascent = statAscent(points);
  const descent = statDescent(points);
  const chartMin = 300;
  const chartMax = 6000;
  const chartRange = chartMax - chartMin;

  // Chart coordinate helpers — work in SVG logical space
  const toX = (d: number) => PL + (d / maxDist) * CW;
  const toY = (e: number) => PT + CH - ((e - chartMin) / chartRange) * CH;

  const pathPts = points
    .map((p) => `${toX(p.d).toFixed(1)},${toY(p.e).toFixed(1)}`)
    .join(' L ');
  const lineD = `M ${pathPts}`;
  const areaD = `M ${toX(0)} ${toY(chartMin)} ${pathPts} L ${toX(maxDist)} ${toY(chartMin)} Z`;

  // Y gridlines: 500 at bottom, then 1000m steps up to chartMax
  const yLabels: { e: number; y: number }[] = [{ e: 500, y: toY(500) }];
  for (let e = 1000; e <= chartMax; e += 1000) {
    yLabels.push({ e, y: toY(e) });
  }

  // X ticks
  const xTicks = [0, 0.25, 0.5, 0.75, 1].map((t) => ({
    x: PL + t * CW,
    label: `${(t * maxDist).toFixed(0)} km`,
  }));

  const hovered = hoverIdx !== null ? points[hoverIdx] : null;
  const hx = hovered ? toX(hovered.d) : 0;
  const hy = hovered ? toY(hovered.e) : 0;

  let grade = 0;
  if (hovered && hoverIdx !== null && hoverIdx > 0) {
    const prev = points[hoverIdx - 1];
    const distM = (hovered.d - prev.d) * 1000;
    if (distM > 0) grade = ((hovered.e - prev.e) / distM) * 100;
  }

  // Shared point-finding logic for mouse and touch
  const findNearestPoint = useCallback(
    (clientX: number) => {
      const svg = svgRef.current;
      if (!svg) return;
      const rect = svg.getBoundingClientRect();
      const scaleX = TW / rect.width;
      const mx = (clientX - rect.left) * scaleX;
      const frac = Math.max(0, Math.min(1, (mx - PL) / CW));
      const target = frac * maxDist;
      let best = 0,
        bestDiff = Infinity;
      points.forEach((p, i) => {
        const diff = Math.abs(p.d - target);
        if (diff < bestDiff) {
          bestDiff = diff;
          best = i;
        }
      });
      setHoverIdx(best);
      onHover(points[best]);
    },
    [points, maxDist, onHover],
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<SVGSVGElement>) => findNearestPoint(e.clientX),
    [findNearestPoint],
  );

  const handleMouseLeave = useCallback(() => {
    setHoverIdx(null);
    onHover(null);
  }, [onHover]);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<SVGSVGElement>) => {
      e.preventDefault();
      const touch = e.touches[0];
      if (touch) findNearestPoint(touch.clientX);
    },
    [findNearestPoint],
  );

  const handleTouchEnd = useCallback(() => {
    setHoverIdx(null);
    onHover(null);
  }, [onHover]);

  // Tooltip: flip left when near right edge (tooltip width = 168)
  const tipX = hovered ? (hx > PL + CW * 0.62 ? hx - 182 : hx + 14) : 0;
  const gradeColor =
    Math.abs(grade) > 15 ? '#dc2626' : Math.abs(grade) > 8 ? '#d97706' : GREEN;

  // Sparkline (downsampled for performance)
  const sparkStep = Math.max(1, Math.floor(points.length / 60));
  const sparkPts = points
    .filter((_, i) => i % sparkStep === 0)
    .map((p) => {
      const sx = (p.d / maxDist) * SPARKLINE_W;
      const sy = SPARKLINE_H - ((p.e - minE) / rawRange) * SPARKLINE_H;
      return `${sx.toFixed(1)},${sy.toFixed(1)}`;
    })
    .join(' L ');
  const sparkD = `M ${sparkPts}`;
  const sparkAreaD = `M 0 ${SPARKLINE_H} ${sparkPts} L ${SPARKLINE_W} ${SPARKLINE_H} Z`;

  // Expanded max-height: handle + 1px border + chart SVG
  const expandedH = HANDLE_H + 1 + TH;

  return (
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 sm:left-3 sm:translate-x-0 z-10 select-none w-[calc(100%-24px)] sm:w-[min(480px,calc(100%-76px))]">
      <div
        className="rounded-2xl bg-white/40 backdrop-blur-md shadow-xl border border-white/30 overflow-hidden"
        style={{
          transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)',
          maxHeight: open ? `${expandedH + 2}px` : `${HANDLE_H}px`,
        }}
      >
        {/* ── Handle bar ───────────────────────────────────────────────────── */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center gap-2.5 px-3.5 hover:bg-gray-50/70 transition-colors duration-150 min-w-0"
          style={{ height: HANDLE_H }}
        >
          {/* Mountain icon + stat chips — single row on both mobile and desktop.
              On mobile: flex-1 fills the space freed by hiding the sparkline so
              all 4 stats are visible. On desktop: flex-none so the sparkline
              div keeps its flex-1 slot. */}
          <div className="flex items-center gap-2 sm:gap-2.5 flex-1 sm:flex-none sm:min-w-0 sm:overflow-hidden">
            <svg
              width="15"
              height="13"
              viewBox="0 0 16 14"
              fill="none"
              className="shrink-0"
            >
              <path d="M1 13L5 5l3 5 2-4 5 7H1Z" fill={GREEN} opacity=".2" />
              <path
                d="M1 13L5 5l3 5 2-4 5 7"
                stroke={GREEN_DARK}
                strokeWidth="1.6"
                strokeLinejoin="round"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            <div className="flex flex-col items-start shrink-0">
              <span className="text-[8px] font-semibold tracking-wider text-gray-600 uppercase leading-none">
                Distance
              </span>
              <span className="text-[11px] font-bold text-gray-800 leading-tight">
                {maxDist.toFixed(1)} km
              </span>
            </div>
            <div className="w-px h-6 bg-gray-300 shrink-0" />
            <div className="flex flex-col items-start shrink-0">
              <span className="text-[8px] font-semibold tracking-wider text-gray-600 uppercase leading-none">
                Max Elev
              </span>
              <span className="text-[11px] font-bold text-gray-800 leading-tight">
                {Math.round(maxE).toLocaleString()} m
              </span>
            </div>
            <div className="w-px h-6 bg-gray-300 shrink-0" />
            <div className="flex flex-col items-start shrink-0">
              <span className="text-[8px] font-semibold tracking-wider text-gray-600 uppercase leading-none">
                Ascent
              </span>
              <span
                className="text-[11px] font-bold leading-tight"
                style={{ color: GREEN_DARK }}
              >
                ↑{ascent.toLocaleString()} m
              </span>
            </div>
            <div className="w-px h-6 bg-gray-300 shrink-0" />
            <div className="flex flex-col items-start shrink-0">
              <span className="text-[8px] font-semibold tracking-wider text-gray-600 uppercase leading-none">
                Descent
              </span>
              <span
                className="text-[11px] font-bold leading-tight"
                style={{ color: RED_DESCENT }}
              >
                ↓{descent.toLocaleString()} m
              </span>
            </div>
          </div>

          {/* Sparkline — desktop only, visible when collapsed */}
          <div className="hidden sm:flex flex-1 justify-end items-center">
            {!open && (
              <svg
                width={SPARKLINE_W}
                height={SPARKLINE_H}
                viewBox={`0 0 ${SPARKLINE_W} ${SPARKLINE_H}`}
                className="shrink-0 opacity-75"
              >
                <defs>
                  <linearGradient
                    id="spark-area-grad"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor={GREEN} stopOpacity="0.3" />
                    <stop offset="100%" stopColor={GREEN} stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d={sparkAreaD} fill="url(#spark-area-grad)" />
                <path
                  d={sparkD}
                  fill="none"
                  stroke={GREEN}
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </div>

          {/* Chevron */}
          <div className="shrink-0 text-gray-600 ml-1">
            {open ? (
              <ChevronDown className="w-3.5 h-3.5" />
            ) : (
              <ChevronUp className="w-3.5 h-3.5" />
            )}
          </div>
        </button>

        {/* ── Chart (only shown when open) ─────────────────────────────────── */}
        <div className="border-t border-gray-100">
          <svg
            ref={svgRef}
            viewBox={`0 0 ${TW} ${TH}`}
            width="100%"
            height={TH}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchMove}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ display: 'block', cursor: 'crosshair', touchAction: 'none' }}
          >
            <defs>
              <clipPath id="ep-clip">
                <rect x={PL} y={PT} width={CW} height={CH} />
              </clipPath>
              <linearGradient
                id="ep-area-grad"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor={GREEN} stopOpacity="0.26" />
                <stop offset="60%" stopColor={GREEN} stopOpacity="0.06" />
                <stop offset="100%" stopColor={GREEN} stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="ep-line-grad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor={GREEN_DARK} />
                <stop offset="100%" stopColor={GREEN_MID} />
              </linearGradient>
            </defs>

            {/* Grid lines */}
            {yLabels.map((l, i) => (
              <line
                key={i}
                x1={PL}
                y1={l.y}
                x2={PL + CW}
                y2={l.y}
                stroke={BORDER}
                strokeWidth={i === 0 || i === yLabels.length - 1 ? '1' : '0.75'}
                strokeDasharray={
                  i === 0 || i === yLabels.length - 1 ? undefined : '4 5'
                }
                opacity="0.9"
              />
            ))}

            {/* Area fill + elevation line */}
            <path
              d={areaD}
              fill="url(#ep-area-grad)"
              clipPath="url(#ep-clip)"
            />
            <path
              d={lineD}
              fill="none"
              stroke="url(#ep-line-grad)"
              strokeWidth="2.2"
              strokeLinejoin="round"
              strokeLinecap="round"
              clipPath="url(#ep-clip)"
            />

            {/* Hover ruler + dot — clipped so they never overflow the chart area */}
            {hovered && (
              <g clipPath="url(#ep-clip)">
                <line
                  x1={hx}
                  y1={PT}
                  x2={hx}
                  y2={PT + CH}
                  stroke={GREEN}
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                  opacity="0.6"
                />
                <circle cx={hx} cy={hy} r="8" fill={GREEN} opacity="0.1" />
                <circle
                  cx={hx}
                  cy={hy}
                  r="5"
                  fill="white"
                  stroke={GREEN}
                  strokeWidth="2.2"
                />
                <circle cx={hx} cy={hy} r="2" fill={GREEN} />
              </g>
            )}

            {/* Tooltip — 2-column layout */}
            {hovered && (
              <g transform={`translate(${tipX},${PT + 2})`}>
                <rect
                  width="168"
                  height="66"
                  rx="8"
                  fill="white"
                  stroke={GREEN}
                  strokeWidth="1.2"
                  filter="drop-shadow(0 4px 12px rgba(141,198,63,0.2))"
                />
                <text
                  x="11"
                  y="20"
                  fontSize="7"
                  fill={TEXT_LIGHT}
                  fontFamily="system-ui,sans-serif"
                  fontWeight="600"
                  letterSpacing="0.8"
                >
                  DISTANCE
                </text>
                <text
                  x="11"
                  y="33"
                  fontSize="12"
                  fontWeight="800"
                  fill={GREEN_DARK}
                  fontFamily="system-ui,sans-serif"
                >
                  {hovered.d.toFixed(1)} km
                </text>
                <text
                  x="96"
                  y="20"
                  fontSize="7"
                  fill={TEXT_LIGHT}
                  fontFamily="system-ui,sans-serif"
                  fontWeight="600"
                  letterSpacing="0.8"
                >
                  ELEVATION
                </text>
                <text
                  x="96"
                  y="33"
                  fontSize="12"
                  fontWeight="800"
                  fill={TEXT_DARK}
                  fontFamily="system-ui,sans-serif"
                >
                  {Math.round(hovered.e).toLocaleString()} m
                </text>
                <line
                  x1="11"
                  y1="41"
                  x2="157"
                  y2="41"
                  stroke={BORDER}
                  strokeWidth="0.75"
                />
                <text
                  x="11"
                  y="53"
                  fontSize="7"
                  fill={TEXT_LIGHT}
                  fontFamily="system-ui,sans-serif"
                  fontWeight="600"
                  letterSpacing="0.8"
                >
                  GRADE
                </text>
                <text
                  x="11"
                  y="63"
                  fontSize="11"
                  fontWeight="700"
                  fill={gradeColor}
                  fontFamily="system-ui,sans-serif"
                >
                  {grade > 0 ? '+' : ''}
                  {grade.toFixed(1)}%
                </text>
                <text
                  x="52"
                  y="63"
                  fontSize="9"
                  fill={TEXT_LIGHT}
                  fontFamily="system-ui,sans-serif"
                >
                  {Math.abs(grade) > 15
                    ? '⚠ steep'
                    : Math.abs(grade) > 8
                      ? 'moderate'
                      : 'gentle'}
                </text>
              </g>
            )}

            {/* Y-axis labels */}
            {yLabels.map((l, i) => (
              <text
                key={i}
                x={PL + CW + 8}
                y={Math.max(PT + 8, Math.min(PT + CH, l.y + 4))}
                fontSize="8"
                fill={TEXT_MID}
                fontFamily="system-ui,sans-serif"
                fontWeight="500"
              >
                {Math.round(l.e).toLocaleString()} m
              </text>
            ))}

            {/* X-axis labels */}
            {xTicks.map((t) => (
              <text
                key={t.label}
                x={t.x}
                y={PT + CH + PB - 2}
                fontSize="8"
                textAnchor="middle"
                fill={TEXT_MID}
                fontFamily="system-ui,sans-serif"
                fontWeight="500"
              >
                {t.label}
              </text>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}
