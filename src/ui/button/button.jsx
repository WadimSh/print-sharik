import React from 'react';

const Button = ({ className, buttonText, buttonType, leftIcon, rightIcon, onClick, ...rest }) => {
  return (
    <button className={className} type={buttonType} onClick={onClick} {...rest}>
      {leftIcon && <div>{leftIcon}</div>}
      <span>{buttonText}</span>
      {rightIcon && <div>{rightIcon}</div>}
    </button>
  );
};

export default Button;