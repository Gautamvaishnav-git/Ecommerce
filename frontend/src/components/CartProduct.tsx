import { Link } from "react-router-dom";
import IProduct from "../interfaces/product";
import { Rating } from "react-simple-star-rating";

const CartProduct = (props: IProduct) => {
  const { title, asin, main_image, price, reviews } = props;
  return (
    <>
      <div className="flex bg-white border border-indigo-500 mb-6 sm:mx-2 rounded-md sm:flex-row flex-col py-2 px-3 items-center gap-4">
        <div className="w-full sm:w-3/5">
          <img src={main_image} alt="product image" />
        </div>
        <div className="flex flex-col gap-2 grow w-full">
          <h3>{title}</h3>
          <div className="flex gap-2">
            <Rating
              readonly
              initialValue={Number(reviews.rating)}
              allowFraction
              SVGclassName="inline mb-1"
              size={26}
              emptyColor="gray"
              fillClassName="fill-red-500"
            />
            <p>{reviews.total_reviews}</p>
          </div>
          <Link
            to={`/product/${asin}`}
            className="bg-indigo-500 text-white w-fit px-3 py-2 rounded border border-transparent hover:border-indigo-500 hover:text-slate-900 hover:bg-transparent duration-150"
          >
            View Product
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
