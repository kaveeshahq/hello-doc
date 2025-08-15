import React, { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const DoctorProfile = () => {
  const { dToken, getProfileData, profileData, setProfileData , backendUrl } =
    useContext(DoctorContext);

  const { currency } = useContext(AppContext);

  const [isEdit, setIsEdit] = useState(false);

  const updateProfile = async () => {
    try {
      const updateData = {
        address: profileData.address,
        fees: profileData.fees,
        available: profileData.available,
      };
      const { data } = await axios.post(
        backendUrl + "/api/doctor/update-profile",
        updateData,
        { headers: { dToken } }
      );
      if (data.success) {
        toast.success(data.message);
        setIsEdit(false);
        getProfileData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (dToken) {
      getProfileData();
    }
  }, [dToken]);

  return (
    profileData && (
      <div className="m-5">
        <div className="bg-white rounded-xl shadow-sm border border-primary p-6 flex flex-col lg:flex-row gap-8">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              src={profileData.image}
              alt={profileData.name}
              className="w-40 h-40 rounded-full object-cover border border-gray-200"
            />
          </div>

          {/* Profile Details */}
          <div className="flex-1 space-y-4">
            {/* Name & Basic Info */}
            <div>
              <p className="text-2xl font-semibold text-gray-800">
                {profileData.name}
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-1">
                <p className="text-gray-600 text-sm">
                  {profileData.degree} - {profileData.speciality}
                </p>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                  {profileData.experience}
                </span>
              </div>
            </div>

            {/* About */}
            <div>
              <p className="font-medium text-gray-800">About:</p>
              <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                {profileData.about}
              </p>
            </div>

            {/* Appointment Fee */}
            <div>
              <p className="font-medium text-gray-800">
                Appointment Fee:{" "}
                <span className="text-gray-600 font-normal">
                  {currency}{" "}
                  {isEdit ? (
                    <input
                      onChange={(e) =>
                        setProfileData((prev) => ({
                          ...prev,
                          fees: e.target.value,
                        }))
                      }
                      value={profileData.fees}
                      type="number"
                    />
                  ) : (
                    profileData.fees
                  )}
                </span>
              </p>
            </div>

            {/* Address */}
            <div>
              <p className="font-medium text-gray-800">Address:</p>
              <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                {isEdit ? (
                  <input
                    type="text"
                    onChange={(e) =>
                      setProfileData((prev) => ({
                        ...prev,
                        address: { ...prev.address, line1: e.target.value },
                      }))
                    }
                    value={profileData.address.line1}
                  />
                ) : (
                  profileData.address.line1
                )}
                <br />

                {isEdit ? (
                  <input
                    type="text"
                    onChange={(e) =>
                      setProfileData((prev) => ({
                        ...prev,
                        address: { ...prev.address, line2: e.target.value },
                      }))
                    }
                    value={profileData.address.line2}
                  />
                ) : (
                  profileData.address.line2
                )}
              </p>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-2">
              <input
                onChange={() =>
                  isEdit &&
                  setProfileData((prev) => ({
                    ...prev,
                    available: !prev.available,
                  }))
                }
                checked={profileData.available}
                id="available"
                type="checkbox"
                className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <label htmlFor="available" className="text-gray-700 text-sm">
                Available
              </label>
            </div>

            {/* Edit Button */}
            <div>
              {isEdit ? (
                <button
                  onClick={updateProfile}
                  className="px-5 py-2 bg-primary text-white rounded-lg shadow hover:bg-primary/90 transition"
                >
                  Save Changes
                </button>
              ) : (
                <button
                  onClick={() => setIsEdit(true)}
                  className="px-5 py-2 bg-primary text-white rounded-lg shadow hover:bg-primary/90 transition"
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default DoctorProfile;
