'use client';

import { useRef, useState, useCallback } from 'react';
import { ElevationPoint } from '@/types/trek';

interface Props {
  points: ElevationPoint[];
  onHover: (point: ElevationPoint | null) => void;
}

// Chart geometry constants
const CW = 530; // chart inner width
const CH = 110; // chart inner height
const PL = 30;  // pad left
const PR = 50;  // pad right (y-axis labels)
const PT = 18;  // pad top
const PB = 28;  // pad bottom (x-axis labels)

const TW = PL + CW + PR; // total SVG width
const TH = PT + CH + PB; // total SVG height
const TOOLTIP_W = 152;
const TOOLTIP_H = 74;

export default function ElevationProfile({ points, onHover }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  if (!points.length) return null;

  const maxDist = points[points.length - 1].d;
  const elevs = points.map((p) => p.e);
  const minE = Math.min(...elevs);
  const maxE = Math.max(...elevs);
  const range = maxE - minE || 1;

  const toX = (d: number) => PL + (d / maxDist) * CW;
  const toY = (e: number) => PT + CH - ((e - minE) / range) * CH;

  // SVG line path
  const pathPts = points
    .map((p) => `${toX(p.d).toFixed(1)},${toY(p.e).toFixed(1)}`)
    .join(' L ');
  const lineD = `M ${pathPts}`;

  // X-axis: 5 evenly spaced distance labels
  const xTicks = [0, 0.25, 0.5, 0.75, 1].map((t) => ({
    x: PL + t * CW,
    label: (t * maxDist).toFixed(1) + ' km',
  }));

  // Y-axis right labels: max elevation + mid elevation
  const midE = minE + range * 0.45;
  const yLabels = [
    { e: maxE, y: toY(maxE) + 4 },
    { e: midE, y: toY(midE) + 4 },
  ];

  const hovered = hoverIdx !== null ? points[hoverIdx] : null;

  // Grade at hovered point
  let grade = 0;
  if (hovered && hoverIdx !== null && hoverIdx > 0) {
    const prev = points[hoverIdx - 1];
    const distM = (hovered.d - prev.d) * 1000;
    if (distM > 0) grade = ((hovered.e - prev.e) / distM) * 100;
  }

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<SVGSVGElement>) => {
      const svg = svgRef.current;
      if (!svg) return;
      const rect = svg.getBoundingClientRect();
      const scaleX = TW / rect.width;
      const mx = (e.clientX - rect.left) * scaleX;
      const frac = Math.max(0, Math.min(1, (mx - PL) / CW));
      const target = frac * maxDist;

      let best = 0;
      let bestDiff = Infinity;
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

  const handleMouseLeave = useCallback(() => {
    setHoverIdx(null);
    onHover(null);
  }, [onHover]);

  // Tooltip x: flip to left when near right edge
  const hx = hovered ? toX(hovered.d) : 0;
  const tipX = hovered ? (hx > PL + CW * 0.6 ? hx - 136 : hx + 10) : 0;
  const tipY = PT;

  return (
    <div
      className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 rounded-2xl bg-white shadow-lg select-none"
      style={{ width: TW }}
    >
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
        </defs>

        {/* Elevation line — black, thin */}
        <path
          d={lineD}
          fill="none"
          stroke="#1f2937"
          strokeWidth="1.6"
          strokeLinejoin="round"
          strokeLinecap="round"
          clipPath="url(#ep-clip)"
        />

        {/* Hover vertical rule */}
        {hovered && (
          <line
            x1={hx} y1={PT}
            x2={hx} y2={PT + CH}
            stroke="#6b7280"
            strokeWidth="1"
            strokeDasharray="3 2"
          />
        )}

        {/* Dot on line */}
        {hovered && (
          <circle
            cx={hx}
            cy={toY(hovered.e)}
            r="3.5"
            fill="#1f2937"
            stroke="white"
            strokeWidth="1.5"
          />
        )}

        {/* Tooltip */}
        {hovered && (
          <g transform={`translate(${tipX},${tipY})`}>
            <rect
              width="126"
              height="58"
              rx="7"
              fill="white"
              stroke="#e5e7eb"
              strokeWidth="0.8"
              filter="drop-shadow(0 2px 6px rgba(0,0,0,0.12))"
            />
            <text x="10" y="15" fontSize="8.5" fill="#9ca3af" fontFamily="system-ui,sans-serif">Distance</text>
            <text x="10" y="27" fontSize="10.5" fontWeight="700" fill="#111827" fontFamily="system-ui,sans-serif">
              {hovered.d.toFixed(1)} km
            </text>
            <text x="68" y="15" fontSize="8.5" fill="#9ca3af" fontFamily="system-ui,sans-serif">Elevation</text>
            <text x="68" y="27" fontSize="10.5" fontWeight="700" fill="#111827" fontFamily="system-ui,sans-serif">
              {Math.round(hovered.e).toLocaleString()} m
            </text>
            <text x="10" y="44" fontSize="8.5" fill="#9ca3af" fontFamily="system-ui,sans-serif">Grade</text>
            <text x="10" y="56" fontSize="10.5" fontWeight="700" fill="#111827" fontFamily="system-ui,sans-serif">
              {grade > 0 ? '+' : ''}{grade.toFixed(0)}%
            </text>
          </g>
        )}

        {/* Y-axis right labels */}
        {yLabels.map((l, i) => (
          <text
            key={i}
            x={PL + CW + 5}
            y={Math.max(PT + 8, Math.min(PT + CH, l.y))}
            fontSize="8.5"
            fill="#9ca3af"
            fontFamily="system-ui,sans-serif"
          >
            {Math.round(l.e).toLocaleString()} m
          </text>
        ))}

        {/* X-axis distance labels */}
        {xTicks.map((t) => (
          <text
            key={t.label}
            x={t.x}
            y={PT + CH + 15}
            fontSize="8.5"
            textAnchor="middle"
            fill="#9ca3af"
            fontFamily="system-ui,sans-serif"
          >
            {t.label}
          </text>
        ))}
      </svg>
    </div>
  );
}
