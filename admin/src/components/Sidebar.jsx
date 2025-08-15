import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { DoctorContext } from "../context/DoctorContext";

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  const linkClasses = ({ isActive }) =>
    `flex items-center gap-3 p-2 rounded-lg transition-colors relative ${
      isActive
        ? "border-l-4 border-secondary text-white bg-transparent"
        : "hover:bg-secondary hover:text-black"
    }`;

  return (
    <div className="min-h-screen border-r h-full w-60 bg-gradient-to-r from-primary to-third text-white shadow-lg">
      {aToken && (
        <ul className="flex flex-col gap-4 p-4">
          <NavLink to="/admin-dashboard" className={linkClasses}>
            <img src={assets.home_icon} alt="" className="h-5 w-5" />
            <p className="hidden md:block">Dashboard</p>
          </NavLink>
          <NavLink to="/all-appointments" className={linkClasses}>
            <img src={assets.appointment_icon} alt="" className="h-5 w-5" />
            <p className="hidden md:block">All Appointments</p>
          </NavLink>
          <NavLink to="/add-doctor" className={linkClasses}>
            <img src={assets.add_icon} alt="" className="h-5 w-5" />
            <p className="hidden md:block">Add Doctor</p>
          </NavLink>
          <NavLink to="/doctor-list" className={linkClasses}>
            <img src={assets.people_icon} alt="" className="h-5 w-5" />
            <p className="hidden md:block">Doctors List</p>
          </NavLink>
        </ul>
      )}

      {dToken && (
        <ul className="flex flex-col gap-4 p-4">
          <NavLink to="/doctor-dashboard" className={linkClasses}>
            <img src={assets.home_icon} alt="" className="h-5 w-5" />
            <p className="hidden md:block">Dashboard</p>
          </NavLink>
          <NavLink to="/doctor-appointments" className={linkClasses}>
            <img src={assets.appointment_icon} alt="" className="h-5 w-5" />
            <p className="hidden md:block">All Appointments</p>
          </NavLink>
          <NavLink to="/doctor-profile" className={linkClasses}>
            <img src={assets.people_icon} alt="" className="h-5 w-5" />
            <p className="hidden md:block">Profile</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
