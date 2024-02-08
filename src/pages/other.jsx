import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Main from '../components/main/main';
import ProgressBox from '../components/progress-box/progress-box';
import ConstructorBlock from '../components/constructor-block/constructor-block';
import NavigationButtons from '../components/navigation-buttons/navigation-buttons';

const Other = ({ updateUrl }) => {
  const location = useLocation();

  useEffect(() => {
    updateUrl(location.pathname)
  }, [location, updateUrl]);

  return (
    <Main>
      <ProgressBox
        progress={4}
      />
      <ConstructorBlock>
        Other
      </ConstructorBlock>
      <NavigationButtons
        previousUrl="/balloons"
        nextUrl="/order"
        isDisabled={false}
      />
    </Main>
  );
}

export default Other;