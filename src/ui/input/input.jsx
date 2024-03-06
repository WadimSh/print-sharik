import { useState } from "react";

const Input = ({ type, placeholder, className, error, ...props }) => {
  const [value, setValue] = useState("");

  return (
    <div className={className}>
      <input 
        type={type} 
        placeholder={placeholder || ""} 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...props} />
      {value && <button 
        onClick={() => setValue("")}
      >+</button>}
      {error && <span>{error}</span>}
    </div>
  );
};

export default Input;