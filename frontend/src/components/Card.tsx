import IProduct from "../interfaces/product";
import { Link } from "react-router-dom";
import { AiFillAmazonCircle } from "react-icons/ai";
import { SiPrime } from "react-icons/si";
import { Rating } from "react-simple-star-rating";

const Card = ({ product }: { product: IProduct }) => {
  const {
    title,
    asin,
    price,
    url,
    amazonChoice,
    amazonPrime,
    bestSeller,
    reviews,
    sponsored,
    thumbnail,
  } = product;
  return (
    <div className="w-full sm:w-80 grow flex gap-2 flex-col items-center bg-white shadow-md rounded-md overflow-hidden relative border-t border-l border-gray-200 hover:scale-[1.04] duration-300">
      {bestSeller && (
        <div className="absolute z-10 left-0 top-2 bg-red-600 text-xs skew-y-3 shadow-md p-1 text-white">
          Best Seller
        </div>
      )}
      {sponsored && (
        <div className="absolute right-0 top-0 bg-blue-600 text-xs rounded-sm p-1 text-white">
          sponsored
        </div>
      )}
      <Link to={`product/${asin}`} className="w-full">
        <div className="w-full relative">
          <img src={thumbnail} alt="product" className="p-4 mx-auto sm:h-44" />

          <div className="absolute bottom-0 right-2 flex gap-3">
            {amazonChoice && (
              <span>
                <AiFillAmazonCircle className="text-3xl text-blue-700" />
              </span>
            )}
            {amazonPrime && (
              <span>
                <SiPrime className="text-3xl text-blue-700" />
              </span>
            )}
          </div>
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
  );
};

export default Card;
