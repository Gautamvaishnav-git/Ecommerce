export default interface Detail {
  title: string;
  description: string;
  feature_bullets: string[];
  variants: IVariants[];
  categories: {
    category: string;
    url: string;
    _id: string;
  }[];
  asin: string;
  url: string;
  reviews: {
    total_reviews: string;
    rating: string;
    answered_questions: number;
  };
  item_available: boolean;
  price: {
    symbol: string;
    currency: string;
    current_price: number;
    discounted: boolean;
    before_price: number;
    savings_amount: number;
    savings_percent: number;
  };
  images: string[];
  main_image: string;
  total_images: number;
  total_videos: number;
  videos: string[];
  delivery_message: string;
  product_information: {
    dimensions: string;
    weight: string;
    available_from: string;
    available_from_utc: string;
    available_for_months: number;
    available_for_days: number;
    manufacturer: string;
    model_number: string;
    department: string;
    qty_per_order: number;
    store_id: string;
    brand: string;
  };
  badges: {
    amazon_сhoice: boolean;
    amazon_prime: boolean;
    best_seller: boolean;
  };
  sponsored_products: any[];
  also_bought: any[];
  other_sellers: {
    position: number;
    seller: string;
    url: string;
    price: {
      symbol: string;
      currency: string;
      current_price: null;
    }[];
  };
}

interface IVariants {
  asin: string;
  images: [
    {
      large: string;
      thumb: string;
      hiRes: string;
      variant: string;
      main: { [k: string]: string };
    }
  ];
  title: string;
  link: string;
  is_current_product: boolean;
  price: string;
}
