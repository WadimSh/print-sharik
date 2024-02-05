import React from 'react';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import MainPage from './pages/main-page';

import './App.css';

const App = () => {
  
  return (
    <div className="page">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
