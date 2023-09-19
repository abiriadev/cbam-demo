import React from 'react';
import styles from './Chat.module.scss';
import classNames from 'classnames';
const Chat = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.chat}>
          <div className={styles.chatHistory}>
            <ul>
              <li>
                <div
                  className={classNames(styles.message, styles.myMessage)}
                  style={{ width: '25%' }}
                >
                  Battery identification ?
                </div>
              </li>
              <li className={styles.clearfix}>
                <div
                  className={classNames(
                    // styles.message,
                    styles.otherMessage,
                    styles.floatRight,
                  )}
                  style={{ width: '40%' }}
                >
                  X123456789012X12345678901234566
                </div>
              </li>
              <li>
                <div
                  className={classNames(styles.message, styles.myMessage)}
                  style={{ width: '32%' }}
                >
                  Manufacturer’s identification ?
                </div>
              </li>
              <li className={styles.clearfix}>
                <div
                  className={classNames(
                    // styles.message,
                    styles.otherMessage,
                    styles.floatRight,
                  )}
                  style={{ width: '80%' }}
                >
                  1) Name : Company A <br />
                  2) trade name or mark : 68161/12 <br />
                  3) postal address : 46653 | 95, Baegyang-daero, Buk-gu, Busan,
                  46653, REP. OF KOREA
                  <br />
                  4) web address : www.aipim.io <br />
                  5) e-mail address : aipimbusiness@aipim.io
                </div>
              </li>
              <li>
                <div
                  className={classNames(styles.message, styles.myMessage)}
                  style={{ width: '24%' }}
                >
                  Manufacturing date ?
                </div>
              </li>
              <li className={styles.clearfix}>
                <div
                  style={{ width: '18%' }}
                  className={classNames(styles.otherMessage, styles.floatRight)}
                >
                  2023-03-07
                </div>
              </li>
              <li>
                <div
                  className={classNames(styles.message, styles.myMessage)}
                  style={{ width: '25%' }}
                >
                  Manufacturing place ?
                </div>
              </li>
              <li className={styles.clearfix}>
                <div
                  className={classNames(styles.otherMessage, styles.floatRight)}
                  style={{ width: '18%' }}
                >
                  mannheim
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
