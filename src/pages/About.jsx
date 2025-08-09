import React from 'react'
import TitleTextHome from '../components/TitleTextHome'
import { assets } from '../assets/assets'
import { 
  FaClock, 
  FaUserMd, 
  FaHeart, 
  FaMobile, 
  FaStar,
  FaShieldAlt,
  FaUsers,
  FaAward,
  FaCheckCircle 
} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import IconButton from '../components/IconButton'

const About = () => {
  const features = [
    {
      icon: FaClock,
      title: "Efficiency",
      description: "Streamlined appointment scheduling that fits into your busy lifestyle with instant confirmations.",
      color: "bg-primary",
      hoverColor: "hover:bg-primary/90"
    },
    {
      icon: FaUserMd,
      title: "Convenience", 
      description: "Access to a network of trusted healthcare professionals in your area, available 24/7.",
      color: "bg-third",
      hoverColor: "hover:bg-third/90"
    },
    {
      icon: FaHeart,
      title: "Personalization",
      description: "Tailored recommendations and smart reminders to help you stay on top of your health.",
      color: "bg-secondary",
      hoverColor: "hover:bg-secondary/90",
      textColor: "text-black"
    },
    {
      icon: FaMobile,
      title: "Accessibility",
      description: "Healthcare services available anytime, anywhere, right at your fingertips with mobile-first design.",
      color: "bg-primary",
      hoverColor: "hover:bg-primary/90"
    }
  ]

  const {navigate} = useNavigate()

  const stats = [
    { number: "10,000+", label: "Happy Patients", icon: FaUsers },
    { number: "500+", label: "Qualified Doctors", icon: FaUserMd },
    { number: "4.8/5", label: "Average Rating", icon: FaStar },
    { number: "24/7", label: "Support Available", icon: FaShieldAlt }
  ]

  const benefits = [
    "Instant appointment confirmations",
    "Secure medical records management", 
    "Multi-language support",
    "Insurance verification",
    "Telemedicine consultations",
    "Prescription management"
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <TitleTextHome>About HelloDoc</TitleTextHome>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Your trusted partner in modern healthcare, connecting patients with quality medical care through innovative technology.
        </p>
      </div>

      {/* Main About Section */}
      <div className="mb-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Enhanced Image Section */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative overflow-hidden  shadow-2xl group">
              <img 
                className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105" 
                src={assets.about_image} 
                alt="Healthcare professionals at HelloDoc"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Floating Stats Cards */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg hidden sm:block">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">98%</p>
                  <p className="text-xs text-gray-600">Satisfaction Rate</p>
                </div>
              </div>
              
              <div className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-lg hidden lg:block">
                <div className="text-center">
                  <p className="text-2xl font-bold text-third">24/7</p>
                  <p className="text-xs text-gray-600">Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Text Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-base sm:text-lg">
                <span className="text-xl sm:text-2xl font-bold text-primary block mb-2">Welcome to HelloDoc,</span>
                your reliable companion in making healthcare simple, accessible, and stress-free. At HelloDoc, we understand how overwhelming it can be to find the right doctor, book appointments, and keep track of your medical history.
              </p>
              
              <p className="text-base">
                Our platform is designed to put all your healthcare needs in one place, so you can focus on what matters most — your well-being. We've revolutionized the way patients connect with healthcare providers through cutting-edge technology and user-centric design.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <FaAward className="text-primary" />
                  Our Mission
                </h3>
                <p className="text-gray-700">
                  To bridge the gap between patients and quality healthcare by providing an intuitive, secure, and comprehensive digital platform that makes medical care accessible to everyone, everywhere.
                </p>
              </div>
  
            </div>

            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-sm text-gray-700">
                  <FaCheckCircle className="text-primary flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-primary/5 to-third/5 rounded-2xl p-6 sm:p-8 mb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3">
                <div className="bg-white p-3 rounded-full shadow-lg">
                  <stat.icon className="text-2xl text-primary" />
                </div>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">{stat.number}</p>
              <p className="text-sm sm:text-base text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Vision Section */}
      {/* <div className="text-center mb-16 rounded-2xl bg-primary  p-6 sm:p-8 shadow-lg border">
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center justify-center gap-3">
            <FaHeart className="text-primary" />
            Our Vision
          </h2>
          <p className="text-base sm:text-lg text-white leading-relaxed">
            Our vision at HelloDoc is to create a world where healthcare is universally accessible, 
            personalized, and efficient. We strive to connect patients and healthcare providers seamlessly, 
            making quality care available to everyone, anytime, anywhere. By combining trusted medical 
            expertise with innovative technology, HelloDoc aims to transform the healthcare experience 
            and bring peace of mind to every patient on their wellness journey.
          </p>
        </div>

        
      </div> */}

      {/* Enhanced Why Choose Us Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <TitleTextHome size="sm">Why Choose HelloDoc</TitleTextHome>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover what makes HelloDoc the preferred choice for thousands of patients and healthcare providers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl ${feature.color} ${feature.hoverColor} text-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-16 -translate-y-16">
                  <div className="w-full h-full bg-white rounded-full"></div>
                </div>
              </div>
              
              <div className="relative p-6 sm:p-8 h-full flex flex-col">
                {/* Icon */}
                <div className="mb-4">
                  <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                    <feature.icon className="text-xl text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-grow">
                  <h3 className={`text-lg sm:text-xl font-bold mb-3 ${feature.textColor || 'text-white'}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm sm:text-base leading-relaxed ${feature.textColor || 'text-white/90'}`}>
                    {feature.description}
                  </p>
                </div>
                
                {/* Hover Arrow */}
                {/* <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`w-8 h-8 rounded-full ${feature.textColor ? 'bg-black/10' : 'bg-white/20'} flex items-center justify-center`}>
                    <span className={`text-sm ${feature.textColor || 'text-white'}`}>→</span>
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      {/* <div className="text-center bg-gradient-to-r from-primary to-third rounded-2xl p-6 sm:p-8 text-white">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Experience Better Healthcare?</h2>
        <p className="text-base sm:text-lg mb-6 opacity-90">
          Join thousands of satisfied patients who have made HelloDoc their trusted healthcare partner.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <IconButton variant='outline' className=" text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
            Find a Doctor
          </IconButton>
          <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300">
            Learn More
          </button>
        </div>
      </div> */}
    </div>
  )
}

export default About