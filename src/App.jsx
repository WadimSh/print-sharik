import React from "react";


import Header from "./components/global/header/header";
import Footer from "./components/global/footer/footer";

import SearchForm from "./components/search-form";

import { config, ConfigContext } from "./context/config-context";

const App = () => {

  return (
    <ConfigContext.Provider value={config}>
      <Header />
      
      <SearchForm />

      <Footer />
    </ConfigContext.Provider>
  );
}

export default App;
