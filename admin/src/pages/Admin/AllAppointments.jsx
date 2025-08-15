import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

const AllAppointments = () => {
  const { aToken, appointments, getAllAppointments, cancelAppoinment } = useContext(AdminContext);
  const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

  useEffect(() => {
    if (aToken) {
      getAllAppointments();
    }
  }, [aToken]);

  return (
    <div className="w-full max-w-6xl m-5">
      <h2 className="mb-4 text-2xl font-semibold text-gray-800">All Appointments</h2>

      <div className="border border-primary rounded-xl overflow-hidden shadow-sm bg-white">
        {/* Table Header */}
        <div className="hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] py-3 px-6 border-b bg-primary/5 text-primary font-medium">
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p>Fees</p>
          <p>Actions</p>
        </div>

        {/* Table Rows */}
        <div className="max-h-[75vh] overflow-y-auto">
          {appointments.map((item, index) => (
            <div
              key={index}
              className="flex flex-wrap sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center py-4 px-6 border-b hover:bg-gray-50 transition"
            >
              <p className="max-sm:hidden text-gray-500">{index + 1}</p>

              {/* Patient */}
              <div className="flex items-center gap-3">
                <img
                  className="w-10 h-10 rounded-full object-cover border"
                  src={item.userData.image}
                  alt={item.userData.name}
                />
                <div>
                  <p className="font-semibold text-gray-800">{item.userData.name}</p>
                  <p className="text-xs text-gray-500">{item.userData.email}</p>
                </div>
              </div>

              {/* Age */}
              <p className="max-sm:hidden text-gray-700">{calculateAge(item.userData.dob)}</p>

              {/* Date & Time */}
              <p className="text-gray-700">
                {slotDateFormat(item.slotDate)} <br />
                <span className="text-xs text-gray-500">{item.slotTime}</span>
              </p>

              {/* Doctor */}
              <div className="flex items-center gap-3">
                <img
                  className="w-10 h-10 rounded-full object-cover bg-gray-100"
                  src={item.docData.image}
                  alt={item.docData.name}
                />
                <div>
                  <p className="font-semibold text-gray-800">{item.docData.name}</p>
                  <p className="text-xs text-gray-500">{item.docData.speciality}</p>
                </div>
              </div>

              {/* Fees */}
              <p className="text-gray-800 font-medium">{currency}{item.amount}</p>

              {/* Actions */}
              <div>
                {item.cancelled ? (
                  <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-500 font-medium">
                    Cancelled
                  </span>
                ) : (
                  <img
                    onClick={() => cancelAppoinment(item._id)}
                    className="w-8 cursor-pointer hover:opacity-80 transition"
                    src={assets.cancel_icon}
                    alt="Cancel"
                  />
                )}
              </div>
            </div>
          ))}

          {appointments.length === 0 && (
            <div className="text-center py-8 text-gray-500">No appointments found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllAppointments;
