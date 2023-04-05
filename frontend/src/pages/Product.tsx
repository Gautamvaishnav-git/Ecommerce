import { useParams } from "react-router-dom";
import { BiCartAdd } from "react-icons/bi";
import useFetch from "../hooks/useFetch";
import ProductDetail from "../interfaces/ProductDetail";
import Detail from "../components/Detail";
import Loader from "../components/Loader";
import usePost from "../hooks/usePost";
import { ToastContainer, toast } from "react-toastify";

const Product: React.FC = () => {
  const params = useParams();
  const baseUri = import.meta.env.VITE_API_BASE_URI;
  const { response, fetchErr, loading } = useFetch<ProductDetail>({
    url: `${baseUri}/store/detail`,
    params: { asin: params.asin },
  });
  const { response: postResponse, postOnAction } = usePost<
    Promise<{
      title: string;
      asin: string;
    }>
  >({
    url: `${baseUri}/cart/add`,
    data: { asin: params.asin },
  });
  const addToCart = async () => {
    postOnAction(
      "Added to cart",
      "not added, got some err",
      "adding to your cart..."
    );
  };

  if (fetchErr)
    return (
      <p className="text-4xl py-5 w-full text-center">Fetching error :(</p>
    );
  return (
    <>
      <ToastContainer />
      {loading && <Loader message="loading" />}
      {response && <Detail detail={response} key={response?.asin} />}
      <button
        className="bg-indigo-900/40 hover:bg-indigo-600/80 font-medium text-white backdrop-blur-sm rounded py-2 px-4 hidden sm:block fixed 2xl:hidden z-10 bottom-8 right-8"
        onClick={addToCart}
      >
        Add To cart
      </button>
      <button
        className="bg-indigo-600 shadow text-white rounded-full p-2 fixed sm:hidden z-10 bottom-6 right-8"
        onClick={addToCart}
      >
        <BiCartAdd className="text-2xl" />
      </button>
    </>
  );
};

export default Product;
