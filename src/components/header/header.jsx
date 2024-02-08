import React, { useContext } from "react";
import { NavLink } from 'react-router-dom';

import Logo from "../../ui/logo/logo";
import { Layout } from "../../ui/icons/layout";
import { ConfigContext } from '../../utils/contexts';
import style from "./header.module.css";

const Header = () => {
  const config = useContext(ConfigContext);
      
  return(
    <header className={style.wrapper}>
      <nav className={style.naviget}>
        <Logo />
        <NavLink to="/options" className={style.menu}>
          <Layout />
          <span>Мои варианты</span>
          {config.step4.status === 'order' && <span className={style.point}></span>}
        </NavLink>
      </nav>
    </header>
  )
};

export default Header;