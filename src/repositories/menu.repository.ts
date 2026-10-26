import { MenuModel } from '../models/menu.model';
import type { IMenu } from '../interfaces/restaurant.interface';

export const menuRepository = {
  findAll() {
    return MenuModel.find().lean();
  },

  findById(id: string) {
    return MenuModel.findById(id).lean();
  },

  findByRestaurantId(restaurantId: string) {
    return MenuModel.find({ restaurantId }).lean();
  },

  create(data: IMenu) {
    return MenuModel.create(data);
  },
};
