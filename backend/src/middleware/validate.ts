import type { Request, Response, NextFunction, RequestHandler } from 'express';
import { z, ZodError, type ZodType } from 'zod';
import { AppError } from './errorHandler.js';

export type RequestSource = 'body' | 'params' | 'query';
const SOURCES: readonly RequestSource[] = ['body', 'params', 'query'];

// Keep validated query separate because Express 5 query is read-only.
declare global {
  namespace Express {
    interface Request {
      validatedQuery?: unknown;
    }
  }
}

// One schema for the whole request: validate({ query, params, body }).
export type RequestSchema = Partial<Record<RequestSource, ZodType>>;

// Parses the declared sources in one pass so every failure comes back together,
// and the client fixes its whole request in a single round trip.
export function validate(schema: RequestSchema): RequestHandler {
  const shape: Partial<Record<RequestSource, ZodType>> = {};
  for (const source of SOURCES) {
    if (schema[source]) shape[source] = schema[source];
  }

  // At least one source must be provided.
  if (Object.keys(shape).length === 0) {
    return (_req, _res, next) =>
      next(
        new AppError(500, 'validate() expects a body, params or query schema'),
      );
  }

  const validator = z.object(shape);

  return (req: Request, _res: Response, next: NextFunction) => {
    const input: Record<string, unknown> = {};
    for (const source of SOURCES) {
      if (!shape[source]) continue;

      // Use {} so missing values get normal field-level errors.
      input[source] = req[source] ?? {};
    }

    const result = validator.safeParse(input);

    if (!result.success) {
      return next(
        new AppError(422, 'Validation failed', toFieldErrors(result.error)),
      );
    }

    const data = result.data as Partial<Record<RequestSource, unknown>>;

    if (data.params !== undefined) {
      req.params = data.params as Request['params'];
    }
    if (data.body !== undefined) req.body = data.body;

    // Query is read-only, so store the validated value separately.
    if (data.query !== undefined) req.validatedQuery = data.query;

    return next();
  };
}

// Converts Zod errors into a simple format for the client.
export type FieldError = { source: string; field: string; message: string };

function toFieldErrors(error: ZodError): FieldError[] {
  return error.issues.map((issue) => {
    const [first, ...rest] = issue.path;
    const hasSource = isRequestSource(first);

    return {
      source: hasSource ? String(first) : '',
      field: (hasSource ? rest : issue.path).join('.') || '(root)',
      message: issue.message,
    };
  });
}

function isRequestSource(value: unknown): value is RequestSource {
  return typeof value === 'string' && SOURCES.includes(value as RequestSource);
}

export function validatedQuery<T>(req: Request): T {
  return req.validatedQuery as T;
}
