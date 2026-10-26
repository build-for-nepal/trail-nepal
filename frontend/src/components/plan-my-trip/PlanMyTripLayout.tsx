'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Sparkles, TriangleAlert } from 'lucide-react';

import PlanMyTripForm from './PlanMyTripForm';
import PlanMyTripLoading from './PlanMyTripLoading';
import PlanMyTripWelcome from './PlanMyTripWelcome';
import {
  fetchRecommendations,
  RecommendationError,
  type TripOption,
} from './recommendations';
import {
  AlternativeCard,
  MatchCard,
  MatchRow,
  SingleMatchCard,
  TripActions,
} from './MatchCards';
import { AiSparkle } from 'src/assets/trivia';
import {
  DEFAULT_PREFERENCES,
  validatePreferences,
  type TripFieldErrors,
  type TripPreferences,
} from '@/lib/tripPreferences';

type Status = 'idle' | 'loading' | 'success' | 'error';

const PlanMyTripError = ({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) => (
  <section
    role="alert"
    className="rounded-2xl bg-white p-8 text-center shadow-sm"
  >
    <TriangleAlert size={28} className="mx-auto text-red-500" />

    <h2 className="mt-3 font-serif text-xl font-bold text-gray-900">
      We couldn&apos;t find your trip.
    </h2>

    <p className="mx-auto mt-2 max-w-md text-sm text-gray-600">{message}</p>

    <button
      type="button"
      onClick={onRetry}
      className="mt-5 rounded-full bg-[#82B300] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#6F9900]"
    >
      Try again
    </button>
  </section>
);

const PlanMyTripLayout = () => {
  const [preferences, setPreferences] =
    useState<TripPreferences>(DEFAULT_PREFERENCES);
  const [errors, setErrors] = useState<TripFieldErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [options, setOptions] = useState<TripOption[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const abortRef = useRef<AbortController | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLElement>(null);
  const scrollToErrorRef = useRef(false);

  useEffect(() => () => abortRef.current?.abort(), []);

  // After a failed submit, bring the first validation error into view.
  useEffect(() => {
    if (!scrollToErrorRef.current || Object.keys(errors).length === 0) return;
    scrollToErrorRef.current = false;
    formRef.current
      ?.querySelector('[role="alert"]')
      ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [errors]);

  // An API failure replaces the loader, so make sure the message is visible.
  useEffect(() => {
    if (status === 'error') {
      resultsRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [status]);

  const handleChange = (patch: Partial<TripPreferences>) => {
    const next = { ...preferences, ...patch };
    setPreferences(next);

    // Once errors are showing, keep them in step with the edits.
    if (Object.keys(errors).length > 0) {
      const result = validatePreferences(next);
      setErrors(result.success ? {} : result.errors);
    }
  };

  const handleClear = () => {
    abortRef.current?.abort();
    setPreferences(DEFAULT_PREFERENCES);
    setErrors({});
    setOptions([]);
    setStatus('idle');
  };

  const handleSubmit = useCallback(async () => {
    const result = validatePreferences(preferences);
    if (!result.success) {
      scrollToErrorRef.current = true;
      setErrors(result.errors);
      return;
    }

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setErrors({});
    setStatus('loading');

    // On stacked (mobile) layouts the results sit below the form.
    resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    try {
      const next = await fetchRecommendations(
        result.request,
        controller.signal,
      );
      setOptions(next);
      setStatus('success');
    } catch (error) {
      if (controller.signal.aborted) return;
      setErrorMessage(
        error instanceof RecommendationError
          ? error.message
          : 'Something went wrong while finding your trip. Please try again.',
      );
      setStatus('error');
    }
  }, [preferences]);

  const [strongest, ...otherOptions] = options;
  const matchCount = strongest?.trails.length ?? 0;

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
          <aside
            ref={formRef}
            className="plan-scrollbar rounded-2xl bg-white lg:sticky lg:top-24 lg:max-h-[calc(100vh-112px)] lg:overflow-y-auto"
          >
            <PlanMyTripForm
              value={preferences}
              onChange={handleChange}
              onClear={handleClear}
              onSubmit={handleSubmit}
              errors={errors}
              submitting={status === 'loading'}
            />
          </aside>

          {/* Right: welcome screen, trail loader, or matching results */}
          <div
            ref={resultsRef}
            className="min-w-0 scroll-mt-24"
            aria-live="polite"
          >
            {status === 'loading' ? (
              <PlanMyTripLoading />
            ) : status === 'error' ? (
              <PlanMyTripError message={errorMessage} onRetry={handleSubmit} />
            ) : status === 'success' ? (
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
                          {strongest.totalDays}{' '}
                          {strongest.totalDays === 1 ? 'Day' : 'Days'}
                        </span>
                      </div>

                      {matchCount === 1 ? (
                        <SingleMatchCard trek={strongest.trails[0]} />
                      ) : matchCount === 3 ? (
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                          {strongest.trails.map((trek) => (
                            <MatchCard key={trek.id} trek={trek} />
                          ))}
                        </div>
                      ) : (
                        <div className="flex flex-col gap-3 sm:gap-4">
                          {strongest.trails.map((trek) => (
                            <MatchRow key={trek.id} trek={trek} />
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

                        <TripActions
                          trailIds={strongest.trails.map((trek) => trek.id)}
                          totalDays={strongest.totalDays}
                        />
                      </div>
                    </section>

                    {/* Alternative options */}
                    {otherOptions.length > 0 && (
                      <div className="mt-5 grid grid-cols-1 items-start gap-4 xl:grid-cols-2">
                        {otherOptions.map((option, index) => (
                          <section
                            key={index}
                            className="rounded-2xl bg-white p-4 shadow-sm"
                          >
                            <div className="mb-4 flex items-center justify-between gap-2">
                              <h2 className="text-sm font-semibold text-[#75962A]">
                                Option {index + 2}
                              </h2>

                              <span className="rounded-lg bg-[#EBF0F8] px-3 py-1.5 font-serif text-sm font-bold text-[#30352C]">
                                {option.totalDays}{' '}
                                {option.totalDays === 1 ? 'Day' : 'Days'}
                              </span>
                            </div>

                            <div className="space-y-3">
                              {option.trails.map((trek) => (
                                <AlternativeCard key={trek.id} trek={trek} />
                              ))}
                            </div>

                            <div className="mt-4">
                              <TripActions
                                trailIds={option.trails.map((trek) => trek.id)}
                                totalDays={option.totalDays}
                              />
                            </div>
                          </section>
                        ))}
                      </div>
                    )}
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
                      onClick={() => setStatus('idle')}
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
    </div>
  );
};

export default PlanMyTripLayout;
