import React, { useContext } from "react";

import { ConfigContext } from '../../context/context';

import style from "./demo-balloon.module.css";

const DemoBalloon = () => {
  const config = useContext(ConfigContext);
  const styles = config.step1.print === 'print' && config.step3.color === 'color' ?  `${style.print} ${style.golden}` : `${style.print}`;
  const print = window.location.origin + '/images/1103-3001_d1.png';
  return (
    <div className={style.block}>
     <img src='' alt="balloon" className={style.balloon} />
     {config.step1.print === 'print' && <img src={print} alt="print" className={styles} />}
    </div>
  );
};

export default DemoBalloon;