import React from "react";

const Main = ({ children }) => {
  return(
    <main className="main flex_column main_width">
      {children}
    </main>
  )
};

export default Main;