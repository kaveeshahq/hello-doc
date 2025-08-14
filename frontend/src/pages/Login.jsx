import React, { useContext, useEffect, useState } from "react";
import IconButton from "../components/IconButton";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AppContext } from "../context/AppContext";
import axios from 'axios'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { backendUrl, token, setToken } = useContext(AppContext);

  const [state, setState] = useState("Sign Up");
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [rememberMe, setRememberMe] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (state === "Sign Up" && name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!email.includes("@") || !email.includes(".")) {
      newErrors.email = "Please enter a valid email address";
    }

    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const onSubmitHandler = async (event) => {
  event.preventDefault();

  if (!validateForm()) return;

  setIsLoading(true); // ✅ Show spinner immediately

  try {
    if (state === "Sign Up") {
      const { data } = await axios.post(`${backendUrl}/api/user/register`, {
        name,
        password,
        email,
      });

      if (data.success) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
      } else {
        toast.error(data.message);
      }
    } else {
      const { data } = await axios.post(`${backendUrl}/api/user/login`, {
        password,
        email,
      });

      if (data.success) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
      } else {
        toast.error(data.message);
      }
    }
  } catch (error) {
    toast.error(error.message);
  } finally {
    setIsLoading(false); // ✅ Stop spinner after request finishes
  }
};


  const handleStateChange = (newState) => {
    setState(newState);
    setErrors({});
    setPassword("");
    if (newState === "Login") {
      setName("");
    }
  };

  useEffect(()=>{
    if (token) {
      navigate('/')
    }
  },[token])

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-third/5 flex items-center justify-center px-4 py-8">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-third/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/10 rounded-full blur-xl"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Main Form Container */}
        <form
          onSubmit={onSubmitHandler}
          className="bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header Section */}
          <div className="bg-gradient-to-r from-primary to-third p-6 text-white text-center">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
              {state === "Sign Up" ? "Join HelloDoc" : "Welcome Back"}
            </h1>
            <p className="opacity-90 text-sm sm:text-base">
              {state === "Sign Up"
                ? "Create your account to start booking appointments"
                : "Sign in to access your healthcare dashboard"}
            </p>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Toggle Buttons */}
            <div className="flex bg-gray-100 rounded-xl p-1">
              <button
                type="button"
                onClick={() => handleStateChange("Login")}
                className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                  state === "Login"
                    ? "bg-white text-primary shadow-sm"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => handleStateChange("Sign Up")}
                className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                  state === "Sign Up"
                    ? "bg-white text-primary shadow-sm"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Full Name Field */}
            {state === "Sign Up" && (
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-primary">
                  Full Name{" "}
                  <span className="text-red-600 font-semibold"> *</span>
                </label>
                <input
                  className={`w-full px-4 py-3 border border-primary rounded-xl transition-all duration-200 focus:ring-2 focus:ring-primary/20 focus:border-primary ${
                    errors.name
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300 focus:bg-white"
                  }`}
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Enter your full name"
                  required
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-primary">
                Email Address{" "}
                <span className="text-red-600 font-semibold"> *</span>
              </label>
              <input
                className={`w-full px-4 py-3 border rounded-xl transition-all duration-200 focus:ring-2 focus:ring-primary/20 focus:border-primary ${
                  errors.email
                    ? "border-red-300 bg-red-50"
                    : "border-gray-300 focus:bg-white"
                }`}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Enter your email address"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-primary">
                Password <span className="text-red-600 font-semibold"> *</span>
              </label>
              <div className="relative">
                <input
                  className={`w-full px-4 py-3 pr-12 border rounded-xl transition-all duration-200 focus:ring-2 focus:ring-primary/20 focus:border-primary ${
                    errors.password
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300 focus:bg-white"
                  }`}
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder={
                    state === "Sign Up"
                      ? "Create a strong password"
                      : "Enter your password"
                  }
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
              {state === "Sign Up" && (
                <p className="text-xs text-gray-500 mt-1">
                  Password should be at least 6 characters long
                </p>
              )}
            </div>

            {/* Remember Me / Forgot Password */}
            {state === "Login" && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2"
                  />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <button
                  type="button"
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            {/* Submit Button */}
            <div className="justify-center">
              <IconButton type='submit' disabled={isLoading} variant="primary">
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    {state === "Sign Up"
                      ? "Creating Account..."
                      : "Signing In..."}
                  </div>
                ) : state === "Sign Up" ? (
                  "Create Account"
                ) : (
                  "Sign In"
                )}
              </IconButton>
            </div>

            {/* Toggle Between Login/Signup */}
            <div className="text-center pt-4 border-t border-gray-100">
              {state === "Sign Up" ? (
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => handleStateChange("Login")}
                    className="text-primary font-semibold cursor-pointer hover:text-primary/80 transition-colors duration-200"
                  >
                    Sign in here
                  </button>
                </p>
              ) : (
                <p className="text-gray-600">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => handleStateChange("Sign Up")}
                    className="text-primary font-semibold cursor-pointer hover:text-primary/80 transition-colors duration-200"
                  >
                    Create one here
                  </button>
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
