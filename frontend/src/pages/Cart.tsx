import CartProduct from "../components/CartProduct";
import useDelete from "../hooks/useDelete";
import useFetch from "../hooks/useFetch";
import IProduct from "../interfaces/product";
import { useEffect, useState } from "react";

export interface cartProductType extends IProduct {
  quantity: number;
}

const Cart = () => {
  const baseURI = import.meta.env.VITE_API_BASE_URI;
  const [fetchURI, setFetchURI] = useState(`${baseURI}/cart/fetchcart`);
  const { response, fetchErr } = useFetch<cartProductType[]>({
    url: fetchURI,
  });

  const { deleteResponse, deleteOnAction } = useDelete({
    url: `${baseURI}/cart/delete`,
  });
  const deleteProduct = (asin: string) => {
    deleteOnAction(asin);
    setFetchURI(`${baseURI}/cart/fetchcart/`);
  };

  useEffect(() => {
    setFetchURI(`${baseURI}/cart/fetchcart`);
  }, [deleteResponse]);

  if (fetchErr) {
    return (
      <p className="text-3xl text-indigo-500 font-semibold py-5 w-full text-center">
        Server Error !
      </p>
    );
  }

  return (
    <>
      <div className="container mx-auto sm:py-8">
        {response?.length === 0 && (
          <div className="text-2xl text-indigo-500 text-center font-semibold">
            There is no item in your cart !
          </div>
        )}
        {response?.map((item) => {
          return (
            <CartProduct
              {...item}
              key={item.asin}
              deleteProduct={deleteProduct}
            />
          );
        })}
      </div>
    </>
  );
};

export default Cart;
