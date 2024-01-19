import { FC } from 'react';

import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import SharikDemo from './components/sharik-demo/sharik-demo';
import SharikConstructor from './components/sharik-constructor/sharik-constructor';

const App:FC = () => {
  
  return (
    <div className="App">
      <Header />
      <Main>
        <SharikDemo />
        <SharikConstructor />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
