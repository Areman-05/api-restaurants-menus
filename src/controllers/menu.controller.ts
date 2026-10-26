import type { Request, Response, NextFunction } from 'express';
import { menuService } from '../services/menu.service';

export const menuController = {
  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const menus = await menuService.getAll();
      res.json(menus);
    } catch (error) {
      next(error);
    }
  },

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const menu = await menuService.getById(req.params.id as string);
      res.json(menu);
    } catch (error) {
      next(error);
    }
  },

  async getByRestaurantId(req: Request, res: Response, next: NextFunction) {
    try {
      const menus = await menuService.getByRestaurantId(req.params.id as string);
      res.json(menus);
    } catch (error) {
      next(error);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const menu = await menuService.create(req.body);
      res.status(201).json(menu);
    } catch (error) {
      next(error);
    }
  },
};
