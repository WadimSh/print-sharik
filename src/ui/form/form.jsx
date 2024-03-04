import React from "react";

const Form = ({ children, onSubmit, className, ...rest }) => {
  return (
    <form onSubmit={onSubmit} className={className} {...rest}>
      {children}
    </form>
  );
};

export default Form;