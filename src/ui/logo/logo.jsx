import React from "react";

const Logo = ({ image, link, className }) => {
  const src = window.location.origin + image;

  const handleLogoClick = () => {
    window.open(link, '_blank');
  };

  return (
    <img 
      src={src} 
      alt="company logo"
      className={className}
      onClick={handleLogoClick} 
    />
  );
};

export default Logo;