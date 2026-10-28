import { cn } from '@/lib/utils';

const PlanMyTripLoading = ({ className }: { className?: string }) => {
  return (
    <section
      role="status"
      className={cn(
        'flex min-h-[420px] w-full min-w-0 flex-col items-center justify-center gap-6 rounded-2xl bg-white p-8 text-center shadow-sm',
        className,
      )}
    >
      <svg
        viewBox="0 0 260 110"
        className="w-[240px] max-w-full"
        fill="none"
        aria-hidden="true"
      >
        {/* Dotted trail that slowly marches toward the flag */}
        <path
          className="pmt-loader-trail"
          d="M14 84 C 54 84, 56 42, 96 42 S 140 84, 180 84 S 216 46, 238 58"
          stroke="#CFD9E6"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="2 13"
        />

        {/* Trailhead */}
        <circle cx="14" cy="84" r="4.5" fill="#8DC63F" />

        {/* Peaku hopping along the trail */}
        <g className="pmt-loader-hiker">
          <circle
            className="pmt-loader-pulse"
            cx="96"
            cy="42"
            r="6"
            fill="#8DC63F"
          />
          <circle cx="96" cy="42" r="5" fill="#8DC63F" />
          <circle cx="96" cy="42" r="2" fill="#ffffff" />
        </g>

        {/* Destination flag */}
        <g transform="translate(238 58)">
          <path
            d="M0 0 V -24"
            stroke="#272922"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <path d="M1 -23 L16 -17.5 L1 -12 Z" fill="#8DC63F" />
          <circle cx="0" cy="0" r="2.2" fill="#272922" />
        </g>
      </svg>

      <p className="font-fraunces text-lg font-semibold text-[#272922]">
        Finding your perfect trail
      </p>

      <div className="flex items-center gap-1.5" aria-hidden="true">
        <span className="size-2 animate-bounce rounded-full bg-[#8DC63F] [animation-delay:-0.3s] motion-reduce:animate-none" />
        <span className="size-2 animate-bounce rounded-full bg-[#8DC63F] [animation-delay:-0.15s] motion-reduce:animate-none" />
        <span className="size-2 animate-bounce rounded-full bg-[#8DC63F] motion-reduce:animate-none" />
      </div>
    </section>
  );
};

export default PlanMyTripLoading;
