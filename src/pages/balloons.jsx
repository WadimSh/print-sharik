import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Main from '../components/main/main';
import ProgressBox from '../components/progress-box/progress-box';
import NavigationButtons from '../components/navigation-buttons/navigation-buttons';

const Balloons = ({ updateUrl }) => {
  const location = useLocation();

  useEffect(() => {
    updateUrl(location.pathname)
  }, [location, updateUrl]);

  return (
    <Main>
      <ProgressBox
        progress={2}
      />
      Balloons
      <NavigationButtons
        previousUrl="/"
        nextUrl="/other"
        isDisabled={false}
      />
    </Main>
  );
}

export default Balloons;