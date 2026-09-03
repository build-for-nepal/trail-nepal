import { POPULAR_TREKS } from '@/static/trek';
import SectionHeader from '../../common/SectionHeader';
import TrekCard from './TrekCard';
import TrekCarousel from './TrekCarousel';
import Image from 'next/image';
import Link from 'next/link';

const PopularTrekSection = () => {
  return (
    <section className="relative bg-gradient-to-t from-[#EBF0F8] to-transparent py-[100px] overflow-hidden">
      {/* <Image
        src="/images/popularbg.jpg"
        alt=""
        fill
        className=" object-cover pointer-events-none select-none"
        aria-hidden="true"
      /> */}

      <div className="page-wrapper relative z-10">
        <div className="relative w-full flex flex-col items-center gap-2 lg:block">
          <SectionHeader
            title="Popular Trek"
            description="Choose from Nepal's most iconic trekking adventures"
          />
          <Link
            href="/explore"
            className="text-sm font-semibold font-poppins text-[#8DC63F] hover:underline underline-offset-4 whitespace-nowrap lg:absolute lg:right-0 lg:bottom-0"
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
