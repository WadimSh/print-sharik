import { FC } from "react";

import style from "./sharik-constructor.module.css";

const SharikConstructor:FC = () => {
  
  return (
    <section className={style.section}>
      <div style={{ color: "#c9c9c9", paddingTop: "16px", textAlign: "center", width: "50%", height: "6%", borderBottom: "1px solid rgba(51, 38, 174, 0.08)" }}>Изображения</div>
      <div style={{ paddingTop: "16px", textAlign: "center", width: "50%", height: "6%", borderBottom: "2px solid #396EC5" }}>Шарики</div>
    </section>
  )
}

export default SharikConstructor;