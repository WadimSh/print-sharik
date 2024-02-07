import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Main from '../components/main/main';
import ProgressBox from '../components/progress-box/progress-box';
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
      Order
      <NavigationButtons
        previousUrl="/other"
      />
    </Main>
  );
}

export default Order;