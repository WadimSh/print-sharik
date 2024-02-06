import React from "react";
import { NavLink } from 'react-router-dom';

import Logo from "../../ui/logo/logo";

import style from "./header.module.css";

const Header = () => {

  return(
    <header className={style.wrapper}>
      <nav className={style.naviget}>
        <Logo />
        <NavLink>

        </NavLink>
      </nav>
    </header>
  )
};

export default Header;