import React from "react";

import style from "./footer.module.css";

const Footer = () => {

  return(
    <footer className={style.footer}>
      <span className={style.copi}>
        &copy;&nbsp;2024&nbsp;г. АО&nbsp;&laquo;Европа&nbsp;уно&nbsp;трейд&raquo;
      </span>
    </footer>
  )
};

export default Footer;