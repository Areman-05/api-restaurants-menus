import { restaurantRepository } from '../repositories/restaurant.repository';
import { AppError } from '../utils/errors';
import type { IRestaurant } from '../interfaces/restaurant.interface';

export const restaurantService = {
  async getAll() {
    return restaurantRepository.findAll();
  },

  async getById(id: string) {
    const restaurant = await restaurantRepository.findById(id);
    if (!restaurant) {
      throw new AppError('Restaurant not found', 404);
    }
    return restaurant;
  },

  async create(data: IRestaurant) {
    return restaurantRepository.create(data);
  },
};
