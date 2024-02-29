import React from "react";

import logo from "../../assets/images/logo.png";

const Logo = ({ image, link, className }) => {
  const handleLogoClick = () => {
    window.open(link, '_blank');
  };

  return (
    <img 
      src={image || logo} 
      alt="company logo"
      className={className}
      onClick={handleLogoClick} 
    />
  );
};

export default Logo;