import { useState, SyntheticEvent } from "react";
import Detail from "../interfaces/ProductDetail";
const SideImages = (props: Detail) => {
  const { main_image, images, variants } = props;
  const [productImage, setProductImage] = useState(main_image);

  return (
    <>
      <div className="w-full flex sm:flex-row-reverse flex-col pb-5 sm:pb-0">
        <div className="w-4/5 p-4">
          <img src={productImage} alt="image" className="w-full" />
        </div>
        <div className="flex sm:flex-col overflow-x-auto gap-2 flex-wrap sm:w-1/5 items-center">
          {images.map((image, index) => {
            return (
              <div
                key={index}
                className="w-fit border p-2 cursor-pointer border-gray-300 hover:border-indigo-600"
                onClick={() => setProductImage(image)}
              >
                <img
                  src={image}
                  alt="image"
                  className="sm:h-12 h-8 mx-auto"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SideImages;
