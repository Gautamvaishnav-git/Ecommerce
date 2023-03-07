import { useState } from "react";
const SideImages = ({ main_image, images }: PropType) => {
  const [productImage, setProductImage] = useState(main_image);
  return (
    <>
      <div className="w-full flex flex-row-reverse">
        <div className="w-4/5 p-4">
          <img src={productImage} alt="image" className="w-full" />
        </div>
        <div className="flex flex-col gap-2 w-1/5 items-center">
          {images.map((image, index) => {
            return (
              <div
                key={index}
                className="w-full border p-2 cursor-pointer border-gray-300 hover:border-indigo-600"
                onClick={() => setProductImage(image)}
              >
                <img src={image} alt="image" className="h-12 mx-auto" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SideImages;

type PropType = {
  main_image: string;
  images: string[];
};
