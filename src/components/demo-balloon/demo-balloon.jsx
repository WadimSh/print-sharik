import React, { useState } from "react";

import balloon from "../../assets/images/1102-0001_m1_1200.jpg";
import print from "../../assets/images/1103-3001_d1.png";
import red from "../../assets/images/1103-3001_d1_red.png";
import style from "./demo-balloon.module.css";

const DemoBalloon = () => {
  const [color] = useState(false);
  
  return (
    <div className={style.block}>
     <img src={balloon} alt="balloon" className={style.balloon} />
     <img src={color ? print : red} alt="print" className={style.print} />
    </div>
  );
};

export default DemoBalloon;