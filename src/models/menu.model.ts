import { Schema, model, type InferSchemaType } from 'mongoose';

const menuSchema = new Schema(
  {
    restaurantId: {
      type: Schema.Types.ObjectId,
      ref: 'Restaurant',
      required: true,
    },
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    dishes: { type: [String], required: true, default: [] },
  },
  { timestamps: true },
);

export type MenuDocument = InferSchemaType<typeof menuSchema> & {
  _id: Schema.Types.ObjectId;
};

export const MenuModel = model('Menu', menuSchema);
