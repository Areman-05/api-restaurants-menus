import { menuRepository } from '../repositories/menu.repository';
import { restaurantRepository } from '../repositories/restaurant.repository';
import { AppError } from '../utils/errors';
import type { IMenu } from '../interfaces/restaurant.interface';

export const menuService = {
  async getAll() {
    return menuRepository.findAll();
  },

  async getById(id: string) {
    const menu = await menuRepository.findById(id);
    if (!menu) {
      throw new AppError('Menu not found', 404);
    }
    return menu;
  },

  async getByRestaurantId(restaurantId: string) {
    const restaurant = await restaurantRepository.findById(restaurantId);
    if (!restaurant) {
      throw new AppError('Restaurant not found', 404);
    }
    return menuRepository.findByRestaurantId(restaurantId);
  },

  async create(data: IMenu) {
    const restaurant = await restaurantRepository.findById(data.restaurantId);
    if (!restaurant) {
      throw new AppError('Restaurant not found', 404);
    }
    return menuRepository.create(data);
  },
};
