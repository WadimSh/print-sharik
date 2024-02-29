import React, { useState } from 'react';

const Dropdown = ({ options, placeholder, value, onClick, className }) => {
  const [selectedOption, setSelectedOption] = useState(value || null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelectOption = (option) => {
    if (onClick) {
      onClick(option);
    };    
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const handleRemoveOption = () => {
    setIsDropdownOpen(false);
    setSelectedOption(null);
  };

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={className}>
      <div>
        {selectedOption ? (
          <span>
            {selectedOption}
          </span>
        ) : (
          <span onClick={handleToggleDropdown}>
            {selectedOption === null ? placeholder : selectedOption}
          </span>
        )}
        {selectedOption && (
          <button onClick={handleRemoveOption}>
            +
          </button>
        )}
      </div>
      {isDropdownOpen && (
        <ul>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleSelectOption(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;