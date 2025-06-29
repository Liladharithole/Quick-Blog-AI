import React from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex item-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200">
        <img
          src={assets.logo}
          alt="logo"
          className="w-32 sm:w-44 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <button
          onClick={() => navigate("/")}
          className="text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer"
        >
          Logout
        </button>
      </div>
      <div className="flex h-[calc(100vh-70px)] ">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
