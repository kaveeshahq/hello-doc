import React from "react";
import { assets } from "../assets/assets";
import IconButton from "./IconButton"; // Add this import
import { FaPlay } from "react-icons/fa"; // Add this import

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row bg-third rounded-lg px-6 md:px-10 lg:px-20">
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 md:py-[10vw] pr-0 md:pr-8">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Trusted Care Starts <br /> with the Right Doctor.
        </p>
        
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 text-white text-sm font-medium">
          <img className="w-28 flex-shrink-0" src={assets.group_profiles} alt="" />
          <p className="leading-relaxed">
            Finding the right healthcare professional is the first step to
            better health. <br className="hidden md:block" /> We connect you
            with certified, experienced doctors you can trust — ensuring you
            receive the care you need, when you need it, with confidence.
          </p>
        </div>
        
        <IconButton
          href="#speciality"
          icon={FaPlay}
          variant="primary"
          className="mt-2 font-bold"
        >
          Book Appointment
        </IconButton>
      </div>
 
      {/* Right Side */}
      <div className="md:w-1/2 flex items-end justify-center md:justify-end">
        <img
          className="w-full max-w-md md:max-w-none h-auto object-cover rounded-lg md:rounded-none"
          src={assets.header_img}
          alt="Healthcare professional"
        />
      </div>
    </div>
  );
};

export default Header;