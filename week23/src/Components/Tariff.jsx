import React from "react";
import styles from "./Tariff.module.scss";

function Tariff({ name, price, speed, color }) {
  const cardColorClass = styles[color] || styles.default;

  return (
    <div className={`${styles.card} ${cardColorClass}`}>
      <div className={styles.headerTop}>
        <div className={styles.tariffName}>{name}</div>
      </div>

      <div className={styles.headerBottom}>
        <span className={styles.currency}>руб.</span>
        <span className={styles.price}>{price}</span>
        <span className={styles.period}>/мес.</span>
      </div>

      <div className={styles.infoBlock}>
        <div className={styles.speed}>до {speed} Мбит/сек.</div>
        <div className={styles.info}>
          Объем включенного трафика не ограничен
        </div>
      </div>
    </div>
  );
}

export default Tariff;





