import React from "react";

import Logo from "../../../ui/logo/logo";

const Header = () => {
  return (
    <header className='header flex_row main_width'>
      <Logo 
        image='/images/logo.png' 
        link='https://new.sharik.ru' 
        className='logo'
      />
    </header>
  )
};

export default Header