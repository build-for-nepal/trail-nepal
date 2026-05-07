'use client';

import { useRef, useState, useCallback } from 'react';
import { ElevationPoint } from '@/types/trek';

interface Props {
  points: ElevationPoint[];
  onHover: (point: ElevationPoint | null) => void;
}

// Chart geometry
const CW = 560;
const CH = 178;
const PL = 44;
const PR = 68;
const PT = 14;
const PB = 30;
const TW = PL + CW + PR; // 672
const TH = PT + CH + PB; // 222

// App theme
const GREEN       = '#8dc63f';
const GREEN_DARK  = '#5a8f20';
const GREEN_MID   = '#6fb12e';
const RED_DESCENT = '#e05a5a';
const TEXT_DARK   = '#111827';
const TEXT_MID    = '#6b7280';
const TEXT_LIGHT  = '#9ca3af';
const BORDER      = '#e5e7eb';

function statAscent(points: ElevationPoint[]) {
  return Math.round(
    points.reduce((s, p, i) => (i > 0 ? s + Math.max(0, p.e - points[i - 1].e) : s), 0),
  );
}
function statDescent(points: ElevationPoint[]) {
  return Math.round(
    points.reduce((s, p, i) => (i > 0 ? s + Math.max(0, points[i - 1].e - p.e) : s), 0),
  );
}

export default function ElevationProfile({ points, onHover }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  if (!points.length) return null;

  const maxDist = points[points.length - 1].d;
  const elevs   = points.map((p) => p.e);
  const minE    = Math.min(...elevs);
  const maxE    = Math.max(...elevs);
  const range   = maxE - minE || 1;

  // Derived stats (cheap, no memoization needed at this call depth)
  const ascent  = statAscent(points);
  const descent = statDescent(points);

  const toX = (d: number) => PL + (d / maxDist) * CW;
  const toY = (e: number) => PT + CH - ((e - minE) / range) * CH;

  const pathPts = points.map((p) => `${toX(p.d).toFixed(1)},${toY(p.e).toFixed(1)}`).join(' L ');
  const lineD   = `M ${pathPts}`;
  const areaD   = `M ${toX(0)} ${toY(minE)} ${pathPts} L ${toX(maxDist)} ${toY(minE)} Z`;

  // Y-axis: 4 evenly spaced gridlines + labels
  const ySteps  = 4;
  const yLabels = Array.from({ length: ySteps + 1 }, (_, i) => {
    const frac = i / ySteps;
    return { e: minE + frac * range, y: toY(minE + frac * range) };
  });

  // X-axis ticks
  const xTicks = [0, 0.25, 0.5, 0.75, 1].map((t) => ({
    x: PL + t * CW,
    label: `${(t * maxDist).toFixed(0)} km`,
  }));

  const hovered = hoverIdx !== null ? points[hoverIdx] : null;
  const hx      = hovered ? toX(hovered.d) : 0;
  const hy      = hovered ? toY(hovered.e) : 0;

  // Grade at hovered point
  let grade = 0;
  if (hovered && hoverIdx !== null && hoverIdx > 0) {
    const prev  = points[hoverIdx - 1];
    const distM = (hovered.d - prev.d) * 1000;
    if (distM > 0) grade = ((hovered.e - prev.e) / distM) * 100;
  }

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<SVGSVGElement>) => {
      const svg = svgRef.current;
      if (!svg) return;
      const rect   = svg.getBoundingClientRect();
      const scaleX = TW / rect.width;
      const mx     = (e.clientX - rect.left) * scaleX;
      const frac   = Math.max(0, Math.min(1, (mx - PL) / CW));
      const target = frac * maxDist;

      let best = 0, bestDiff = Infinity;
      points.forEach((p, i) => {
        const diff = Math.abs(p.d - target);
        if (diff < bestDiff) { bestDiff = diff; best = i; }
      });
      setHoverIdx(best);
      onHover(points[best]);
    },
    [points, maxDist, onHover],
  );

  const handleMouseLeave = useCallback(() => {
    setHoverIdx(null);
    onHover(null);
  }, [onHover]);

  // Tooltip: flip to left when near right edge
  const tipX = hovered ? (hx > PL + CW * 0.62 ? hx - 176 : hx + 14) : 0;
  const tipY  = PT + 2;

  // Grade color
  const gradeColor =
    Math.abs(grade) > 15 ? '#dc2626'
    : Math.abs(grade) > 8 ? '#d97706'
    : GREEN;

  return (
    <div
      className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 rounded-2xl bg-white/96 backdrop-blur-md shadow-2xl select-none border border-gray-100 overflow-hidden"
      style={{ width: TW }}
    >
      {/* ── Stats header ─────────────────────────────────────────── */}
      <div className="flex items-center gap-0 border-b border-gray-100">
        {/* Label pill */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 border-r border-gray-100 shrink-0">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 12L5 5l3 4 2-3 3 6H1Z" fill={GREEN} opacity=".25"/>
            <path d="M1 12L5 5l3 4 2-3 3 6" stroke={GREEN_DARK} strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" fill="none"/>
          </svg>
          <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase whitespace-nowrap">
            Elevation
          </span>
        </div>

        {/* Stat chips */}
        <div className="flex items-center divide-x divide-gray-100 flex-1">
          <StatChip label="Distance"  value={`${maxDist.toFixed(1)} km`}  color={TEXT_DARK} />
          <StatChip label="Max Alt"   value={`${Math.round(maxE).toLocaleString()} m`} color={TEXT_DARK} />
          <StatChip label="Ascent"    value={`↑ ${ascent.toLocaleString()} m`}   color={GREEN_DARK} />
          <StatChip label="Descent"   value={`↓ ${descent.toLocaleString()} m`}  color={RED_DESCENT} />
          <StatChip label="Low Point" value={`${Math.round(minE).toLocaleString()} m`} color={TEXT_MID} />
        </div>
      </div>

      {/* ── SVG Chart ────────────────────────────────────────────── */}
      <svg
        ref={svgRef}
        viewBox={`0 0 ${TW} ${TH}`}
        width={TW}
        height={TH}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ display: 'block', cursor: 'crosshair' }}
      >
        <defs>
          <clipPath id="ep-clip">
            <rect x={PL} y={PT} width={CW} height={CH} />
          </clipPath>

          {/* Area fill: green fades to transparent */}
          <linearGradient id="ep-area-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor={GREEN}      stopOpacity="0.28" />
            <stop offset="65%"  stopColor={GREEN}      stopOpacity="0.07" />
            <stop offset="100%" stopColor={GREEN}      stopOpacity="0"    />
          </linearGradient>

          {/* Line: dark-green → bright-green left-to-right */}
          <linearGradient id="ep-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor={GREEN_DARK} />
            <stop offset="100%" stopColor={GREEN_MID}  />
          </linearGradient>

          {/* Tooltip gradient */}
          <linearGradient id="ep-tip-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f8fdf2" />
          </linearGradient>
        </defs>

        {/* Horizontal grid lines */}
        {yLabels.map((l, i) => (
          <line
            key={i}
            x1={PL} y1={l.y} x2={PL + CW} y2={l.y}
            stroke={BORDER}
            strokeWidth={i === 0 || i === ySteps ? '1' : '0.75'}
            strokeDasharray={i === 0 || i === ySteps ? undefined : '4 5'}
            opacity="0.9"
          />
        ))}

        {/* Area fill */}
        <path d={areaD} fill="url(#ep-area-grad)" clipPath="url(#ep-clip)" />

        {/* Elevation line */}
        <path
          d={lineD}
          fill="none"
          stroke="url(#ep-line-grad)"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          clipPath="url(#ep-clip)"
        />

        {/* Hover: vertical dashed ruler */}
        {hovered && (
          <line
            x1={hx} y1={PT} x2={hx} y2={PT + CH}
            stroke={GREEN} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.65"
          />
        )}

        {/* Hover: dot with outer ring */}
        {hovered && (
          <g>
            <circle cx={hx} cy={hy} r="10" fill={GREEN} opacity="0.12" />
            <circle cx={hx} cy={hy} r="6"  fill="white" stroke={GREEN} strokeWidth="2.5" />
            <circle cx={hx} cy={hy} r="2.5" fill={GREEN} />
          </g>
        )}

        {/* Tooltip card */}
        {hovered && (
          <g transform={`translate(${tipX},${tipY})`}>
            <rect
              width="172" height="72" rx="9"
              fill="url(#ep-tip-grad)"
              stroke={GREEN} strokeWidth="1.2"
              filter="drop-shadow(0 4px 14px rgba(141,198,63,0.22))"
            />
            {/* Top accent bar */}
            <rect width="172" height="3" rx="1.5" fill={GREEN} />

            {/* Distance */}
            <text x="12" y="21" fontSize="7" fill={TEXT_LIGHT} fontFamily="system-ui,sans-serif" fontWeight="600" letterSpacing="0.9">
              DISTANCE
            </text>
            <text x="12" y="35" fontSize="13" fontWeight="800" fill={GREEN_DARK} fontFamily="system-ui,sans-serif">
              {hovered.d.toFixed(1)} km
            </text>

            {/* Elevation */}
            <text x="98" y="21" fontSize="7" fill={TEXT_LIGHT} fontFamily="system-ui,sans-serif" fontWeight="600" letterSpacing="0.9">
              ELEVATION
            </text>
            <text x="98" y="35" fontSize="13" fontWeight="800" fill={TEXT_DARK} fontFamily="system-ui,sans-serif">
              {Math.round(hovered.e).toLocaleString()} m
            </text>

            {/* Divider */}
            <line x1="12" y1="43" x2="160" y2="43" stroke={BORDER} strokeWidth="0.75" />

            {/* Grade */}
            <text x="12" y="56" fontSize="7" fill={TEXT_LIGHT} fontFamily="system-ui,sans-serif" fontWeight="600" letterSpacing="0.9">
              GRADE
            </text>
            <text x="12" y="68" fontSize="11" fontWeight="700" fill={gradeColor} fontFamily="system-ui,sans-serif">
              {grade > 0 ? '+' : ''}{grade.toFixed(1)}%
            </text>

            {/* Grade label */}
            <text x="55" y="68" fontSize="9" fill={TEXT_LIGHT} fontFamily="system-ui,sans-serif">
              {Math.abs(grade) > 15 ? '⚠ steep' : Math.abs(grade) > 8 ? 'moderate' : 'gentle'}
            </text>
          </g>
        )}

        {/* Y-axis labels (every other step) */}
        {yLabels
          .filter((_, i) => i % 2 === 0)
          .map((l, i) => (
            <text
              key={i}
              x={PL + CW + 8}
              y={Math.max(PT + 8, Math.min(PT + CH, l.y + 4))}
              fontSize="8.5"
              fill={TEXT_MID}
              fontFamily="system-ui,sans-serif"
              fontWeight="500"
            >
              {Math.round(l.e).toLocaleString()} m
            </text>
          ))}

        {/* X-axis distance labels */}
        {xTicks.map((t) => (
          <text
            key={t.label}
            x={t.x}
            y={PT + CH + 19}
            fontSize="8.5"
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
  );
}

function StatChip({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="flex flex-col items-center px-4 py-2 flex-1">
      <span className="text-[8.5px] font-semibold tracking-widest text-gray-400 uppercase leading-none mb-0.5">
        {label}
      </span>
      <span className="text-[11px] font-bold leading-none" style={{ color }}>
        {value}
      </span>
    </div>
  );
}
