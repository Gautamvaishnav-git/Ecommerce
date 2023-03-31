import Card from "../components/Card";
import useFetch from "../hooks/useFetch";
import IProduct from "../interfaces/product";
import Loader from "../components/Loader";
import CardLoadingSkelton from "../components/CardLoadingSkelton";

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
      <div className="flex gap-3 flex-wrap px-2 py-4 w-full container mx-auto">
        {response &&
          response.map((product) => {
            return <Card product={product} key={product.asin} />;
          })}
      </div>
    </>
  );
};

export default Home;
