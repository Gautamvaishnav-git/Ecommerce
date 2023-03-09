interface IProduct {
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
  title: string;
  main_image: string;
}

export default IProduct;
