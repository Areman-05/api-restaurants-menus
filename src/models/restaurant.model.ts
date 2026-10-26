import { Schema, model, type InferSchemaType } from 'mongoose';

const restaurantSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    cuisine: { type: String, required: true, trim: true },
    rating: { type: Number, required: true, min: 0, max: 5 },
  },
  { timestamps: true },
);

export type RestaurantDocument = InferSchemaType<typeof restaurantSchema> & {
  _id: Schema.Types.ObjectId;
};

export const RestaurantModel = model('Restaurant', restaurantSchema);
