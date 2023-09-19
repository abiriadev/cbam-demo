import React from 'react';
import styles from './CircularityAndResource.module.scss';
import { Button } from 'antd';

const CircularityAndResourceEfficiency = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.link}>
          Manual for removal of the betterPart numbers for components(구성
          요소의 부품 번호) from the appliance(배터리 분리 메뉴얼)
        </div>
        <div className={styles.link}>
          Postal address of sources for spare parts(예비 부품 공급처 우편 주소)
        </div>
        <div className={styles.link}>
          E-mail address of sources for spare parts(예비 부품 공급처 이메일
          주소)
        </div>
        <div className={styles.link}>
          Web address of sources for spare parts(예비 부품 공급처 웹 주소)
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.cBox}>
          <div>Safety measures/instructions(안전 조치/지침)</div>
          <Button className={styles.button}>다운로드</Button>
        </div>
        <div className={styles.cBox}>
          <div>xtinguishing agent(소화제)</div>
          <Button className={styles.button}>다운로드</Button>
        </div>
        <div className={styles.cBox}>
          <div>
            Manual for removal of the battery from the appliance(배터리 분리
            매뉴얼)
          </div>
          <Button className={styles.button}>다운로드</Button>
        </div>
        <div className={styles.cBox}>
          <div>
            Manual for disassembly and dismantling of the battery pack(배터리
            팩의 분해 및 해체를 위한 설명서)
          </div>
          <Button className={styles.button}>다운로드</Button>
        </div>
      </div>
    </div>
  );
};
export default CircularityAndResourceEfficiency;
