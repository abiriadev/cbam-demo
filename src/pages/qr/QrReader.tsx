import React, { useState } from 'react';
import styles from './QrReader.module.scss';
import { Button, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';
import Loader from '../../components/loader/Loader';
const QrReader = () => {
  const navigate = useNavigate();

  const onSearch = () => {
    setTimeout(() => {
      navigate('/overview');
    }, 500);
  };

  return (
    <>
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.buttons}>
            <Button className={styles.button} style={{ marginRight: '2.5px' }}>
              Upload Image
            </Button>
            <Button className={styles.button} style={{ marginLeft: '2.5px' }}>
              Scan QR code
            </Button>
          </div>
          <div className={styles.qrBox} />
          <div className={styles.input}>
            <Input placeholder="URL" />
          </div>
          <div className={styles.buttons}>
            <Button className={styles.button} onClick={onSearch}>
              Search <ArrowRightOutlined />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QrReader;
