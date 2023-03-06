import Card from "../components/Card";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import IProduct from "../interfaces/product";

const Home = () => {
  const baseUri = import.meta.env.VITE_API_BASE_URI;
  const storeUri = `${baseUri}/store`;
  const { response } = useFetch<IProduct[]>({ url: storeUri });
  useEffect(() => {
    console.log(response);
  }, [response]);

  return (
    <>
      <div className="text-xl text-blue-500 w-full font-bold p-3">
        {response &&
          response.map((product) => {
            return <Card />;
          })}
      </div>
    </>
  );
};

export default Home;
