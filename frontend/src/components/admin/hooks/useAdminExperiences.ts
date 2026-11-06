'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import type { ExperienceTypeValue } from '../admin-helper';
import { ApiError } from '../api/client';
import { toAdminListItem } from '../api/experiences.mappers';
import {
  createExperience,
  deleteExperience,
  getExperience,
  listExperiences,
  updateExperience,
} from '../api/experiences';

export const experienceKeys = {
  all: ['admin', 'experiences'] as const,
  list: (type: ExperienceTypeValue) =>
    [...experienceKeys.all, 'list', type] as const,
  detail: (id: string) => [...experienceKeys.all, 'detail', id] as const,
};

export function useExperienceList(type: ExperienceTypeValue) {
  return useQuery({
    queryKey: experienceKeys.list(type),
    queryFn: () => listExperiences(type),
    select: (items) => items.map(toAdminListItem),
  });
}

export function useExperience(id: string | null) {
  return useQuery({
    queryKey: experienceKeys.detail(id ?? ''),
    queryFn: () => getExperience(id as string),
    enabled: !!id,
    // The edit form seeds itself once from this data, so never hand it a
    // cached copy or refetch it underneath someone who is typing.
    gcTime: 0,
    refetchOnWindowFocus: false,
    retry: (count, error) =>
      count < 2 && !(error instanceof ApiError && error.status === 404),
  });
}

export function useCreateExperience() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (body: unknown) => createExperience(body),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: experienceKeys.all }),
  });
}

export function useUpdateExperience(id: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (body: unknown) => updateExperience(id, body),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: experienceKeys.all }),
  });
}

export function useDeleteExperience() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteExperience(id),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: experienceKeys.all }),
  });
}
