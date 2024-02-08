import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Main from '../components/main/main';
import ProgressBox from '../components/progress-box/progress-box';
import ConstructorBlock from '../components/constructor-block/constructor-block';
import NavigationButtons from '../components/navigation-buttons/navigation-buttons';

const Order = ({ updateUrl }) => {
  const location = useLocation();

  useEffect(() => {
    updateUrl(location.pathname)
  }, [location, updateUrl]);

  return (
    <Main>
      <ProgressBox
        progress={6}
      />
      <ConstructorBlock>
        Order
      </ConstructorBlock>
      <NavigationButtons
        previousUrl="/other"
      />
    </Main>
  );
}

export default Order;