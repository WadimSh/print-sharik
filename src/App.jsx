import React from 'react';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import MainPage from './pages/main-page';

const App = () => {
  
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", width: "100%" }}>
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
