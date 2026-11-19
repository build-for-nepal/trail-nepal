'use client';

// Detail records for the trip pages: the static record first, the backend's
// version laid over it once it arrives.
//
// The pages are prerendered from src/static, so the server snapshot and the
// first client render are always the static record and hydration is
// unaffected. Each trip is requested once per page load and shared by every
// component that reads it. A trip the backend does not know, or a backend that
// is unset or unreachable, leaves the static record in place.

import { useEffect, useSyncExternalStore } from 'react';

import { CULTURAL_TOUR_DETAILS } from '@/static/culturalTours';
import { HIKE_DETAILS } from '@/static/hikeDetails';
import { TREK_DETAILS } from '@/static/trekDetails';

import { getExperienceBySlug, type ApiExperience } from './api';
import {
  mergeCulturalDetail,
  mergeHikeDetail,
  mergeTrekDetail,
} from './mappers';

function createDetailStore<T>(
  records: Record<string, T>,
  type: ApiExperience['type'],
  merge: (base: T, api: ApiExperience) => T,
) {
  // Settled ids. The value is the merged record, or the static one when the
  // backend had nothing usable.
  const settled = new Map<string, T>();
  const requested = new Set<string>();
  const listeners = new Set<() => void>();

  const subscribe = (listener: () => void) => {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  };

  const load = (id: string) => {
    const base = records[id];
    if (!base || requested.has(id)) return;
    requested.add(id);

    getExperienceBySlug(id)
      .then((api) => (api.type === type ? merge(base, api) : base))
      // 404, no backend configured, network error or a malformed payload: the
      // static record stands.
      .catch(() => base)
      .then((record) => {
        settled.set(id, record);
        listeners.forEach((listener) => listener());
      });
  };

  return function useDetail(id: string | undefined): T | undefined {
    useEffect(() => {
      if (id) load(id);
    }, [id]);

    return useSyncExternalStore(
      subscribe,
      () => (id ? (settled.get(id) ?? records[id]) : undefined),
      () => (id ? records[id] : undefined),
    );
  };
}

export const useTrekDetail = createDetailStore(
  TREK_DETAILS,
  'TREK',
  mergeTrekDetail,
);

export const useHikeDetail = createDetailStore(
  HIKE_DETAILS,
  'HIKE',
  mergeHikeDetail,
);

export const useCulturalTourDetail = createDetailStore(
  CULTURAL_TOUR_DETAILS,
  'CULTURAL',
  mergeCulturalDetail,
);
