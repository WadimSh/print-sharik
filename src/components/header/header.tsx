import { FC } from "react";

import style from "./header.module.css";
import logo from "../../assets/images/tm04.png";

const Header:FC = () => {

  return(
    <header className={style.header}>
      <a href="https://new.sharik.ru/" target="_blank">
        <img src={logo} className={style.logo} />
      </a>
    </header>
  )
};

export default Header;