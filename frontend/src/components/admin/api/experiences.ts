import { apiRequest } from './client';
import type { ExperienceTypeValue } from '../admin-helper';
import type { ApiExperience, ApiListItem, ApiPage } from './experiences.types';

const BASE = '/api/experiences';
// The backend caps `limit` at 100.
const PAGE_SIZE = 100;

// Walks every page so a long list is never silently truncated.
export async function listExperiences(
  type: ExperienceTypeValue,
): Promise<ApiListItem[]> {
  const items: ApiListItem[] = [];
  for (let page = 1; ; page++) {
    const result = await apiRequest<ApiPage<ApiListItem>>(
      `${BASE}?type=${type}&page=${page}&limit=${PAGE_SIZE}&sortBy=createdAt&sortOrder=desc`,
    );
    items.push(...result.items);
    if (!result.pagination.hasMore) return items;
  }
}

export function getExperience(id: string): Promise<ApiExperience> {
  return apiRequest<ApiExperience>(`${BASE}/${id}`);
}

export function createExperience(body: unknown): Promise<ApiExperience> {
  return apiRequest<ApiExperience>(BASE, { method: 'POST', body });
}

export function updateExperience(
  id: string,
  body: unknown,
): Promise<ApiExperience> {
  return apiRequest<ApiExperience>(`${BASE}/${id}`, {
    method: 'PATCH',
    body,
  });
}

export function deleteExperience(id: string): Promise<{ id: string }> {
  return apiRequest<{ id: string }>(`${BASE}/${id}`, { method: 'DELETE' });
}
