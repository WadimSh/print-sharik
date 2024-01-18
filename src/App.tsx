import { FC } from 'react';

import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

const App:FC = () => {
  const print = 'print-sharik';

  return (
    <div className="App">
      <Header />
      <Main>
        {print}
      </Main>
      <Footer />
    </div>
  );
}

export default App;
