'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState, useSyncExternalStore } from 'react';
import {
  CalendarDays,
  Clock3,
  Footprints,
  Heart,
  Mountain,
  Share2,
} from 'lucide-react';
import { Button } from 'src/components/ui/button';
import {
  HEART_BUTTON_CLASS,
  SAVED_HEART_CLASS,
} from '@/components/common/SaveButton';
import { cn } from '@/lib/utils';
import { removeTripWithFeedback } from '@/lib/trips';
import { ShareTripModal } from '@/components/common/ShareTripModal';
import { MatchRow } from '@/components/plan-my-trip/MatchCards';
import { getCategory } from '@/components/plan-my-trip/tripOptions';
import { buildShareUrl } from '@/lib/sharedTrip';
import { trailHref } from '@/lib/trail';
import type { TrailPins } from '@/lib/savedTripPins';
import { TRAILS } from '@/static/trek';
import {
  type SavedTrip,
  useMyTrips,
  useSavedTripsStore,
} from '@/store/savedTripsStore';
import type { Trek } from '@/types/trek';
import type { SavedPin } from './SavedTripsMap';

const SavedTripsMap = dynamic(() => import('./SavedTripsMap'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-gray-100 text-sm text-gray-500">
      Loading map…
    </div>
  ),
});

const TRAILS_BY_ID = new Map(TRAILS.map((trail) => [trail.id, trail]));
const DIFFICULTY_ORDER: Trek['difficulty'][] = [
  'Easy',
  'Moderate',
  'Challenging',
  'Difficult',
  'Strenuous',
];

type ResolvedTrip = SavedTrip & { treks: Trek[] };

function timeAgo(savedAt: number): string {
  const days = Math.floor((Date.now() - savedAt) / 86_400_000);
  if (days < 1) return 'Saved today';
  if (days === 1) return 'Saved yesterday';
  return `Saved ${days} days ago`;
}

/** The trip's shared type, or "Mixed" when it spans several. */
function tripCategory(treks: Trek[]): string {
  const categories = new Set(treks.map(getCategory));
  return categories.size === 1 ? [...categories][0] : 'Mixed';
}

function hardestDifficulty(treks: Trek[]): string {
  return treks.reduce<Trek['difficulty']>(
    (hardest, trek) =>
      DIFFICULTY_ORDER.indexOf(trek.difficulty) >
      DIFFICULTY_ORDER.indexOf(hardest)
        ? trek.difficulty
        : hardest,
    treks[0].difficulty,
  );
}

/** Zustand's persisted store is empty until it rehydrates from localStorage. */
function useStoreHydrated(): boolean {
  return useSyncExternalStore(
    // `persist` is absent while prerendering (no localStorage on the server).
    (onChange) =>
      useSavedTripsStore.persist?.onFinishHydration(onChange) ?? (() => {}),
    () => useSavedTripsStore.persist?.hasHydrated() ?? false,
    () => false,
  );
}

const MetaItem = ({
  icon: Icon,
  children,
}: {
  icon: typeof Clock3;
  children: React.ReactNode;
}) => (
  <span className="flex items-center gap-1.5">
    <Icon size={15} className="shrink-0 text-[#5F7C0D]" aria-hidden="true" />
    {children}
  </span>
);

const SavedTripsEmpty = () => (
  <div className="mx-auto flex w-full min-w-0 flex-col items-center justify-center gap-4 text-center">
    <Image
      src="/images/mascot/peaku binoculars.png"
      alt="Peaku mascot looking through binoculars"
      width={273}
      height={250}
      priority
      className="h-auto w-[260px] max-w-full"
    />

    <div className="flex flex-col items-center gap-4">
      <h1 className="font-fraunces text-[28px] font-semibold leading-[1.15] text-[#272922] md:text-[24px] lg:text-[32px]">
        No saved trips yet
      </h1>
      <p className="max-w-[600px] font-poppins text-base leading-relaxed text-[#606359]">
        Found a trek, hike or place you like? Save it to plan later and keep all
        your ideas in one place.
      </p>
    </div>

    <Button
      asChild
      className="h-auto w-[160px] cursor-pointer rounded-full bg-[#8cc63f] px-4 py-4.5 font-poppins font-semibold text-white shadow-lg transition-transform hover:-translate-y-1 hover:bg-[#7ab034] [a]:hover:bg-[#7ab034] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <Link href="/explore/">Explore</Link>
    </Button>
  </div>
);

const SavedTripsLoading = () => (
  <div
    role="status"
    aria-label="Loading saved trips"
    className="grid gap-8 lg:grid-cols-[46fr_51fr]"
  >
    <div className="flex flex-col gap-5">
      {[0, 1].map((i) => (
        <div
          key={i}
          className="h-64 animate-pulse rounded-2xl bg-white/70 motion-reduce:animate-none"
        />
      ))}
    </div>
    <div className="h-[360px] animate-pulse rounded-2xl bg-white/70 motion-reduce:animate-none lg:h-[calc(100vh-8rem)]" />
  </div>
);

/** A bulk group of destinations, e.g. saved together from Plan My Trip. */
function CollectionCard({
  trip,
  onShare,
}: {
  trip: ResolvedTrip;
  onShare: (trip: ResolvedTrip) => void;
}) {
  return (
    <article className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#2D2F27]">
        <MetaItem icon={CalendarDays}>
          {trip.month ?? trip.treks[0].season}
        </MetaItem>
        <MetaItem icon={Clock3}>
          {trip.totalDays} {trip.totalDays === 1 ? 'day' : 'days'}
        </MetaItem>
        <MetaItem icon={Footprints}>{tripCategory(trip.treks)}</MetaItem>
        <MetaItem icon={Mountain}>{hardestDifficulty(trip.treks)}</MetaItem>
        <span className="ml-auto text-[#2D2F27]/70">
          {timeAgo(trip.savedAt)}
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {trip.treks.map((trek) => (
          <MatchRow key={trek.id} trek={trek} />
        ))}
      </div>

      <div className="mt-4 flex items-center gap-4 max-sm:flex-col max-sm:items-stretch">
        <p className="min-w-0 flex-1 text-xs italic leading-relaxed text-[#6B7A5A]">
          Explore each destination on Trails Nepal to see its trail information,
          highlights and practical details. This is a combination of existing
          experiences, not a day-by-day itinerary. ✨
        </p>

        <div className="flex shrink-0 items-center gap-2 max-sm:justify-end">
          <button
            type="button"
            onClick={() => removeTripWithFeedback(trip.id)}
            aria-label="Remove from saved trips"
            title="Remove from saved trips"
            className={cn(HEART_BUTTON_CLASS, 'size-10')}
          >
            <Heart size={18} className={SAVED_HEART_CLASS} />
          </button>
          <button
            type="button"
            onClick={() => onShare(trip)}
            className="inline-flex h-10 shrink-0 cursor-pointer items-center gap-2 rounded-full border border-[#82B300] px-4 text-sm font-medium text-[#5F7C0D] transition hover:bg-[#F3F8E8]"
          >
            <Share2 size={16} />
            Share
          </button>
        </div>
      </div>
    </article>
  );
}

/** A single saved destination. */
function SingleCard({ trip }: { trip: ResolvedTrip }) {
  const trek = trip.treks[0];

  return (
    <MatchRow
      trek={trek}
      categoryAside={timeAgo(trip.savedAt)}
      imageOverlay={
        <button
          type="button"
          onClick={() => removeTripWithFeedback(trip.id)}
          aria-label={`Remove ${trek.title} from saved trips`}
          title="Remove from saved trips"
          className={cn(HEART_BUTTON_CLASS, 'size-8')}
        >
          <Heart size={16} className={SAVED_HEART_CLASS} />
        </button>
      }
    />
  );
}

const SavedTripsContent = ({ pins }: { pins: TrailPins }) => {
  const hydrated = useStoreHydrated();
  const trips = useMyTrips();
  const [shareUrl, setShareUrl] = useState('');
  const [shareOpen, setShareOpen] = useState(false);

  // Newest first; drop ids that no longer match a known trail.
  const resolved = useMemo<ResolvedTrip[]>(
    () =>
      [...trips]
        .sort((a, b) => b.savedAt - a.savedAt)
        .flatMap((trip) => {
          const treks = trip.trailIds.flatMap(
            (id) => TRAILS_BY_ID.get(id) ?? [],
          );
          return treks.length > 0 ? [{ ...trip, treks }] : [];
        }),
    [trips],
  );

  const mapPins = useMemo<SavedPin[]>(() => {
    const seen = new Set<string>();
    return resolved.flatMap((trip) =>
      trip.treks.flatMap((trek) => {
        const coordinates = pins[trek.id];
        if (!coordinates || seen.has(trek.id)) return [];
        seen.add(trek.id);
        return [
          {
            id: trek.id,
            title: trek.title,
            href: trailHref(trek),
            coordinates,
          },
        ];
      }),
    );
  }, [resolved, pins]);

  const handleShare = (trip: ResolvedTrip) => {
    const url = buildShareUrl(
      window.location.origin,
      trip.trailIds,
      trip.totalDays,
    );
    setShareUrl(url);
    setShareOpen(true);
  };

  if (!hydrated) return <SavedTripsLoading />;
  if (resolved.length === 0) return <SavedTripsEmpty />;

  return (
    <section className="mx-auto w-full max-w-[1320px] min-w-0">
      <header className="mb-8">
        <h1 className="font-fraunces text-[32px] font-semibold leading-[1.15] text-[#272922] md:text-[40px]">
          Saved Trips
        </h1>
        <p className="mt-3 font-poppins text-base leading-relaxed text-[#606359] lg:whitespace-nowrap">
          Your saved trips and ideas, all in one place. Continue planning, make
          changes, or get inspired again.
        </p>
      </header>

      <div className="grid items-start gap-8 lg:grid-cols-[46fr_51fr]">
        <div className="flex min-w-0 flex-col gap-5">
          {resolved.map((trip) =>
            trip.treks.length > 1 ? (
              <CollectionCard key={trip.id} trip={trip} onShare={handleShare} />
            ) : (
              <SingleCard key={trip.id} trip={trip} />
            ),
          )}
        </div>

        <div className="h-[360px] overflow-hidden rounded-2xl shadow-sm sm:h-[460px] lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)] lg:min-h-[480px]">
          <SavedTripsMap pins={mapPins} />
        </div>
      </div>

      <ShareTripModal
        open={shareOpen}
        onOpenChange={setShareOpen}
        url={shareUrl}
      />
    </section>
  );
};

export default SavedTripsContent;
