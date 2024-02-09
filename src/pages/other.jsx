import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Main from '../components/main/main';
import ProgressBox from '../components/progress-box/progress-box';
import ConstructorBlock from '../components/constructor-block/constructor-block';
import NavigationButtons from '../components/navigation-buttons/navigation-buttons';

import { ConfigContext } from '../utils/contexts';

const Other = ({ updateUrl, handelStep }) => {
  const location = useLocation();
  const config = useContext(ConfigContext);
  const [dis, setDis] = useState(config.step3.color === 'color' ? false : true);

  useEffect(() => {
    updateUrl(location.pathname)
  }, [location, updateUrl]);

  const handleCheckboxChange = () => {
    const value = dis ? 'color' : '';
    handelStep('step3', 'color', value);
    setDis(!dis)
  };

  const progressExpression = config.step3.color === 'color' ? 5 
  : config.step1.print === 'print' && config.step2.balloon === 'bable'? 4
  : 0;

  return (
    <Main>
      <ProgressBox
        progress={progressExpression}
      />
      <ConstructorBlock>
        <input type='checkbox' checked={!dis} onChange={handleCheckboxChange} />
      </ConstructorBlock>
      <NavigationButtons
        previousUrl="/balloons"
        nextUrl="/order"
        isDisabled={dis}
      />
    </Main>
  );
}

export default Other;