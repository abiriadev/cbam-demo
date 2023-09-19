import React, { useState } from 'react';
import styles from './CarbonFootpint.module.scss';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const INFO_DATA = [
  {
    id: 0,
    text: 'Manufacturer information 제조업체명 상표명 또는 상표 우편주소 웹주소 이메일주소',
    src: 'http://via.placeholder.com/220x300',
  },
  {
    id: 1,
    text: 'Battery model information 배터리 식별 정보',
    src: 'http://via.placeholder.com/220x300',
  },
  {
    id: 2,
    text: 'Geographic location of the battery manufacturing facility 제조장소(공장) 주소 [국가, 도시, 거리, 건물(필요한 경우)] *시설 고유식별자 사용 추천',
    src: 'http://via.placeholder.com/220x300',
  },
];

const CarbonFootpint = () => {
  const [slide, setSlide] = useState(0);
  const handleSlidePrev = () => {
    if (slide === 0) {
      setSlide(INFO_DATA.length - 1);
    } else {
      setSlide(slide - 1);
    }
  };
  const handleSlideNext = () => {
    if (slide === INFO_DATA.length - 1) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  };
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div>General Information</div>
      </div>
      <div className={styles.content}>
        <div className={styles.arrow} onClick={handleSlidePrev}>
          <AiOutlineLeft />
        </div>
        <div className={styles.info}>
          {INFO_DATA.map((data) => (
            <ul key={data.id}>
              <li>{data.text}</li>
              <img src={data.src} />
            </ul>
          ))}
        </div>
        <div className={styles.arrow} onClick={handleSlideNext}>
          <AiOutlineRight />
        </div>
      </div>
    </div>
  );
};
export default CarbonFootpint;
