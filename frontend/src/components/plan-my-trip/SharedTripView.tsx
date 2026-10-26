'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Eye, LinkIcon, type LucideIcon } from 'lucide-react';
import { resolveSharedTrip } from '@/lib/sharedTrip';
import { MatchRow } from './MatchCards';

type UnavailableStatus = 'invalid' | 'unavailable' | 'revoked';

const UNAVAILABLE_COPY: Record<
  UnavailableStatus,
  { title: string; message: string; icon: LucideIcon }
> = {
  invalid: {
    title: 'This link doesn’t look right.',
    message:
      'The link may have been cut off or copied incorrectly. Ask the person who shared it to send it again.',
    icon: LinkIcon,
  },
  unavailable: {
    title: 'This trip is no longer available.',
    message:
      'The trails in this trip could not be found. They may have been removed from Trails Nepal.',
    icon: LinkIcon,
  },
  revoked: {
    title: 'This link is no longer shared.',
    message:
      'The owner has stopped sharing this trip. Ask them for a new link if you still need it.',
    icon: LinkIcon,
  },
};

const SharedTripUnavailable = ({ status }: { status: UnavailableStatus }) => {
  const { title, message, icon: Icon } = UNAVAILABLE_COPY[status];

  return (
    <section
      role="alert"
      className="mx-auto max-w-xl rounded-2xl bg-white p-8 text-center shadow-sm"
    >
      <Icon size={28} className="mx-auto text-[#719900]" aria-hidden="true" />
      <h1 className="mt-3 font-serif text-xl font-bold text-gray-900">
        {title}
      </h1>
      <p className="mx-auto mt-2 max-w-md text-sm text-gray-600">{message}</p>
      <Link
        href="/plan-my-trip/"
        className="mt-5 inline-block rounded-full bg-[#82B300] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#6F9900]"
      >
        Plan your own trip
      </Link>
    </section>
  );
};

/**
 * Read-only view of a trip someone shared. It renders catalogue links only —
 * no save, edit or share controls — and never writes to the viewer's account.
 */
const SharedTripView = () => {
  const result = resolveSharedTrip(useSearchParams());

  if (result.status !== 'ok') {
    return <SharedTripUnavailable status={result.status} />;
  }

  const { trip } = result;

  return (
    <section className="mx-auto w-full max-w-3xl min-w-0">
      <header className="mb-5">
        <p className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-medium text-[#62675D]">
          <Eye size={14} aria-hidden="true" />
          Shared with you &middot; view only
        </p>
        <h1 className="mt-3 font-serif text-2xl font-bold text-[#252820]">
          A trip shared with you
        </h1>
        <p className="mt-1 text-sm leading-relaxed text-gray-600">
          These are the experiences someone picked for {trip.totalDays}{' '}
          {trip.totalDays === 1 ? 'day' : 'days'} in Nepal. Open any of them to
          see trail information, highlights, and practical details.
        </p>
      </header>

      <div className="rounded-2xl bg-white p-4 shadow-sm sm:p-5">
        <div className="mb-4 flex justify-end">
          <span className="rounded-lg bg-[#EBF0F8] px-3 py-1.5 font-serif text-sm font-bold text-[#30352C]">
            {trip.totalDays} {trip.totalDays === 1 ? 'Day' : 'Days'}
          </span>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4">
          {trip.trails.map((trek) => (
            <MatchRow key={trek.id} trek={trek} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SharedTripView;
