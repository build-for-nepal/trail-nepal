import Image from 'next/image';
import Link from 'next/link';
import { Leaf, Landmark, PersonStanding, type LucideIcon } from 'lucide-react';
import mascotMap from '@/assets/trivia/mascot_map.png';

type Feature = {
  icon: LucideIcon;
  lines: string[];
};

const FEATURES: Feature[] = [
  { icon: PersonStanding, lines: ['Personalized', 'recommendations'] },
  { icon: Landmark, lines: ['Trekking, hikes', '& cultural experiences'] },
  { icon: Leaf, lines: ['Combines existing', 'experiences'] },
];

const PlanMyTripWelcome = () => {
  return (
    <div className="flex w-full min-w-0 flex-col items-center justify-center gap-10 text-center">
      <Image
        src={mascotMap}
        alt="Peaku mascot reading a map beside a trail sign"
        priority
        className="h-auto w-[300px] max-w-full"
      />

      <div className="flex flex-col items-center gap-4">
        <h2 className="font-fraunces text-[28px] font-semibold leading-[1.15] text-[#272922] md:text-[24px] lg:text-[32px]">
          Tell us about your trip to <br className="hidden lg:inline" />
          explore Nepal
        </h2>
        <p className="max-w-[600px] font-poppins text-base leading-relaxed text-[#606359]">
          Answer a few simple questions and we&apos;ll show you handpicked
          treks, hikes and cultural experiences that match your time and
          interests.
        </p>
      </div>

      <div className="grid w-full max-w-[680px] grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-8">
        {FEATURES.map(({ icon: Icon, lines }) => (
          <div
            key={lines.join(' ')}
            className="flex min-w-0 flex-col items-center gap-3"
          >
            <span className="flex size-[50px] items-center justify-center rounded-full bg-white shadow-[0_2px_10px_rgba(39,41,34,0.06)]">
              <Icon
                className="size-6 text-[#272922]"
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </span>
            <span className="font-poppins text-sm font-medium leading-snug text-[#3b3f36]">
              {lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>

      <Link
        href="/explore/"
        className="font-poppins text-sm font-medium text-brand-primary transition-colors hover:text-brand-primary-dark hover:underline"
      >
        Explore other trips...
      </Link>
    </div>
  );
};

export default PlanMyTripWelcome;
