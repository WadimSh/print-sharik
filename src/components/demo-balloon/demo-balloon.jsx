import React, { useContext } from "react";

import { ConfigContext } from '../../utils/contexts';

import balloons from "../../assets/images/1102-0001_m1_1200.jpg";
import bable from "../../assets/images/1102-2611_m1_1200.jpg"
import prints from "../../assets/images/1103-3001_d1.png";
import red from "../../assets/images/1103-3001_d1_w.png";
import style from "./demo-balloon.module.css";

const DemoBalloon = () => {
  const config = useContext(ConfigContext);
    
  return (
    <div className={style.block}>
     <img src={config.step2.balloon === 'bable' ? bable : balloons} alt="balloon" className={style.balloon} />
     {config.step1.print === 'print' && <img src={config.step1.print === 'print' && config.step3.color === 'color' ? red : prints} alt="print" className={style.print} />}
    </div>
  );
};

export default DemoBalloon;