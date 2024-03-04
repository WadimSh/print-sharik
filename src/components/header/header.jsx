import React from "react";

import Logo from "../../ui/logo/logo";
import Container from "../../ui/container/container";

const Header = () => {
    
  return(
    <Container
      tag='header'
      className="header flex_space-between main_width">
      <Logo 
        image='/images/logo.png'
        link='https://new.sharik.ru/'
        className='logo'      
      />
      
    </Container>
  )
};

export default Header;