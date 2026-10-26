import type { Request, Response, NextFunction } from 'express';
import { restaurantService } from '../services/restaurant.service';

export const restaurantController = {
  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const restaurants = await restaurantService.getAll();
      res.json(restaurants);
    } catch (error) {
      next(error);
    }
  },

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const restaurant = await restaurantService.getById(req.params.id as string);
      res.json(restaurant);
    } catch (error) {
      next(error);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const restaurant = await restaurantService.create(req.body);
      res.status(201).json(restaurant);
    } catch (error) {
      next(error);
    }
  },
};
