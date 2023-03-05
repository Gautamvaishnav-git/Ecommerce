import mongoose from "mongoose";
import { IProduct } from "./store";

export interface productSchemaType extends IProduct {
  userID: string;
  quantity: number;
}

const productSchema = new mongoose.Schema<productSchemaType>(
  {
    userID: String,
    quantity: {
      type: Number,
      default: 1,
    },
    position: {
      page: Number,
      position: Number,
      global_position: Number,
    },
    asin: String,
    price: {
      discounted: Boolean,
      current_price: Number,
      currency: String,
      before_price: Number,
      savings_amount: Number,
      savings_percent: Number,
    },
    reviews: {
      total_reviews: Number,
      rating: Number,
    },
    url: String,
    score: String,
    sponsored: Boolean,
    amazonChoice: Boolean,
    bestSeller: Boolean,
    amazonPrime: Boolean,
    title: String,
    thumbnail: String,
  },
  { collection: "userCart" }
);

const cart = mongoose.model("userCart", productSchema);

export default cart;
