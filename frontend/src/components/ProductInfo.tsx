import { Rating } from "react-simple-star-rating";
import { SyntheticEvent } from "react";
import { Detail } from "../interfaces/ProductDetail";

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
            <span className="text-indigo-500">Price:</span> $
            {price.current_price}
          </p>
          <p className="line-through">${price.before_price}</p>
        </div>

        <div className="pt-2 flex gap-1">
          <p>
            <span className="text-indigo-500">Save:</span> $
            {price.savings_percent}
          </p>
          <p className="text-green-600">${price.savings_percent}%</p>
        </div>
        <div className="pt-2">
          <h3 className="font-medium text-indigo-700">categories:</h3>
          <div className="flex flex-wrap pt-2 gap-2">
            {categories.map((category) => {
              return (
                <>
                  <a
                    key={category.url}
                    href={category.url}
                    target="blank"
                    className="bg-indigo-100 py-1 text-sm px-2 rounded"
                  >
                    {category.category}
                  </a>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div>feature_bullets</div>
    </>
  );
};
export default ProductInfo;

type ProductInfoType = Detail;
