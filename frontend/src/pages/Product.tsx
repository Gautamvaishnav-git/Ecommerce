import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import ProductDetail from "../interfaces/ProductDetail";
import Detail from "../components/Detail";
import Loader from "../components/Loader";

const Product = () => {
  const params = useParams();
  const baseUri = import.meta.env.VITE_API_BASE_URI;
  const { response, fetchErr, loading } = useFetch<ProductDetail>({
    url: `${baseUri}/store/detail`,
    params: { asin: params.asin },
  });
  if (fetchErr)
    return <p className="text-4xl py-5 w-full text-center">Limit excide :(</p>;
  return (
    <>
      {loading && <Loader message="loading" />}
      {response && <Detail detail={response} key={response?.asin} />}
    </>
  );
};

export default Product;
