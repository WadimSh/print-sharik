import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Main from '../components/main/main';
import NavigationButtons from '../components/navigation-buttons/navigation-buttons';

const Order = ({ updateUrl }) => {
  const location = useLocation();

  useEffect(() => {
    updateUrl(location.pathname)
  }, [location, updateUrl]);

  return (
    <Main>
      Order
      <NavigationButtons
        previousUrl="/other"
      />
    </Main>
  );
}

export default Order;