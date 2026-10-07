import type { Prisma } from '../../../generated/prisma/client.js';
import type {
  ApiResponse,
  PaginatedResponse,
} from '../../../utils/handleResponse.js';
import type { orderDetailsByType, toListItem } from './experience.helper.js';
import type { detailSelect } from './experience.query.js';

// Derived from the query, so these cannot drift from it.
export type ListExperienceItem = ReturnType<typeof toListItem>;

export type ExperienceDetail = Omit<
  Prisma.ExperienceGetPayload<{ select: typeof detailSelect }>,
  'details'
> & {
  details: ReturnType<typeof orderDetailsByType>;
};

export type ListExperiencesResponse = PaginatedResponse<ListExperienceItem>;
export type GetExperienceResponse = ApiResponse<ExperienceDetail>;
// Create and update return the full detail payload, same as GET /:id.
export type WriteExperienceResponse = GetExperienceResponse;
