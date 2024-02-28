import React from 'react';

const Button = ({ className, buttonText, buttonType, leftIcon, rightIcon, onClick, ...rest }) => {
  return (
    <button className={className} type={buttonType} onClick={onClick} {...rest}>
      {leftIcon && <span>{leftIcon}</span>}
      <span>{buttonText}</span>
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};

export default Button;