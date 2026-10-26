import { RestaurantModel } from '../models/restaurant.model';
import { MenuModel } from '../models/menu.model';

export async function seedIfEmpty(): Promise<void> {
  const count = await RestaurantModel.countDocuments();
  if (count > 0) {
    return;
  }

  const r1 = await RestaurantModel.create({
    name: 'La Taberna del Puerto',
    city: 'Barcelona',
    cuisine: 'Mediterranea',
    rating: 4.5,
  });

  const r2 = await RestaurantModel.create({
    name: 'Casa Pablo',
    city: 'Madrid',
    cuisine: 'Espanola',
    rating: 4.2,
  });

  await MenuModel.create([
    {
      restaurantId: r1._id,
      name: 'Menu del dia',
      price: 14.5,
      dishes: ['Ensalada', 'Paella', 'Flan'],
    },
    {
      restaurantId: r1._id,
      name: 'Menu marisco',
      price: 28,
      dishes: ['Gambas', 'Lubina', 'Tarta'],
    },
    {
      restaurantId: r2._id,
      name: 'Menu casero',
      price: 12,
      dishes: ['Sopa', 'Cocido', 'Arroz con leche'],
    },
  ]);

  console.log('Datos de ejemplo cargados');
}
