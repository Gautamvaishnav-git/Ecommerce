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

export default IProduct;
