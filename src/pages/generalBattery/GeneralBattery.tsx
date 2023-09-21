import React from 'react';
import styles from './GeneralBattery.module.scss';
import { Popconfirm } from 'antd';
import { FaPassport } from 'react-icons/fa';
import { FiAlertCircle } from 'react-icons/fi';

const GeneralBattery = () => {
  const batteryStatusDesc = () => {
    return (
      <div className={styles.starInfo}>
        <div>
          <div className={styles.text}>
            1) Original : A battery in its original state as placed on the
            market or put into service
          </div>
        </div>
        <div>
          <div className={styles.text}>
            2) Repurposed : A battery that has been subject to repurposing or
            preparing for repurpose
          </div>
        </div>
        <div>
          <div className={styles.text}>
            3) Reused : A battery that has been subject to re-use or preparing
            for re-use
          </div>
        </div>
        <div>
          <div className={styles.text}>
            4) Remanufactured : A battery that has been subject to
            remanufacturing
          </div>
        </div>
        <div>
          <div className={styles.text}>
            5) Waste : A battery that is considered waste according to the
            definition of “waste”"
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.boxContainer}>
          <div
            className={styles.box}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div className={styles.mainTitle}>Identification</div>
            <div className={styles.content}>
              <ul>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}>Battery identification </div>
                  <div className={styles.tag}>
                    X123456789012X12345678901234566
                  </div>
                </li>
              </ul>
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
            <div className={styles.mainTitle}>Manufacturer Information</div>
            <div className={styles.content}>
              <ul>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}>Name</div>
                  <div className={styles.tag}>Aipim</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}>trade name or mark</div>
                  <div className={styles.tag}>9876/457</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}>postal address</div>
                  <div className={styles.tag}>
                    360, Olympic-ro, Songpa-gu Seoul, Republic of Korea
                  </div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}>web address</div>
                  <div className={styles.tag}>www.aipim.io</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}>e-mail address</div>
                  <div className={styles.tag}>aipimbusiness@aipim.io</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}> Manufacturing date </div>
                  <div className={styles.tag}>16/01/2023</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}> Manufacturing place</div>
                  <div className={styles.tag}>mannheim</div>
                </li>
              </ul>
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
            <div className={styles.mainTitle}>General Characteristics</div>
            <div className={styles.content}>
              <ul>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}>Battery Category</div>
                  <div className={styles.tag}>EV(electric vehicle battery)</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}>Weight of the battery</div>
                  <div className={styles.tag}>450kg</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}>Weight of the module</div>
                  <div className={styles.tag}>45kg</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}>Weight of the cell</div>
                  <div className={styles.tag}>1.56kg</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>

                  <Popconfirm
                    className={styles.popcon}
                    placement="bottomLeft"
                    title={'Describe battery status(Mandatory)'}
                    description={batteryStatusDesc}
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
                          right: '90px',
                        }}
                      >
                        <FiAlertCircle />
                      </div>
                      Battery Status
                    </div>
                  </Popconfirm>
                  <div className={styles.tag}>Original</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralBattery;
