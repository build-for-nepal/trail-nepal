import type { NextFunction, Request, Response } from 'express';
import { env } from '../config/env.js';

const ALLOWED_ORIGINS = new Set(env.frontendUrls);

// Only origins listed in FRONTEND_URLS (comma-separated) may call the API from
// a browser. Anything else gets no CORS headers, so the browser blocks it.
export function cors(req: Request, res: Response, next: NextFunction) {
  const origin = req.headers.origin;

  if (origin && ALLOWED_ORIGINS.has(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }

  // Preflight: answered here so it never reaches validation or 404 handling.
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }

  return next();
}
