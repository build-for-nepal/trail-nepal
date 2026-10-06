import type { Response } from 'express';

export interface ApiResponse<T> {
  success: true;
  message?: string;
  data: T;
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  errors?: unknown;
}

export interface Paginated<T> {
  items: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasMore: boolean;
  };
}

export type PaginatedResponse<T> = ApiResponse<Paginated<T>>;

export const handleResponse = <T>(
  res: Response,
  data: T,
  message?: string,
  statusCode = 200,
): Response<ApiResponse<T>> => {
  return res.status(statusCode).json({
    success: true,
    ...(message && { message }),
    data,
  }) as Response<ApiResponse<T>>;
};
