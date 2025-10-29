import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/Redux/features/authSlice";
import { toast } from "react-toastify";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const location = useLocation();

  useEffect(() => {
    // Close mobile menu on route change
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      // Prevent scrolling on the body when the menu is open
      document.body.style.overflow = "hidden";
    } else {
      // Restore scrolling when the menu is closed
      document.body.style.overflow = "auto";
    }
    // Cleanup function to restore scrolling when the component unmounts
    return () => (document.body.style.overflow = "auto");
  }, [isMenuOpen]);

  return (
    <div className="fixed top-0 left-0 w-full bg-[#1A0E1E] z-50">
      <div className="py-2 w-full md:w-11/12 xl:w-10/12 mx-auto">
        <div className="flex justify-between items-center">
          <div className="cursor-pointer" onClick={() => navigate("/")}>
            <img src={logo} alt="logo" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:inline-flex justify-start items-center gap-6">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `h-6 text-center text-base font-unbounded leading-normal ${
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
                `h-6 text-center text-base font-unbounded leading-normal ${
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
                `h-6 text-center text-base font-unbounded leading-normal ${
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
                `h-6 text-center text-base font-unbounded leading-normal ${
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
                `h-6 text-center text-base font-unbounded leading-normal ${
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
                `h-6 text-center text-base font-unbounded leading-normal ${
                  isActive
                    ? "text-[#FF39B0] font-bold underline"
                    : "text-white font-normal hover:text-[#FF39B0]"
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          <div className="flex items-center gap-4">
            {/* Conditional Button */}
            <div className="hidden xl:block">
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="w-28 h-10 px-6 bg-[#FF80EB] border-stone-100 inline-flex justify-center items-center gap-2.5 text-center text-white text-sm font-medium font-unbounded active:bg-[#C12E83] transition-colors duration-200"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={handleLogin}
                  className="w-28 h-10 px-6 bg-[#FF80EB] border-stone-100 inline-flex justify-center items-center gap-2.5 text-center text-white text-sm font-medium font-unbounded active:bg-[#C12E83] transition-colors duration-200"
                >
                  Login
                </button>
              )}
            </div>

            {/* Hamburger Menu Icon */}
            <div className="xl:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <X size={28} color="white" />
                ) : (
                  <Menu size={28} color="white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="xl:hidden fixed top-0 left-0 w-full h-full bg-[#1A0E1E] flex flex-col items-center pt-10 gap-8 z-50">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-xl font-unbounded ${
                isActive ? "text-[#FF39B0] font-bold" : "text-white"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/content"
            className={({ isActive }) =>
              `text-xl font-unbounded ${
                isActive ? "text-[#FF39B0] font-bold" : "text-white"
              }`
            }
          >
            Database
          </NavLink>
          <NavLink
            to="/vaults"
            className={({ isActive }) =>
              `text-xl font-unbounded ${
                isActive ? "text-[#FF39B0] font-bold" : "text-white"
              }`
            }
          >
            Vaults
          </NavLink>
          <NavLink
            to="/dispatches"
            className={({ isActive }) =>
              `text-xl font-unbounded ${
                isActive ? "text-[#FF39B0] font-bold" : "text-white"
              }`
            }
          >
            Dispatches
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-xl font-unbounded ${
                isActive ? "text-[#FF39B0] font-bold" : "text-white"
              }`
            }
          >
            About us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-xl font-unbounded ${
                isActive ? "text-[#FF39B0] font-bold" : "text-white"
              }`
            }
          >
            Contact
          </NavLink>

          <div className="mt-8">
            {isAuthenticated ? (
              <button onClick={handleLogout} className="w-32 h-12 bg-[#FF80EB] text-white text-lg font-unbounded">
                Logout
              </button>
            ) : (
              <button onClick={handleLogin} className="w-32 h-12 bg-[#FF80EB] text-white text-lg font-unbounded">
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
