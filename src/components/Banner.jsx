import React, { Suspense } from "react";
import TitleTextHome from "./TitleTextHome";
import IconButton from "./IconButton";
import { FaUserPlus } from "react-icons/fa";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate(); 

  return (
    <div className="my-20 md:mx-10">
      {/* Title Outside the Banner */}
      <TitleTextHome size="sm" className="mb-8">
        Sign Up and Heal
      </TitleTextHome>

      {/* Banner Container */}
      <div className="flex bg-third rounded-lg px-6 sm:px-10 md:px-14 lg:px-12">
        {/* Left Side - Moved more to the left */}
        <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 pr-8">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
            <p>Book Appointment</p>
            <p className="mt-4">With <span className="text-secondary">100+</span> Trusted Doctors.</p>
          </div>
          <IconButton
            onClick={() => navigate("/login")}
            icon={FaUserPlus}
            variant="primary"
            className="px-8 py-3 mt-6 cursor-pointer"
          >
            Create Account
          </IconButton>
        </div>

        {/* Right Side */}
        <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
          <img 
            className="w-full absolute bottom-0 right-0 max-w-md" 
            src={assets.appointment_img} 
            alt="" 
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;