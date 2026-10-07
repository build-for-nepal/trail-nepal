import { findExperienceDetail } from './experience.service.js';
import {
  createDetails,
  createImages,
  deleteRoute,
  deleteTimeline,
  replaceDetails,
  replaceImages,
  runWrite,
  upsertRoute,
  upsertTimeline,
} from './internal/experience.write.mutation.js';
import type { ExperienceDetail } from './internal/experience.types.js';
import type {
  CreateExperienceInput,
  UpdateExperienceInput,
} from './internal/experience.write.validator.js';

// POST /api/experiences - up to six tables in one transaction, so a failure
// never leaves an experience with half its sections attached.
export async function createExperience(
  input: CreateExperienceInput,
): Promise<ExperienceDetail> {
  const { details, images, timeline, route, ...scalars } = input;

  const id = await runWrite(async (tx) => {
    const experience = await tx.experience.create({ data: { ...scalars } });

    if (details.length > 0) await createDetails(tx, experience.id, details);
    if (images.length > 0) await createImages(tx, experience.id, images);
    if (timeline) await upsertTimeline(tx, experience.id, timeline);
    if (route) await upsertRoute(tx, experience.id, route);

    return experience.id;
  });

  // Re-read so the response is shaped exactly like GET /:id, ordering included.
  return findExperienceDetail({ id });
}

// PATCH /api/experiences/:id - partial. An omitted key means "leave it alone",
// so nothing is defaulted into a write the caller did not ask for.
export async function updateExperience(
  id: string,
  input: UpdateExperienceInput,
): Promise<ExperienceDetail> {
  // Loads first so an unknown id is a 404 before a single row is touched.
  await findExperienceDetail({ id });

  const { details, images, timeline, route, ...scalars } = input;

  await runWrite(async (tx) => {
    if (Object.keys(scalars).length > 0) {
      await tx.experience.update({ where: { id }, data: { ...scalars } });
    }

    // A child collection that is sent is the new full set of rows; one that is
    // absent is not touched at all.
    if (details) await replaceDetails(tx, id, details);
    if (images !== undefined) await replaceImages(tx, id, images);

    if (timeline !== undefined) {
      if (timeline === null) await deleteTimeline(tx, id);
      else await upsertTimeline(tx, id, timeline);
    }

    if (route !== undefined) {
      if (route === null) await deleteRoute(tx, id);
      else await upsertRoute(tx, id, route);
    }
  });

  return findExperienceDetail({ id });
}
