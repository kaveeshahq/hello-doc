import React from "react";
import { FaPlay } from "react-icons/fa";

const IconButton = ({ 
  children, 
  onClick, 
  href, 
  icon: Icon = FaPlay, 
  iconPosition = "right", 
  className = "", 
  variant = "primary",
  size = "md",
  disabled = false,
  ...props 
}) => {
  // Base styles
  const baseStyles = "flex items-center gap-2 rounded-full  transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100";
  
  // Variant styles
  const variants = {
    primary: "bg-primary text-white  hover:bg-secondary hover:text-black",
    secondary: "bg-secondary text-primary hover:bg-primary hover:text-secondary focus:ring-secondary",
    outline: "border-2 border-white text-white hover:bg-white hover:text-primary focus:ring-white",
    dark: "bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-600"
  };
  
  // Size styles
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-8 py-3 text-sm",
    lg: "px-10 py-4 text-base"
  };
  
  // Icon sizes
  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-3 h-3",
    lg: "w-4 h-4"
  };
  
  // Combine all styles
  const buttonStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  // Icon component with proper sizing
  const IconComponent = Icon && (
    <Icon className={iconSizes[size]} />
  );
  
  // Button content based on icon position
  const buttonContent = (
    <>
      {iconPosition === "left" && IconComponent}
      {children}
      {iconPosition === "right" && IconComponent}
    </>
  );
  
  // If href is provided, render as anchor tag
  if (href) {
    return (
      <a
        href={href}
        className={buttonStyles}
        {...props}
      >
        {buttonContent}
      </a>
    );
  }
  
  // Otherwise render as button
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonStyles}
      {...props}
    >
      {buttonContent}
    </button>
  );
};

export default IconButton;