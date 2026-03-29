import Image from "next/image";

export function SearchBar() {
  return (
    <div className="relative flex w-[304px] items-center gap-2 overflow-hidden rounded-[16px] border border-white/25 bg-white/20 px-2 py-2 backdrop-blur-sm transition-all duration-200 focus-within:border-white/40 focus-within:bg-white/25">
      <Image
        src="/icons/search-line.svg"
        alt=""
        width={20}
        height={20}
        className="shrink-0"
        aria-hidden="true"
      />

      <input
        type="search"
        placeholder="Search"
        className="flex-1 border-none bg-transparent font-poppins text-sm font-normal leading-5 text-white outline-none placeholder:text-white/60 [&::-webkit-search-cancel-button]:hidden"
        aria-label="Search treks"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[32px] w-[65px]"
        aria-hidden="true"
      >
        <Image
          src="/icons/mountain.svg"
          alt=""
          width={66}
          height={32}
          className="absolute bottom-0 right-0 h-full w-full"
        />
        <div className="absolute left-[17px] top-[2px] h-[30px] w-[33px] pointer-events-none">
          <Image
            src="/icons/hiker.svg"
            alt=""
            width={33}
            height={30}
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
