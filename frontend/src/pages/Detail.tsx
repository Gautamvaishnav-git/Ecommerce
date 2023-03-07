import { Detail } from "../interfaces/ProductDetail";
import { Rating } from "react-simple-star-rating";
import SideImages from "../components/SideImages";

const Detail = ({ detail }: { detail: Detail }) => {
  return (
    <>
      <div className="flex gap-1 sm:flex-row flex-row pt-4 px-1 mx-auto max-w-7xl">
        <div className="w-1/2">
          <SideImages main_image={detail.main_image} images={detail.images} />
        </div>
        <div className="w-1/2">
          <h2 className="text-xl font-medium text-indigo-500 pb-2">
            {detail.title}
          </h2>
          <p>{detail.description}</p>
          <div className="flex pt-2 gap-2 items-center">
            <p>{detail.reviews.rating}</p>
            <Rating
              readonly
              initialValue={Number(detail.reviews.rating)}
              allowFraction
              SVGclassName="inline mb-1"
              size={26}
              emptyColor="gray"
              fillClassName="fill-red-500"
            />
            <p className="text-indigo-500 underline cursor-pointer">
              {detail.reviews.total_reviews}
            </p>
          </div>
          <div className="pt-2 flex gap-1">
            <p>
              <span className="text-indigo-500">Price:</span> $
              {detail.price.current_price}
            </p>
            <p className="line-through">${detail.price.before_price}</p>
          </div>

          <div className="pt-2 flex gap-1">
            <p>
              <span className="text-indigo-500">Save:</span> $
              {detail.price.savings_percent}
            </p>
            <p className="text-green-600">${detail.price.savings_percent}%</p>
          </div>
          <div className="pt-2">
            <h3 className="font-medium text-indigo-700">categories:</h3>
            <div className="flex flex-wrap pt-2 gap-2">
              {detail.categories.map((category) => {
                return (
                  <>
                    <a
                      href={category.url}
                      target="blank"
                      className="bg-indigo-100 py-1 px-2 rounded"
                    >
                      {category.category}
                    </a>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
