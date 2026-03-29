// features/navigation/components/SearchBar.tsx
"use client";

import Image from "next/image";

export function SearchBar() {
  return (
    <div className="flex items-center gap-2 px-2 py-2 w-[304px] rounded-[16px] bg-white/20 backdrop-blur-sm border border-white/25 transition-all duration-200 focus-within:bg-white/25 focus-within:border-white/40 overflow-hidden relative">
      <Image
        src="/icons/search-line.svg"
        alt=""
        width={20}
        height={20}
        className="shrink-0"
      />

      <input
        type="search"
        placeholder="Search"
        className="flex-1 bg-transparent text-white font-poppins text-sm font-normal leading-5 placeholder:text-white/60 outline-none border-none [&::-webkit-search-cancel-button]:hidden"
        aria-label="Search treks"
      />

      {/* Decorative illustration — pointer-events disabled, clipped by parent overflow-hidden */}
      <div className="pointer-events-none absolute right-0 bottom-0 w-[65px] h-[32px]">
        <Image
          src="/icons/mountain.svg"
          alt=""
          width={66}
          height={32}
          className="absolute right-0 bottom-0"
        />
        <div className="absolute pointer-events-none w-[33px] h-[30px] left-[17px] top-[2px]">
          <Image src="/icons/hiker.svg" alt="" width={33} height={30} />
        </div>
      </div>
    </div>
  );
}
