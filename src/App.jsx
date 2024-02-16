import React, { useState, useEffect, useId } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

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
  const orderId = useId();
  const [prevUrl, setPrevUrl] = useState('');
  const [logic, setLogic] = useState(true);
  const [state, setState] = useState({
    id: orderId,
    step1: { print: '' },
    step2: { balloon: '' },
    step3: { color: '' },
    step4: { status: '' },
  });

  //localStorage.setItem('initial', JSON.stringify(state));
  //localStorage.removeItem('initial');

 // useEffect(() => {
 //   if (localStorage.getItem('initial')) {
 //     setState(JSON.parse(localStorage.getItem('initial')));
 //     setLogic(true);
 //   }
 // }, []);

  const updateUrl = (newUrl) => {
    setPrevUrl(newUrl);
  };

  const handleStepChange = (input, name, value) => {
    console.log(state)
    setState((prevState) => ({
      ...prevState,
      [input]: {
        ...prevState[input], 
        [name]: value
      }
    }));
    localStorage.setItem('initial', JSON.stringify(state));
  };

  
  
  return (
    <div className="page">
      <ConfigContext.Provider value={state}>
        <Header />
        <Routes>
          <Route path="/" element={<Prints updateUrl={updateUrl} handelStep={handleStepChange} />} />
          <Route path="/balloons" element={!logic ? <Navigate to="/" replace /> : <Balloons updateUrl={updateUrl} handelStep={handleStepChange} />} />
          <Route path="/other" element={!logic ? <Navigate to="/" replace /> : <Other updateUrl={updateUrl} handelStep={handleStepChange} />} />
          <Route path="/order" element={!logic ? <Navigate to="/" replace /> : <Order updateUrl={updateUrl} handelStep={handleStepChange} />} />
          <Route path="/options" element={<Options prevUrl={prevUrl} />} />
        </Routes>
        <Footer />
      </ConfigContext.Provider>
    </div>
  );
}

export default App;
