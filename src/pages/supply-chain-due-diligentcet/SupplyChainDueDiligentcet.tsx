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
            information of the due dilligence report
          </div>
          <br />
          <hr style={{ border: '1px solid #ced4da' }} />
          <br />
          <div className={styles.text}>
            Making due diligence report information available via the battery
            passport, at least via a link to the annual due diligence report
            valid for the specific battery at the time of placing on the market,
            as PDF uploaded to the company website. In addition, potentially
            making key information of the report available via the battery
            passport directly.
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
            Third party supply chain assurances demonstrate (e.g., via
            certifications) that supply chain practices adhere to defined
            standards. If schemes are chosen carefully (e.g., based on criteria
            outlined by the Battery Pass consortium) and key information about
            the assurances are communicated (see proposal by the Battery Pass
            consortium), assurances could be voluntarily made available via the
            battery passport.
          </div>
          <br />
          <hr style={{ border: '1px solid #ced4da' }} />
          <br />
          {/* <div className={styles.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            sequi, delectus aliquid ipsum ex officiis labore enim ratione id.
            Dolores dignissimos inventore quo expedita reiciendis adipisci
            deserunt ea ducimus voluptatibus?
          </div> */}
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
            ESGE+ indices under development by the GBA, scoring and benchmarking
            sustainability performance
          </div>
          <br />
          <hr style={{ border: '1px solid #ced4da' }} />
          <br />
          {/* <div className={styles.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            sequi, delectus aliquid ipsum ex officiis labore enim ratione id.
            Dolores dignissimos inventore quo expedita reiciendis adipisci
            deserunt ea ducimus voluptatibus?
          </div> */}
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
            Large untertakings need to disclose information to the public on how
            and to what extent their activities are associated with
            environmentally sustainable economic activities as part of the EU
            Taxonomy Regulation.
          </div>
          <br />
          <hr style={{ border: '1px solid #ced4da' }} />
          <br />
          <div className={styles.text}>
            Voluntarily making the EU Taxonomy disclosure available via the
            battery passport.
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
            The EU Corporate Sustainability Reporting Directive (CSRD) requires
            EU companies to draft a sustainability report.
          </div>
          <br />
          <hr style={{ border: '1px solid #ced4da' }} />
          <br />
          <div className={styles.text}>
            Voluntarily making the Sustainability Report available via the
            battery passport.
          </div>
          <br /> <br /> <br />
          <br />
          <div className={styles.title}>Human Rights index</div>
          <br />
          <hr style={{ border: '1px solid #ced4da' }} />
          <br />
          <div className={styles.text}>
            The Human Rights index for this battery is calculated based on the
            Human Rights Rulebook issued by the Global Battery Alliance. The
            Human Rights index is calculated through averaging all individually
            reported Human Rights scores of all supply chain participants.
            Disclaimer: the calculation of the Human Rights index for this
            Battery Passport included only the Cobalt supply chain.
          </div>
          <br /> <br /> <br />
          <br />
          <div className={styles.title}>Child Labor index</div>
          <br />
          <hr style={{ border: '1px solid #ced4da' }} />
          <br />
          <div className={styles.text}>
            The Child Labor index for this battery is calculated based on the
            Child Labor Rulebook issued by the Global Battery Alliance. The
            Child Labor index is calculated through averaging all individually
            reported Child Labor scores of all supply chain participants.
            Disclaimer: the calculation of the Child Labor index for this
            Battery Passport included only the Cobalt supply chain.
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
