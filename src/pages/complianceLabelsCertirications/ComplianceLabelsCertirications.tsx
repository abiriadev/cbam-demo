import React from 'react';
import styles from './ComplianceLabelsCertirications.module.scss';
import weeePath from '../../assets/images/WEEE_SYMBOL.png';
import cdPath from '../../assets/images/cd_SYMBOL.png';
import pbPath from '../../assets/images/pb_SYMBOL.png';
import { Popconfirm, Button } from 'antd';
import { FaPassport } from 'react-icons/fa';
import { FiAlertCircle } from 'react-icons/fi';
import { AiFillRightCircle, AiOutlineClose } from 'react-icons/ai';
const ComplianceLabelsCertirications = () => {
  const onClick = () => {
    let ele = document.getElementById('prepare');
    if (ele != undefined) {
      ele.style.visibility = 'visible';
    }
  };

  const onHidden = () => {
    let ele = document.getElementById('prepare');
    if (ele != undefined) {
      ele.style.visibility = 'hidden';
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.boxContainer} style={{ marginRight: '20px' }}>
          <div
            className={styles.box}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div className={styles.mainTitle}>Certifications & Compliance </div>
            <div className={styles.content}>
              <ul>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}>
                    EU declaration of conformity
                  </div>
                  <Button onClick={onClick}>
                    <div style={{ display: 'flex', fontWeight: '600' }}>
                      view
                      <div className={styles.icon}>
                        <AiFillRightCircle />
                      </div>
                    </div>
                  </Button>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}>
                    ID of EU declaration of conformity
                  </div>
                  <Button onClick={onClick}>
                    <div
                      style={{
                        display: 'flex',
                        fontWeight: '600',
                      }}
                    >
                      view
                      <div className={styles.icon}>
                        <AiFillRightCircle />
                      </div>
                    </div>
                  </Button>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}>
                    Compliance of test results
                  </div>
                  <Button onClick={onClick}>
                    <div style={{ display: 'flex', fontWeight: '600' }}>
                      view
                      <div className={styles.icon}>
                        <AiFillRightCircle />
                      </div>
                    </div>
                  </Button>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}>Results of tests reports</div>
                  <Button onClick={onClick}>
                    <div style={{ display: 'flex', fontWeight: '600' }}>
                      view
                      <div className={styles.icon}>
                        <AiFillRightCircle />
                      </div>
                    </div>
                  </Button>
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
            <div className={styles.mainTitle}>Labels</div>
            <div className={styles.symbolContent}>
              <Popconfirm
                className={styles.popcon}
                placement="bottomLeft"
                title={'symbol description'}
                // description={betteryDesc}
                showCancel={false}
              >
                <div className={styles.symbol}>
                  <div className={styles.alert}>
                    <FiAlertCircle />
                  </div>
                  <img src={weeePath} alt="WEEE SYMBOL" width={110} />
                </div>
              </Popconfirm>
              <Popconfirm
                className={styles.popcon}
                placement="bottomLeft"
                title={'symbol description'}
                // description={betteryDesc}
                showCancel={false}
              >
                <div className={styles.symbol}>
                  <div className={styles.alert}>
                    <FiAlertCircle />
                  </div>
                  <img src={cdPath} alt="Cd SYMBOL" width={110} />
                </div>
              </Popconfirm>
              <Popconfirm
                className={styles.popcon}
                placement="bottomLeft"
                title={'symbol description'}
                // description={betteryDesc}
                showCancel={false}
              >
                <div className={styles.symbol}>
                  <div className={styles.alert}>
                    <FiAlertCircle />
                  </div>
                  <img src={pbPath} alt="Pb SYMBOL" width={110} />
                </div>
              </Popconfirm>
            </div>
          </div>
        </div>
        <div
          className={styles.boxContainer}
          style={{ backgroundColor: 'transparent' }}
        >
          <div id="prepare" className={styles.prepare}>
            <div
              style={{
                position: 'absolute',
                right: '20px',
                top: '20px',
                fontSize: '28px',
              }}
              onClick={onHidden}
            >
              <AiOutlineClose />
            </div>
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
        </div>
      </div>
    </div>
  );
};

export default ComplianceLabelsCertirications;
