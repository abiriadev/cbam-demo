import React, { useEffect } from 'react';
import styles from './Qr.module.scss';
import { useNavigate } from 'react-router-dom';
import aipimQRPath from '../../assets/images/aipimQR.png';
const Qr = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/overview');
    }, 5000);
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>Digital Product Passport</div>
          <div className={styles.box}>
            <img
              className={styles.img}
              src={aipimQRPath}
              alt=""
              width={250}
              style={{ textAlign: 'center' }}
            />
            <div className={styles.detector}>
              <div className={styles.line}>
                <div
                  style={{
                    flex: 1,
                    borderTop: '5px solid #fea34e',
                    borderLeft: '5px solid #fea34e',
                  }}
                ></div>
                <div style={{ flex: 10 }}></div>
                <div
                  style={{
                    flex: 1,
                    borderTop: '5px solid #fea34e',
                    borderRight: '5px solid #fea34e',
                  }}
                ></div>
              </div>
              <div className={styles.other}></div>
              <div className={styles.line}>
                <div
                  style={{
                    flex: 1,
                    borderBottom: '5px solid #fea34e',
                    borderLeft: '5px solid #fea34e',
                  }}
                ></div>
                <div style={{ flex: 10 }}></div>
                <div
                  style={{
                    flex: 1,
                    borderBottom: '5px solid #fea34e',
                    borderRight: '5px solid #fea34e',
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div className={styles.text}>Want to find out more?</div>
        </div>
      </div>
    </div>
  );
};

export default Qr;
