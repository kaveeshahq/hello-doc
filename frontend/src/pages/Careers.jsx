import React from "react";
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaHeart, FaArrowRight } from "react-icons/fa";
import IconButton from "../components/IconButton";
import TitleTextHome from "../components/TitleTextHome";
import { useNavigate } from "react-router-dom";

const Careers = () => {
  const navigate = useNavigate();

  const benefits = [
    "Work with passionate healthcare innovators",
    "Flexible remote & on-site options",
    "Competitive salary & benefits",
    "Continuous learning & growth opportunities",
  ];

  const jobs = [
    {
      id: 1,
      title: "Pharmacist",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
    },
    {
      id: 2,
      title: "Social Worker",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
    },
    {
      id: 3,
      title: "Hospital Administrator",
      location: "Colombo, Sri Lanka",
      type: "Contract",
    },
    {
      id: 4,
      title: "Customer Support Executive",
      location: "Remote",
      type: "Part-time",
    },
        {
      id: 5,
      title: "Registered Nurse",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Hero Section */}
        <TitleTextHome>Join Our Team</TitleTextHome>
        <p className="mt-4 max-w-3xl mx-auto opacity-90">
          Be part of HelloDoc's mission to revolutionize healthcare delivery. We
          believe in innovation, compassion, and excellence in everything we do.
        </p>
    

      {/* Why Work With Us */}
      <div className="mb-12 mt-6">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">
          Why Work With Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-primary to-third p-6 rounded-xl text-white shadow-lg"
            >
              <FaHeart className="text-white/80 mb-3 text-lg" />
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Open Positions */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">
          Open Positions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-primary rounded-xl p-6 shadow-lg flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {job.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <FaMapMarkerAlt className="text-primary" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FaClock className="text-primary" />
                  <span>{job.type}</span>
                </div>
              </div>
              <div className="mt-4 ">
                <IconButton
                  variant="primary"
                  icon={FaArrowRight}
                  onClick={() => navigate(`/apply/${job.id}`)}
                >
                  Apply
                </IconButton>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-primary to-third rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">
          Can't find the <span className="text-secondary">right role?</span> 
        </h2>
        <p className="mb-6 opacity-90">
          We're always looking for talented people. Reach out and let's explore
          possibilities together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <IconButton
          variant="secondary"
          icon={FaBriefcase}
          onClick={() => navigate("/apply/general")}
        >
          Send General Application
        </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Careers;
