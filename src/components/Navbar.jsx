import React, { useState, useRef, useEffect } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import IconButton from "./IconButton";
import {
  FaUserPlus,
  FaChevronDown,
  FaUser,
  FaCalendarAlt,
  FaSignOutAlt,
} from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-between text-sm py-5 mb-5 border-b border-b-primary">
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt=""
        className="w-64 cursor-pointer"
      />
      <ul className="hidden md:flex items-start gap-8 font-bold text-primary">
        <NavLink to="/">
          <li className="py-2 text-lg font-bold hover:text-secondary transition-all duration-300 ease-in-out transform hover:scale-105">
            Home
          </li>
          <hr className="border-none outline-none h-0.5 bg-secondary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-2 text-lg font-bold hover:text-secondary transition-all duration-300 ease-in-out transform hover:scale-105">
            All Doctors
          </li>
          <hr className="border-none outline-none h-0.5 bg-secondary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-2 text-lg font-bold hover:text-secondary transition-all duration-300 ease-in-out transform hover:scale-105">
            About Us
          </li>
          <hr className="border-none outline-none h-0.5 bg-secondary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-2 text-lg font-bold hover:text-secondary transition-all duration-300 ease-in-out transform hover:scale-105">
            Contact Us
          </li>
          <hr className="border-none outline-none h-0.5 bg-secondary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/faqs">
          <li className="py-2 text-lg font-bold hover:text-secondary transition-all duration-300 ease-in-out transform hover:scale-105">
            FAQs
          </li>
          <hr className="border-none outline-none h-0.5 bg-secondary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/careers">
          <li className="py-2 text-lg font-bold hover:text-secondary transition-all duration-300 ease-in-out transform hover:scale-105">
            Careers
          </li>
          <hr className="border-none outline-none h-0.5 bg-secondary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="relative" ref={dropdownRef}>
            {/* Enhanced Profile Button */}
            <div
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-full cursor-pointer hover:bg-gray-100 hover:shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <img
                className="w-10 h-10 rounded-full object-cover border-2 border-secondary shadow-sm"
                src={assets.profile_pic}
                alt="Profile"
              />
              <span className="hidden lg:block text-primary font-semibold">
                Profile
              </span>
              <FaChevronDown
                className={`w-3 h-3 text-primary transition-all duration-200 ${
                  showDropdown ? "rotate-180 text-secondary" : ""
                }`}
              />
            </div>

            {/* Enhanced Dropdown Menu */}
            <div
              className={`absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 z-20 transition-all duration-300 transform ${
                showDropdown
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible translate-y-2"
              }`}
            >
              {/* Arrow pointer */}
              <div className="absolute -top-2 right-6 w-4 h-4 bg-white border-l border-t border-gray-200 transform rotate-45"></div>

              <div className="p-2">
                {/* Profile Header */}
                <div className="flex items-center gap-3 p-3 border-b border-gray-100">
                  <img
                    className="w-12 h-12 rounded-full object-cover border-2 border-secondary"
                    src={assets.profile_pic}
                    alt="Profile"
                  />
                </div>

                {/* Menu Items */}
                <div className="mt-2 space-y-1">
                  <div
                    onClick={() => {
                      navigate("/my-profile");
                      setShowDropdown(false);
                    }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-all duration-200 group/item"
                  >
                    <FaUser className="w-4 h-4 text-gray-500 group-hover/item:text-primary" />
                    <span className="text-primary font-medium group-hover/item:text-secondary">
                      My Profile
                    </span>
                  </div>

                  <div
                    onClick={() => {
                      navigate("/my-appointments");
                      setShowDropdown(false);
                    }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-all duration-200 group/item"
                  >
                    <FaCalendarAlt className="w-4 h-4 text-gray-500 group-hover/item:text-primary" />
                    <span className="text-primary font-medium group-hover/item:text-secondary">
                      My Appointments
                    </span>
                  </div>

                  <div
                    onClick={() => {
                      setToken(false);
                      setShowDropdown(false);
                    }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 cursor-pointer transition-all duration-200 group/item border-t border-gray-100 mt-2 pt-3"
                  >
                    <FaSignOutAlt className="w-4 h-4 text-gray-500 group-hover/item:text-red-500" />
                    <span className="text-primary font-medium group-hover/item:text-red-500">
                      Log Out
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <IconButton
            onClick={() => navigate("/login")}
            icon={FaUserPlus}
            variant="secondary"
            className="hidden md:flex font-semibold"
          >
            Create Account
          </IconButton>
        )}
      </div>
    </div>
  );
};

export default Navbar;
