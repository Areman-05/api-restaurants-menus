import { Router } from 'express';
import { menuController } from '../controllers/menu.controller';
import { validateBody } from '../middlewares/validate';
import { createMenuSchema } from '../validators/restaurant.validator';

export const menuRouter = Router();

menuRouter.get('/', menuController.getAll);
menuRouter.get('/:id', menuController.getById);
menuRouter.post('/', validateBody(createMenuSchema), menuController.create);
