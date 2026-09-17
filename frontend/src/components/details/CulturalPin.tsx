import { SITE_PIN_PATH } from '@/static/mapConstants';

type PinProps = {
  color: string;
  label?: string;
  size?: number;
};

const CulturalPin = ({ color, label, size = 28 }: PinProps) => {
  const width = size * (28 / 38);
  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 28 38"
      className="shrink-0"
      style={{
        filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.25))',
      }}
    >
      <path
        d={SITE_PIN_PATH}
        fill={color}
        stroke="#ffffff"
        strokeWidth={1.6}
      />
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