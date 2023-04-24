import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { cartProductType } from "../pages/Cart";
import { motion } from "framer-motion";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import usePost from "../hooks/usePost";
import { ToastContainer, toast } from "react-toastify";
import ServerErr from "./ServerErr";
import axios from "axios";

interface cartProduct extends cartProductType {
  deleteProduct: (asin: string) => void;
  index: number;
}

const CartProduct = (props: cartProduct) => {
  const { title, asin, main_image, price, reviews, quantity, deleteProduct } =
    props;
  const baseURI = import.meta.env.VITE_API_BASE_URI;
  const numberFormatF = (option: Intl.NumberFormatOptions, num: number) => {
    return new Intl.NumberFormat("en-in", option).format(num);
  };

  const handleQuantity = async (quantityUpdate: "inc" | "dec") => {
    const { data } = await toast.promise(
      axios.post(
        `${baseURI}/cart/${quantityUpdate}`,
        {
          asin,
        },
        { headers: { Authorization: sessionStorage.getItem("token") } }
      ),
      {
        pending: "updating",
        error: "not updated",
        success: "updated",
      }
    );
    console.log(data);
  };

  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeIn" }}
        viewport={{ once: true }}
        className="flex bg-white dark:bg-gray-800 border border-indigo-500/40 mb-6 sm:mx-2 rounded-md sm:flex-row flex-col py-2 px-3 items-center gap-4"
      >
        <ToastContainer />
        <div className="w-full sm:h-24 sm:w-3/5">
          <img
            src={main_image}
            className="sm:h-full mx-auto sm:w-full object-contain"
            alt="product image"
          />
        </div>
        <div className="flex flex-col gap-2 grow w-full dark:text-gray-300">
          <h3>{title}</h3>
          <div className="flex gap-2">
            <Rating
              readonly
              initialValue={Number(reviews.rating)}
              allowFraction
              SVGclassName="inline mb-1"
              size={26}
              emptyColor="gray"
              fillClassName="fill-red-500"
            />
            <p>{numberFormatF({}, reviews.total_reviews)}</p>
          </div>
          <div className="flex gap-2">
            <span>
              {numberFormatF(
                { style: "currency", currency: price.currency },
                price.current_price
              )}
            </span>
          </div>
          <div className="flex gap-2">
            <button
              className="hover:bg-indigo-500 duration-300 bg-indigo-900/10 dark:bg-gray-900 py-2 px-4 rounded sm:grow-0 grow text-center focus:outline-indigo-500 focus-within:outline-none"
              onClick={() => handleQuantity("inc")}
            >
              <AiOutlinePlus />
            </button>
            <h3 className="bg-indigo-900/10 dark:bg-gray-900 py-2 px-4 rounded sm:grow-0 grow text-center">
              {quantity}
            </h3>
            <button
              className="hover:bg-indigo-500 duration-300 bg-indigo-900/10 dark:bg-gray-900 py-2 px-4 rounded sm:grow-0 grow text-center focus:outline-indigo-500 focus-within:outline-none"
              onClick={() => handleQuantity("dec")}
            >
              <AiOutlineMinus />
            </button>
          </div>
          <div className="flex gap-4 flex-wrap items-center">
            <Link
              to={`/product/${asin}`}
              className="bg-indigo-500 text-white w-fit px-3 py-2 rounded border border-transparent hover:border-indigo-500 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-transparent duration-150 sm:grow-0 grow focus:outline-indigo-500 focus-within:outline-none"
            >
              View Product
            </Link>
            <button
              className="bg-red-500 text-white w-fit px-3 py-2 rounded border border-transparent hover:border-red-500 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-transparent duration-150 sm:grow-0 grow focus:outline-indigo-500 focus-within:outline-none"
              onClick={() => deleteProduct(asin)}
            >
              Delete
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CartProduct;
