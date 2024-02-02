import React from 'react';

import Main from '../components/main/main';
import SharikDemo from '../components/sharik-demo/sharik-demo';
import SharikConstructor from '../components/sharik-constructor/sharik-constructor';

const MainPage = () => {
  
  return (
    <Main>
      <SharikDemo />
      <SharikConstructor />
    </Main>
  );
}

export default MainPage;
