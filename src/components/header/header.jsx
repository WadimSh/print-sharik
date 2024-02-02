import React from "react";

import style from "./header.module.css";
import logo from "../../assets/images/tm04.png";

const Header = () => {

  return(
    <header className={style.header}>
      <nav className={style.wrapper}>
        <a href="https://new.sharik.ru/" target="_blank">
          <img src={logo} className={style.logo} />
        </a>
      </nav>
    </header>
  )
};

export default Header;