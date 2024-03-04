import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../ui/logo/logo";
import { Layout } from "../../ui/icons/layout";

const Header = () => {
  const [isLogic, setIsLogic] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('options')) {
      setIsLogic(!isLogic);
    }
  }, [isLogic]);
  
  return(
    <header className="header flex_space-between main_width">
      <Logo 
        image='/images/logo.png'
        link='https://new.sharik.ru/'
        className='logo'      
      />
      <NavLink 
        to="/options" 
        className={({isActive}) => `text text_type_link-menu text_type_animation ${isActive ? "text_color_primary" : ""}`.trim()}
      >
        <Layout />
        <span>Мои варианты</span>
        {isLogic && <div></div>}
      </NavLink>
    </header>
  )
};

export default Header;