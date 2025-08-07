import React from "react";
import TitleTextHome from "./TitleTextHome";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div id="speciality" className="mt-8 flex flex-col items-center gap-4 py-16 text-gray-800  ">
      <TitleTextHome size="sm">Find By Speciality</TitleTextHome>
      <p className="sm:w-1/3 text-center text-lg">Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
    
    <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll ">
      {specialityData.map((item,index)=>(
        <Link onClick={()=>scrollTo(0,0)} className="flex flex-col items-center text-sm cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 " key={index} to={`/doctors/${item.speciality}`}>
          <img className="w-16 sm:w-24 mb-2" src={item.image} alt="" />
          <p>{item.speciality}</p>
        </Link>
      ))}
    </div>
    </div>
  );
};

export default SpecialityMenu;
