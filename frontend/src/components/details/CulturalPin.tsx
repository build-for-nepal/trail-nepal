import { SITE_PIN_PATH } from '@/static/mapConstants';

type PinProps = {
  color: string;
  label?: string;
  size?: number;
};

/**
 * The pin art is authored 28×38, but in the itinerary list it reads better a
 * little squatter than its natural aspect — slightly wider and slightly
 * shorter. `preserveAspectRatio="none"` is required for that: with the default
 * `meet` behaviour a wider box would just letterbox the art instead of
 * stretching it.
 */
const WIDTH_RATIO = (28 / 38) * 1.15;
const HEIGHT_RATIO = 0.9;

const CulturalPin = ({ color, label, size = 28 }: PinProps) => {
  return (
    <svg
      width={size * WIDTH_RATIO}
      height={size * HEIGHT_RATIO}
      viewBox="0 0 28 38"
      preserveAspectRatio="none"
      className="shrink-0"
    >
      <path d={SITE_PIN_PATH} fill={color} stroke="#ffffff" strokeWidth={1.6} />
      {label ? (
        <g>
          <circle cx="14" cy="13" r="6.5" fill="#ffffff" />
          <text
            x="14"
            y="13.5"
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="7.5"
            fontWeight="800"
            fill={color}
            style={{ fontFamily: 'system-ui, sans-serif' }}
          >
            {label}
          </text>
        </g>
      ) : (
        <circle cx="14" cy="12.8" r="4.2" fill="#ffffff" />
      )}
    </svg>
  );
};

export default CulturalPin;
