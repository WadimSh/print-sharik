import React from "react";

import logo from "../../assets/images/logo.png";
import style from "./logo.module.css";

const Logo = () => {

  return(
    <a href="https://new.sharik.ru/" target="_blank" rel="noreferrer" className={style.link}>
      <img src={logo} alt="logo" className={style.image} />
    </a>
  )
};

export default Logo;