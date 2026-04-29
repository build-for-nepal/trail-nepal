import { cn } from '@/lib/utils';
import updateMountain from '@/assets/details/updateMountain.svg';
import Image from 'next/image';
import { Button } from '../ui/button';
import TrialUpdateReviews from './TrialUpdateReviews';

export interface Props {
  trekId: string;
}

const TrialUpdate = ({ trekId }: Props) => {
  return (
    <div className={cn('page-wrapper', 'flex flex-col gap-10')}>
      <div className="relative w-full h-80 md:h-60 rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={updateMountain}
          alt="mountain-img"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-r from-white/90 via-white/60 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-center px-8 py-6 max-w-lg">
          <h2
            className="text-2xl font-bold text-gray-900 mb-2"
            style={{ fontFamily: "'Oldenburg', serif" }}
          >
            Share an Update from the Trail
          </h2>
          <p className="text-sm text-gray-600 mb-5 leading-relaxed">
            Help future trekkers by sharing updated information about
            accommodations, food, costs, or trail conditions.
          </p>

          <Button className="w-fit bg-[#5a8a00]/80 px-6 py-2.5 rounded-md text-white text-sm font-medium transition-all duration-200 hover:brightness-110 active:scale-95 cursor-pointer">
            Share Story
          </Button>
        </div>
      </div>

      {/* <TrialUpdateReviews /> */}
    </div>
  );
};

export default TrialUpdate;
