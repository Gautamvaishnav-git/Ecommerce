import Card from "../components/Card";
import useFetch from "../hooks/useFetch";
import IProduct from "../interfaces/product";
import CardLoadingSkelton from "../components/CardLoadingSkelton";
import { ToastContainer } from "react-toastify";
import { FaFilter } from "react-icons/fa";

const Home = () => {
  const baseUri = import.meta.env.VITE_API_BASE_URI;
  const storeUri = `${baseUri}/store`;
  const { response, loading, fetchErr } = useFetch<IProduct[]>({
    url: storeUri,
  });

  if (fetchErr) return <p>Fetch Error occur</p>;

  return (
    <>
      {loading && <CardLoadingSkelton />}
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
