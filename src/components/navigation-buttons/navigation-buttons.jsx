import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../ui/button/button';
import { Chevron } from '../../ui/icons/chevron';

import style from './navigation-buttons.module.css';

const NavigationButtons = ({ previousUrl, nextUrl }) => {
  const navigate = useNavigate();

  const handlePreviousClick = () => {
    if (previousUrl) {
      navigate(previousUrl, { replace: true });
    }
  };
  
  const handleNextClick = () => {
    if (nextUrl) {
      navigate(nextUrl, { replace: true });
    }
  };

  return (
    <div className={!previousUrl ? style.wrapperRight : !nextUrl ? style.wrapperLeft : style.wrapper}>
      {previousUrl && <Button
                        iconBefore={<Chevron />}
                        status="secondary"
                        type="button"
                        onClick={handlePreviousClick}
                      >
                        Назад
                      </Button>
      }
      {nextUrl && <Button
                    iconAfter={<Chevron />}
                    status="primary"
                    type="button"
                    onClick={handleNextClick}
                  >
                    Далее
                  </Button>
      }
    </div>
  );
};

export default NavigationButtons;