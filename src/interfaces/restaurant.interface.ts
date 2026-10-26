export interface IRestaurant {
  name: string;
  city: string;
  cuisine: string;
  rating: number;
}

export interface IMenu {
  restaurantId: string;
  name: string;
  price: number;
  dishes: string[];
}
