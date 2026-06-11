import React from 'react';
import Image from 'next/image';
import comapreBG from '@/assets/compare/comparebg.svg';

const NoComapre = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden m-0 p-0">
      {/* 1. Background Layer */}
      <div className="page-wrapper absolute inset-0 -z-10 ">
        <Image
          src={comapreBG}
          alt="Everest region background"
          fill
          priority
          className="object-cover"
        />
        {/* The overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/20 to-black/70" />
      </div>

      {/* 2. Content Layer */}
      <div className="relative  flex min-h-screen flex-col items-center justify-center px-4 text-center gap-6">
        <div>
          <h1 className="font-otomanopee text-white text-[40px]">
            We’re Trekking Our <br />
            Way Here...
          </h1>
          <p className="text-white text-[18px]">
            This page is currently on the trail, crossing ridges <br /> and
            valleys. We'll reach basecamp soon.
          </p>
        </div>
        <div>
          <Image
            src="/images/hikerTrial.png"
            alt="hiker and trial"
            width={1444}
            height={890}
          />
        </div>
      </div>
    </main>
  );
};

export default NoComapre;
