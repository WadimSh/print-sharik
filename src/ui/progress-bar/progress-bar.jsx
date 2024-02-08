import React, { useContext } from 'react';

import { ConfigContext } from '../../utils/contexts';

import './progress-bar.css';

const ProgressBar = ({ progress }) => {
  const config = useContext(ConfigContext);

  return (
    <div className="progress-bar">
      <div className={`line line-start ${config.step1.print === 'print' ? 'active' : ''}`}></div>
      <div className={`circle ${config.step1.print === 'print' ? 'active' : ''}`}>{progress >= 2 ? '✔' : '1'}</div>
      <div className={`line ${config.step1.print === 'print' && config.step2.balloon === 'bable' ? 'active' : ''}`}></div>
      <div className={`circle ${config.step1.print === 'print' && config.step2.balloon === 'bable' ? 'active' : ''}`}>{progress >= 4 ? '✔' : '2'}</div>
      <div className={`line ${config.step1.print === 'print' && config.step2.balloon === 'bable' && config.step3.color === 'color' ? 'active' : ''}`}></div>
      <div className={`circle ${config.step1.print === 'print' && config.step2.balloon === 'bable' && config.step3.color === 'color' ? 'active' : ''}`}>{progress >= 6 ? '✔' : '3'}</div>
      <div className={`line line-finely ${config.step1.print === 'print' && config.step2.balloon === 'bable' && config.step3.color === 'color' && config.step4.status === 'order' ? 'active' : ''}`}></div>
    </div>
  );
};

export default ProgressBar;