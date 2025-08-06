import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  
  return (
<div className="flex items-center justify-between text-sm py-5 mb-5 border-b border-b-primary-dull">
      <img src={assets.logo} alt="" className="w-64 cursor-pointer" />
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
         <NavLink to="/contact">
          <li className="py-2 text-lg font-bold hover:text-secondary transition-all duration-300 ease-in-out transform hover:scale-105">
            FAQs
          </li>
          <hr className="border-none outline-none h-0.5 bg-secondary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-primary z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-primary-dull cursor-pointer transition-colors duration-200"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-primary-dull cursor-pointer transition-colors duration-200"
                >
                  My Appointments
                </p>
                <p 
                  onClick={() => setToken(false)} 
                  className="hover:text-primary-dull cursor-pointer transition-colors duration-200"
                >
                  Log Out
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-secondary text-primary px-8 py-3 rounded-full font-semibold hidden md:block hover:bg-primary hover:text-secondary transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;