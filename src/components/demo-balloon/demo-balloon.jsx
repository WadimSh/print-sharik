import React, { useContext } from "react";

import { ConfigContext } from '../../utils/contexts';

import balloons from "../../assets/images/1102-0001_m1_1200.jpg";
//import bable from "../../assets/images/1102-2611_m1_1200.jpg";
import balleb from "../../assets/images/1102-0022_m1_1200.jpg";
import style from "./demo-balloon.module.css";

const DemoBalloon = () => {
  const config = useContext(ConfigContext);
  const styles = config.step1.print === 'print' && config.step3.color === 'color' ?  `${style.print} ${style.golden}` : `${style.print}`;
  const print = window.location.origin + '/images/1103-3001_d1.png';
  return (
    <div className={style.block}>
     <img src={config.step2.balloon === 'bable' ? balleb : balloons} alt="balloon" className={style.balloon} />
     {config.step1.print === 'print' && <img src={print} alt="print" className={styles} />}
    </div>
  );
};

export default DemoBalloon;