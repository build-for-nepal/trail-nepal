import { useMemo } from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { type AuthUser, useAuthStore } from '@/store/authStore';

export type SavedTrip = {
  /** `tripKey(trailIds, totalDays)` */
  id: string;
  /** Who saved it (see `ownerOf`). Trips are only visible to their owner. */
  owner: string;
  trailIds: string[];
  totalDays: number;
  /** Travel month chosen in Plan My Trip; absent for trips saved elsewhere. */
  month?: string;
  savedAt: number;
};

type SavedTripsState = {
  trips: SavedTrip[];
  saveTrip: (trip: Omit<SavedTrip, 'savedAt'>) => void;
  removeTrip: (id: string, owner: string) => void;
};

/** Stable identity of a signed-in traveller, or null when signed out. */
export function ownerOf(user: AuthUser | null): string | null {
  return user?.email ?? user?.name ?? null;
}

/**
 * Saved trips live in this browser until the backend can store them per
 * account. Each trip is tagged with its owner and only shown to them, so
 * signing out (or switching account) hides it. Only signed-in travellers can
 * add to it (see `SaveButton` and `TripActions`).
 */
export const useSavedTripsStore = create<SavedTripsState>()(
  persist(
    (set) => ({
      trips: [],
      saveTrip: (trip) =>
        set((state) =>
          state.trips.some(
            (saved) => saved.id === trip.id && saved.owner === trip.owner,
          )
            ? state
            : { trips: [...state.trips, { ...trip, savedAt: Date.now() }] },
        ),
      removeTrip: (id, owner) =>
        set((state) => ({
          trips: state.trips.filter((t) => !(t.id === id && t.owner === owner)),
        })),
    }),
    { name: 'trails-nepal-saved-trips' },
  ),
);

/** The signed-in traveller's identity, or null when signed out. */
export function useOwner(): string | null {
  return useAuthStore((state) => ownerOf(state.user));
}

/** Whether the signed-in traveller has saved this trip. */
export function useIsTripSaved(id: string): boolean {
  const owner = useOwner();
  return useSavedTripsStore((state) =>
    owner ? state.trips.some((t) => t.id === id && t.owner === owner) : false,
  );
}

/** The signed-in traveller's saved trips; empty when signed out. */
export function useMyTrips(): SavedTrip[] {
  const owner = useOwner();
  const trips = useSavedTripsStore((state) => state.trips);
  return useMemo(
    () => (owner ? trips.filter((t) => t.owner === owner) : []),
    [trips, owner],
  );
}
