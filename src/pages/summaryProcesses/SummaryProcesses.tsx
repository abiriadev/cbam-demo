import styles from './SummaryProcesses.module.scss';
import {
  BsFill1CircleFill,
  BsFill2CircleFill,
  BsFill3CircleFill,
} from 'react-icons/bs';
import { Tabs } from 'antd';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

const SummaryProcesses = () => {
  const items: any = [
    {
      key: '1',
      label: (
        <div className={styles.tabTitle}>
          <div className={styles.icon}>
            <BsFill1CircleFill />
          </div>
          Summary of the installation, processes and production routes
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
          Greenhouse gas emissions balance and specific embedded emissions (SEE)
        </div>
      ),
      children: <Tab2 />,
    },
    {
      key: '3',
      label: (
        <div className={styles.tabTitle}>
          <div className={styles.icon}>
            <BsFill3CircleFill />
          </div>
          Detailed overview of each production processes
        </div>
      ),
      children: <Tab3 />,
    },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div style={{ width: '100%' }}>
          <Tabs defaultActiveKey="1" items={items}></Tabs>
        </div>
      </div>
    </div>
  );
};
export default SummaryProcesses;
