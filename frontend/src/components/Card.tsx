import IProduct from "../interfaces/product";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { AiOutlineEye } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

const Card = ({ product }: { product: IProduct }) => {
  const { title, asin, price, main_image, reviews } = product;

  return (
    <>
      <ToastContainer />
      <div className="card w-full sm:w-1/4 xl:w-1/5 grow flex gap-2 flex-col items-center bg-white shadow-md rounded-md overflow-hidden relative border-t border-l border-gray-200 hover:scale-[1.02] duration-300 m-3">
        <Link
          to={`product/${asin}`}
          className="addToCart rounded-full bg-indigo-900 absolute bottom-4 z-30 right-4 text-white backdrop-blur-sm p-2 cursor-pointer hover:scale-110 duration-200"
          title="add To cart"
        >
          <AiOutlineEye />
        </Link>
        <Link to={`product/${asin}`} className="w-full">
          <div className="w-full relative">
            <img
              src={main_image}
              alt="product"
              className="p-4 mx-auto sm:h-44"
            />
          </div>
        </Link>
        <div className="flex bg-gray-100 h-full items-start text-left w-full p-4 flex-col gap-1 relative">
          <p className="text-xl text-gray-800 overflow-clip">
            {title.slice(0, 35)}...
          </p>
          <div className="flex items-center gap-1">
            {reviews.rating}{" "}
            <Rating
              readonly
              initialValue={reviews.rating}
              allowFraction
              SVGclassName="inline mb-1"
              size={20}
              emptyColor="gray"
              fillClassName="fill-red-500"
            />
            <p className="text-indigo-600 text-sm border-b border-current">
              {reviews.total_reviews}
            </p>
          </div>
          <div className="font-mono w-full">
            <p className="font-medium">
              <span className="text-indigo-600">Price: </span>
              <span>${price.current_price}</span>
              <span className="line-through pl-1">${price.before_price}</span>
            </p>
            <p className="font-medium">
              <span className="text-indigo-600">Save: </span>
              <span className="">${price.savings_amount}</span>
              <span className="text-green-600 pl-2">
                [{price.savings_percent}%]
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
