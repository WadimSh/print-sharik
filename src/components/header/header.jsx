import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../ui/logo/logo";
import { Layout } from "../../ui/icons/layout";

const Header = () => {
  return(
    <header className="header">
      <Logo />
      <NavLink to="/" className={({isActive}) => `text text_type_main-default menu_link ${isActive ? "menu_link_active" : ""}`}>
        <Layout />
        <span>Мои варианты</span>
        <span className="point"></span>
      </NavLink>
    </header>
  )
};

export default Header;