'use client';

import { type MouseEvent, useState } from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { tripKey } from '@/lib/sharedTrip';
import { MAX_DAYS, MIN_DAYS } from '@/lib/tripPreferences';
import { useIsTripSaved } from '@/store/savedTripsStore';
import { useAuthStore } from '@/store/authStore';
import { stashPendingSave } from '@/lib/pendingSave';
import { removeTripWithFeedback, saveTripWithFeedback } from '@/lib/trips';
import { LoginToSaveModal } from './LoginToSaveModal';

/** The platform-wide heart: white circle, green heart outline (filled coral once saved).
 *  Matches the saved-trip pins on the map. Size comes from the caller. */
export const HEART_BUTTON_CLASS =
  'flex shrink-0 cursor-pointer items-center justify-center rounded-full bg-white text-[#82B300] shadow-md ring-1 ring-black/5 transition hover:scale-105';
export const SAVED_HEART_CLASS = 'fill-[#F0605D] text-[#F0605D]';

type SaveButtonProps = {
  title: string;
  /** Trail to save; a single trail is stored as a one-trail saved trip. */
  trailId: string;
  /** Trail duration, e.g. "7 Days". */
  duration: string;
  /** Heart icon size in px. */
  iconSize?: number;
  className?: string;
};

const SaveButton = ({
  title,
  trailId,
  duration,
  iconSize = 24,
  className,
}: SaveButtonProps) => {
  const user = useAuthStore((state) => state.user);
  const totalDays = Math.min(
    MAX_DAYS,
    Math.max(MIN_DAYS, parseInt(duration, 10) || MIN_DAYS),
  );
  const id = tripKey([trailId], totalDays);
  const saved = useIsTripSaved(id);
  const [loginPromptOpen, setLoginPromptOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const trip = { id, trailIds: [trailId], totalDays };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    // The button lives inside a card link — don't navigate when saving.
    event.preventDefault();
    event.stopPropagation();

    if (!user) {
      setLoginPromptOpen(true);
      return;
    }

    if (saved) removeTripWithFeedback(id);
    else void saveTripWithFeedback(trip, setSaving);
  };

  return (
    <>
      <button
        type="button"
        aria-label={`${saved ? 'Unsave' : 'Save'} ${title}`}
        aria-pressed={saved}
        title={saved ? 'Remove from saved trips' : 'Save trip'}
        onClick={handleClick}
        disabled={saving}
        aria-busy={saving}
        className={cn(
          HEART_BUTTON_CLASS,
          'size-12 disabled:opacity-60',
          className,
        )}
      >
        <Heart
          size={iconSize}
          className={saved ? SAVED_HEART_CLASS : undefined}
        />
      </button>
      {/* React events bubble out of portals — keep modal clicks from
          triggering the parent card link. */}
      <span className="contents" onClick={(event) => event.stopPropagation()}>
        <LoginToSaveModal
          open={loginPromptOpen}
          onOpenChange={setLoginPromptOpen}
          onLogIn={() => stashPendingSave(trip)}
        />
      </span>
    </>
  );
};

export default SaveButton;
