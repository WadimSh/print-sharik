import React from "react";

const Input = ({ type, placeholder, className, error, ...props }) => {
  return (
    <div className={className}>
      <input type={type} placeholder={placeholder || ""} {...props} />
      {error && <span>{error}</span>}
    </div>
  );
};

export default Input;