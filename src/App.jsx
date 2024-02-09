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

  const handleStepChange = (input, value) => {
    setState((prevState) => ({
      ...prevState,
      [input]: {
      ...(input === "step1" && { print: value }),
      ...(input === "step2" && { balloon: value }),
      ...(input === "step3" && { color: value }),
      ...(input === "step4" && { status: value })
      }
    }));
  };

  return (
    <div className="page">
      <ConfigContext.Provider value={state}>
        <Header />
        <Routes>
          <Route path="/" element={<Prints updateUrl={updateUrl} handelStep={handleStepChange} />} />
          <Route path="/balloons" element={<Balloons updateUrl={updateUrl} handelStep={handleStepChange} />} />
          <Route path="/other" element={<Other updateUrl={updateUrl} handelStep={handleStepChange} />} />
          <Route path="/order" element={<Order updateUrl={updateUrl} handelStep={handleStepChange} />} />
          <Route path="/options" element={<Options prevUrl={prevUrl} />} />
        </Routes>
        <Footer />
      </ConfigContext.Provider>
    </div>
  );
}

export default App;
