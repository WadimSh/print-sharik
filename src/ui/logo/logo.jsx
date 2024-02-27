import React from "react";

import logo from "../../assets/images/logo.png";

const Logo = () => {
  const logoStyle = {
    width: '96px',
    height: 'auto',
    cursor: 'pointer',
    margin: '10px'
  };

  const handleLogoClick = () => {
    window.open('https://new.sharik.ru/', '_blank');
  };

  return (
    <img 
      src={logo} 
      alt="Company logo" 
      style={logoStyle} 
      onClick={handleLogoClick} 
    />
  );
};

export default Logo;