import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { useState, useEffect } from "react";
import PageNotFound from "./pages/PageNotFound";
import Cart from "./pages/Cart";
import PrivateComponent from "./components/PrivateComponent";
import Product from "./pages/Product";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:asin" element={<Product />} />
        </Route>
        <Route path="/user">
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
