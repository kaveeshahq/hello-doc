import React, { useState } from "react";
import IconButton from "../components/IconButton";
import { FaEdit, FaSave, FaCamera } from "react-icons/fa";
import TitleTextHome from "../components/TitleTextHome";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const MyProfile = () => {
  
  const {userData, setUserData  , token , backendUrl, loadUserProfileData} = useContext(AppContext)
  
  const [isEdit, setIsEdit] = useState(false);
  const [image,setimage] = useState(false)
  
  const updateUserProfileData = async () => {
    try {
      const formData = new FormData()

      formData.append('name' , userData.name )
      formData.append('phone' , userData.phone )
      formData.append('address' , JSON.stringify(userData.address) )
      formData.append('gender' , userData.gender )
      formData.append('dob' , userData.dob )
       

     const {data} = await axios.post(backendUrl + '/api/user/update-profile' , formData , {headers: {token}} )

     if (data.success) {
      toast.success(data.message)
       await  loadUserProfileData()
       setIsEdit(false)
     }else{
      toast.error(data.message)
     }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
  }

  return userData && (
    <div className="max-w-4xl mx-auto px-4 ">
      {/* Page Header */}
      <div className="mb-8">
        <TitleTextHome className="mb-4">My Profile</TitleTextHome>
        <p className="text-gray-600">
          Manage your personal information and preferences.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-primary overflow-hidden">
        {/* Profile Header Section */}
        <div className="bg-gradient-to-r from-primary to-third p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Profile Image */}
            <div className="relative group">
              {
              
              }
              <img
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-white shadow-lg"
                src={userData.image}
                alt="Profile"
              />
              {isEdit && (
                <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <FaCamera className="text-white text-xl" />
                </div>
              )}
            </div>

            {/* Name and Status */}
            <div className="text-center sm:text-left flex-1">
              {isEdit ? (
                <input
                  className="text-2xl sm:text-3xl font-bold text-gray-800 bg-white border border-gray-300 rounded-lg px-4 py-2 w-full max-w-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                  type="text"
                  value={userData.name}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
              ) : (
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  {userData.name}
                </h2>
              )}
              <div className="mt-3 flex justify-center sm:justify-start">
                <span className="bg-third text-secondary px-3 py-1 rounded-full text-sm font-medium">
                  Active Member
                </span>
              </div>
            </div>

            {/* Edit Button */}
            <div className="sm:self-start">
              <IconButton
                onClick={() => setIsEdit(!isEdit)}
                className={`px-6 py-2 mt-6 `}
                icon={isEdit ? FaSave : FaEdit}
                variant="secondary"
              >
                {isEdit ? "Save Changes" : "Edit Profile"}
              </IconButton>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Contact Information
                </h3>
              </div>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-primary">
                    Email Address
                  </label>
                  <div className="bg-gray-50 px-4 py-3 rounded-lg border border-primary">
                    <p className="text-gray-800">{userData.email}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Email cannot be changed
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-primary">
                    Phone Number
                  </label>
                  {isEdit ? (
                    <input
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      type="text"
                      value={userData.phone}
                      onChange={(e) =>
                        setUserData((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                      placeholder="Enter phone number"
                    />
                  ) : (
                    <div className="bg-gray-50 px-4 py-3 rounded-lg border border-primary">
                      <p className="text-gray-800">{userData.phone}</p>
                    </div>
                  )}
                </div>

                {/* Address */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-primary">
                    Address
                  </label>
                  {isEdit ? (
                    <div className="space-y-3">
                      <input
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                        value={userData.address.line1}
                        onChange={(e) =>
                          setUserData((prev) => ({
                            ...prev,
                            address: { ...prev.address, line1: e.target.value },
                          }))
                        }
                        type="text"
                        placeholder="Address Line 1"
                      />
                      <input
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                        value={userData.address.line2}
                        onChange={(e) =>
                          setUserData((prev) => ({
                            ...prev,
                            address: { ...prev.address, line2: e.target.value },
                          }))
                        }
                        type="text"
                        placeholder="Address Line 2"
                      />
                    </div>
                  ) : (
                    <div className="bg-gray-50 px-4 py-3 rounded-lg border border-primary">
                      <p className="text-gray-800">{userData.address.line1}</p>
                      <p className="text-gray-800">{userData.address.line2}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Personal Information
                </h3>
              </div>

              <div className="space-y-4">
                {/* Gender */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-primary">
                    Gender
                  </label>
                  {isEdit ? (
                    <select
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-white"
                      onChange={(e) =>
                        setUserData((prev) => ({
                          ...prev,
                          gender: e.target.value,
                        }))
                      }
                      value={userData.gender}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                      <option value="Prefer not to say">
                        Prefer not to say
                      </option>
                    </select>
                  ) : (
                    <div className="bg-gray-50 px-4 py-3 rounded-lg border border-primary">
                      <p className="text-gray-800">{userData.gender}</p>
                    </div>
                  )}
                </div>

                {/* Date of Birth */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-primary">
                    Date of Birth
                  </label>
                  {isEdit ? (
                    <input
                      type="date"
                      value={userData.dob}
                      onChange={(e) =>
                        setUserData((prev) => ({
                          ...prev,
                          dob: e.target.value,
                        }))
                      }
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    />
                  ) : (
                    <div className="bg-gray-50 px-4 py-3 rounded-lg border border-primary">
                      <p className="text-gray-800">
                        {new Date(userData.dob).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Age:{" "}
                        {new Date().getFullYear() -
                          new Date(userData.dob).getFullYear()}{" "}
                        years
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          {isEdit && (
            <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-gray-200">
              <IconButton
                onClick={updateUserProfileData}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200"
                icon={FaSave}
              >
                Save Changes
              </IconButton>
              <button
                onClick={() => setIsEdit(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
