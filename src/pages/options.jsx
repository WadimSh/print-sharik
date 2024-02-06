import React from 'react';

import Main from '../components/main/main';
import NavigationButtons from '../components/navigation-buttons/navigation-buttons';

const Options = ({ prevUrl }) => {
     
 return (
    <Main>
      Options
      <NavigationButtons
        previousUrl={prevUrl}
      />
    </Main>
  );
}

export default Options;