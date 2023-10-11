import React, { useState } from 'react';
import styles from './Start.module.scss';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { ImQrcode } from 'react-icons/im';
import aipimLogo from '../../assets/images/aipim_logo2.png';
import grrenImg from '../../assets/images/green.jpeg';
import mainPath from '../../assets/images/main.jpeg';
import aipimLogoGreen from '../../assets/images/aipim_logo_green.png';

const Start = () => {
  const navigate = useNavigate();

  const onSearch = () => {
    navigate('/instData');
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.content} style={{ marginRight: '20px' }}>
          <div className={styles.tBox} style={{ marginBottom: '20px' }}>
            <div className={styles.title}>CBAM</div>
            <div className={styles.text}>
              Climate change is a global problem that needs global solutions. As
              the EU raises its own climate ambition, and as long as less
              stringent climate policies prevail in many non-EU countries, there
              is a risk of so-called ‘carbon leakage'. Carbon leakage occurs
              when companies based in the EU move carbon-intensive production
              abroad to countries where less stringent climate policies are in
              place than in the EU, or when EU products get replaced by more
              carbon-intensive imports. The EU’s Carbon Border Adjustment
              Mechanism (CBAM) is our landmark tool to put a fair price on the
              carbon emitted during the production of carbon intensive goods
              that are entering the EU, and to encourage cleaner industrial
              production in non-EU countries. The gradual introduction of the
              CBAM is aligned with the phase-out of the allocation of free
              allowances under the EU Emissions Trading System (ETS) to support
              the decarbonisation of EU industry. By confirming that a price has
              been paid for the embedded carbon emissions generated in the
              production of certain goods imported into the EU, the CBAM will
              ensure the carbon price of imports is equivalent to the carbon
              price of domestic production, and that the EU's climate objectives
              are not undermined. The CBAM is designed to be compatible with
              WTO-rules.
            </div>
          </div>
          <div className={styles.tBox}>
            <img className={styles.img} src={grrenImg} />
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
            <Button className={styles.button} onClick={onSearch}>
              Next <ArrowRightOutlined />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
