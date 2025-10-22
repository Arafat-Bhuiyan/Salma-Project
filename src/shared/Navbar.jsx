import React, { use } from "react";
import logo from "../assets/images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/Redux/features/authSlice";
import { toast } from "react-toastify";

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redux state থেকে auth check
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully");
    navigate("/");
  };
  return (
    <div className="fixed top-0 left-0 w-full bg-[#1A0E1E] z-50">
      <div className="py-2 w-10/12 mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <img src={logo} alt="logo" />
          </div>

          <div className="inline-flex justify-start items-center gap-6">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `w-14 h-6 text-center text-base font-unbounded leading-normal ${
                  isActive
                    ? "text-[#FF39B0] font-bold underline"
                    : "text-white font-normal hover:text-[#FF39B0]"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/content"
              className={({ isActive }) =>
                `w-24 h-6 text-center text-base font-unbounded leading-normal ${
                  isActive
                    ? "text-[#FF39B0] font-bold underline"
                    : "text-white font-normal hover:text-[#FF39B0]"
                }`
              }
            >
              Database
            </NavLink>

            <NavLink
              to="/vaults"
              className={({ isActive }) =>
                `w-20 h-6 text-center text-base font-unbounded leading-normal ${
                  isActive
                    ? "text-[#FF39B0] font-bold underline"
                    : "text-white font-normal hover:text-[#FF39B0]"
                }`
              }
            >
              Vaults
            </NavLink>

            <NavLink
              to="/dispatches"
              className={({ isActive }) =>
                `w-28 h-6 text-center text-base font-unbounded leading-normal ${
                  isActive
                    ? "text-[#FF39B0] font-bold underline"
                    : "text-white font-normal hover:text-[#FF39B0]"
                }`
              }
            >
              Dispatches
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `w-24 h-6 text-center text-base font-unbounded leading-normal ${
                  isActive
                    ? "text-[#FF39B0] font-bold underline"
                    : "text-white font-normal hover:text-[#FF39B0]"
                }`
              }
            >
              About us
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `w-24 h-6 text-center text-base font-unbounded leading-normal ${
                  isActive
                    ? "text-[#FF39B0] font-bold underline"
                    : "text-white font-normal hover:text-[#FF39B0]"
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Conditional Button */}
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="w-24 h-6 px-8 py-2.5 bg-[#FF80EB] border-stone-100 inline-flex justify-center items-center gap-2.5 text-center text-white text-sm font-medium font-unbounded active:bg-[#C12E83] transition-colors duration-200"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="w-24 h-6 px-8 py-2.5 bg-[#FF80EB] border-stone-100 inline-flex justify-center items-center gap-2.5 text-center text-white text-sm font-medium font-unbounded active:bg-[#C12E83] transition-colors duration-200"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};



