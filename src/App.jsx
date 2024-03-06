import React from "react";


import Header from "./components/global/header/header";
import Footer from "./components/global/footer/footer";
import PrintSelector from "./pages/print-selector/print-selector";

import { config, ConfigContext } from "./context/config-context";

const App = () => {
  
  return (
    <ConfigContext.Provider value={config}>
      <Header />
      <PrintSelector />
      <Footer />
    </ConfigContext.Provider>
  );
}

export default App;
