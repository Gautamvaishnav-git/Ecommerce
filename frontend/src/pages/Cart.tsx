import CartProduct from "../components/CartProduct";
import useFetch from "../hooks/useFetch";
import IProduct from "../interfaces/product";
import { useEffect } from "react";

const Cart = () => {
  const baseURI = import.meta.env.VITE_API_BASE_URI;
  const { response, fetchErr } = useFetch<IProduct[]>({
    url: `${baseURI}/cart/fetchcart`,
  });
  useEffect(() => {
    console.log(response);
  }, []);

  if (fetchErr) {
    return <p className="text-4xl py-5 w-full text-center">{fetchErr}(</p>;
  }

  return (
    <>
      <div className="container mx-auto sm:py-8">
        {response?.map((item) => {
          return <CartProduct {...item} key={item.asin} />;
        })}
      </div>
    </>
  );
};

export default Cart;
