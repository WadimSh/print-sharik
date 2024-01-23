import { FC } from 'react';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import MainPage from './pages/main-page';

const App:FC = () => {
  
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
