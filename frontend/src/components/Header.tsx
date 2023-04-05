import { Link, NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { AiFillHome, AiOutlineShoppingCart } from "react-icons/ai";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState<string>("");
  const handleLogout = () => {
    const exit = confirm("Are you sure that you want to log out");
    if (exit) {
      sessionStorage.removeItem("token");
      navigate("/user/login");
    }
  };
  const handleSearch = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    navigate(`/search/${query}`);
  };
  return (
    <>
      <header className="sm:hidden sticky top-0 z-[9999]">
        <MobileMenu />
      </header>
      <header className="hidden sm:block text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 justify-between items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Free Zone</span>
          </Link>
          <form
            onSubmit={handleSearch}
            className="grow flex items-center gap-2 justify-center"
          >
            <input
              type="text"
              placeholder="search"
              className="outline-none border bottom-1 border-gray-300 focus:border-indigo-500 rounded-sm focus:scale-x-110 duration-150 py-1 px-2"
              required
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="bg-indigo-500 border border-transparent hover:border-indigo-500 hover:bg-transparent hover:text-indigo-500 duration-150 rounded text-white px-2 py-1"
              type="submit"
            >
              Search
            </button>
          </form>
          <nav
            className="md:ml-auto flex flex-wrap items-center text-base justify-center"
            id="navBar"
          >
            <NavLink to="/" className="mr-5 hover:text-gray-900">
              Home
            </NavLink>
            <NavLink to="/cart" className="mr-5 hover:text-gray-900">
              Cart
            </NavLink>
          </nav>

          <button
            onClick={handleLogout}
            className="inline-flex items-center bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 text-white rounded text-base mt-4 md:mt-0"
          >
            Logout
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export const MobileMenu: React.FC = () => {
  return (
    <>
      <nav className="flex justify-between px-3 pt-2 bg-white/60 backdrop-blur-sm">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Free Zone</span>
        </Link>
        <div className="flex gap-4">
          <Link to="/">
            <AiFillHome className="text-indigo-600 rounded-full p-2 w-8 h-8 bg-slate-200/50 text-2xl" />
          </Link>
          <Link to="/cart">
            <AiOutlineShoppingCart className="text-indigo-600 rounded-full p-2 w-8 h-8 bg-slate-200/50 text-2xl" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
