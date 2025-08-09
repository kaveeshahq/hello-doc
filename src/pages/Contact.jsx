import React, { useState } from "react";
import TitleTextHome from "../components/TitleTextHome";
import { assets } from "../assets/assets";
import IconButton from "../components/IconButton";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaUser,
  FaPaperPlane,
  FaBriefcase,
  FaQuestionCircle,
  FaHeadset,
  FaHeart,
  FaStar,
  FaCheckCircle,
  FaQuestion,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiry_type: "general",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        inquiry_type: "general",
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Visit Our Office",
      details: ["No 109/C, Galle Road", "Colombo-04, Sri Lanka"],
      color: "text-primary",
    },
    {
      icon: FaPhone,
      title: "Call Us",
      details: ["+94 112 654 654", "+94 777 123 456"],
      color: "text-primary",
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      details: ["info@hellodoc.com", "support@hellodoc.com"],
      color: "text-primary",
    },
    {
      icon: FaClock,
      title: "Working Hours",
      details: [
        "Mon - Fri: 8:00 AM - 10:00 PM",
        "Sat - Sun: 9:00 AM - 6:00 PM",
      ],
      color: "text-primary",
    },
  ];

  const inquiryTypes = [
    { value: "general", label: "General Inquiry", icon: FaQuestionCircle },
    { value: "appointment", label: "Appointment Help", icon: FaHeadset },
    { value: "technical", label: "Technical Support", icon: FaHeadset },
    { value: "feedback", label: "Feedback", icon: FaStar },
    { value: "partnership", label: "Partnership", icon: FaBriefcase },
  ];

  const whyChooseUs = [
    "24/7 customer support",
    "Quick response time",
    "Multilingual assistance",
    "Dedicated account managers",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 ">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <TitleTextHome>Get In Touch</TitleTextHome>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Have questions? We're here to help. Reach out to our friendly team and
          we'll get back to you as soon as possible.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-12 mb-16">
        {/* Enhanced Image and Contact Info Section */}
        <div className="lg:w-1/2">
          {/* Image with Overlay */}
          <div className="relative mb-8">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              <img
                className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                src={assets.contact_image}
                alt="HelloDoc Contact Center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>

              {/* Floating Contact Badge */}
              <div className="absolute bottom-6 left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-primary text-white p-2 rounded-lg">
                    <FaHeadset className="text-lg" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">24/7 Support</p>
                    <p className="text-sm text-gray-600">Always here to help</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-primary to-third rounded-xl p-6 shadow-lg border border-primary hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`${info.color} bg-gray-50 p-3 rounded-lg`}>
                    <info.icon className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-2">
                      {info.title}
                    </h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-white font-semibold text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Contact Form */}
        <div className="lg:w-1/2">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-primary">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-primary mb-2">
                Send us a Message
              </h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-8">
                <div className="bg-gray-300 text-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <FaCheckCircle className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600 mb-4">
                  Thank you for contacting us. We'll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inquiry Type Selection */}
                <div>
                  <label className="block text-sm font-medium text-primary mb-3">
                    What can we help you with?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {inquiryTypes.slice(0, 4).map((type) => (
                      <label
                        key={type.value}
                        className="relative cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="inquiry_type"
                          value={type.value}
                          checked={formData.inquiry_type === type.value}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div
                          className={`flex items-center gap-3 p-3 rounded-lg border-2 transition-all duration-200 ${
                            formData.inquiry_type === type.value
                              ? "border-primary bg-primary/5"
                              : "border-gray-200 hover:border-primary/50"
                          }`}
                        >
                          <type.icon
                            className={`text-lg ${
                              formData.inquiry_type === type.value
                                ? "text-primary"
                                : "text-gray-400"
                            }`}
                          />
                          <span
                            className={`text-sm font-medium ${
                              formData.inquiry_type === type.value
                                ? "text-primary"
                                : "text-gray-600"
                            }`}
                          >
                            {type.label}
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Name and Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Full Name{" "}
                      <span className="text-red-600 font-semibold">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Email Address{" "}
                      <span className="text-red-600 font-semibold">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>

                {/* Phone and Subject Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Subject{" "}
                      <span className="text-red-600 font-semibold">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Message{" "}
                    <span className="text-red-600 font-semibold">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <IconButton
                    variant="primary"
                    disabled={isSubmitting}
                    icon={isSubmitting ? null : FaPaperPlane}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </IconButton>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced Careers Section */}
      <div className="bg-gradient-to-r from-primary to-third rounded-2xl p-6 sm:p-8 text-white mb-12">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-2/3">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-3">
              <FaBriefcase className="text-white" />
              Join Our Team at <span className="text-secondary">HelloDoc</span>
            </h2>
            <p className="text-lg mb-4 opacity-90">
              Be part of a revolutionary healthcare platform that's changing
              lives every day. We're looking for passionate individuals who want
              to make a difference.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {whyChooseUs.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <FaHeart className="text-white/80 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/3 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-4">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm opacity-90">Open Positions</p>
            </div>
            <IconButton
              className=" px-8 py-3 font-semibold"
              icon={FaBriefcase}
              variant="secondary"
              onClick={() => {
                navigate("/careers");
                scrollTo(0, 0);
              }}
            >
              Explore Careers
            </IconButton>
          </div>
        </div>
      </div>

      {/* FAQ Quick Links */}
      <div className="text-center bg-gradient-to-r from-primary to-third rounded-2xl p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">
          Need Quick <span className="text-secondary">Answers?</span>{" "}
        </h2>
        <p className="text-white mb-6">
          Check out our frequently asked questions or browse our help center for
          instant solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <IconButton
            className=" px-8 py-3 font-semibold"
            icon={FaQuestionCircle}
            variant="secondary"
            onClick={() => {
              navigate("/faqs");
              scrollTo(0, 0);
            }}
          >
            View FAQs
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Contact;
