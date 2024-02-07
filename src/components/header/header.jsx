import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

import Logo from "../../ui/logo/logo";
import { Layout } from "../../ui/icons/layout";

import style from "./header.module.css";

const Header = () => {
  const [isActive] = useState(true);
    
  return(
    <header className={style.wrapper}>
      <nav className={style.naviget}>
        <Logo />
        <NavLink to="/options" className={style.menu}>
          <Layout />
          <span>Мои варианты</span>
          {isActive && <span className={style.point}></span>}
        </NavLink>
      </nav>
    </header>
  )
};

export default Header;