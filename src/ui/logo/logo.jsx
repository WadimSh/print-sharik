import React from "react";

import logo from "../../assets/images/logo.png";
import "./logo.css";

const Logo = () => {

  return(
    <a href="https://new.sharik.ru/" target="_blank" rel="noreferrer" className="logo">
      <img src={logo} alt="logo" className="logo__img" />
    </a>
  )
};

export default Logo;