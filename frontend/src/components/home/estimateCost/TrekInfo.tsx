import Link from 'next/link';
import { TrekInfoData } from '@/types/homepage';
import { SearchBar } from 'src/components/search/SearchBar';

interface TrekInfoProps {
  trek: TrekInfoData;
}

export default function TrekInfo({ trek }: TrekInfoProps) {
  return (
    <div className="flex w-full max-w-[460px] flex-col items-start gap-6">
      <div className="w-full max-w-[380px]">
        <SearchBar variant="dark" />
      </div>

      <h3 className="font-fraunces text-3xl font-normal leading-tight text-black lg:text-[38px]">
        {trek.title}
      </h3>

      <p className="font-poppins text-sm leading-relaxed text-black sm:text-base">
        {trek.description}
      </p>

      <Link
        href={trek.exploreHref}
        className="font-poppins inline-flex items-center justify-center rounded-full bg-[#8DB73D] px-8 py-3 text-sm font-semibold text-white transition-opacity duration-150 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8DB73D] focus-visible:ring-offset-2 sm:text-base"
      >
        Explore Now
      </Link>
    </div>
  );
}
