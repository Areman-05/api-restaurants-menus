import { RestaurantModel } from '../models/restaurant.model';
import type { IRestaurant } from '../interfaces/restaurant.interface';

export const restaurantRepository = {
  findAll() {
    return RestaurantModel.find().lean();
  },

  findById(id: string) {
    return RestaurantModel.findById(id).lean();
  },

  create(data: IRestaurant) {
    return RestaurantModel.create(data);
  },
};
