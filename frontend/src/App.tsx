import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { useState, useEffect } from "react";

const App = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(document.cookie.split(";")[0].split("=")[1]);
  }, []);

  return (
    <Router>
      <Header token={token} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/signup" element={<SignUp />} />
        <Route path="/user/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
