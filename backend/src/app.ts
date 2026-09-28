import express from 'express';
import { AppError, errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'Trails Nepal API',
  });
});

// Handle unknown routes
app.use((_req, _res, next) => {
  next(new AppError(404, 'Route not found'));
});

// Global error handler
app.use(errorHandler);

export default app;
