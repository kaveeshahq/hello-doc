import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const Dashboard = () => {
  const { aToken, getDashData, dashData, cancelAppoinment } =
    useContext(AdminContext);
  const { slotDateFormat } = useContext(AppContext);

  useEffect(() => {
    if (aToken) {
      getDashData();
    }
  }, [aToken]);

  const stats = [
    {
      label: "Doctors",
      value: dashData?.doctors,
      icon: assets.doctor_icon,
      color: "bg-blue-100",
    },
    {
      label: "Appointments",
      value: dashData?.appointments,
      icon: assets.appointments_icon,
      color: "bg-green-100",
    },
    {
      label: "Patients",
      value: dashData?.patients,
      icon: assets.patients_icon,
      color: "bg-purple-100",
    },
  ];

  return (
    dashData && (
      <div className="m-5 space-y-8">
        {/* Dashboard Stats */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Dashboard Overview
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white p-5 rounded-xl border border-primary shadow-sm hover:shadow-md hover:scale-[1.02] transition-all cursor-pointer"
              >
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-full ${stat.color}`}
                >
                  <img className="w-8" src={stat.icon} alt={stat.label} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Bookings */}
        <div className="bg-white rounded-xl border border-primary shadow-sm overflow-hidden">
          <div className="flex items-center gap-3 px-5 py-4 bg-gray-50 border-b border-primary">
            <img className="w-6" src={assets.list_icon} alt="Latest Bookings" />
            <p className="font-semibold text-gray-800">Latest Bookings</p>
          </div>
          <div className="divide-y divide-gray-200">
            {dashData.latestAppointments.map((item, index) => (
              <div
                key={index}
                className="flex items-center px-6 py-4 gap-4 hover:bg-gray-50 transition"
              >
                <img
                  className="rounded-full w-12 h-12 object-cover"
                  src={item.docData.image}
                  alt={item.docData.name}
                />
                <div className="flex-1 text-sm">
                  <p className="text-gray-800 font-medium">
                    {item.docData.name}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {slotDateFormat(item.slotDate)}
                  </p>
                </div>
                {item.cancelled ? (
                  <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-500 font-medium">
                    Cancelled
                  </span>
                ) : item.isCompleted ? (
                  <p>
                    {" "}
                    <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-500 font-medium">
                      Completed
                    </span>
                  </p>
                ) : (
                  <img
                    onClick={() => cancelAppoinment(item._id)}
                    className="w-8 cursor-pointer hover:opacity-80 transition"
                    src={assets.cancel_icon}
                    alt="Cancel"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Dashboard;
