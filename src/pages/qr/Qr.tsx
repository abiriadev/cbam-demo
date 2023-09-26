import React, { useEffect } from 'react';
import styles from './Qr.module.scss';
import { useNavigate } from 'react-router-dom';

const Qr = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/overview');
    }, 3000);
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>Digital Product Passport</div>
          <div className={styles.qrContainer}></div>
          <div className={styles.text}>Want to find out more?</div>
        </div>
      </div>
    </div>
  );
};

export default Qr;
