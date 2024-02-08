import React from "react";

import style from "./constructor-block.module.css";

const ConstructorBlock = ({ children }) => {

  return (
    <section className={style.wrapper}>
      {children}
    </section>
  );
};

export default ConstructorBlock;