import mongoose from "mongoose";

interface IProduct {
  position: {
    page: number;
    position: number;
    global_position: number;
  };
  asin: string;
  price: {
    discounted: boolean;
    current_price: number;
    currency: string;
    before_price: number;
    savings_amount: number;
    savings_percent: number;
  };
  reviews: {
    total_reviews: number;
    rating: number;
  };
  url: string;
  score: string;
  sponsored: boolean;
  amazonChoice: boolean;
  bestSeller: boolean;
  amazonPrime: boolean;
  title: string;
  thumbnail: string;
}

const productSchema = new mongoose.Schema<IProduct>(
  {
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
  { collection: "Store" }
);

const Store = mongoose.model("Store", productSchema);

export default Store;
