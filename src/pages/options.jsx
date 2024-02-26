import React, { useContext } from 'react';

import Main from '../components/main/main';
import NavigationButtons from '../components/navigation-buttons/navigation-buttons';

import { ConfigContext } from '../context/context';

const Options = ({ prevUrl }) => {
  const config = useContext(ConfigContext);
  
  console.log(config);
     
 return (
    <Main>
      {config.step4.status === 'order' && <p>{config.step1.print},{config.step2.balloon},{config.step3.color},{config.step4.status}</p>}
      <NavigationButtons
        previousUrl={prevUrl || '/'}
      />
    </Main>
  );
}

export default Options;