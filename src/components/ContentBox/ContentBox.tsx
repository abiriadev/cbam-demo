import React from 'react';
import styles from './ContentBox.module.scss';
import { Popconfirm } from 'antd';
import { FiAlertCircle } from 'react-icons/fi';

interface Iprops {
  title?: string;
  children?: any;
  popcornTitle?: string;
  popcorn?: boolean;
  popconDesc?: any;
}

const ContentBox = ({
  title,
  children,
  popcorn,
  popcornTitle,
  popconDesc,
}: Iprops) => {
  return popcorn ? (
    <div className={styles.box}>
      <Popconfirm
        className={styles.popcon}
        placement="bottomLeft"
        title={popcornTitle}
        description={popconDesc}
        showCancel={false}
      >
        <div className={styles.inner}>
          <div className={styles.title}>
            {title}
            <div className={styles.alertIcon}>
              <FiAlertCircle />
            </div>
          </div>
        </div>
      </Popconfirm>
      <div className={styles.content}>{children}</div>
    </div>
  ) : (
    <div className={styles.box}>
      {title !== undefined && <div className={styles.title}>{title}</div>}
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default ContentBox;
