import React from "react";
import { Routes } from "react-router-dom";

import Header from "./components/global/header/header";
import Footer from "./components/global/footer/footer";

import { config, ConfigContext } from "./context/context";

const App = () => {

  return (
    <ConfigContext.Provider value={config}>
      <Header />
      <Routes>

      </Routes>
      <Footer />
    </ConfigContext.Provider>
  );
}

export default App;
