import Card from "../components/Card";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import IProduct from "../interfaces/product";

const Home = () => {
  const baseUri = import.meta.env.VITE_API_BASE_URI;
  const storeUri = `${baseUri}/store`;
  const { response } = useFetch<IProduct[]>({ url: storeUri });

  return (
    <>
      <div className="flex gap-3 flex-wrap px-2 w-full max-w-7xl mx-auto">
        {response &&
          response.map((product) => {
            return <Card product={product} key={product.asin} />;
          })}
      </div>
    </>
  );
};

export default Home;
