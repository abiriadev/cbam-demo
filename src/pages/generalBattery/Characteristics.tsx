import React from 'react';
import styles from './Characteristics.module.scss';

const Characteristics = () => {
  return (
    <div className={styles.page}>
      <br />
      <br />
      <br />
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <div className={styles.cBox}>
          <div className={styles.subTitle}>Battery category</div>
          <div className={styles.content}>
            1. LMT battery
            <br />
            2. Electric vehicle battery
            <br />
            3. Industrial battery
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className={styles.cBox}>
          <div className={styles.subTitle}>Weight of the battery</div>
          <div className={styles.content}>weight</div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div className={styles.cBox}>
          <div className={styles.subTitle}>Battery Status</div>
          <div className={styles.content}>
            1.오리지널 2. 용도 3. 재사용 4. 재재조 5. 폐기물
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Characteristics;
