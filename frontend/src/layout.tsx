import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout: React.FC = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Outlet /> {/* Render nested routes here */}
    </div>
  );
};

export default Layout;
