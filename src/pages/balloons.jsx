import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Main from '../components/main/main';
import ProgressBox from '../components/progress-box/progress-box';
import ConstructorBlock from '../components/constructor-block/constructor-block';
import NavigationButtons from '../components/navigation-buttons/navigation-buttons';

import { ConfigContext } from '../utils/contexts';

const Balloons = ({ updateUrl, handelStep }) => {
  const location = useLocation();
  const config = useContext(ConfigContext);
  const [dis, setDis] = useState(config.step2.balloon === 'bable' ? false : true);

  useEffect(() => {
    updateUrl(location.pathname)
  }, [location, updateUrl]);

  const handleCheckboxChange = () => {
    const value = dis ? 'bable' : '';
    handelStep('step2', 'balloon', value);
    setDis(!dis);
  };

  return (
    <Main>
      <ProgressBox
        progress={config.step2.balloon === 'bable' ? 3 : 2}
      />
      <ConstructorBlock>
        <input type='checkbox' checked={!dis} onChange={handleCheckboxChange} />
      </ConstructorBlock>
      <NavigationButtons
        previousUrl="/"
        nextUrl="/other"
        isDisabled={dis}
      />
    </Main>
  );
}

export default Balloons;