import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import {
  FaLocationArrow,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="md:mx-10 bg-primary rounded-lg">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm px-6 sm:px-10 md:px-14 lg:px-12 pt-16">
        {/* Left Section */}
        <div>
          <div className="mb-8">
            <Link
              to="/"
              className="text-white text-4xl hover:text-secondary font-bold transition-colors duration-300"
            >
              Hello.Doc
            </Link>
            {/* Underline for HelloDoc */}
            <div className="mt-3">
              <div
                className="h-1 w-20 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #FCDE0E 0%, #FCDE0E 50%, #04B2F1 50%, #04B2F1 100%)",
                }}
              ></div>
            </div>
          </div>
          <p className="w-full md:w-2/3 text-gray-200 leading-6 text-base">
            Finding the right healthcare professional is the first step to
            better health. We connect you with certified, experienced doctors
            you can trust — ensuring you receive the care you need, when you
            need it, with confidence.
          </p>
        </div>

        {/* Center Section */}
        <div>
          <div className="mb-6">
            <p className="text-xl font-bold mb-3 text-white">Company</p>
            {/* Underline for Company */}
            <div
              className="h-1 w-16 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #FCDE0E 0%, #FCDE0E 50%, #04B2F1 50%, #04B2F1 100%)",
              }}
            ></div>
          </div>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                to="/"
                className="text-gray-200 hover:text-secondary transition-colors duration-300 hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-200 hover:text-secondary transition-colors duration-300 hover:underline"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-200 hover:text-secondary transition-colors duration-300 hover:underline"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="text-gray-200 hover:text-secondary transition-colors duration-300 hover:underline"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <div className="mb-6">
            <p className="text-xl font-bold mb-3 text-white">Get in Touch</p>
            {/* Underline for Get in Touch */}
            <div
              className="h-1 w-16 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #FCDE0E 0%, #FCDE0E 50%, #04B2F1 50%, #04B2F1 100%)",
              }}
            ></div>
          </div>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="tel:+94112234765"
                className="text-gray-200 hover:text-secondary transition-colors duration-300 hover:underline flex items-center gap-2"
              >
                <span>
                  <FaPhone />
                </span>{" "}
                +94 11 2 234 765
              </a>
            </li>
            <li>
              <a
                href="mailto:info@hellodoc.com"
                className="text-gray-200 hover:text-secondary transition-colors duration-300 hover:underline flex items-center gap-2"
              >
                <span>
                  <FaMailBulk />
                </span>{" "}
                info@hellodoc.com
              </a>
            </li>
            <li className="text-gray-200 flex items-center gap-2 mt-2">
              <span className="bg-white">
                <FaLocationArrow />
              </span>{" "}
              123 Health Street, Medical District, Colombo
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="px-6 sm:px-10 md:px-14 lg:px-12 pb-8">
        <hr className="border-gray-400 mb-6" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-300 text-center sm:text-left">
            Copyright 2024 @ HelloDoc - All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/terms"
              className="text-sm text-gray-300 hover:text-secondary transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              to="/privacy"
              className="text-sm text-gray-300 hover:text-secondary transition-colors duration-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
