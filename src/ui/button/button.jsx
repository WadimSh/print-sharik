import React from 'react';

import './button.css';

const Button = ({
  iconBefore,    
  iconAfter,     
  onClick,       
  type,
  status,
  children,      
  ...rest        
}) => {
  
  const buttonEvents = {
    onClick
  };

  let buttonClasses = `button ${status === 'secondary' ? 'button-secondory'
                      : status === 'primary' ? 'button-primary' : ''}`.trim();

  if (iconBefore) {
    buttonClasses += ' button-left';
  }

  if (iconAfter) {
    buttonClasses += ' button-right';
  }

  return (
    <button
      className={buttonClasses}
      type={type}
      {...buttonEvents}
      {...rest}
    >
      {iconBefore && <span className="icon-before">{iconBefore}</span>}
      {children}
      {iconAfter && <span className="icon-after">{iconAfter}</span>}
    </button>
  );
};

export default Button;