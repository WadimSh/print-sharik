import React from 'react';

const Paragraph = ({ text, className }) => {
  return (
    <div className={className}>
      {text.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Paragraph;
