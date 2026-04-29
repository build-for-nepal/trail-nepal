import { PILL_COLOR_MAP } from '@/static/constants';
import { PillProps } from '@/types/homepage';

const Pill = ({ text, color }: PillProps) => {
  const resolvedColor = PILL_COLOR_MAP[color] ?? color;

  return (
    <span className="info-pill" style={{ color: resolvedColor }}>
      {text}
    </span>
  );
};

export default Pill;
