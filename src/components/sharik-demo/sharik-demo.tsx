import { FC, useState } from "react";

import style from "./sharik-demo.module.css";
import sharik from "../../assets/images/1102-0022_m1_1200.jpg";
import shar from "../../assets/images/1102-0001_m1_1200.jpg";

const SharikDemo:FC = () => {
  const [logic, setLogic] = useState(false);

  const handleCheckboxChange = () => {
    const newCheckedValue = !logic;
    setLogic(newCheckedValue);
  };

  return (
    <section className={style.section}>
      <h1 style={{ margin: "0", paddingLeft: "50%" }}>Вы выбрали:</h1>
      <div style={{ display: "flex", gap: "14px", marginTop: "34px" }}>
        {!logic ? <img className={style.img} src={sharik} /> : <img className={style.img} src={shar} /> }
        <input type="checkbox" checked={logic} onChange={handleCheckboxChange} />
      </div>
    </section>
  )
}

export default SharikDemo;