import React, { useState } from 'react';
import styles from './SupplyChain.module.scss';
import { Button } from 'antd';

const REPORT_DATA = [
  {
    id: 1,
    text: 'Due Diligence Report',
    name: 'first',
  },
  {
    id: 2,
    text: 'Potential voluntary supply chain due dilligence additions',
    name: 'second',
  },
  {
    id: 3,
    text: 'Supply chain indices',
    name: 'third',
  },
  {
    id: 4,
    text: 'EU Taxonomy disclosure statement',
    name: 'fourth',
  },
  {
    id: 5,
    text: 'Sustainability report',
    name: 'fifth',
  },
];

const SupplyChain = () => {
  const [content, setContent] = useState('');

  const handleClickButton = (e) => {
    const { name } = e.target;
    setContent(name);
  };

  console.log('content', content);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {REPORT_DATA.map((data) => {
          return (
            <Button onClick={handleClickButton} name={data.name} key={data.id}>
              {data.text}
            </Button>
          );
        })}
      </div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};
export default SupplyChain;
