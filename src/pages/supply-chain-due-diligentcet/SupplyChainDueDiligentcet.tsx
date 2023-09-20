import React, { useState } from 'react';
import styles from './SupplyChain.module.scss';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const SupplyChainDueDiligentcet = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: (
        <div style={{ fontWeight: 600, fontSize: '16px' }}>
          Due Diligence Report
        </div>
      ),
      children: (
        <div className={styles.prepare}>
          <div className={styles.title}>
            There is
            <br />
            nothing here <br />
            yet...
          </div>
          <br />
          <hr style={{ border: '1px solid #ced4da' }} />
          <br />
          <div className={styles.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            sequi, delectus aliquid ipsum ex officiis labore enim ratione id.
            Dolores dignissimos inventore quo expedita reiciendis adipisci
            deserunt ea ducimus voluptatibus?
          </div>
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div style={{ fontWeight: 600, fontSize: '16px', textAlign: 'left' }}>
          Potential Voluntary Supply Chain <br /> Due Dilligence Additions
        </div>
      ),
      children: (
        <div className={styles.prepare}>
          <div className={styles.title}>
            There is
            <br />
            nothing here <br />
            yet...
          </div>
          <br />
          <hr style={{ border: '1px solid #ced4da' }} />
          <br />
          <div className={styles.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            sequi, delectus aliquid ipsum ex officiis labore enim ratione id.
            Dolores dignissimos inventore quo expedita reiciendis adipisci
            deserunt ea ducimus voluptatibus?
          </div>
        </div>
      ),
    },
    {
      key: '3',
      label: (
        <div style={{ fontWeight: 600, fontSize: '16px' }}>
          Supply Chain Indices
        </div>
      ),
      children: (
        <div className={styles.prepare}>
          <div className={styles.title}>
            There is
            <br />
            nothing here <br />
            yet...
          </div>
          <br />
          <hr style={{ border: '1px solid #ced4da' }} />
          <br />
          <div className={styles.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            sequi, delectus aliquid ipsum ex officiis labore enim ratione id.
            Dolores dignissimos inventore quo expedita reiciendis adipisci
            deserunt ea ducimus voluptatibus?
          </div>
        </div>
      ),
    },
    {
      key: '4',
      label: (
        <div style={{ fontWeight: 600, fontSize: '16px', textAlign: 'left' }}>
          EU Taxonomy Disclosure <br />
          Statement
        </div>
      ),
      children: (
        <div className={styles.prepare}>
          <div className={styles.title}>
            There is
            <br />
            nothing here <br />
            yet...
          </div>
          <br />
          <hr style={{ border: '1px solid #ced4da' }} />
          <br />
          <div className={styles.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            sequi, delectus aliquid ipsum ex officiis labore enim ratione id.
            Dolores dignissimos inventore quo expedita reiciendis adipisci
            deserunt ea ducimus voluptatibus?
          </div>
        </div>
      ),
    },
    {
      key: '5',
      label: (
        <div style={{ fontWeight: 600, fontSize: '16px' }}>
          Sustainability Report
        </div>
      ),
      children: (
        <div className={styles.prepare}>
          <div className={styles.title}>
            There is
            <br />
            nothing here <br />
            yet...
          </div>
          <br />
          <hr style={{ border: '1px solid #ced4da' }} />
          <br />
          <div className={styles.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            sequi, delectus aliquid ipsum ex officiis labore enim ratione id.
            Dolores dignissimos inventore quo expedita reiciendis adipisci
            deserunt ea ducimus voluptatibus?
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Tabs
          id="reportTab"
          defaultActiveKey="1"
          tabPosition={'left'}
          style={{ height: '100%' }}
          items={items}
        />
      </div>
    </div>
  );
};

export default SupplyChainDueDiligentcet;
