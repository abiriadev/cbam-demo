import React from 'react';
import styles from './GeneralBattery.module.scss';
import Chat from './Chat';
import IMessage from './IMessage';
import Characteristics from './Characteristics';
const GeneralBattery = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.title}>Identification</div>
        <IMessage />
      </div>
      <div className={styles.container}>
        <br />
        <br />
        <br />
        <br />
        <div className={styles.title}>General characteristics</div>
        <Characteristics />
      </div>
    </div>
  );
};

export default GeneralBattery;
