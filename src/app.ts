import express from 'express';
import cors from 'cors';
import { restaurantRouter } from './routes/restaurant.routes';
import { menuRouter } from './routes/menu.routes';
import { errorHandler } from './utils/errors';

export function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get('/health', (_req, res) => {
    res.json({ ok: true });
  });

  app.use('/restaurants', restaurantRouter);
  app.use('/menus', menuRouter);

  app.use(errorHandler);

  return app;
}
