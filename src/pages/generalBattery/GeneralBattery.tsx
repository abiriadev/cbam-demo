import React from 'react';
import styles from './GeneralBattery.module.scss';

const GeneralBattery = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div
          style={{
            background: '#fff',
            width: '800px',
            height: '100%',
            borderRadius: '16px',
            marginRight: '20px',
          }}
        ></div>
        <div
          style={{
            background: '#fff',
            width: '800px',
            height: '100%',
            borderRadius: '16px',
          }}
        ></div>
      </div>
    </div>
  );
};

export default GeneralBattery;
