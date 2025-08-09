import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import TitleTextHome from "../components/TitleTextHome";
import IconButton from "../components/IconButton";
import { FaSearch, FaUserMd, FaHeart, FaStar, FaCalendarAlt } from "react-icons/fa";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  const specialties = [
    { name: "General physician", icon: "🏥", count: 0 },
    { name: "Gynecologist", icon: "👩‍⚕️", count: 0 },
    { name: "Dermatologist", icon: "🧴", count: 0 },
    { name: "Pediatricians", icon: "👶", count: 0 },
    { name: "Neurologist", icon: "🧠", count: 0 },
    { name: "Gastroenterologist", icon: "🫁", count: 0 }
  ];

  const applyFilter = () => {
    setIsLoading(true);
    let filtered = doctors;

    // Filter by specialty
    if (speciality) {
      filtered = filtered.filter((doc) => doc.speciality === speciality);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (doc) =>
          doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          doc.speciality.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilterDoc(filtered);
    setIsLoading(false);
  };

  // Update specialty counts
  const updateSpecialtyCounts = () => {
    specialties.forEach(specialty => {
      specialty.count = doctors.filter(doc => doc.speciality === specialty.name).length;
    });
  };

  useEffect(() => {
    updateSpecialtyCounts();
    applyFilter();
  }, [doctors, speciality, searchTerm]);

  const handleSpecialtyClick = (specialtyName) => {
    if (speciality === specialtyName) {
      navigate("/doctors");
      window.scrollTo(0, 0);
    } else {
      navigate(`/doctors/${specialtyName}`);
      window.scrollTo(0, 0);
    }
  };

  const clearFilters = () => {
    navigate("/doctors");
    setSearchTerm("");
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="mb-8">
        <TitleTextHome size="lg" className="mb-4">
          {speciality ? `${speciality} Specialists` : "Our Medical Experts"}
        </TitleTextHome>
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          Browse through our carefully selected specialists and find the right doctor for your healthcare needs.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8 flex flex-col lg:flex-row gap-4">
        {/* Search Bar */}
        <div className="flex-1 relative">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search doctors by name or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
            />
          </div>
        </div>

        {/* Clear Filters Button */}
        {(speciality || searchTerm) && (
          <IconButton
            onClick={clearFilters}
            variant="outline"
            className="border-gray-300 text-gray-600 hover:bg-gray-50"
          >
            Clear Filters
          </IconButton>
        )}
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-8">
        {/* Specialty Filter Sidebar */}
        <div className="w-full lg:w-80">
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
            <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
              <FaUserMd className="w-5 h-5" />
              Medical Specialties
            </h3>
            
            <div className="space-y-3">
              {specialties.map((spec, index) => (
                <div
                  key={index}
                  onClick={() => handleSpecialtyClick(spec.name)}
                  className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer hover:shadow-md ${
                    speciality === spec.name
                      ? "bg-third text-white border-third shadow-lg transform scale-[1.02]"
                      : "border-gray-200 hover:border-primary hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{spec.icon}</span>
                    <span className="font-medium text-sm">{spec.name}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    speciality === spec.name 
                      ? "bg-white text-third" 
                      : "bg-gray-100 text-gray-600"
                  }`}>
                    {spec.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="flex-1">
          {/* Results Header */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-600">
              {isLoading ? "Loading..." : `Showing ${filterDoc.length} doctor${filterDoc.length !== 1 ? 's' : ''}`}
              {speciality && ` in ${speciality}`}
            </p>
          </div>

          {/* Loading State */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-6 animate-pulse">
                  <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                  <div className="bg-gray-200 h-4 rounded mb-2"></div>
                  <div className="bg-gray-200 h-3 rounded mb-2"></div>
                  <div className="bg-gray-200 h-3 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {/* No Results */}
              {filterDoc.length === 0 ? (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">👨‍⚕️</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">No doctors found</h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your search criteria or browse all specialties.
                  </p>
                  <IconButton onClick={clearFilters} variant="primary">
                    Browse All Doctors
                  </IconButton>
                </div>
              ) : (
                /* Doctors Cards */
                <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filterDoc.map((item, index) => (
                    <div
                      key={index}
                      className=" border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-xl hover:transform hover:translate-y-[-8px] transition-all duration-500 group"
                    >
                      {/* Doctor Image */}
                      <div className="bg-gradient-to-r from-primary to-third relative overflow-hidden">
                        <img 
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
                          src={item.image} 
                          alt={item.name}
                        />
                     
                      </div>

                      {/* Doctor Info */}
                      <div className="p-6">
                        {/* Availability Status */}
                        <div className="flex items-center gap-2 text-sm mb-3">
                          <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                          <span className="text-third font-medium">Available Today</span>
                        </div>

                        {/* Doctor Name */}
                        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors duration-300">
                          {item.name}
                        </h3>

                        {/* Specialty */}
                        <p className="text-gray-600 text-sm mb-3">{item.speciality}</p>

                        {/* Action Button */}
                        <IconButton
                          onClick={() => {
                            navigate(`/appointments/${item._id}`);
                            window.scrollTo(0, 0);
                          }}
                          icon={FaCalendarAlt}
                          variant="primary"
                          className="w-full justify-center"
                        >
                          Book Appointment
                        </IconButton>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;