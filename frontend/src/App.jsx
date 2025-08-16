import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";
import MyAppoinments from "./pages/MyAppoinments";
import Appoinment from "./pages/Appoinment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Careers from "./pages/Careers";
import FAQ from "./pages/FAQ";
import { ToastContainer } from 'react-toastify';
import HelloDocLoader from "./components/HelloDocLoader";
import MetaTags from "./components/MetaTags";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const getMetaTagsForRoute = () => {
    const baseUrl = window.location.origin;
    
    switch (location.pathname) {
      case '/':
        return {
          title: "Hello.doc - Book Doctor Appointments Online",
          description: "Find and book appointments with verified doctors near you. Get online consultations, health checkups, and expert medical advice.",
          keywords: "doctor appointment, online consultation, healthcare, medical services, book doctor, health checkup",
          url: `${baseUrl}/`
        };
      case '/doctors':
        return {
          title: "Find Doctors - Hello.doc",
          description: "Browse through our network of verified and experienced doctors. Find specialists in your area and book appointments instantly.",
          keywords: "find doctors, medical specialists, healthcare professionals, doctor directory",
          url: `${baseUrl}/doctors`
        };
      case '/about':
        return {
          title: "About Us - Hello.doc",
          description: "Learn about Hello.doc's mission to make healthcare accessible. Meet our team and discover how we're revolutionizing medical services.",
          keywords: "about hello.doc, healthcare mission, medical team, company information",
          url: `${baseUrl}/about`
        };
      case '/contact':
        return {
          title: "Contact Us - Hello.doc",
          description: "Get in touch with Hello.doc for support, inquiries, or feedback. We're here to help with all your healthcare needs.",
          keywords: "contact hello.doc, customer support, healthcare help, medical assistance",
          url: `${baseUrl}/contact`
        };
      case '/login':
        return {
          title: "Login - Hello.doc",
          description: "Access your Hello.doc account to manage appointments, view medical records, and connect with healthcare providers.",
          keywords: "login, patient portal, medical records, appointment management",
          url: `${baseUrl}/login`
        };
      case '/careers':
        return {
          title: "Careers - Hello.doc",
          description: "Join the Hello.doc team and help us transform healthcare. Explore exciting career opportunities in the medical technology field.",
          keywords: "healthcare jobs, medical technology careers, join hello.doc, healthcare employment",
          url: `${baseUrl}/careers`
        };
      case '/faqs':
        return {
          title: "FAQs - Hello.doc",
          description: "Find answers to frequently asked questions about Hello.doc services, appointments, consultations, and more.",
          keywords: "frequently asked questions, hello.doc help, medical services faq, healthcare support",
          url: `${baseUrl}/faqs`
        };
      default:
        if (location.pathname.startsWith('/doctors/')) {
          const speciality = location.pathname.split('/')[2];
          return {
            title: `${speciality.charAt(0).toUpperCase() + speciality.slice(1)} Doctors - Hello.doc`,
            description: `Find and book appointments with verified ${speciality} specialists. Expert medical care and consultations available.`,
            keywords: `${speciality} doctors, ${speciality} specialists, medical consultation, healthcare`,
            url: `${baseUrl}${location.pathname}`
          };
        }
        
        return {
          title: "Hello.doc - Your Trusted Healthcare Partner",
          description: "Book appointments with verified doctors, get online consultations, and manage your healthcare seamlessly with Hello.doc.",
          keywords: "doctor appointment, online consultation, healthcare, medical services",
          url: `${baseUrl}${location.pathname}`
        };
    }
  };

  if (isLoading) {
    return <HelloDocLoader />;
  }

  return (
    <div className="mx-4 sm:mx-[10%]">
      <MetaTags {...getMetaTagsForRoute()} />
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/faqs" element={<FAQ/>}/>  
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointments" element={<MyAppoinments />} />
        <Route path="/appointments/:docId" element={<Appoinment />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;