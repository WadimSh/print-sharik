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
        style={{ border: 'none', backgroundColor: 'transparent', transform: 'rotate(45deg)', fontSize: "1.5rem" }}
      >+</button>}
      {error && <span>{error}</span>}
    </div>
  );
};

export default Input;