import { Detail } from "../interfaces/ProductDetail";
import SideImages from "./SideImages";
import ProductInfo from "./ProductInfo";

const Detail = ({ detail }: { detail: Detail }) => {
  return (
    <>
      <div className="flex gap-1 sm:flex-row flex-row pt-4 px-1 mx-auto max-w-7xl">
        <div className="w-1/2">
          <SideImages {...detail} />
        </div>
        <div className="w-1/2">
          <ProductInfo {...detail} />
        </div>
      </div>
    </>
  );
};

export default Detail;
