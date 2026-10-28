import { useAuthStore } from '@/store/authStore';
import {
  ownerOf,
  type SavedTrip,
  useSavedTripsStore,
} from '@/store/savedTripsStore';
import { useToastStore } from '@/store/toastStore';

export type NewTrip = Omit<SavedTrip, 'savedAt' | 'owner'>;

/**
 * Storage seam for saving a trip. Today it writes to this browser's store;
 * once the trip API exists, replace the body with the request and keep the
 * contract: resolve when the trip is stored, reject when it is not. A trip is
 * always added as a new entry and never replaces an existing one.
 */
export async function createTrip(trip: NewTrip): Promise<void> {
  const owner = ownerOf(useAuthStore.getState().user);
  if (!owner) throw new Error('Sign in to save a trip.');

  useSavedTripsStore.getState().saveTrip({ ...trip, owner });

  const stored = useSavedTripsStore
    .getState()
    .trips.some((saved) => saved.id === trip.id && saved.owner === owner);
  if (!stored) throw new Error('The trip was not stored.');
}

/**
 * Saves a trip and reports the outcome in a toast; a failure offers a retry.
 * `onSaving` mirrors the in-flight state for buttons that show it.
 */
export async function saveTripWithFeedback(
  trip: NewTrip,
  onSaving?: (saving: boolean) => void,
): Promise<boolean> {
  const { showToast } = useToastStore.getState();
  onSaving?.(true);

  try {
    await createTrip(trip);
    showToast({
      title: 'Trip saved',
      description: 'Find it any time under Saved Trips in your account menu.',
    });
    return true;
  } catch (error) {
    console.error('Unable to save trip:', error);
    showToast({
      tone: 'error',
      title: "We couldn't save your trip",
      description: 'Something went wrong. Please try again.',
      action: {
        label: 'Retry',
        onClick: () => void saveTripWithFeedback(trip, onSaving),
      },
    });
    return false;
  } finally {
    onSaving?.(false);
  }
}

/** Removes a saved trip and confirms it in a toast. */
export function removeTripWithFeedback(id: string): void {
  const owner = ownerOf(useAuthStore.getState().user);
  if (!owner) return;

  useSavedTripsStore.getState().removeTrip(id, owner);
  useToastStore
    .getState()
    .showToast({ title: 'Trip removed from saved trips' });
}
