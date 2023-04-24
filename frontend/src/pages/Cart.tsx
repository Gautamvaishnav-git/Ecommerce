import CartProduct from "../components/CartProduct";
import Loader from "../components/Loader";
import useDelete from "../hooks/useDelete";
import useFetch from "../hooks/useFetch";
import IProduct from "../interfaces/product";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { MdShoppingCartCheckout } from "react-icons/md";
import ServerErr from "../components/ServerErr";
import CheckoutForm from "../components/CheckoutForm";

export interface cartProductType extends IProduct {
  quantity: number;
}

const Cart = () => {
  const baseURI = import.meta.env.VITE_API_BASE_URI;
  const [fetchURI, setFetchURI] = useState(`${baseURI}/cart/fetchcart`);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [asins, setAsins] = useState<string[]>([]);

  const { response, fetchErr, loading, FetchOnAction } = useFetch<
    cartProductType[]
  >({
    url: fetchURI,
  });

  const { deleteResponse, deleteOnAction } = useDelete({
    url: `${baseURI}/cart/delete`,
  });

  const checkoutCart = () => {
    if (response) {
      response.map((item) => setAsins((prev) => [...prev, item.asin]));
      setShowCheckoutForm(!showCheckoutForm);
    }
  };

  const deleteProduct = (asin: string) => {
    deleteOnAction(
      asin,
      "Deleted",
      "deleting product...",
      "not deleted, error!"
    );
    setFetchURI(`${baseURI}/cart/fetchcart/`);
  };

  useEffect(() => {
    setFetchURI(`${baseURI}/cart/fetchcart`);
    FetchOnAction();
  }, [deleteResponse, response]);

  if (fetchErr) {
    return <ServerErr />;
  }

  return (
    <>
      {loading && <Loader message="fetching cart" />}
      <div className="container mx-auto sm:py-8 overflow-hidden">
        <ToastContainer />
        {response?.length === 0 ? (
          <div className="text-2xl text-indigo-500 text-center font-semibold">
            There is no item in your cart !
          </div>
        ) : (
          <>
            <div className="pb-8">
              <button
                className="bg-indigo-500 text-white py-2 px-3 rounded border border-transparent hover:bg-transparent hover:border-indigo-500 duration-200 w-fit flex gap-2 items-center hover:gap-3"
                onClick={checkoutCart}
              >
                <span>Checkout</span>
                <MdShoppingCartCheckout className="inline" />
              </button>
            </div>
            {showCheckoutForm && (
              <CheckoutForm
                asins={asins}
                back={showCheckoutForm}
                setBack={setShowCheckoutForm}
              />
            )}
          </>
        )}
        {response?.map((item, index) => {
          return (
            <CartProduct
              {...item}
              key={item.asin}
              index={index}
              deleteProduct={deleteProduct}
            />
          );
        })}
      </div>
    </>
  );
};

export default Cart;
