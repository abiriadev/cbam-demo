import React from 'react';
import { Popconfirm } from 'antd';
import { FaPassport } from 'react-icons/fa';
import { FiAlertCircle } from 'react-icons/fi';
import styles from './MaterialsComposition.module.scss';

const MaterialsComposition = () => {
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
            <div className={styles.title}>Materials</div>
            <div className={styles.mainTitle}>Battery chemistry</div>
            <div className={styles.content}>
              <ul>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}>title</div>
                  <div className={styles.tag}>text</div>
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
            <div className={styles.mainTitle}>Critical Raw Materials</div>
            <div className={styles.content}>
              <ul>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}>title</div>
                  <div className={styles.tag}>text</div>
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
            <div className={styles.mainTitle}>
              the cathode, anode, electrolyte materials
            </div>
            <div className={styles.content}>
              <ul>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}>Name</div>
                  <div className={styles.tag}>text</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}>Related identifiers</div>
                  <div className={styles.tag}>text</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}>Weight</div>
                  <div className={styles.tag}>text</div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.boxContainer}>
          <div
            className={styles.sbox}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div className={styles.title}>Substances</div>
            <div className={styles.mainTitle}>Name of hazardous substances</div>
            <div className={styles.content}>
              <ul>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}>title</div>
                  <div className={styles.tag}>text</div>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.space} />
          <div
            className={styles.sbox}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div className={styles.mainTitle}>
              Hazard classes and/or categories of hazardous substances
            </div>
            <div className={styles.content}>
              <ul>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}>title</div>
                  <div className={styles.tag}>text</div>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.space} />
          <div
            className={styles.sbox}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div className={styles.mainTitle}>
              Related identifiers of hazardous substances
            </div>
            <div className={styles.content}>
              <ul>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}>Name</div>
                  <div className={styles.tag}>text</div>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.space} />
          <div
            className={styles.sbox}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div className={styles.mainTitle}>
              Location of hazardous substances
            </div>
            <div className={styles.content}>
              <ul>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}>Name</div>
                  <div className={styles.tag}>text</div>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.space} />
          <div
            className={styles.sbox}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div className={styles.mainTitle}>
              Concentration range of hazardous substances
            </div>
            <div className={styles.content}>
              <ul>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}>Name</div>
                  <div className={styles.tag}>text</div>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.space} />
          <div
            className={styles.sbox}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div className={styles.mainTitle}>
              Impact of substances on the environment and on human health or
              safety
            </div>
            <div className={styles.content}>
              <ul>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}>Name</div>
                  <div className={styles.tag}>text</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialsComposition;
