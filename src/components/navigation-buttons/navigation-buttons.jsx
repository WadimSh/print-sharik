import React from 'react';
import { useHistory } from 'react-router-dom';

const NavigationButtons = ({ previousUrl, nextUrl }) => {
  const history = useHistory();

  const handlePreviousClick = () => {
    if (previousUrl) {
      history.push(previousUrl);
    }
  };
  
  const handleNextClick = () => {
    if (nextUrl) {
      history.push(nextUrl);
    }
  };

  return (
    <div>
      <button onClick={handlePreviousClick}>Назад</button>
      <button onClick={handleNextClick}>Далее</button>
    </div>
  );
};

export default NavigationButtons;