import React from "react";

const Footer = () => {
  return(
    <footer className="footer flex_center main_width">
      <span className="text text_type_main-small text_color_inactive noselect">
        &copy;&nbsp;{new Date().getFullYear()}г.&nbsp;&nbsp;АО&nbsp;&laquo;Европа&nbsp;уно&nbsp;трейд&raquo;
      </span>
    </footer>
  )
};

export default Footer;