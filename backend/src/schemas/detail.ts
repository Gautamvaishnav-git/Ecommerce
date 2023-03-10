import { Schema } from "mongoose";
import { Detail } from "../interfaces/detail";

const detailSchema = new Schema<Detail>(
  {
    title: String,
    description: String,
    feature_bullets: [String],
    variants: [
      {
        asin: String,
        images: [
          {
            large: String,
            thumb: String,
            hiRes: String,
            variant: String,
            main: {
              String: [String],
            },
          },
        ],
        title: String,
        link: String,
        is_current_product: Boolean,
        price: String,
      },
    ],
    categories: [
      {
        category: String,
        url: String,
      },
    ],
    asin: String,
    url: String,
    reviews: {
      total_reviews: String,
      rating: String,
      answered_questions: Number,
    },
    item_available: Boolean,
    price: {
      symbol: String,
      currency: String,
      current_price: Number,
      discounted: Boolean,
      before_price: Number,
      savings_amount: Number,
      savings_percent: Number,
    },
    images: [String],
    main_image: String,
    total_images: Number,
    total_videos: Number,
    videos: [String],
    delivery_message: String,
    product_information: {
      dimensions: String,
      weight: String,
      available_from: String,
      available_from_utc: String,
      available_for_months: Number,
      available_for_days: Number,
      manufacturer: String,
      model_number: String,
      department: String,
      qty_per_order: Number,
      store_id: String,
      brand: String,
    },
    badges: {
      amazon_сhoice: Boolean,
      amazon_prime: Boolean,
      best_seller: Boolean,
    },
    sponsored_products: Array,
    also_bought: Array,
    other_sellers: [
      {
        position: Number,
        seller: String,
        url: String,
        price: [
          {
            symbol: String,
            currency: String,
            current_price: String,
          },
        ],
      },
    ],
  },
  { collection: "productDetail" }
);

export default detailSchema;
