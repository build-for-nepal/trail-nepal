import { Prisma } from '../../../generated/prisma/client.js';
import { db } from '../../../config/db.js';
import { AppError } from '../../../middleware/errorHandler.js';
import {
  toDetailCreate,
  toDetailUpdate,
  toImageCreate,
  toRouteCreate,
  toRouteUpdate,
  toTimelineItemCreate,
  toTimelineUpdate,
} from './experience.write.mapper.js';
import type {
  DetailInput,
  ImageInput,
  RouteInput,
  TimelineInput,
} from './experience.write.validator.js';

// Interactive transaction so the write across the experience and its
// child tables succeeds or rolls back as one unit.
export async function runWrite<T>(
  fn: (tx: Prisma.TransactionClient) => Promise<T>,
): Promise<T> {
  try {
    return await db.$transaction(fn);
  } catch (error) {
    throw toAppError(error);
  }
}

// A duplicate slug is a client mistake, not a server fault.
function toAppError(error: unknown): unknown {
  const known =
    error instanceof Prisma.PrismaClientKnownRequestError ? error : null;

  if (known?.code === 'P2002') {
    return new AppError(409, 'A record with that value already exists');
  }

  return error;
}

export async function createDetails(
  tx: Prisma.TransactionClient,
  experienceId: string,
  details: DetailInput[],
) {
  // One insert: on a fresh experience there is nothing to diff against.
  await tx.experienceDetail.createMany({
    data: details.map((detail) => toDetailCreate(detail, experienceId)),
  });
}

export async function createImages(
  tx: Prisma.TransactionClient,
  experienceId: string,
  images: ImageInput[],
) {
  await tx.experienceImage.createMany({
    data: images.map((image) => toImageCreate(image, experienceId)),
  });
}

// Rows are keyed on (experienceId, key), which is unique, so an upsert keeps
// existing detail ids stable for anything already referencing them.
export async function replaceDetails(
  tx: Prisma.TransactionClient,
  experienceId: string,
  details: DetailInput[],
) {
  if (details.length === 0) {
    await tx.experienceDetail.deleteMany({ where: { experienceId } });
    return;
  }

  for (const detail of details) {
    await tx.experienceDetail.upsert({
      where: { experienceId_key: { experienceId, key: detail.key } },
      update: toDetailUpdate(detail),
      create: toDetailCreate(detail, experienceId),
    });
  }

  // Anything not in the payload is no longer part of the experience.
  await tx.experienceDetail.deleteMany({
    where: {
      experienceId,
      key: { notIn: details.map((detail) => detail.key) },
    },
  });
}

// Images have no natural key and nothing references an individual row, so
// diffing them would buy complexity for no benefit.
export async function replaceImages(
  tx: Prisma.TransactionClient,
  experienceId: string,
  images: ImageInput[],
) {
  await tx.experienceImage.deleteMany({ where: { experienceId } });

  if (images.length > 0) {
    await tx.experienceImage.createMany({
      data: images.map((image) => toImageCreate(image, experienceId)),
    });
  }
}

// experienceId is unique, so the timeline row survives a re-save and only its
// items are swapped out. Items have no natural key either.
export async function upsertTimeline(
  tx: Prisma.TransactionClient,
  experienceId: string,
  timeline: TimelineInput,
) {
  const { items, ...timelineData } = timeline;

  const record = await tx.experienceTimeline.upsert({
    where: { experienceId },
    update: toTimelineUpdate(timelineData),
    create: { experienceId, ...toTimelineUpdate(timelineData) },
  });

  await tx.experienceTimelineItem.deleteMany({
    where: { timelineId: record.id },
  });

  if (items.length > 0) {
    await tx.experienceTimelineItem.createMany({
      data: items.map((item, index) =>
        toTimelineItemCreate(item, record.id, index),
      ),
    });
  }
}

// deleteMany rather than delete: an experience with no timeline is normal.
export async function deleteTimeline(
  tx: Prisma.TransactionClient,
  experienceId: string,
) {
  await tx.experienceTimeline.deleteMany({ where: { experienceId } });
}

export async function upsertRoute(
  tx: Prisma.TransactionClient,
  experienceId: string,
  route: RouteInput,
) {
  await tx.experienceRoute.upsert({
    where: { experienceId },
    update: toRouteUpdate(route),
    create: toRouteCreate(route, experienceId),
  });
}

export async function deleteRoute(
  tx: Prisma.TransactionClient,
  experienceId: string,
) {
  await tx.experienceRoute.deleteMany({ where: { experienceId } });
}
