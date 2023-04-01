import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import ProductDetail from "../interfaces/ProductDetail";
import Detail from "../components/Detail";
import Loader from "../components/Loader";
import usePost from "../hooks/usePost";

const Product = () => {
  const params = useParams();
  const baseUri = import.meta.env.VITE_API_BASE_URI;
  const { response, fetchErr, loading } = useFetch<ProductDetail>({
    url: `${baseUri}/store/detail`,
    params: { asin: params.asin },
  });
  const { response: postResponse, postOnAction } = usePost({
    url: `${baseUri}/cart/add`,
    data: { asin: params.asin },
  });
  const addToCart = async () => {
    await postOnAction();
    console.log(postResponse);
  };
  if (fetchErr)
    return <p className="text-4xl py-5 w-full text-center">{fetchErr}(</p>;
  return (
    <>
      {loading && <Loader message="loading" />}
      {response && <Detail detail={response} key={response?.asin} />}
      <button
        className="bg-indigo-900/40 hover:bg-indigo-600/80 font-medium text-white backdrop-blur-sm rounded py-2 px-4 fixed 2xl:hidden z-10 bottom-8 right-8"
        onClick={addToCart}
      >
        Add To cart
      </button>
    </>
  );
};

export default Product;
