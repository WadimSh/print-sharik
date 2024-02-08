import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Main from '../components/main/main';
import ProgressBox from '../components/progress-box/progress-box';
import ConstructorBlock from '../components/constructor-block/constructor-block';
import NavigationButtons from '../components/navigation-buttons/navigation-buttons';

import { ConfigContext } from '../utils/contexts';

const Prints = ({ updateUrl }) => {
  const location = useLocation();
  const config = useContext(ConfigContext);

  useEffect(() => {
    updateUrl(location.pathname);
  }, [location, updateUrl]);
  
  return (
    <Main>
      <ProgressBox
        progress={config.ru.step1}
      />
      <ConstructorBlock>
        Print
      </ConstructorBlock>
      <NavigationButtons
        nextUrl="/balloons"
        isDisabled={false}
      />
    </Main>
  );
}

export default Prints;