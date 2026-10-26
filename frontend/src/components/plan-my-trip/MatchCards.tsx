'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { LoginToSaveModal } from '@/components/common/LoginToSaveModal';
import { ShareTripModal } from '@/components/common/ShareTripModal';
import { buildShareUrl, tripKey } from '@/lib/sharedTrip';
import { useAuthStore } from '@/store/authStore';
import { useSavedTripsStore } from '@/store/savedTripsStore';
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Heart,
  Mountain,
  Share2,
} from 'lucide-react';
import { trailHref } from '@/lib/trail';
import type { Trek } from '@/types/trek';
import { getCategory } from './tripOptions';

/**
 * Shared duration, altitude, season and optional price information.
 */
function TripMetadata({
  trek,
  compact = false,
}: {
  trek: Trek;
  compact?: boolean;
}) {
  return (
    <div
      className={`mt-3 flex flex-wrap items-center text-gray-600 ${
        compact
          ? 'gap-x-3 gap-y-1.5 text-[10px]'
          : 'gap-x-4 gap-y-2 text-[10px]'
      }`}
    >
      <span className="flex items-center gap-1">
        <Clock3 size={12} />
        {trek.duration}
      </span>

      <span className="flex items-center gap-1">
        <Mountain size={12} />
        {trek.altitude}
      </span>

      <span className="flex items-center gap-1">
        <CalendarDays size={12} />
        {trek.season}
      </span>

      {trek.price != null && (
        <span className="rounded-full border border-gray-300 px-2 py-1">
          ~ NRs. {trek.price.toLocaleString()}
        </span>
      )}
    </div>
  );
}

/**
 * Save button UI.
 * Connect this to authentication and saved-trip state later.
 */
function SaveButton({ title }: { title: string }) {
  return (
    <button
      type="button"
      aria-label={`Save ${title}`}
      title="Save trip"
      className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[#82B300] text-[#82B300] transition hover:bg-[#F3F8E8]"
    >
      <Heart size={16} />
    </button>
  );
}

/**
 * Horizontal row card used for 2 strongest matches, or 4 and more.
 * Image left, details in the middle, arrow on the right.
 */
export function MatchRow({ trek }: { trek: Trek }) {
  return (
    <Link
      href={trailHref(trek)}
      className="group flex min-w-0 items-stretch overflow-hidden rounded-2xl border border-gray-200/80 bg-white transition hover:border-[#82B300] hover:shadow-sm"
    >
      <div className="relative w-[104px] shrink-0 overflow-hidden sm:w-[150px]">
        <Image
          src={trek.imageUrl}
          alt={trek.title}
          fill
          sizes="(min-width: 640px) 150px, 104px"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center gap-1 px-4 py-4 sm:px-5">
        <p className="text-[11px] text-[#75962A] sm:text-xs">
          {getCategory(trek)}
        </p>

        <h3 className="line-clamp-2 font-serif text-[15px] font-bold leading-tight text-[#292C24] sm:text-lg">
          {trek.title}
        </h3>

        <p className="truncate text-[11px] font-medium text-[#34392B] sm:text-xs">
          {trek.region}
        </p>

        <div className="mt-1 flex flex-wrap items-center gap-x-2 text-[10px] text-gray-500 sm:text-[11px]">
          <span>{trek.duration}</span>
          <span aria-hidden="true">•</span>
          <span>{trek.altitude}</span>
          <span aria-hidden="true">•</span>
          <span>{trek.season}</span>
        </div>
      </div>

      <ArrowUpRight
        size={20}
        className="mr-4 shrink-0 self-center text-[#719900] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:mr-6"
      />
    </Link>
  );
}

/**
 * Compact vertical card. Used for exactly 3 strongest matches.
 */
export function MatchCard({ trek }: { trek: Trek }) {
  const href = trailHref(trek);

  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <Link
        href={href}
        className="relative block aspect-[1.8/1] overflow-hidden"
      >
        <Image
          src={trek.imageUrl}
          alt={trek.title}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />

        <span className="absolute right-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-medium text-[#719900]">
          {trek.difficulty}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-3">
        <Link href={href} className="hover:text-[#719900]">
          <h3 className="line-clamp-2 font-serif text-[15px] font-bold text-[#292C24]">
            {trek.title}
          </h3>
        </Link>

        <p className="mt-0.5 text-[11px] text-gray-500">{trek.region}</p>

        <p className="mt-2 line-clamp-3 text-[11px] leading-[1.55] text-gray-600">
          {trek.description}
        </p>

        <TripMetadata trek={trek} compact />

        <div className="mt-auto flex items-center gap-2 pt-3">
          <Link
            href={href}
            className="flex flex-1 items-center justify-center rounded-full bg-[#82B300] px-3 py-2 text-[11px] font-semibold text-white transition hover:bg-[#6F9900]"
          >
            See More
          </Link>

          <SaveButton title={trek.title} />
        </div>
      </div>
    </article>
  );
}

/**
 * Wide horizontal card for exactly one strongest match.
 */
export function SingleMatchCard({ trek }: { trek: Trek }) {
  const href = trailHref(trek);

  return (
    <article className="grid min-w-0 overflow-hidden rounded-2xl border border-gray-100 bg-white md:grid-cols-2">
      <Link
        href={href}
        className="group relative min-h-[210px] overflow-hidden sm:min-h-[250px]"
      >
        <Image
          src={trek.imageUrl}
          alt={trek.title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />

        <span className="absolute right-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-medium text-[#719900]">
          {trek.difficulty}
        </span>
      </Link>

      <div className="flex min-w-0 flex-col justify-center p-4 sm:p-5">
        <Link href={href} className="hover:text-[#719900]">
          <h3 className="font-serif text-lg font-bold text-[#292C24]">
            {trek.title}
          </h3>
        </Link>

        <p className="mt-0.5 text-xs text-gray-500">{trek.region}</p>

        <p className="mt-3 line-clamp-3 text-xs leading-[1.6] text-gray-600">
          {trek.description}
        </p>

        <TripMetadata trek={trek} />

        <Link
          href={href}
          className="mt-4 inline-flex w-fit items-center gap-2 text-xs font-semibold text-[#719900] transition hover:text-[#527000]"
        >
          Explore destination
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

/**
 * Compact horizontal card for alternative recommendations.
 */
export function AlternativeCard({ trek }: { trek: Trek }) {
  return (
    <Link
      href={trailHref(trek)}
      className="flex min-w-0 gap-3 overflow-hidden rounded-xl border border-gray-200/80 bg-white p-2 transition hover:border-[#82B300]"
    >
      <Image
        src={trek.imageUrl}
        alt={trek.title}
        width={92}
        height={88}
        className="h-[88px] w-[92px] shrink-0 rounded-lg object-cover"
      />

      <div className="min-w-0 self-center">
        <p className="text-[10px] text-[#75962A]">{getCategory(trek)}</p>

        <h3 className="mt-1 line-clamp-2 font-serif text-sm font-bold leading-tight text-[#292C24]">
          {trek.title}
        </h3>

        <p className="mt-1 truncate text-[10px] text-gray-500">{trek.region}</p>

        <div className="mt-1.5 flex flex-wrap gap-x-2 text-[9px] text-gray-500">
          <span>{trek.duration}</span>
          <span>•</span>
          <span>{trek.altitude}</span>
          <span>•</span>
          <span>{trek.season}</span>
        </div>
      </div>
    </Link>
  );
}

/**
 * Shared save and share actions for one suggested trip.
 * Only signed-in travellers can save, and only a saved trip can be shared.
 */
export function TripActions({
  trailIds,
  totalDays,
}: {
  trailIds: string[];
  totalDays: number;
}) {
  const user = useAuthStore((state) => state.user);
  const id = tripKey(trailIds, totalDays);
  const saved = useSavedTripsStore((state) =>
    state.trips.some((trip) => trip.id === id),
  );
  const saveTrip = useSavedTripsStore((state) => state.saveTrip);
  const removeTrip = useSavedTripsStore((state) => state.removeTrip);

  const [loginOpen, setLoginOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [shareUrl, setShareUrl] = useState('');
  const [notice, setNotice] = useState<{
    message: string;
    tone: 'success' | 'error';
  } | null>(null);

  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(null), 3500);
    return () => clearTimeout(timer);
  }, [notice]);

  const handleSave = () => {
    if (!user) {
      setLoginOpen(true);
      return;
    }

    if (saved) {
      removeTrip(id);
      setNotice({ message: 'Trip removed from saved trips.', tone: 'success' });
    } else {
      saveTrip({ id, trailIds, totalDays });
      setNotice({ message: 'Trip saved.', tone: 'success' });
    }
  };

  const handleShare = () => {
    if (!user) {
      setLoginOpen(true);
      return;
    }

    if (!saved) {
      setNotice({
        message: 'Save this trip first, then you can share it.',
        tone: 'error',
      });
      return;
    }

    setShareUrl(buildShareUrl(window.location.origin, trailIds, totalDays));
    setShareOpen(true);
  };

  return (
    <div className="flex flex-wrap justify-end gap-3">
      <button
        type="button"
        onClick={handleSave}
        aria-pressed={saved}
        className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#82B300] px-4 py-2 text-sm text-[#719900] transition hover:bg-[#F3F8E8]"
      >
        <Heart size={17} className={saved ? 'fill-[#82B300]' : undefined} />
        {saved ? 'Saved' : 'Save Trip'}
      </button>

      <button
        type="button"
        onClick={handleShare}
        className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#82B300] px-4 py-2 text-sm text-[#719900] transition hover:bg-[#F3F8E8]"
      >
        <Share2 size={17} />
        Share
      </button>

      <p
        role={notice?.tone === 'error' ? 'alert' : 'status'}
        className={`w-full text-right text-xs ${
          notice?.tone === 'error' ? 'text-[#EF4444]' : 'text-[#719900]'
        }`}
      >
        {notice?.message}
      </p>

      <LoginToSaveModal open={loginOpen} onOpenChange={setLoginOpen} />
      <ShareTripModal
        open={shareOpen}
        onOpenChange={setShareOpen}
        url={shareUrl}
      />
    </div>
  );
}
