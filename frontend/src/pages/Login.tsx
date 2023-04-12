import ecommerceVector from "../assets/ecommerceVector.png";
import { Link, useNavigate } from "react-router-dom";
import { useReducer, useState } from "react";
import IForm from "../interfaces/form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [formData, updateFormData] = useReducer(
    (prev: IForm, next: IForm) => {
      return { ...prev, ...next };
    },
    { email: "", password: "" }
  );

  const handleSubmit = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    try {
      let baseUri = import.meta.env.VITE_API_BASE_URI;
      const { data } = await toast.promise(
        axios.post(`${baseUri}/user/login`, {
          ...formData,
        }),
        {
          success: "sent the details to server",
          error: "some error found!",
          pending: "Logging you",
        }
      );
      if (data.token) {
        sessionStorage.setItem("token", data.token);
        updateFormData({ email: "", password: "" });
        navigate("/");
      } else {
        toast.error(data.invalid);
        navigate("/user/login");
      }
    } catch (error) {
      toast.error("server not respond!");
    }
  };

  return (
    <form className="body-font" onSubmit={handleSubmit}>
      <ToastContainer position="top-left" />
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <img src={ecommerceVector} alt="ecommerce image" className="w-full" />
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 dark:bg-slate-800 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 dark:text-white text-xl font-semibold title-font mb-5">
            Log In
          </h2>

          <div className="relative mb-4">
            <label
              htmlFor="email"
              className="leading-7 text-sm text-gray-600 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) =>
                updateFormData({ ...formData, email: e.target.value })
              }
              required
              value={formData.email}
              className="w-full bg-white dark:bg-gray-800 dark:text-white dark:focus:ring-0 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="leading-7 text-sm text-gray-600 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) =>
                updateFormData({ ...formData, password: e.target.value })
              }
              required
              value={formData.password}
              className="w-full bg-white dark:bg-gray-800 dark:text-white dark:focus:ring-0 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            type="submit"
          >
            Login
          </button>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
            Do not have an account?
            <Link to="/user/signup" className="text-indigo-500 dark:text-indigo-400 hover:underline">
              {" "}
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};
export default Login;
