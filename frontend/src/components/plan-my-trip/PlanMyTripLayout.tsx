'use client';

import { useEffect, useMemo, useState } from 'react';
import { Sparkles } from 'lucide-react';

import PlanMyTripForm, {
  DEFAULT_PREFERENCES,
  type TripPreferences,
} from './PlanMyTripForm';
import PlanMyTripLoading from './PlanMyTripLoading';
import PlanMyTripWelcome from './PlanMyTripWelcome';
import {
  ALTERNATIVES,
  TRIP_OPTIONS,
  buildTestMatches,
  getDurationDays,
} from './tripOptions';
import {
  AlternativeCard,
  MatchCard,
  MatchRow,
  SingleMatchCard,
  TripActions,
} from './MatchCards';
import { AiSparkle } from 'src/assets/trivia';

const OPTION_TRIPS_MAX_DAYS = Math.max(...TRIP_OPTIONS.map(getDurationDays));

const PlanMyTripLayout = () => {
  const [preferences, setPreferences] =
    useState<TripPreferences>(DEFAULT_PREFERENCES);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState(false);

  // TESTING ONLY: number of strongest-match cards to show
  const [testCount, setTestCount] = useState(2);

  const handleChange = (patch: Partial<TripPreferences>) => {
    setTouched(true);
    setPreferences((previous) => ({
      ...previous,
      ...patch,
    }));
  };

  const handleClear = () => {
    setPreferences(DEFAULT_PREFERENCES);
    setSubmitted(false);
    setLoading(false);
    setTouched(false);
  };

  const handleSubmit = () => {
    setLoading(true);
  };

  // Show the trail loader briefly, then reveal the matches.
  useEffect(() => {
    if (!loading) {
      return;
    }

    const timer = window.setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1900);

    return () => {
      window.clearTimeout(timer);
    };
  }, [loading]);

  /*
   * DEMO DATA:
   * Replace buildTestMatches(testCount) with your real matching logic, e.g.
   * getStrongestMatches(preferences).map((trek) => ({ key: trek.id, trek })).
   */
  const strongestMatches = useMemo(
    () => buildTestMatches(testCount),
    [testCount],
  );

  const matchCount = strongestMatches.length;
  const suggestedDays = matchCount
    ? Math.max(...strongestMatches.map(({ trek }) => getDurationDays(trek)))
    : 0;

  /*
   * Layout rules for strongest matches:
   * 1      -> wide featured card
   * 3      -> 3-column card grid
   * 2, 4+  -> stacked horizontal rows
   */

  return (
    <div className="min-h-screen w-full bg-[#EBF0F8] pb-20 pt-[88px]">
      <div className="mx-auto w-full max-w-[1600px] px-4 pt-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(290px,0.43fr)_minmax(0,1fr)] xl:grid-cols-[320px_minmax(0,1fr)] 2xl:grid-cols-[400px_minmax(0,1fr)]">
          {/* Left: trip preference form */}
          <aside className="plan-scrollbar rounded-2xl bg-white lg:sticky lg:top-24 lg:max-h-[calc(100vh-112px)] lg:overflow-y-auto">
            {/* TESTING ONLY: remove before shipping */}
            <div className="m-4 mb-0 flex items-center justify-between gap-3 rounded-xl border border-dashed border-[#82B300] px-3 py-2 text-xs text-gray-600">
              <span>Cards (test)</span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Fewer cards"
                  onClick={() => setTestCount((c) => Math.max(1, c - 1))}
                  className="flex size-7 items-center justify-center rounded-full border border-[#82B300] text-[#719900] hover:bg-[#F3F8E8]"
                >
                  −
                </button>

                <output className="w-5 text-center font-semibold text-[#292C24]">
                  {testCount}
                </output>

                <button
                  type="button"
                  aria-label="More cards"
                  onClick={() => setTestCount((c) => Math.min(10, c + 1))}
                  className="flex size-7 items-center justify-center rounded-full border border-[#82B300] text-[#719900] hover:bg-[#F3F8E8]"
                >
                  +
                </button>
              </div>
            </div>

            <PlanMyTripForm
              value={preferences}
              onChange={handleChange}
              onClear={handleClear}
              onSubmit={handleSubmit}
              canSubmit={touched}
            />
          </aside>

          {/* Right: welcome screen, trail loader, or matching results */}
          {loading ? (
            <PlanMyTripLoading />
          ) : submitted ? (
            <section className="min-w-0">
              <header className="mb-5">
                <h1 className="font-serif text-2xl font-bold text-[#252820]">
                  Your trip, matched to you.
                </h1>

                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  Based on your travel month, time, interests, and preferred
                  difficulty, here are the experiences that fit you best.
                </p>
              </header>

              {matchCount > 0 ? (
                <>
                  {/* Strongest match */}
                  <section className="rounded-2xl bg-white p-4 shadow-sm sm:p-5">
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                      <h2 className="flex items-center gap-2 text-sm font-semibold text-[#34392B]">
                        <AiSparkle className="size-7" />
                        Your strongest match
                      </h2>

                      <span className="rounded-lg bg-[#EBF0F8] px-3 py-1.5 font-serif text-sm font-bold text-[#30352C]">
                        {suggestedDays} Days
                      </span>
                    </div>

                    {matchCount === 1 ? (
                      <SingleMatchCard trek={strongestMatches[0].trek} />
                    ) : matchCount === 3 ? (
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                        {strongestMatches.map(({ key, trek }) => (
                          <MatchCard key={key} trek={trek} />
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col gap-3 sm:gap-4">
                        {strongestMatches.map(({ key, trek }) => (
                          <MatchRow key={key} trek={trek} />
                        ))}
                      </div>
                    )}

                    <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                      <p className="max-w-md text-xs italic leading-relaxed text-gray-500">
                        Explore each destination on Trails Nepal to see its
                        trail information, highlights, and practical details.
                        These are suggested experiences, not a day-by-day
                        itinerary.
                      </p>

                      <TripActions />
                    </div>
                  </section>

                  {/* Alternative options: Option 2 has 3 items, Option 3 has 1 */}
                  <div className="mt-5 grid grid-cols-1 items-start gap-4 xl:grid-cols-2">
                    <section className="rounded-2xl bg-white p-4 shadow-sm">
                      <div className="mb-4 flex items-center justify-between gap-2">
                        <h2 className="text-sm font-semibold text-[#75962A]">
                          Option 2
                        </h2>

                        <span className="rounded-lg bg-[#EBF0F8] px-3 py-1.5 font-serif text-sm font-bold text-[#30352C]">
                          {OPTION_TRIPS_MAX_DAYS} Days
                        </span>
                      </div>

                      <div className="space-y-3">
                        {TRIP_OPTIONS.map((trek) => (
                          <AlternativeCard key={trek.id} trek={trek} />
                        ))}
                      </div>

                      <div className="mt-4">
                        <TripActions />
                      </div>
                    </section>

                    <section className="rounded-2xl bg-white p-4 shadow-sm">
                      <div className="mb-4 flex items-center justify-between gap-2">
                        <h2 className="text-sm font-semibold text-[#75962A]">
                          Option 3
                        </h2>

                        <span className="rounded-lg bg-[#EBF0F8] px-3 py-1.5 font-serif text-sm font-bold text-[#30352C]">
                          {getDurationDays(ALTERNATIVES[0])} Days
                        </span>
                      </div>

                      <AlternativeCard trek={ALTERNATIVES[0]} />

                      <div className="mt-4">
                        <TripActions />
                      </div>
                    </section>
                  </div>
                </>
              ) : (
                <section className="rounded-2xl bg-white p-8 text-center">
                  <Sparkles size={28} className="mx-auto text-[#719900]" />

                  <h2 className="mt-3 font-serif text-xl font-bold text-gray-900">
                    Let&apos;s try a different combination.
                  </h2>

                  <p className="mx-auto mt-2 max-w-md text-sm text-gray-600">
                    We couldn&apos;t find a suitable match for these
                    preferences. Try adjusting your travel dates, duration, or
                    difficulty.
                  </p>

                  <button
                    type="button"
                    onClick={handleClear}
                    className="mt-5 rounded-full bg-[#82B300] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#6F9900]"
                  >
                    Change preferences
                  </button>
                </section>
              )}
            </section>
          ) : (
            <div className="min-w-0">
              <PlanMyTripWelcome />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanMyTripLayout;
