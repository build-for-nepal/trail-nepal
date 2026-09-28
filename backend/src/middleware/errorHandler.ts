import type { Request, Response, NextFunction } from 'express';

export class AppError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public errors?: unknown,
  ) {
    super(message);
    this.name = 'AppError';

    Object.setPrototypeOf(this, AppError.prototype);
  }
}

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (err instanceof AppError) {
    const response: {
      success: false;
      message: string;
      errors?: unknown;
    } = {
      success: false,
      message: err.message,
    };

    if (err.errors !== undefined) {
      response.errors = err.errors;
    }

    return res.status(err.statusCode).json(response);
  }

  console.error(err);

  return res.status(500).json({
    success: false,
    message: 'Internal Server Error',
  });
}
