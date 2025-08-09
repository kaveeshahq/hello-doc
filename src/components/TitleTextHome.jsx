import React from "react";

const TitleTextHome = ({ 
  children, 
  className = "", 
  size = "lg",
  textColor = "text-primary",
  underlinePosition = "center",
}) => {
  // Size variants
  const sizes = {
    sm: "text-2xl md:text-3xl",
    md: "text-3xl md:text-4xl",
    lg: "text-3xl md:text-4xl lg:text-5xl",
    xl: "text-4xl md:text-5xl lg:text-6xl"
  };
  
  // Underline positioning
  const positions = {
    center: "justify-center",
    left: "justify-start",
    right: "justify-end"
  };
  
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      {/* Title Text */}
      <h1 className={`${sizes[size]} ${textColor} font-semibold leading-tight text-center`}>
        {children}
      </h1>
      
      {/* Gradient Underline */}
      <div className={`flex ${positions[underlinePosition]} w-full`}>
        <div 
          className="h-1 w-24 rounded-full"
          style={{
            background: 'linear-gradient(90deg, #FCDE0E 0%, #FCDE0E 50%, #04B2F1 50%, #04B2F1 100%)'
          }}
        ></div>
      </div>
    </div>
  );
};

export default TitleTextHome;