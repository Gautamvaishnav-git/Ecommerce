import ProductDetail from "../interfaces/ProductDetail";
import SideImages from "./SideImages";
import ProductInfo from "./ProductInfo";

const Detail = ({ detail }: { detail: ProductDetail }) => {
  return (
    <>
      <div className="flex gap-1 sm:flex-row flex-row pt-4 px-1 mx-auto max-w-7xl">
        <div className="w-1/2">
          <SideImages main_image={detail.main_image} images={detail.images} />
        </div>
        <div className="w-1/2">
          <ProductInfo {...detail} />
        </div>
      </div>
    </>
  );
};

export default Detail;
