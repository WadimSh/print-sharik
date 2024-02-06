import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Main from '../components/main/main';
import NavigationButtons from '../components/navigation-buttons/navigation-buttons';

const Balloons = ({ updateUrl }) => {
  const location = useLocation();

  useEffect(() => {
    updateUrl(location.pathname)
  }, [location, updateUrl]);

  return (
    <Main>
      Balloons
      <NavigationButtons
        previousUrl="/"
        nextUrl="/other"
      />
    </Main>
  );
}

export default Balloons;