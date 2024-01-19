import { FC, PropsWithChildren } from "react";

const Main:FC<PropsWithChildren> = ({ children }) => {

  return(
    <main style={{ display: "flex" }}>
      {children}
    </main>
  )
};

export default Main;