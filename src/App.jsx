import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Prints from './pages/prints';
import Balloons from './pages/balloons';
import Other from './pages/other';
import Order from './pages/order';
import Options from './pages/options';

import './App.css';

const App = () => {
  const [prevUrl, setPrevUrl] = useState('');
  
  const updateUrl = (newUrl) => {
    setPrevUrl(newUrl);
  };
  
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Prints updateUrl={updateUrl} />} />
        <Route path="/balloons" element={<Balloons updateUrl={updateUrl} />} />
        <Route path="/other" element={<Other updateUrl={updateUrl} />} />
        <Route path="/order" element={<Order updateUrl={updateUrl} />} />
        <Route path="/options" element={<Options prevUrl={prevUrl} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
