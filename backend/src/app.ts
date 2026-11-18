import express from 'express';
import routes from './routes/index.js';
import { AppError, errorHandler } from './middleware/errorHandler.js';
import { toNodeHandler } from 'better-auth/node';
import { auth } from './modules/auth/auth.js';
import { cors } from './middleware/cors.js';

const app = express();

app.use(cors);
app.all('/api/auth/*splat', toNodeHandler(auth));

app.use(express.json());

app.get('/', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'Trails Nepal API',
  });
});

// apis
app.use(routes);

// Handle unknown routes
app.use((_req, _res, next) => {
  next(new AppError(404, 'Route not found'));
});

// Global error handler
app.use(errorHandler);

export default app;
