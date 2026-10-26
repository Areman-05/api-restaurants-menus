import { Router } from 'express';
import { restaurantController } from '../controllers/restaurant.controller';
import { menuController } from '../controllers/menu.controller';
import { validateBody } from '../middlewares/validate';
import { createRestaurantSchema } from '../validators/restaurant.validator';

export const restaurantRouter = Router();

restaurantRouter.get('/', restaurantController.getAll);
restaurantRouter.post('/', validateBody(createRestaurantSchema), restaurantController.create);
restaurantRouter.get('/:id/menus', menuController.getByRestaurantId);
restaurantRouter.get('/:id', restaurantController.getById);
