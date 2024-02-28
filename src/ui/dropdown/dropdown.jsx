import React, { useState } from 'react';
import './styles.css';

const Dropdown = () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelectOption = (option) => {
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
    <div className="dropdown-container">
      <div className="selected-option">
        {selectedOption ? (
          <span className="selected-value">{selectedOption}</span>
        ) : (
          <span className="placeholder" onClick={handleToggleDropdown}>
            Select an option
          </span>
        )}
        {selectedOption && (
          <button className="remove-option" onClick={handleRemoveOption}>
            +
          </button>
        )}
      </div>
      {isDropdownOpen && (
        <ul className="options">
          {options.map((option, index) => (
            <li className="button" key={index} onClick={() => handleSelectOption(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;