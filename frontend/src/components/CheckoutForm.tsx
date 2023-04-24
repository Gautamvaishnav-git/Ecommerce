import React, { Dispatch, SetStateAction, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import usePost from "../hooks/usePost";
import ServerErr from "./ServerErr";
import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";

interface formData {
  street: string;
  city: string;
  state: string;
  pincode: string;
}

const CheckoutForm = (props: PropTypes) => {
  const { asins, back, setBack } = props;
  const baseURI = import.meta.env.VITE_API_BASE_URI;
  const [details, setDetails] = useState<formData>({
    street: "",
    state: "",
    pincode: "",
    city: "",
  });

  const { postOnAction, postErr } = usePost({
    url: `${baseURI}/checkout`,
    data: { items: asins, address: details },
  });

  const inputChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const placeOrder = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    postOnAction("order placed", "not placed due to err", "wait a moment");
    console.log(details);
  };

  if (postErr) return <ServerErr />;
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ scale: 0 }}
    >
      <ToastContainer />
      <div className="py-2">Back</div>
      <div className="flex items-center justify-center p-12 fixed top-0 h-screen w-full mx-auto bg-slate-900 z-10 left-0">
        <div className="mx-auto w-full max-w-[550px]">
          <div className="pb-8 text-white flex items-center">
            <button
              className="flex gap-2 hover:gap-3 duration-150 items-center"
              onClick={() => setBack(!back)}
            >
              <AiOutlineArrowLeft className="inline" />
              <span>Back</span>
            </button>
          </div>
          <form onSubmit={placeOrder}>
            <div className="flex flex-wrap w-full gap-4">
              <div className="w-full sm:w-fit">
                <div className="mb-5">
                  <label
                    htmlFor="street"
                    className="mb-3 block text-base font-medium text-white"
                  >
                    Street
                  </label>
                  <input
                    onChange={inputChangeEvent}
                    value={details?.street}
                    required
                    type="text"
                    name="street"
                    id="street"
                    placeholder="street"
                    className="w-full rounded-md border border-gray-600 duration-200 bg-gray-800 py-3 px-6 text-base font-medium text-gray-200 outline-none focus:border-indigo-500 focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full sm:w-fit">
                <div className="mb-5">
                  <label
                    htmlFor="city"
                    className="mb-3 block text-base font-medium text-white"
                  >
                    City
                  </label>
                  <input
                    onChange={inputChangeEvent}
                    value={details?.city}
                    required
                    type="text"
                    name="city"
                    id="city"
                    placeholder="City ex- mumbai"
                    className="w-full rounded-md border border-gray-600 duration-200 bg-gray-800 py-3 px-6 text-base font-medium text-gray-200 outline-none focus:border-indigo-500 focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap w-full gap-4">
              <div className="w-full sm:w-fit">
                <div className="mb-5">
                  <label
                    htmlFor="state"
                    className="mb-3 block text-base font-medium text-white"
                  >
                    State
                  </label>
                  <input
                    onChange={inputChangeEvent}
                    value={details?.state}
                    required
                    type="text"
                    name="state"
                    id="state"
                    placeholder="state"
                    className="w-full rounded-md border border-gray-600 duration-200 bg-gray-800 py-3 px-6 text-base font-medium text-gray-200 outline-none focus:border-indigo-500 focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full sm:w-fit">
                <div className="mb-5">
                  <label
                    htmlFor="pincode"
                    className="mb-3 block text-base font-medium text-white"
                  >
                    pincode
                  </label>
                  <input
                    onChange={inputChangeEvent}
                    value={details?.pincode}
                    required
                    type="number"
                    name="pincode"
                    id="pincode"
                    placeholder="pincode ex- 23091"
                    className="w-full rounded-md border border-gray-600 duration-200 bg-gray-800 py-3 px-6 text-base font-medium text-gray-200 outline-none focus:border-indigo-500 focus:shadow-md appearance-none"
                  />
                </div>
              </div>
            </div>
            <div>
              <button
                className="rounded-md bg-indigo-500 py-3 px-8 text-center text-base font-semibold text-white outline-none border border-transparent hover:border-indigo-500 hover:bg-transparent duration-200"
                type="submit"
              >
                Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default CheckoutForm;

type PropTypes = {
  asins: string[];
  back: boolean;
  setBack: Dispatch<SetStateAction<boolean>>;
};
