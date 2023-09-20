import React, { useEffect, useState } from 'react';
import styles from './CarbonFootpint.module.scss';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import PieChart from './PieChart';
type TabPosition = 'left' | 'right' | 'top' | 'bottom';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: 51.508742,
  lng: -38.523,
};

const CarbonFootpint = () => {
  function myMap() {
    var mapOptions = {
      center: new google.maps.LatLng(51.508742, -0.12085),
      zoom: 10,
    };

    const googleDiv = document.getElementById('googleMap') as HTMLElement;
    var map = new google.maps.Map(googleDiv, mapOptions);
  }

  useEffect(() => {
    myMap();
  }, []);

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: (
        <p style={{ fontWeight: 600, fontSize: '16px' }}>General Information</p>
      ),
      children: (
        <div className={styles.tab1}>
          <div className={styles.ineer}>
            <div className={styles.img}>이미지</div>
            <div className={styles.text}>
              Manufacturer information 제조업체명 상표명 또는 상표 우편주소
              웹주소 이메일주소
            </div>
          </div>
          <div className={styles.ineer}>
            <div className={styles.img}>이미지</div>
            <div className={styles.text}>
              Battery model information 배터리 식별 정보
            </div>
          </div>
          <div className={styles.ineer}>
            <div className={styles.img}>이미지</div>
            <div className={styles.text}>
              Geographic location of the battery manufacturing facility
              제조장소(공장) 주소 [국가, 도시, 거리, 건물(필요한 경우)] *시설
              고유식별자 사용 추천
            </div>
          </div>
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <p style={{ fontWeight: 600, fontSize: '16px' }}>
          Battery Carbon footprint
        </p>
      ),
      children: (
        <div className={styles.tab2}>
          <div className={styles.ineer} style={{ marginRight: '30px' }}>
            <div className={styles.mBox}>
              Administrative information about the manufacturer
              <br />
              업체명 : company A <br />
              제조능력 인정일 : 2023.01.01 <br />
              인정 규모 : 몇톤 <br />
              연락처 : +49 89 1234567890 <br />
              Http://www.company.com <br />
              Test.mail@example.com
            </div>
            <br />
            <div className={styles.sBox}>
              Information about the battery model for which the declaration
              applies SB 28 | Li-lon
            </div>
            <br />
            <div className={styles.sBox}>
              Information about the geographic location of the battery
              manufacturing facility Origin | Democratic Republic of the congo
            </div>
            <div
              id="googleMap"
              style={{ width: '300px', height: '300px' }}
            ></div>

            <br />
            <div className={styles.mBox}>
              The carbon footprint of the battery, calculated as kg of carbon
              dioxide equivalent per one kWh of the total energy provided by the
              battery over its expected service life, CO2 CO2 FootPrint 110
              CO2e/kWh
            </div>
            <br />
            <div className={styles.sBox}>
              Identification number of the EU declaration of conformity of the
              battery X12345678912X12345678901234566
            </div>
            <br />
          </div>
          <div className={styles.ineer}>
            <PieChart />
            <div className={styles.sBox}>원료획득 및 전처리 30 CO2e/kWh</div>
            <br />
            <div className={styles.sBox}>주요제품 생산/제조 30 CO2e/kWh</div>
            <br />
            <div className={styles.sBox}>유통단계 30 CO2e/kWh</div>
            <br />
            <div className={styles.sBox}>EOL 및 재활용 30 CO2e/kWh</div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Tabs
          id="carbonTab"
          // className={styles.carbonTab}
          defaultActiveKey="2"
          tabPosition={'left'}
          style={{ height: '100%' }}
          items={items}
        />
      </div>
    </div>
  );
};
export default CarbonFootpint;
