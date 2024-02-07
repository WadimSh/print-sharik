import React from 'react';

import './progress-bar.css';

const ProgressBar = ({ progress }) => {

  return (
    <div className="progress-bar">
      <div className={`line line-start ${progress >= 1 ? 'active' : ''}`}></div>
      <div className={`circle ${progress >= 2 ? 'active' : ''}`}>{progress >= 2 ? '✔' : '1'}</div>
      <div className={`line ${progress >= 3 ? 'active' : ''}`}></div>
      <div className={`circle ${progress >= 4 ? 'active' : ''}`}>{progress >= 4 ? '✔' : '2'}</div>
      <div className={`line ${progress >= 5 ? 'active' : ''}`}></div>
      <div className={`circle ${progress >= 6 ? 'active' : ''}`}>{progress >= 6 ? '✔' : '3'}</div>
      <div className={`line line-finely ${progress >= 7 ? 'active' : ''}`}></div>
    </div>
  );
};

export default ProgressBar;