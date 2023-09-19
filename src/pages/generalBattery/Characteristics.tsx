import React, { useCallback, useEffect, useRef } from 'react';
import styles from './Characteristics.module.scss';
import classNames from 'classnames';
const Characteristics = () => {
  const pageRef = useRef<any>();

  //   useEffect(() => {
  //     console.log('pageRef', pageRef.current.offsetTop);
  //   }, [pageRef]);

  return (
    <div className={styles.page} ref={pageRef}>
      <div className={styles.title}>General characteristics</div>

      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <div className={classNames(styles.cBox, styles.test_obj1)}>
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
        <div className={classNames(styles.cBox, styles.test_obj2)}>
          <div className={styles.subTitle}>Weight of the battery</div>
          <div className={styles.content}>weight</div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div className={classNames(styles.cBox, styles.test_obj3)}>
          <div className={styles.subTitle}>Battery Status</div>
          <div className={styles.content}>
            1.오리지널 <br />
            2. 용도 <br />
            3. 재사용 <br />
            4. 재재조 <br />
            5. 폐기물
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
