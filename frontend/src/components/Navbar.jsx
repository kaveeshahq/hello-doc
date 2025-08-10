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

        <img onClick={()=>setShowMenu(true)} className="w-6 md:hidden  " src={assets.menu_icon} alt="" />

        {/* Mobile Menu */}

        <div className={` ${showMenu ? 'fixed w-full' : 'h-0 w-0' } md:hidden right-0 top-0 bottom-0 z-20 bg-white transition-all duration-300`}>
          <div className="flex items-center justify-between p-5 border-b border-b-primary">
            <img src={assets.logo} alt="" className="w-48" />
            <img 
              onClick={()=> setShowMenu(false)} 
              src={assets.cross_icon} 
              alt="" 
              className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform duration-200"
            />
          </div>
          
          <div className="px-5 py-8">
            <ul className="space-y-6">
              <NavLink 
                to="/" 
                onClick={()=> setShowMenu(false)}
                className="block py-3 px-4 text-primary font-bold text-lg hover:text-secondary hover:bg-gray-50 rounded-lg transition-all duration-300"
              >
                Home
              </NavLink>
              <NavLink 
                to="/doctors" 
                onClick={()=> setShowMenu(false)}
                className="block py-3 px-4 text-primary font-bold text-lg hover:text-secondary hover:bg-gray-50 rounded-lg transition-all duration-300"
              >
                All Doctors
              </NavLink>
              <NavLink 
                to="/about" 
                onClick={()=> setShowMenu(false)}
                className="block py-3 px-4 text-primary font-bold text-lg hover:text-secondary hover:bg-gray-50 rounded-lg transition-all duration-300"
              >
                About Us
              </NavLink>
              <NavLink 
                to="/contact" 
                onClick={()=> setShowMenu(false)}
                className="block py-3 px-4 text-primary font-bold text-lg hover:text-secondary hover:bg-gray-50 rounded-lg transition-all duration-300"
              >
                Contact Us
              </NavLink>
              <NavLink 
                to="/faqs" 
                onClick={()=> setShowMenu(false)}
                className="block py-3 px-4 text-primary font-bold text-lg hover:text-secondary hover:bg-gray-50 rounded-lg transition-all duration-300"
              >
                FAQs
              </NavLink>
              <NavLink 
                to="/careers" 
                onClick={()=> setShowMenu(false)}
                className="block py-3 px-4 text-primary font-bold text-lg hover:text-secondary hover:bg-gray-50 rounded-lg transition-all duration-300"
              >
                Careers
              </NavLink>
            </ul>

            {/* Mobile Profile/Auth Section */}
            {token ? (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg mb-4">
                  <img
                    className="w-12 h-12 rounded-full object-cover border-2 border-secondary"
                    src={assets.profile_pic}
                    alt="Profile"
                  />
                  <span className="text-primary font-semibold text-lg">Profile</span>
                </div>
                
                <div className="space-y-3">
                  <div
                    onClick={() => {
                      navigate("/my-profile");
                      setShowMenu(false);
                    }}
                    className="flex items-center gap-3 p-3 text-primary font-medium hover:text-secondary hover:bg-gray-50 rounded-lg cursor-pointer transition-all duration-200"
                  >
                    <FaUser className="w-4 h-4" />
                    <span>My Profile</span>
                  </div>
                  
                  <div
                    onClick={() => {
                      navigate("/my-appointments");
                      setShowMenu(false);
                    }}
                    className="flex items-center gap-3 p-3 text-primary font-medium hover:text-secondary hover:bg-gray-50 rounded-lg cursor-pointer transition-all duration-200"
                  >
                    <FaCalendarAlt className="w-4 h-4" />
                    <span>My Appointments</span>
                  </div>
                  
                  <div
                    onClick={() => {
                      setToken(false);
                      setShowMenu(false);
                    }}
                    className="flex items-center gap-3 p-3 text-primary font-medium hover:text-red-500 hover:bg-red-50 rounded-lg cursor-pointer transition-all duration-200 border-t border-gray-200 mt-4 pt-4"
                  >
                    <FaSignOutAlt className="w-4 h-4" />
                    <span>Log Out</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => {
                    navigate("/login");
                    setShowMenu(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-secondary text-white font-semibold py-3 px-4 rounded-lg hover:bg-secondary/90 transition-all duration-300"
                >
                  <FaUserPlus className="w-4 h-4" />
                  Create Account
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
