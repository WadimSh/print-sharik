import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Prints from './pages/prints';
import Balloons from './pages/balloons';
import Other from './pages/other';
import Order from './pages/order';
import Options from './pages/options';

import { ConfigContext } from './utils/contexts';
import './App.css';

const App = () => {
  const [prevUrl, setPrevUrl] = useState('');
  const [state, setState] = useState({
    step1: { print: '' },
    step2: { balloon: '' },
    step3: { color: '' },
    step4: { status: '' },
  });

  const updateUrl = (newUrl) => {
    setPrevUrl(newUrl);
  };

  const handleStep1Change = (value1, value2) => {
    setState((prevState) => ({
      ...prevState,
      step1: { print: value1 },
      step3: { color: value2 },
    }));
  };

  const handleStep2Change = (value) => {
    setState((prevState) => ({
      ...prevState,
      step2: { balloon: value },
    }));
  };

  const handleStep3Change = (value) => {
    setState((prevState) => ({
      ...prevState,
      step3: { color: value },
    }));
  };

  const handleStep4Change = (value) => {
    setState((prevState) => ({
      ...prevState,
      step4: { status: value },
    }));
  };

  return (
    <div className="page">
      <ConfigContext.Provider value={state}>
        <Header />
        <Routes>
          <Route path="/" element={<Prints updateUrl={updateUrl} handelStep={handleStep1Change} />} />
          <Route path="/balloons" element={<Balloons updateUrl={updateUrl} handelStep={handleStep2Change} />} />
          <Route path="/other" element={<Other updateUrl={updateUrl} handelStep={handleStep3Change} />} />
          <Route path="/order" element={<Order updateUrl={updateUrl} handelStep={handleStep4Change} />} />
          <Route path="/options" element={<Options prevUrl={prevUrl} />} />
        </Routes>
        <Footer />
      </ConfigContext.Provider>
    </div>
  );
}

export default App;
