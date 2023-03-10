import { Schema, model } from "mongoose";
import { IProduct } from "../interfaces/detail";

export interface productSchemaType extends IProduct {
  userID: string;
  quantity: number;
}

const productSchema = new Schema<productSchemaType>(
  {
    asin: String,
    main_image: String,
    price: [
      {
        discounted: Boolean,
        current_price: Number,
        currency: String,
        before_price: Number,
        savings_amount: Number,
        savings_percent: Number,
      },
    ],
    reviews: {
      total_reviews: Number,
      rating: Number,
    },
    title: String,
    quantity: {
      type: Number,
      default: 1,
    },
    userID: Schema.Types.ObjectId,
  },
  { collection: "userCart" }
);

const cart = model("userCart", productSchema);

export default cart;
