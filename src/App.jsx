import React from 'react';
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
  
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Prints />} />
        <Route path="/balloons" element={<Balloons />} />
        <Route path="/other" element={<Other />} />
        <Route path="/order" element={<Order />} />
        <Route path="/options" element={<Options />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
