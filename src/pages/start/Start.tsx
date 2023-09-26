import React, { useState } from 'react';
import styles from './Start.module.scss';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { ImQrcode } from 'react-icons/im';
import aipimLogo from '../../assets/images/aipim_logo2.png';
import dppImg from '../../assets/images/dpp_img.png';
import mainPath from '../../assets/images/main.jpeg';
import aipimLogoGreen from '../../assets/images/aipim_logo_green.png';

const Start = () => {
  const navigate = useNavigate();

  const onSearch = () => {
    setTimeout(() => {
      navigate('/qr');
    }, 500);
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.content} style={{ marginRight: '20px' }}>
          <div className={styles.tBox} style={{ marginBottom: '20px' }}>
            <div className={styles.title}>Digital Product Passport</div>
            <div className={styles.text}>
              Deployed and validated at scale and real life setting Digital
              Product Passports in at least two value chains. Report on further
              needs for standardisation and specifications to ensure
              interoperability, security and acceptance by all the stakeholders.
              Recommendations based on the lessons learnt for the deployments of
              DPP in other value chains.
            </div>
          </div>
          <div className={styles.tBox}>
            <img className={styles.img} src={mainPath} />
          </div>
        </div>
        <div
          className={styles.content}
          style={{ background: '#fff', border: '1px solid #d9d9d9' }}
        >
          {/* <Button className={styles.arrow}>
            <ArrowLeftOutlined />
          </Button> */}
          <img src={aipimLogoGreen} className={styles.logo} />
          <div className={styles.buttons}>
            <Button
              className={styles.button}
              style={{
                marginRight: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onClick={onSearch}
            >
              QR Scan
              <div style={{ marginTop: '4px', marginLeft: '4px' }}>
                <ImQrcode />
              </div>
            </Button>
            <Button className={styles.button} onClick={onSearch}>
              Search <ArrowRightOutlined />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
