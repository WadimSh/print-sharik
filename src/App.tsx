import React from 'react';

import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        {'print-sharik'}
      </Main>
      <Footer />
    </div>
  );
}

export default App;
