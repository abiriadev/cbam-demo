import React from 'react';
import styles from './ComplianceLabelsCertirications.module.scss';
import weeePath from '../../assets/images/WEEE_SYMBOL.png';
import cdPath from '../../assets/images/cd_SYMBOL.png';
import pbPath from '../../assets/images/pb_SYMBOL.png';
import { BsThreeDots } from 'react-icons/bs';
import { Divider, Form, Radio, Skeleton, Space, Switch } from 'antd';

const ComplianceLabelsCertirications = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.box}>
          <Space style={{ float: 'right' }}>
            <Skeleton.Image active={false} />
          </Space>
          <br />
          <br />
          <Skeleton.Input active={false} size={'large'} block={false} />
          <br />
          <br />
          <Skeleton.Input active={false} size={'large'} />
          <Skeleton.Input active={false} size={'large'} />
          <br />
          <br />
          <Skeleton.Button
            active={false}
            size={'large'}
            shape={'square'}
            block={false}
          />
          <br />
          <br />
          <Skeleton.Input active={false} size={'large'} block={true} />
          <br />
          <br />
          <br />
          <br />
          <Skeleton.Input active={false} size={'large'} block={false} />
          <br />
          <br />
          <Skeleton.Input active={false} size={'large'} />
          <Skeleton.Input active={false} size={'large'} />
          <br />
          <br />
          <Skeleton.Button
            active={false}
            size={'large'}
            shape={'square'}
            block={false}
          />
          <br />
          <br />
          <Skeleton.Input active={false} size={'large'} block={true} />
          <br />
          <br />
          <Skeleton.Input active={false} size={'large'} block={false} />
          <br />
          <br />
          <Skeleton.Input active={false} size={'large'} block={true} />
          <br />
          <br />
          <Skeleton.Input active={false} size={'large'} />
          <br />
          <br />
          <Skeleton.Button
            active={false}
            size={'large'}
            shape={'square'}
            block={false}
          />
          <br />
          <br />
          <Skeleton.Input active={false} size={'large'} block={true} />
          <br />
          <br />
          <Skeleton.Input active={false} size={'large'} block={false} />
          <br />
          <br />
          <Skeleton.Input active={false} size={'large'} block={true} />
          <br />
          <br />
          <Skeleton.Button
            active={false}
            size={'large'}
            shape={'square'}
            block={true}
          />
          <br />
          <br />
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.top}>
            <div className={styles.box}>
              <Space style={{ float: 'right' }}>
                <Skeleton.Image active={false} />
              </Space>
              <br />
              <br />
              <Skeleton.Button
                active={false}
                size={'default'}
                shape={'square'}
                block={false}
              />
              <br />
              <br />
              <Skeleton.Input active={false} size={'default'} />
              <br />
              <br />
              <Skeleton.Input active={false} size={'default'} block={false} />
              <br />
              <br />
              <Skeleton.Input active={false} size={'default'} block={false} />
              <br />
              <br />
              <Skeleton.Input active={false} size={'default'} block={true} />
              <br />
              <br />
              <Skeleton.Input active={false} size={'default'} block={true} />
            </div>
            <div className={styles.box}>
              <Space style={{ float: 'right' }}>
                <Skeleton.Image active={false} />
              </Space>
              <br />
              <br />
              <Skeleton.Button
                active={false}
                size={'default'}
                shape={'square'}
                block={false}
              />
              <br />
              <br />
              <Skeleton.Input active={false} size={'default'} />
              <br />
              <br />
              <Skeleton.Input active={false} size={'default'} block={false} />
              <br />
              <br />
              <Skeleton.Input active={false} size={'default'} block={false} />
              <br />
              <br />
              <Skeleton.Input active={false} size={'default'} block={true} />
              <br />
              <br />
              <Skeleton.Input active={false} size={'default'} block={true} />
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.title}>Symbols</div>
            <div className={styles.symbols}>
              <div style={{ marginBottom: '10px' }}>
                <div
                  className={styles.symbolContainer}
                  style={{ marginRight: '20px' }}
                >
                  <div className={styles.symbol}>
                    <img src={weeePath} alt="WEEE SYMBOL" width={110} />
                  </div>

                  <div className={styles.symbolTitle}>
                    Separate collection symbol
                  </div>
                </div>

                <div
                  className={styles.symbolContainer}
                  style={{ marginRight: '20px' }}
                >
                  <div className={styles.symbol}>
                    <img src={pbPath} alt="Pb SYMBOL" width={110} />
                  </div>

                  <div className={styles.symbolTitle}>Lead symbols</div>
                </div>

                <div className={styles.symbolContainer}>
                  <div className={styles.symbol}>
                    <img src={cdPath} alt="Cd SYMBOL" width={110} />
                  </div>

                  <div className={styles.symbolTitle}>Cadmium symbol</div>
                </div>
              </div>
              <div>
                <div
                  className={styles.symbolContainer}
                  style={{ marginRight: '20px' }}
                >
                  <div className={styles.symbol}></div>
                  <div className={styles.symbolTitle}>
                    <BsThreeDots />
                  </div>
                </div>

                <div
                  className={styles.symbolContainer}
                  style={{ marginRight: '20px' }}
                >
                  <div className={styles.symbol}></div>
                  <div className={styles.symbolTitle}>
                    {' '}
                    <BsThreeDots />
                  </div>
                </div>

                <div className={styles.symbolContainer}>
                  <div className={styles.symbol}></div>
                  <div className={styles.symbolTitle}>
                    {' '}
                    <BsThreeDots />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceLabelsCertirications;
