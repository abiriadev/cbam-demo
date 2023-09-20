import React from 'react';
import styles from './Performance.module.scss';

const PerformancAndDurability = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.lBox}>
          state of health, battery capacity, energy and voltage(건강 상태,
          배터리 용량, 에너지 및 전압)
        </div>
        <div className={styles.lBox}>Power capability</div>
        <div className={styles.lBox}></div>
        <div className={styles.lBox}></div>
        <div className={styles.lBox}>Temperature conditions</div>
      </div>
      <div className={styles.content}>
        <div className={styles.rBox}>
          internal resistance and electrochemical impedance(내부저항과
          전기화학적 임피던스)
        </div>
        <div className={styles.rBox}></div>
        <div className={styles.rBox}>Battery lifetime</div>
        <div className={styles.rBox}>Negative events</div>
      </div>
    </div>
  );
};
export default PerformancAndDurability;
