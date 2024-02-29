import React from 'react';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './components/main/main';
import Dropdown from './ui/dropdown/dropdown';

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
    <>
      <Header />
      <Main>
        <h1 className='text_type_main-large'>Коммерческая печать на шарах</h1>
        <form className="search-form" >
      <div className="material-icons">search</div>
      <input
        
        
        className="search-form__input"
        type="text"
        placeholder="Поиск..."
        minLength="2"
        maxLength="200"
        autoComplete="off"
        required
      />
      <button className="btn-small" type="button" >Найти</button>
    </form>
        <div style={{ display: "flex" }}>
          <Dropdown />
          <Dropdown />
        </div>
        
      </Main>
      <Footer />
    </>
  );
}

export default App;
