import React from 'react';
import styles from './Overview.module.scss';
import EVBatteryPath from '../../assets/images/EVBattery.jpeg';
import { FiBox, FiAlertCircle } from 'react-icons/fi';
import { FaPassport } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';
import { AiFillStar, AiOutlineStar, AiFillEdit } from 'react-icons/ai';
import {
  PiBatteryFullDuotone,
  PiBatteryHighDuotone,
  PiBatteryMediumDuotone,
  PiBatteryLowDuotone,
  PiBatteryWarningDuotone,
  PiBatteryEmptyDuotone,
} from 'react-icons/pi';
import { MdGrade } from 'react-icons/md';
import { TbHealthRecognition } from 'react-icons/tb';
import { BsChevronDoubleRight, BsBuilding } from 'react-icons/bs';
import { Popconfirm, message } from 'antd';

const Overview = () => {
  const betteryDesc = () => {
    return (
      <div className={styles.batteryInfo}>
        <div>
          <div className={styles.battery}>
            <PiBatteryFullDuotone />
          </div>
          <div className={styles.percent}>100%</div>
          <div className={styles.title}>Mercury</div>
          <div className={styles.rigthIcon}>
            <BsChevronDoubleRight />
          </div>
          <div className={styles.subText}>
            Mercury is the small planet in the Solar System
          </div>
        </div>
        <div>
          <div className={styles.battery}>
            <PiBatteryHighDuotone />
          </div>
          <div className={styles.percent}>85%</div>
          <div className={styles.title}>Neptune</div>
          <div className={styles.rigthIcon}>
            <BsChevronDoubleRight />
          </div>
          <div className={styles.subText}>
            Neptune is the fouth-largest in the Solor System
          </div>
        </div>
        <div>
          <div className={styles.battery}>
            <PiBatteryMediumDuotone />
          </div>
          <div className={styles.percent}>70%</div>
          <div className={styles.title}>Mars</div>
          <div className={styles.rigthIcon}>
            <BsChevronDoubleRight />
          </div>
          <div className={styles.subText}>
            Despite being red, Mars is actually a cold place
          </div>
        </div>
        <div>
          <div className={styles.battery}>
            <PiBatteryLowDuotone />
          </div>
          <div className={styles.percent}>55%</div>
          <div className={styles.title}>Saturn</div>
          <div className={styles.rigthIcon}>
            <BsChevronDoubleRight />
          </div>
          <div className={styles.subText}>
            Saturn is composed of hydrogen and heliium
          </div>
        </div>
        <div>
          <div className={styles.battery}>
            <PiBatteryEmptyDuotone />
          </div>
          <div className={styles.percent}>40%</div>
          <div className={styles.title}>Venus</div>
          <div className={styles.rigthIcon}>
            <BsChevronDoubleRight />
          </div>
          <div className={styles.subText}>
            It has a beautiful name and is the second planet
          </div>
        </div>
        <div>
          <div className={styles.battery}>
            <PiBatteryWarningDuotone />
          </div>
          <div className={styles.percent}>25%</div>
          <div className={styles.title}>Jupiter</div>
          <div className={styles.rigthIcon}>
            <BsChevronDoubleRight />
          </div>
          <div className={styles.subText}>
            Jupiter is the biggest planet in the Solar System
          </div>
        </div>
      </div>
    );
  };

  const starDesc = () => {
    return (
      <div className={styles.starInfo}>
        <div>
          <div className={styles.starInfoIcon}>
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
          <div className={styles.text}>Data is self-reported</div>
        </div>
        <div>
          <div className={styles.starInfoIcon}>
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
          <div className={styles.text}>
            Data is verified by a member of the supply chain
          </div>
        </div>
        <div>
          <div className={styles.starInfoIcon}>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <div className={styles.text}>
            Data is audited by authorized verifier or auditor
          </div>
        </div>
        <div>
          <div className={styles.starInfoIcon}>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div className={styles.text}>
            Data collected via authorized external provider and additionally
            audited
          </div>
        </div>
      </div>
    );
  };

  const confirm = () => {
    message.info('Clicked on Yes.');
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.boxContainer}>
          <div className={styles.box}>
            <div className={styles.overview}>
              <div className={styles.title}>
                Battery Passport Overview
                <div className={styles.subTitle}>
                  Battery ID : RSTE2291345831
                </div>
              </div>
              <div>
                <img src={EVBatteryPath} alt="" width={300} />
              </div>
            </div>
          </div>
          <div className={styles.space} />

          <div
            className={styles.box}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div className={styles.mainTitle}>Required Infomation</div>
            <div className={styles.content}>
              <ul>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}>BATTERY PASSPORT ID</div>
                  <div className={styles.tag}>
                    RSTE2291345831, Tesla Model 3 Standard Range NMC-M50
                  </div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <FiBox />
                  </div>
                  <div className={styles.liTitle}>BATTERY MODEL</div>
                  <div className={styles.tag}>NMC-M50</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <BsBuilding />
                  </div>
                  <div className={styles.liTitle}>PASSPORT ISSUED FOR</div>

                  <div className={styles.tag}>Aipim</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <MdDateRange />
                  </div>
                  <div className={styles.liTitle}>PASSPORT ISSUED DATE</div>
                  <div className={styles.tag}>16/01/2023</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <AiFillEdit />
                  </div>
                  <div className={styles.liTitle}>DATA AUDITOR</div>
                  <div className={styles.tag}>Not audited</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <MdGrade />
                  </div>
                  <Popconfirm
                    className={styles.popcon}
                    placement="topLeft"
                    title={'Data quality-into information'}
                    description={starDesc}
                    onConfirm={confirm}
                    showCancel={false}
                  >
                    <div
                      className={styles.liTitle}
                      style={{
                        position: 'relative',
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          top: '-5px',
                          right: '50px',
                        }}
                      >
                        <FiAlertCircle />
                      </div>
                      DATA QUALITY INTO
                    </div>
                  </Popconfirm>

                  <div className={styles.tagDiv}>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <TbHealthRecognition />
                  </div>

                  <Popconfirm
                    className={styles.popcon}
                    placement="bottomLeft"
                    title={'Battery health info'}
                    description={betteryDesc}
                    onConfirm={confirm}
                    showCancel={false}
                  >
                    <div
                      className={styles.liTitle}
                      style={{
                        position: 'relative',
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          top: '-5px',
                          right: '66px',
                        }}
                      >
                        <FiAlertCircle />
                      </div>
                      BATTERY HEALTH
                    </div>
                  </Popconfirm>

                  <div className={styles.tagDiv}>
                    <PiBatteryFullDuotone />
                  </div>
                  <div className={styles.tag} style={{ marginLeft: '5px' }}>
                    100%
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
