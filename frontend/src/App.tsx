import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PageNotFound from "./pages/PageNotFound";
import Cart from "./pages/Cart";
import PrivateComponent from "./components/PrivateComponent";
import Product from "./pages/Product";
import "react-toastify/dist/ReactToastify.css";
import Search from "./pages/Search";
import Filter from "./pages/Filter";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:asin" element={<Product />} />
          <Route path="/search/:query" element={<Search />} />
          <Route path="/filter/:query" element={<Filter />} />
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
