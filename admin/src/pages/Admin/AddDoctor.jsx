import React from "react";
import { assets } from "../../assets/assets";
import { useState } from "react";
import { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");
  const [speciality, setSpeciality] = useState("General physician");
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const { backendUrl, aToken } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (!docImg) {
        return toast.error("Image Not Selected");
      }

      const formData = new FormData();
      formData.append("image", docImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fees", Number(fees));
      formData.append("about", about);
      formData.append("speciality", speciality);
      formData.append("degree", degree);
      formData.append(
        "address",
        JSON.stringify({ line1: address1, line2: address2 })
      );

      //  console log form data

      formData.forEach((value, key) => {
        console.log(`${key} : ${value} `);
      });

      const { data } = await axios.post(
        backendUrl + "/api/admin/add-doctor",
        formData,
        { headers: { aToken } }
      );

      if (data.success) {
        toast.success(data.message)
        setDocImg(false)
        setName('')
        setPassword('')
        setEmail('')
        setAddress1('')
        setAddress2('')
        setDegree('')
        setAbout('')
        setFees('')
      }else{
        toast.error(data.message)
      }
    } catch (error) {
        toast.error(error.message)
        console.log(error);
        
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full">
      <p className="mb-3 text-lg font-medium">Add Doctor</p>

      <div className="bg-white px-8 py-8 border border-primary rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        {/* Upload image */}
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="doc-image">
            <img
              className="w-16 h-16 object-cover bg-gray-100 border border-gray-300 rounded-full cursor-pointer hover:opacity-80 transition"
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt="Upload"
            />
          </label>
          <input
            onChange={(e) => setDocImg(e.target.files[0])}
            type="file"
            id="doc-image"
            hidden
          />
          <p className="text-sm leading-tight">
            Upload Doctor <br /> Image
          </p>
        </div>

        {/* Form fields */}
        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          {/* Left column */}
          <div className="flex flex-col gap-4 w-full">
            <div>
              <p className="mb-1 font-medium">Doctor Name</p>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Name"
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <p className="mb-1 font-medium">Doctor Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email"
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <p className="mb-1 font-medium">Doctor Password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <p className="mb-1 font-medium">Experience</p>
              <select
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:border-primary"
              >
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i + 1} value={`${i + 1} Year`}>
                    {i + 1} Year
                  </option>
                ))}
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <p className="mb-1 font-medium">Doctor Fees</p>
              <input
                onChange={(e) => setFees(e.target.value)}
                value={fees}
                type="number"
                placeholder="Fee"
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4 w-full">
            <div>
              <p className="mb-1 font-medium">Speciality</p>
              <select
                onChange={(e) => setSpeciality(e.target.value)}
                value={speciality}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:border-primary"
              >
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div>
              <p className="mb-1 font-medium">Education</p>
              <input
                onChange={(e) => setDegree(e.target.value)}
                value={degree}
                type="text"
                placeholder="Education"
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <p className="mb-1 font-medium">Address</p>
              <input
                onChange={(e) => setAddress1(e.target.value)}
                value={address1}
                type="text"
                placeholder="Address Line 1"
                required
                className="w-full border rounded px-3 py-2 mb-2 focus:outline-none focus:border-primary"
              />
              <input
                onChange={(e) => setAddress2(e.target.value)}
                value={address2}
                type="text"
                placeholder="Address Line 2"
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:border-primary"
              />
            </div>
          </div>
        </div>

        {/* About section */}
        <div className="mt-6">
          <p className="mb-1 font-medium">About Doctor</p>
          <textarea
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            placeholder="About Doctor"
            rows={5}
            required
            className="w-full border rounded px-3 py-2 focus:outline-none focus:border-primary resize-none"
          />
        </div>

        {/* Submit button */}
        <div className="mt-6">
          <button
            type="submit"
            className="bg-secondary cursor-pointer rounded-full text-black font-semibold px-6 py-2  hover:opacity-90 transition"
          >
            Add Doctor
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddDoctor;
