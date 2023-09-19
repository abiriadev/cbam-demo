import React from 'react';
import styles from './Overview.module.scss';
import classnames from 'classnames';
import EVBatteryPath from '../../assets/images/EVBattery.jpeg';
import Battery100Path from '../../assets/images/battery100per.png';
import { FiBox, FiAlertCircle } from 'react-icons/fi';
import { FaPassport } from 'react-icons/fa';
import { MdPublish, MdOutlinePublish } from 'react-icons/md';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { CiEdit } from 'react-icons/ci';
import {
  PiBatteryFullDuotone,
  PiBatteryHighDuotone,
  PiBatteryMediumDuotone,
  PiBatteryLowDuotone,
  PiBatteryWarningDuotone,
  PiBatteryEmptyDuotone,
} from 'react-icons/pi';
import { BsChevronDoubleRight } from 'react-icons/bs';
import { Tooltip, Popconfirm, message } from 'antd';

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
        <div className={styles.rBox}>
          <img src={EVBatteryPath} alt="" width={500} />
        </div>
        <div className={styles.content}>
          <div className={classnames(styles.mBox, styles.batteryHealth)}>
            <Popconfirm
              className={styles.popconBattery}
              placement="topLeft"
              title={'Battery health info'}
              description={betteryDesc}
              onConfirm={confirm}
              showCancel={false}
            >
              <div className={styles.titleEffect}>
                <div className={styles.rTitle}>Battery health</div>
                <div className={styles.alertIcon}>
                  <FiAlertCircle />
                </div>
              </div>
            </Popconfirm>

            <div className={styles.inner}>
              <div className={styles.innerText}>
                Battery capacity relative to when it was new
              </div>
              <div className={styles.batteryImg}>
                {/* <PiBatteryFullDuotone style={{ fontSize: '50px' }} /> */}
                <img src={Battery100Path} alt="Battery100" width={250} />
              </div>
            </div>
          </div>
          <div className={styles.boxContainer}>
            <div className={classnames(styles.sBox)}>
              <div className={styles.icon}>
                <FaPassport />
              </div>
              <div className={styles.rTitle}>Battery Passport ID</div>
              <div className={styles.innerText}>
                RSTE2291345831 <br />
                Tesla Model 3 Standard Range NMC-M50
              </div>
            </div>

            <div className={classnames(styles.sBox)}>
              <div className={styles.icon}>
                <FiBox />
              </div>
              <div className={styles.rTitle}> Battery MODEL</div>
              <div className={styles.innerText}>NMC-M50</div>
            </div>
          </div>
          <div className={styles.boxContainer}>
            <div className={classnames(styles.sBox)}>
              <div className={styles.icon}>
                <MdPublish />
              </div>
              <div className={styles.rTitle}>Passport issued for</div>
              <div className={styles.innerText}>Tesla</div>
            </div>
            <div className={classnames(styles.sBox)}>
              <div className={styles.icon}>
                <MdOutlinePublish />
              </div>
              <div className={styles.rTitle}>Passport issued date</div>
              <div className={styles.innerText}>16/01/2023</div>
            </div>
          </div>
          <div className={styles.boxContainer}>
            <div className={classnames(styles.sBox)}>
              <div className={styles.icon}>
                <CiEdit />
              </div>
              <div className={styles.rTitle}>Data auditor</div>
              <div className={styles.innerText}>Not audited</div>
            </div>
            <div className={classnames(styles.sBox)}>
              <Popconfirm
                className={styles.starPopcon}
                placement="topLeft"
                title={'Data quality-into info'}
                description={starDesc}
                onConfirm={confirm}
                showCancel={false}
              >
                <div className={styles.starIcon}>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <div
                    className={styles.alertIcon}
                    style={{ position: 'absolute', top: '0px', right: '-10px' }}
                  >
                    <FiAlertCircle />
                  </div>
                </div>
              </Popconfirm>
              <div className={styles.rTitle}>Data quality-into</div>
              <div className={styles.innerText}> &nbsp; </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
