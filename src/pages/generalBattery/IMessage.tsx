import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './IMessage.module.scss';

// 참고 : https://samuelkraft.com/blog/ios-chat-bubbles-css
const messages = [
  { key: 'msg2', text: 'X123456789012X12345678901234566', sent: true },
  { key: 'msg3', text: 'Manufacturer’s identification ?' },
  {
    key: 'msg4',
    text: (
      <p>
        1) Name : Company A<br />
        2) trade name or mark : 68161/12 <br />
        3) postal address : 46653 | 95, Baegyang-daero, Buk-gu, Busan, 46653,
        REP. OF KOREA
        <br />
        4) web address : www.aipim.io <br />
        5) e-mail address : aipimbusiness@aipim.io
      </p>
    ),
    sent: true,
  },
  { key: 'msg5', text: ' Manufacturing date ?' },
  { key: 'msg6', text: ' 2023-03-07', sent: true },
  {
    key: 'msg7',
    text: 'Manufacturing place ?',
  },
  {
    key: 'msg8',
    text: ' mannheim',
    sent: true,
  },
];

const IMessage = () => {
  let [aniMessage, setAniMessage] = useState<any>([
    { key: 'msg1', text: 'Battery identification ?' },
  ]);

  let idx = 0;

  useEffect(() => {
    if (!nIntervId) {
      nIntervId = setInterval(flashText, 500);
    }
  }, []);

  let nIntervId: any;
  let tempMsgList: any = [{ key: 'msg1', text: 'Battery identification ?' }];
  function flashText() {
    tempMsgList.push(messages[idx]);
    setAniMessage([...tempMsgList]);
    idx++;
    if (idx === 7) {
      stopTextColor();
    }
  }

  function stopTextColor() {
    clearInterval(nIntervId);
    // 변수에서 intervalID를 해체합니다
    nIntervId = null;
  }

  const transition = {
    type: 'spring',
    stiffness: 100,
    mass: 0.2,
    damping: 10,
  };

  const variants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition,
    },
  };

  return (
    <div>
      <AnimatePresence>
        <ol className={styles.list}>
          {aniMessage.map(({ text, sent, key }: any) => (
            <motion.li
              key={key}
              className={cn(
                styles.shared,
                sent ? styles.sent : styles.received,
              )}
              initial="initial"
              animate="enter"
              variants={variants}
              layout
            >
              {text}
            </motion.li>
          ))}
        </ol>
      </AnimatePresence>
    </div>
  );
};

export default IMessage;
