import { POPULAR_TREKS } from '@/static/trek';
import SectionHeader from '../../common/SectionHeader';
import TrekCard from './TrekCard';
import TrekCarousel from './TrekCarousel';
import Image from 'next/image';
import Link from 'next/link';

const PopularTrekSection = () => {
  return (
    <section className="relative py-[100px] overflow-hidden">
      <Image
        src="/images/hill.svg"
        alt=""
        fill
        className="object-bottom object-cover pointer-events-none select-none"
        aria-hidden="true"
      />

      <div className="page-wrapper relative z-10">
        <div className="relative w-full">
          <SectionHeader
            title="Popular Trek"
            description="Choose from Nepal's most iconic trekking adventures"
          />
          <Link
            href="/explore"
            className="absolute right-0 bottom-0 text-sm font-semibold font-poppins text-[#8DC63F] hover:underline underline-offset-4 whitespace-nowrap"
          >
            View all →
          </Link>
        </div>

        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 mt-15">
          {POPULAR_TREKS.map((trek) => (
            <TrekCard key={trek.id} {...trek} href={`/treks/${trek.id}`} />
          ))}
        </div>

        <div className="lg:hidden mt-15">
          <TrekCarousel treks={POPULAR_TREKS} />
        </div>
      </div>
    </section>
  );
};

export default PopularTrekSection;
