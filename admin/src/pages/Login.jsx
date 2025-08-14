import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import axios from "axios";
import {toast} from 'react-toastify'

const Login = () => {
  const [state, setState] = useState("Admin");

  const { setAToken, backendUrl } = useContext(AdminContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (state === "Admin") {
        const { data } = await axios.post(backendUrl + "/api/admin/login", {
          email,
          password,
        });
        if (data.success) {
          localStorage.setItem("aToken", data.token);
          setAToken(data.token);
        }else{
            toast.error(data.message)
        }
      } else {
      }
    } catch (error) {}
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="min-h-[80vh] flex items-center bg-gray-50"
    >
      <div className="flex flex-col gap-4 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-2xl shadow-lg text-sm text-gray-600 bg-white">
        <p className="text-2xl font-semibold m-auto text-primary">
          <span>{state}</span> Login
        </p>

        <div className="w-full">
          <p className="mb-1 text-primary-dull">Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            required
            className="w-full p-2 border border-primary-dull rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="w-full">
          <p className="mb-1 text-primary-dull">Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            required
            className="w-full p-2 border border-primary-dull rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-2 rounded-lg bg-primary text-white font-medium hover:bg-secondary hover:text-black transition-colors"
        >
          Login
        </button>
        {state === "Admin" ? (
          <p>
            Doctor Login ?
            <span
              className="text-primary cursor-pointer"
              onClick={() => setState("Doctor")}
            >
              {" "}
              Click here
            </span>
          </p>
        ) : (
          <p>
            Admin Login ?{" "}
            <span
              className="text-primary cursor-pointer"
              onClick={() => setState("Admin")}
            >
              {" "}
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
