import Joi from 'joi';

export const createRestaurantSchema = Joi.object({
  name: Joi.string().min(2).required(),
  city: Joi.string().min(2).required(),
  cuisine: Joi.string().min(2).required(),
  rating: Joi.number().min(0).max(5).required(),
});

export const createMenuSchema = Joi.object({
  restaurantId: Joi.string().hex().length(24).required(),
  name: Joi.string().min(2).required(),
  price: Joi.number().min(0).required(),
  dishes: Joi.array().items(Joi.string().min(1)).min(1).required(),
});
