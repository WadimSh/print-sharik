import React, { useState } from "react";

const ToggleButtons = ({
  button1Text,
  button2Text,
  className,
  initialState,
  onToggle,
}) => {
  const [activeButton, setActiveButton] = useState(initialState);

  const handleToggle = (e) => {
    const newActiveButton = e.target.value;
    setActiveButton(newActiveButton);
    onToggle(newActiveButton);
  };

  return (
    <div className={className}>
      <button
        className={activeButton === button1Text ? "active" : ""}
        value={button1Text}
        onClick={handleToggle}
      >
        {button1Text}
      </button>
      <button
        className={activeButton === button2Text ? "active" : ""}
        value={button2Text}
        onClick={handleToggle}
      >
        {button2Text}
      </button>
    </div>
  );
};

export default ToggleButtons;