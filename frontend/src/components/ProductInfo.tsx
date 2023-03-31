import { Rating } from "react-simple-star-rating";
import { Detail } from "../interfaces/ProductDetail";
import { AiFillCheckCircle } from "react-icons/ai";

const ProductInfo = (props: ProductInfoType) => {
  const { title, description, reviews, price, categories, feature_bullets } =
    props;
  return (
    <>
      <div className="w-full">
        <h2 className="text-xl font-medium text-indigo-500 pb-2">{title}</h2>
        <p
          className="cursor-pointer relative before:absolute before:w-full before:h-full before:bg-gradient-to-t before:from-white"
          onClick={(e) => {
            const target = e.target as HTMLParagraphElement;
            target.innerText = description;
            target.classList.remove("before:from-white");
          }}
        >
          {description.slice(0, 150)}...
        </p>
        <div className="flex pt-2 gap-2 items-center">
          <p>{reviews.rating}</p>
          <Rating
            readonly
            initialValue={Number(reviews.rating)}
            allowFraction
            SVGclassName="inline mb-1"
            size={26}
            emptyColor="gray"
            fillClassName="fill-red-500"
          />
          <p className="text-indigo-500 underline cursor-pointer">
            {reviews.total_reviews}
          </p>
        </div>
        <div className="pt-2 flex gap-1">
          <p>
            <span className="text-indigo-600 font-medium">Price:</span> $
            {price.current_price}
          </p>
          <p className="line-through">${price.before_price}</p>
          <span className="sm:pl-6 text-blue-600 text-right">
            <AiFillCheckCircle className="inline" /> prime
          </span>
        </div>

        <div className="pt-2 flex gap-1">
          <p>
            <span className="text-indigo-600 font-medium">Save:</span> $
            {price.savings_percent}
          </p>
          <p className="text-green-600">${price.savings_percent}%</p>
        </div>
        <div className="pt-2">
          <h3 className="font-medium text-indigo-700">categories:</h3>
          <div className="flex flex-wrap pt-2 gap-2">
            {categories.map((category) => {
              return (
                <a
                  key={category._id}
                  href={category.url}
                  target="blank"
                  className="bg-indigo-100 hover:bg-indigo-600 hover:text-white duration-150 py-1 text-sm px-2 rounded my-2"
                >
                  {category.category}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="pt-4">
        <h3 className="text-indigo-600 font-medium capitalize">
          feature bullets
        </h3>
        {feature_bullets &&
          feature_bullets.map((bullet, index) => {
            return (
              <div className="py-2 text-sm" key={index}>
                <span className="font-bold text-indigo-500">{index + 1}.</span>
                <span className="text-gray-700">{bullet}</span>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default ProductInfo;

type ProductInfoType = Detail;
