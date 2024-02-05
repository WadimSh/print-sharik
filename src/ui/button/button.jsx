import React from 'react';

const Button = ({
  extraClass,    
  iconBefore,    
  iconAfter,     
  onClick,       
  type,          
  children,      
  ...rest        
}) => {
  
  const buttonEvents = {
    onClick
  };

  let buttonClasses = `button ${extraClass || ''}`.trim();

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
      {iconBefore && <span className="before">{iconBefore}</span>}
      {children}
      {iconAfter && <span className="after">{iconAfter}</span>}
    </button>
  );
};

export default Button;