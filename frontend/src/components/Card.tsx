import IProduct from "../interfaces/product";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <Link
      to="/"
      className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg"
    >
      <img
        className="h-48 w-full object-cover object-center"
        src="https://m.media-amazon.com/images/I/717JafCjCAL._AC_UY218_.jpg"
        alt="Product Image"
      />
      <div className="p-4">
        <h2 className="mb-2 text-lg font-medium text-gray-900">
          Xbox Series S – Gilded Hunter Bundle
        </h2>
        <p className="mb-2 text-base-300 text-gray-700">
          Product description goes here.
        </p>
        <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold text-gray-900">$20.00</p>
          <p className="text-base  font-medium text-gray-500 line-through">
            $25.00
          </p>
          <p className="ml-auto text-base font-medium text-green-500">
            20% off
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
