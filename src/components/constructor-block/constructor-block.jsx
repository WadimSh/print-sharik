import React from "react";

import DemoBalloon from "../demo-balloon/demo-balloon";
import style from "./constructor-block.module.css";

const ConstructorBlock = ({ children  }) => {

  return (
    <section className={style.wrapper}>
      {children}
      <DemoBalloon />
    </section>
  );
};

export default ConstructorBlock;