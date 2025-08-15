import React from "react";
import { useContext } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

const DoctorAppointment = () => {
  const {
    dToken,
    appointments,
    getAppointments,
    completeAppointment,
    cancelAppointment,
  } = useContext(DoctorContext);
  const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

  useEffect(() => {
    if (dToken) {
      getAppointments();
    }
  }, [dToken]);

  return (
    <div className="w-full max-w-6xl m-5">
      <p className="mb-3 text-lg font-semibold text-gray-800">
        All Appointments
      </p>

      <div className="bg-white border border-primary rounded-lg text-sm max-h-[80vh] min-h-[50vh] overflow-y-auto shadow-sm">
        {/* Table Header */}
        <div className="hidden sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 py-3 px-6 border-b border-primary bg-gray-50 font-medium text-gray-700">
          <p>#</p>
          <p>Patient</p>
          <p>Payment</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Fees</p>
          <p>Action</p>
        </div>

        {/* Table Rows */}
        {appointments.reverse().map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] items-center gap-3 sm:gap-1 py-3 px-6 border-b border-gray-200 hover:bg-gray-50 transition"
          >
            <p className="text-gray-600 max-sm:hidden">{index + 1}</p>

            {/* Patient Info */}
            <div className="flex items-center gap-3">
              <img
                className="w-10 h-10 rounded-full object-cover border border-gray-300"
                src={item.userData.image}
                alt={item.userData.name}
              />
              <p className="text-gray-700 font-medium">{item.userData.name}</p>
            </div>

            {/* Payment Type */}
            <div>
              <p className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium text-center max-sm:hidden">
                Cash
              </p>
            </div>

            {/* Age */}
            <p className="text-gray-600 max-sm:hidden">
              {calculateAge(item.userData.dob)}
            </p>

            {/* Date & Time */}
            <p className="text-gray-600">
              {slotDateFormat(item.slotDate)} , {item.slotTime}
            </p>

            {/* Fees */}
            <p className="text-gray-800 font-medium">
              {currency} {item.amount}
            </p>
            {
              item.cancelled
              ? <p className="text-red-500 text-xs font-medium">Cancelled</p>
              : item.isCompleted 
              ? <p className="text-green-500 text-xs font-medium">Completed</p>
              :   
    
              <div className="flex items-center gap-3 max-sm:hidden">
              <img
                onClick={()=>cancelAppointment(item._id)}
                className="w-10 cursor-pointer hover:opacity-80 transition"
                src={assets.cancel_icon}
                alt="Cancel"
              />
              <img
                onClick={()=>completeAppointment(item._id)}
                className="w-10 cursor-pointer hover:opacity-80 transition"
                src={assets.tick_icon}
                alt="Confirm"
              />
            </div>
            }
      
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorAppointment;
