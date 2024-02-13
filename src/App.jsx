import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Prints from './pages/prints';
import Balloons from './pages/balloons';
import Other from './pages/other';
import Order from './pages/order';
import Options from './pages/options';
//import ProtectedRoute from './components/protected-route/protected-route';

import { ConfigContext } from './utils/contexts';
import { prints } from './utils/data';
import './App.css';

const App = () => {
  const [prevUrl, setPrevUrl] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [state, setState] = useState({
    step1: { print: '' },
    step2: { balloon: '' },
    step3: { color: '' },
    step4: { status: '' },
  });

  const updateUrl = (newUrl) => {
    setPrevUrl(newUrl);
  };

  const handleStepChange = (input, name, value) => {
    setState((prevState) => ({
      ...prevState,
      [input]: {
        ...prevState[input], [name]: value 
      }
    }));
    setLoggedIn(true);
  };

  return (
    <div className="page">
      <ConfigContext.Provider value={state}>
        <Header />
        <Routes>
          <Route path="/" element={<Prints updateUrl={updateUrl} handelStep={handleStepChange} />} />
          <Route path="/balloons" element={!isLoggedIn ? <Navigate to="/" /> : <Balloons updateUrl={updateUrl} handelStep={handleStepChange} />} />
          <Route path="/other" element={!isLoggedIn ? <Navigate to="/" /> : <Other updateUrl={updateUrl} handelStep={handleStepChange} />} />
          <Route path="/order" element={!isLoggedIn ? <Navigate to="/" /> : <Order updateUrl={updateUrl} handelStep={handleStepChange} />} />
          <Route path="/options" element={<Options prevUrl={prevUrl} />} />
        </Routes>
        <Footer />
      </ConfigContext.Provider>
    </div>
  );
}

export default App;
