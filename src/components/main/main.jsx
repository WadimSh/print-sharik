import React from "react";

import style from "./main.module.css";

const Main = ({ children }) => {

  return(
    <main className={style.main}>
      {children}
    </main>
  )
};

export default Main;