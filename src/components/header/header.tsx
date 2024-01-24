import { FC } from "react";

import style from "./header.module.css";
import logo from "./tm04.png";

const Header:FC = () => {

  return(
    <header className={style.header}>
      <a href="#">
        <img src={logo} className={style.logo} />
      </a>
    </header>
  )
};

export default Header;