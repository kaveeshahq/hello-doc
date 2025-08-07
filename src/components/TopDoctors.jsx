import React from "react";
import TitleTextHome from "./TitleTextHome";
import { doctors } from "../assets/assets";
import IconButton from "./IconButton";
import { useNavigate } from "react-router-dom";

const TopDoctors = () => {

    const navigate = useNavigate();
  return (
    <div className="mt-8 flex flex-col items-center gap-4 my-16 text-gray-600 md:mx-10">
      <TitleTextHome size="sm">Top Doctors to Book</TitleTextHome>
      <p className="sm:w-1/3 text-center text-lg">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={()=> navigate(`/appointments/${item._id}`)}
            key={index}
            className="border border-primary rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 "
          >
            <img className="bg-primary" src={item.image} alt="" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-third">
                <p className="w-2 h-2 bg-secondary rounded-full">{}</p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <IconButton href="#" variant="primary">
        More
      </IconButton>
    </div>
  );
};

export default TopDoctors;
