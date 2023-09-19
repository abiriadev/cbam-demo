import React from 'react';
import styles from './Overview.module.scss';
import classnames from 'classnames';
import Battery100Path from '../../assets/images/bettery100.svg';
import { FiBox, FiAlertCircle } from 'react-icons/fi';
import { FaPassport } from 'react-icons/fa';
import { MdPublish, MdOutlinePublish } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';
import { CiEdit } from 'react-icons/ci';
import { Tooltip } from 'antd';

const Overview = () => {
  const batteryTooltip = () => {
    return (
      <div className={styles.tooltip}>
        <div>
          <div className={styles.battery}></div>
          <span className={styles.percent}>100%</span>
          <span className={styles.title}>Mercury</span>
          <span className={styles.subText}>text</span>
        </div>
        <div>
          <span className={styles.percent}>85%</span>
          <span className={styles.title}>Neptune</span>
          <span className={styles.subText}>text</span>
        </div>
        <div>
          <span className={styles.percent}>70%</span>
          <span className={styles.title}>Mars</span>
          <span className={styles.subText}>text</span>
        </div>
        <div>
          <span className={styles.percent}>55%</span>
          <span className={styles.title}>Saturn</span>
          <span className={styles.subText}>text</span>
        </div>
        <div>
          <span className={styles.percent}>40%</span>
          <span className={styles.title}>Venus</span>
          <span className={styles.subText}>text</span>
        </div>
        <div>
          <span className={styles.percent}>25%</span>
          <span className={styles.title}>Jupiter</span>
          <span className={styles.subText}>text</span>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.rBox}>배터리 이미지</div>
        <div className={styles.content}>
          <div className={styles.mBox}>
            <Tooltip
              placement="topLeft"
              title={batteryTooltip}
              color={'#4094DE'}
            >
              <div className={styles.titleEffect}>
                <div className={styles.rTitle}>Battery health</div>
                <div className={styles.alertIcon}>
                  <FiAlertCircle />
                </div>
              </div>
            </Tooltip>

            <div style={{ display: 'flex' }}>
              <div className={styles.batteryImg}>
                <img src={''} alt="Battery100" />
              </div>
              <div className={styles.innerText}>
                Battery capacity relative to when it was new
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
              <div className={styles.starIcon}>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
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
