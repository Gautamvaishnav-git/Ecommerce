import { Schema } from "mongoose";
import { IProduct } from "../interfaces/detail";

const productSchema = new Schema<IProduct>(
    {
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
      title: String,
      main_image: String,
    },
    { collection: "Store" }
  );

  export default productSchema