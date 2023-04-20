import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import IProduct from "../interfaces/product";
import Card from "../components/Card";

const Filter = () => {
  const params = useParams();
  const [products, setProducts] = useState<IProduct[]>();
  const baseURI = import.meta.env.VITE_API_BASE_URI;
  const { FetchOnAction, fetchErr, loading, response } = useFetch<IProduct[]>({
    url: `${baseURI}/filter/${params?.query?.split("&&")[1]}/?${
      params?.query?.split("&&")[0]
    }`,
  });

  useEffect(() => {
    FetchOnAction();
  }, []);

  useEffect(() => {
    response && setProducts(response);
  }, [response]);

  if (fetchErr) return <h1>Fetch Error...</h1>;

  return (
    <>
      <div className="flex container mx-auto flex-wrap py-8">
        {products &&
          products.map((product, index) => (
            <Card
              product={product}
              grow={index + 1 === products.length ? 0.1 : 1}
              key={product.asin}
            />
          ))}
      </div>
    </>
  );
};

export default Filter;
