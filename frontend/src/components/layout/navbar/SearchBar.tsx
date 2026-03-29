"use client";

import Image from "next/image";
import { useState } from "react";

export function SearchBar() {
  const [value, setValue] = useState("");

  return (
    <div className="relative flex items-center">
      <div className="flex items-center gap-2 px-2 py-2 w-[304px] rounded-[16px] bg-white/20 backdrop-blur-sm border border-white/25 transition-all duration-200 focus-within:bg-white/25 focus-within:border-white/40 overflow-hidden relative">
        <Image
          src="/icons/search-line.svg"
          alt=""
          width={20}
          height={20}
          className="flex-shrink-0"
          aria-hidden="true"
        />

        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search"
          className="flex-1 bg-transparent text-white font-poppins text-sm font-normal leading-5 placeholder:text-white/60 outline-none border-none [&::-webkit-search-cancel-button]:hidden"
          aria-label="Search treks"
        />

        <div
          className="pointer-events-none absolute right-0 bottom-0 overflow-visible"
          style={{ width: "65.25px", height: "31.977px" }}
        >
          <Image
            src="/icons/mountain.svg"
            alt=""
            width={66}
            height={32}
            aria-hidden="true"
            className="w-full h-full absolute right-0 bottom-0"
          />

          <div
            className="absolute pointer-events-none"
            style={{
              width: "32.962px",
              height: "29.914px",
              left: "17.316px",
              top: "2.094px",
            }}
          >
            <Image
              src="/icons/hiker.svg"
              alt=""
              width={33}
              height={30}
              aria-hidden="true"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
