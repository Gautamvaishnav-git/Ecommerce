import Card from "../components/Card";
import useFetch from "../hooks/useFetch";
import IProduct from "../interfaces/product";
import CardLoadingSkelton from "../components/CardLoadingSkelton";
import { ToastContainer } from "react-toastify";
import { FaFilter } from "react-icons/fa";
import { useState, useEffect } from "react";
import Filters from "../components/Filters";

const Home = () => {
  const baseUri = import.meta.env.VITE_API_BASE_URI;
  const storeUri = `${baseUri}/store`;
  const [isVisible, setIsVisible] = useState(false);
  const { response, loading, FetchOnAction, fetchErr } = useFetch<IProduct[]>({
    url: storeUri,
  });

  useEffect(() => {
    FetchOnAction();
  }, [response]);

  if (fetchErr) return <p>Fetch Error occur</p>;

  return (
    <>
      {loading && <CardLoadingSkelton />}
      <div className="container mx-auto py-2 px-4 text-white w-full flex flex-col justify-end">
        <button
          className="p-2 rounded-full w-fit self-end bg-indigo-500"
          onClick={() => setIsVisible(!isVisible)}
        >
          <FaFilter />
        </button>
        <Filters isVisible={isVisible} />
      </div>
      <div className="flex flex-wrap px-2 py-4 w-full container mx-auto">
        <ToastContainer />
        {response &&
          response.map((product, index) => {
            return (
              <Card
                product={product}
                key={product.asin}
                grow={index + 1 === response.length ? 0.1 : 0.5}
              />
            );
          })}
      </div>
    </>
  );
};

export default Home;
