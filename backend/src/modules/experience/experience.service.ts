import { db } from '../../config/db.js';
import { AppError } from '../../middleware/errorHandler.js';
import type { Paginated } from '../../utils/handleResponse.js';
import {
  orderDetailsByType,
  toListItem,
} from './internal/experience.helper.js';
import {
  buildExperienceWhere,
  detailSelect,
  listSelect,
} from './internal/experience.query.js';
import type {
  ExperienceDetail,
  ListExperienceItem,
} from './internal/experience.types.js';
import type { ListExperienceQuery } from './internal/experience.validator.js';

// Explore, search, and the planner's candidate pool. Main table only.
export async function listExperiences(
  query: ListExperienceQuery,
): Promise<Paginated<ListExperienceItem>> {
  const where = buildExperienceWhere(query);
  const skip = (query.page - 1) * query.limit;

  // One transaction so rows and count see the same snapshot; otherwise a row
  // inserted between them makes the count disagree with the page.
  const [items, total] = await db.$transaction([
    db.experience.findMany({
      where,
      select: listSelect,
      orderBy: { [query.sortBy]: query.sortOrder },
      skip,
      take: query.limit,
    }),
    db.experience.count({ where }),
  ]);

  return {
    items: items.map(toListItem),
    pagination: {
      page: query.page,
      limit: query.limit,
      total,
      totalPages: Math.ceil(total / query.limit),
      hasMore: skip + items.length < total,
    },
  };
}

// Detail rows, timeline, images and route load together: the page needs all
// four, so splitting them would mean four sequential queries on the hot path.
export async function getExperienceDetail(
  id: string,
): Promise<ExperienceDetail> {
  const experience = await db.experience.findFirst({
    where: { id, status: 'PUBLISHED', isActive: true },
    select: detailSelect,
  });

  // A miss is a 404 rather than an empty detail page.
  if (!experience) {
    throw new AppError(404, 'Experience not found');
  }

  return {
    ...experience,
    details: orderDetailsByType(experience.type, experience.details),
  };
}
