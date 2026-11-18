import type { NextFunction, Request, RequestHandler, Response } from 'express';
import { fromNodeHeaders } from 'better-auth/node';
import { auth } from '../modules/auth/auth.js';
import { AppError } from './errorHandler.js';

type AuthSession = NonNullable<Awaited<ReturnType<typeof auth.api.getSession>>>;
export type AuthUser = AuthSession['user'];

declare global {
  namespace Express {
    interface Request {
      auth?: AuthSession;
    }
  }
}

async function loadSession(req: Request): Promise<AuthSession | null> {
  return auth.api.getSession({ headers: fromNodeHeaders(req.headers) });
}

// Rejects with 401 unless the request carries a valid session cookie.
export const requireAuth: RequestHandler = async (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  try {
    const session = await loadSession(req);
    if (!session) return next(new AppError(401, 'Authentication required'));

    const user = session.user as { isActive?: boolean };
    if (user.isActive === false) {
      return next(new AppError(403, 'Account is disabled'));
    }

    req.auth = session;
    return next();
  } catch (err) {
    return next(err);
  }
};

// The signed-in user. Only valid behind requireAuth; a missing session here is
// a wiring mistake, so it fails closed with a 401 rather than a TypeError.
export function getAuthUser(req: Request): AuthUser {
  if (!req.auth) throw new AppError(401, 'Authentication required');
  return req.auth.user;
}

// Attaches req.auth when signed in, but lets anonymous requests through.
export const optionalAuth: RequestHandler = async (req, _res, next) => {
  try {
    const session = await loadSession(req);
    if (session) req.auth = session;
    return next();
  } catch (err) {
    return next(err);
  }
};
