import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Product = () => {
  const params = useParams();
  const {} = useFetch({ url: "" });
  return (
    <>
      <h1>Product {params.asin} </h1>
    </>
  );
};

export default Product;
