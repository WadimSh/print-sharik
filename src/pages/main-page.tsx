import { FC } from 'react';

import Main from '../components/main/main';
import SharikDemo from '../components/sharik-demo/sharik-demo';
import SharikConstructor from '../components/sharik-constructor/sharik-constructor';

const MainPage:FC = () => {
  
  return (
    <Main>
      <SharikDemo />
      <SharikConstructor />
    </Main>
  );
}

export default MainPage;
