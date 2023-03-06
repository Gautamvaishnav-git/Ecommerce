import { Navigate, Outlet } from "react-router-dom";
import Header from "./Header";

const PrivateComponent = () => {
  const token = sessionStorage.getItem("token");
  return token ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate to="/user/login" />
  );
};

export default PrivateComponent;
