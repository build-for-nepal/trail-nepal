import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type SavedTrip = {
  /** `tripKey(trailIds, totalDays)` */
  id: string;
  trailIds: string[];
  totalDays: number;
  savedAt: number;
};

type SavedTripsState = {
  trips: SavedTrip[];
  saveTrip: (trip: Omit<SavedTrip, 'savedAt'>) => void;
  removeTrip: (id: string) => void;
};

/**
 * Saved trips live in this browser until the backend can store them per
 * account. Only signed-in travellers can add to it (see `TripActions`).
 */
export const useSavedTripsStore = create<SavedTripsState>()(
  persist(
    (set) => ({
      trips: [],
      saveTrip: (trip) =>
        set((state) =>
          state.trips.some((saved) => saved.id === trip.id)
            ? state
            : { trips: [...state.trips, { ...trip, savedAt: Date.now() }] },
        ),
      removeTrip: (id) =>
        set((state) => ({ trips: state.trips.filter((t) => t.id !== id) })),
    }),
    { name: 'trails-nepal-saved-trips' },
  ),
);
