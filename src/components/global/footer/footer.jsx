import React from "react";

const Footer = () => {
  return (
    <footer className='footer flex_center main_width'>
      <span className='text text_type_main-small text_color_inactive'>
        &copy; {new Date().getFullYear()}. АО"Европа уно трейд"
      </span>
    </footer>
  )
};

export default Footer;