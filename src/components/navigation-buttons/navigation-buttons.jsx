import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../ui/button/button';
import { Chevron } from '../../ui/icons/chevron';

import style from './navigation-buttons.module.css';

const NavigationButtons = ({ previousUrl, nextUrl, isDisabled }) => {
  const navigate = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

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

  useEffect(() => {
    setIsButtonDisabled(isDisabled)
  }, [isDisabled]);

  return (
    <section className={!previousUrl ? style.wrapperRight : !nextUrl ? style.wrapperLeft : style.wrapper}>
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
                    disabled={isButtonDisabled}
                  >
                    Далее
                  </Button>
      }
    </section>
  );
};

export default NavigationButtons;