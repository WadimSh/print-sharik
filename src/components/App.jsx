import React, { useState, useEffect, useId } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './header/header';
import Footer from './footer/footer';
import Prints from '../pages/prints';
import Balloons from '../pages/balloons';
import Other from '../pages/other';
import Order from '../pages/order';
import Options from '../pages/options';

import { ConfigContext } from '../utils/contexts';
import './App.css';
import Main from './main/main';

const App = () => {
  //const orderId = useId();
  //const [prevUrl, setPrevUrl] = useState('');
  //const [logic, setLogic] = useState(true);
  //const [state, setState] = useState({
  //  id: orderId,
  //  step1: { print: '' },
  //  step2: { balloon: '' },
  //  step3: { color: '' },
  //  step4: { status: '' },
  //});
  //localStorage.setItem('initial', JSON.stringify(state));
  //localStorage.removeItem('initial');
  // useEffect(() => {
  //   if (localStorage.getItem('initial')) {
  //     setState(JSON.parse(localStorage.getItem('initial')));
  //     setLogic(true);
  //   }
  // }, []);
  //const updateUrl = (newUrl) => {
  //  setPrevUrl(newUrl);
  //};
  //const handleStepChange = (input, name, value) => {
  //  console.log(state)
  //  setState((prevState) => ({
  //    ...prevState,
  //    [input]: {
  //      ...prevState[input], 
  //      [name]: value
  //    }
  //  }));
  //  localStorage.setItem('initial', JSON.stringify(state));
  //};

  
  
  return (
    <div className="page">
      <Header />
      <Main>
        
      </Main>
      <Footer />
    </div>
  );
}

export default App;
