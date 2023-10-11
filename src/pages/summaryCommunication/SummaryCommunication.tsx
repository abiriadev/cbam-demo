import React from 'react';
import styles from './SummaryCommunication.module.scss';
import { BsFill1CircleFill, BsFill2CircleFill } from 'react-icons/bs';
import { Tabs } from 'antd';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

const SummaryCommunication = () => {
  const items: any = [
    {
      key: '1',
      label: (
        <div className={styles.tabTitle}>
          <div className={styles.icon}>
            <BsFill1CircleFill />
          </div>
          Summary of the installation and production processes
        </div>
      ),
      children: <Tab1 />,
    },
    {
      key: '2',
      label: (
        <div className={styles.tabTitle}>
          <div className={styles.icon}>
            <BsFill2CircleFill />
          </div>
          2 Summary of products
        </div>
      ),
      children: <Tab2 />,
    },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div style={{ width: '100%' }}>
          <Tabs id="summaryCommTb1" defaultActiveKey="1" items={items}></Tabs>
        </div>
      </div>
    </div>
  );
};
export default SummaryCommunication;
