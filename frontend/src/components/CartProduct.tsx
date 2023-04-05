import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { cartProductType } from "../pages/Cart";

interface cartProduct extends cartProductType {
  deleteProduct: (asin: string) => void;
}

const CartProduct = (props: cartProduct) => {
  const { title, asin, main_image, price, reviews, quantity, deleteProduct } =
    props;
  const numberFormatF = (option: Intl.NumberFormatOptions, num: number) => {
    return new Intl.NumberFormat("en-in", option).format(num);
  };
  return (
    <>
      <div className="flex bg-white dark:bg-gray-800 border border-indigo-500/40 mb-6 sm:mx-2 rounded-md sm:flex-row flex-col py-2 px-3 items-center  gap-4">
        <div className="w-full sm:h-24 sm:w-3/5">
          <img
            src={main_image}
            className="sm:h-full mx-auto sm:w-full object-contain"
            alt="product image"
          />
        </div>
        <div className="flex flex-col gap-2 grow w-full dark:text-gray-300">
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
            <p>{numberFormatF({}, reviews.total_reviews)}</p>
          </div>
          <div className="flex gap-2">
            <span>
              {numberFormatF(
                { style: "currency", currency: price.currency },
                price.current_price
              )}
            </span>
          </div>
          <div className="flex gap-4 flex-wrap items-center">
            <Link
              to={`/product/${asin}`}
              className="bg-indigo-500 text-white w-fit px-3 py-2 rounded border border-transparent hover:border-indigo-500 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-transparent duration-150 sm:grow-0 grow"
            >
              View Product
            </Link>
            <h3 className="bg-indigo-900/10 dark:bg-gray-900 py-2 px-4 rounded sm:grow-0 grow text-center">
              {quantity}
            </h3>
            <button
              className="bg-red-500 text-white w-fit px-3 py-2 rounded border border-transparent hover:border-red-500 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-transparent duration-150 sm:grow-0 grow"
              onClick={() => deleteProduct(asin)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
