import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Main from '../components/main/main';
import ProgressBox from '../components/progress-box/progress-box';
import ConstructorBlock from '../components/constructor-block/constructor-block';
import NavigationButtons from '../components/navigation-buttons/navigation-buttons';

import { ConfigContext } from '../utils/contexts';

const Prints = ({ updateUrl, handelStep }) => {
  const location = useLocation();
  const config = useContext(ConfigContext);
  const [dis, setDis] = useState(config.step1.print === 'print' ? false : true);

  useEffect(() => {
    updateUrl(location.pathname);
  }, [location, updateUrl]);

  const handleCheckboxChange = () => {
    const value1 = dis ? 'print' : '';
    const value2 = dis && '';
    handelStep('step1', value1);
    handelStep('step3', value2);
    setDis(!dis);
  };
  
  return (
    <Main>
      <ProgressBox
        progress={config.step1.print === 'print' ? 1 : 0}
      />
      <ConstructorBlock>
        <input type='checkbox' checked={!dis} onChange={handleCheckboxChange} />
      </ConstructorBlock>
      <NavigationButtons
        nextUrl="/balloons"
        isDisabled={dis}
      />
    </Main>
  );
}

export default Prints;