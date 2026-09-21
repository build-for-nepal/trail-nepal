'use client';

import React, { useState } from 'react';
import { TREK_DETAILS } from 'src/static/trekDetails';
import TrekTrivia from 'src/components/details/TrekTrivia';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { Arrow, Cloud2, Compass, GrassBg } from '@/assets/trivia';
import styles from './HomeTrivia.module.css';

type TrekQuiz = {
  id: string;
  label: string;
  name: string;
};

type ActiveQuiz = {
  key: string;
  name: string;
  trekId?: string;
};

const HomeTrivia = () => {
  const TREK_QUIZZES: TrekQuiz[] = [
    {
      id: 'ebc-trek',
      label: 'EBC',
      name: 'Everest',
    },
    {
      id: 'langtang-valley',
      label: 'Langtang',
      name: 'Langtang Valley',
    },
    {
      id: 'abc-trek',
      label: 'ABC',
      name: 'Annapurna Base Camp',
    },
    {
      id: 'manaslu-circuit',
      label: 'Manaslu',
      name: 'Manaslu Circuit',
    },
  ];

  const getTrekCover = (trekId: string) => {
    const gallery = TREK_DETAILS[trekId]?.gallery ?? [];
    return (
      gallery.find((image) => image.type === 'hero')?.url ?? gallery[0]?.url
    );
  };

  const [activeQuiz, setActiveQuiz] = useState<ActiveQuiz | null>(null);

  const playTrekQuiz = (trek: TrekQuiz) => {
    setActiveQuiz({
      key: trek.id,
      trekId: trek.id,
      name: trek.name,
    });
  };

  const playGeneralQuiz = () => {
    setActiveQuiz({
      key: 'general',
      name: 'Trail Nepal',
    });
  };

  if (activeQuiz) {
    return (
      <section className="pb-20 sm:pb-24">
        <div className="page-wrapper">
          <button
            type="button"
            onClick={() => setActiveQuiz(null)}
            className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-[#526e00] transition hover:text-[#344700]"
          >
            <ArrowLeft className="size-4" />
            Choose another trivia
          </button>
          <TrekTrivia
            key={activeQuiz.key}
            trekId={activeQuiz.trekId}
            triviaNameOverride={activeQuiz.name}
            autoStart
            embedded
          />
        </div>
      </section>
    );
  }

  return (
    <section className="pb-20 sm:pb-24" aria-labelledby="home-trivia-title">
      <div className="page-wrapper ">
        <div className="relative overflow-hidden rounded-card bg-[#C2E6FE]">
          <Cloud2
            className={`${styles.cloudLeft} pointer-events-none absolute left-8 top-16 w-28 opacity-90`}
            aria-hidden="true"
          />
          <Cloud2
            className={`${styles.cloudRight} pointer-events-none absolute right-8 top-8 w-28 opacity-90`}
            aria-hidden="true"
          />
          <GrassBg
            className="pointer-events-none absolute inset-x-0 -bottom-8 lg:-bottom-24 xl:-bottom-36 h-auto w-full"
            aria-hidden="true"
          />
          <div className="relative z-10 grid grid-cols-1 xl:grid-cols-5  rounded-card border px-6  xl:px-12 py-6">
            {/* 1st Column */}
            <div className="xl:col-span-2 xl:flex items-center max-xm:justify-center gap-4">
              <div className="hidden xl:block">
                <Compass className="size-12" aria-hidden="true" />
              </div>
              <div className="flex max-xl:items-center  flex-col gap-1 xl:gap-3">
                <p className="text-sm font-semibold text-[#5F7C0D]">
                  Trail Trivia
                </p>
                <div>
                  <h2
                    id="home-trivia-title"
                    className="mt-2 text-2xl max-xl:text-center font-semibold text-[#2D2F27]"
                  >
                    A quick trail break?
                  </h2>
                  <p className="mt-2 max-w-sm text-sm font-medium leading-5 max-xl:text-center text-[#2D2F27]">
                    Test what you know about Nepal&apos;s trails and discover
                    something new.
                  </p>
                </div>
              </div>
            </div>
            {/* 2nd Column */}
            <div className="xl:col-span-2 lg:mt-4 xl:mt-0">
              <div className="flex w-full flex-col gap-3">
                <p className="text-sm font-semibold text-[#5F7C0D] hidden xl:block">
                  Choose a trek to start its trivia
                </p>
                <div className="xl:flex xl:justify-between gap-4 py-2 grid grid-cols-2 md:grid-cols-4 lg:px-40 xl:px-0">
                  {TREK_QUIZZES.map((trek, index) => {
                    const coverImage = getTrekCover(trek.id);
                    if (!coverImage) return null;

                    return (
                      <button
                        key={trek.id}
                        type="button"
                        onClick={() => playTrekQuiz(trek)}
                        className={`group flex shrink-0 flex-col items-center transition-all duration-300 ease-out hover:scale-110 hover:drop-shadow-[0_8px_12px_rgba(38,60,46,0.2)] focus-visible:scale-110 ${index % 2 === 0 ? 'lg:-translate-y-2' : 'lg:translate-y-2'}`}
                        aria-label={`Play ${trek.name} trivia`}
                      >
                        <span className="relative size-[88px] overflow-hidden rounded-full border-2 border-white bg-white shadow-[0_5px_14px_rgba(38,60,46,0.16)] sm:size-[96px]">
                          <Image
                            src={coverImage}
                            alt=""
                            fill
                            sizes="96px"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-focus-visible:scale-110"
                          />
                        </span>
                        <span className="relative -mt-3 rounded-full bg-white px-3 py-1 text-xs xl:text-sm font-semibold text-[#40504a] shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-[#faffee] group-hover:text-[#5f7c0d]  ">
                          {trek.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* 3rd Column */}
            <div>
              <div className="relative flex flex-col xl:items-end gap-2 xl:gap-0 max-xl:mt-5">
                <p className="xl:self-start max-xl:text-center text-sm font-semibold text-[#5F7C0D]">
                  Take a general test
                </p>
                <Arrow
                  className="pointer-events-none absolute left-[20%] top-1/4 text-[#526e00] hidden xl:block"
                  aria-hidden="true"
                />
                <div className="flex items-center justify-center">
                  <button
                    type="button"
                    onClick={playGeneralQuiz}
                    className="xl:mt-14 rounded-xl bg-[#88b112] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#789f00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#526e00] sm:text-base"
                  >
                    Play Trivia
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTrivia;
