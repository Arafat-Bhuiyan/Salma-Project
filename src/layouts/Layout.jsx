import Footer from "@/shared/Footer";
import { Navbar } from "@/shared/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
