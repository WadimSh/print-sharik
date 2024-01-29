import { FC } from "react";

import style from "./sharik-constructor.module.css";
import sharik from "../../assets/images/1102-0022_m1_1200.jpg";

const SharikConstructor:FC = () => {
  
  return (
    <section className={style.section}>
      <img className={style.img} src={sharik} alt="sharik" />
    </section>
  )
}

export default SharikConstructor;