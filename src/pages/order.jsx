import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Main from '../components/main/main';
import ProgressBox from '../components/progress-box/progress-box';
import ConstructorBlock from '../components/constructor-block/constructor-block';
import NavigationButtons from '../components/navigation-buttons/navigation-buttons';

import { ConfigContext } from '../utils/contexts';

const Order = ({ updateUrl, handelStep }) => {
  const location = useLocation();
  const config = useContext(ConfigContext);
  const [dis, setDis] = useState(config.step4.status === 'order' ? false : true);

  useEffect(() => {
    updateUrl(location.pathname)
  }, [location, updateUrl]);

  const handleCheckboxChange = () => {
    const value = dis ? 'order' : '';
    handelStep('step4', 'status', value);
    setDis(!dis);
  };

  const progressExpression = config.step4.status === 'order' ? 7 
  : config.step2.balloon === 'bable' && config.step3.color === 'color' ? 6 
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
        previousUrl="/other"
      />
    </Main>
  );
}

export default Order;