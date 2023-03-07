import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import ProductDetail from "../interfaces/ProductDetail";
import Detail from "./Detail";

const Product = () => {
  const params = useParams();
  const baseUri = import.meta.env.VITE_API_BASE_URI;
  const { response, fetchErr, loading } = useFetch<ProductDetail>({
    url: `${baseUri}/store/productDetail`,
    params: { asin: params.asin },
  });
  return (
    <>
      {loading && <p>Loading...</p>}
      {response?.result.map((detail) => {
        return <Detail detail={detail} key={detail.asin} />;
      })}
    </>
  );
};

export default Product;
