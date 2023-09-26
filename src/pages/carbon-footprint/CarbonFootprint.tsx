import React, { useEffect, useState } from 'react';
import styles from './CarbonFootpint.module.scss';
import classNames from 'classnames';
import footLabelPath from '../../assets/images/footlabel1.png';
import { FaPassport } from 'react-icons/fa';
import { FiAlertCircle } from 'react-icons/fi';
import { BiLink } from 'react-icons/bi';
import { TbRulerMeasure } from 'react-icons/tb';
import LocationPath from '../../assets/images/location.png';
import { Popconfirm } from 'antd';
import TimeLineCharts from './TimeLineCharts';
import {
  PiNumberCircleOneBold,
  PiNumberCircleTwoBold,
  PiNumberCircleThreeBold,
  PiNumberCircleFourBold,
  PiIdentificationBadgeFill,
} from 'react-icons/pi';
import {
  MdExpandCircleDown,
  MdLabel,
  MdCalendarMonth,
  MdOutlinePlace,
} from 'react-icons/md';
import { AiFillPhone } from 'react-icons/ai';

import { useNavigate } from 'react-router-dom';

const CarbonFootpint = () => {
  const navigate = useNavigate();

  const locationDesc = () => {
    return (
      <div>
        <img src={LocationPath} alt="location" width={450} />
      </div>
    );
  };

  const decs3 = () => {
    return (
      <div style={{ width: '500px' }}>
        <b>
          A label indicating the carbon footprint and carbon footprint
          performance class the carbon footprint of the battery, calculated as
          kg of carbon dioxide equivalent per one kWh of the total energy
          provided by the battery over its expected service life; Article 7(2)
          specifies the CF performance classes. Starting from 36 months (EV
          batteries), 60 months (industrial batteries without external storage),
          78 months (LMT batteries) and 102 months (industrial batteries with
          external storage) after entry into force of the regulation (industrial
          batteries), batteries in these categories “shall bear a conspicuous,
          clearly legible and indelible label indicating the carbon footprint of
          the battery
        </b>
      </div>
    );
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
            <div className={styles.title}>Battery Carbon footprint</div>
            <div className={styles.mainTitle}>
              Administrative information about the manufacturer
            </div>
            <div className={styles.content}>
              <ul>
                <li>
                  <div className={styles.liICon}>
                    <MdLabel />
                  </div>
                  <div className={styles.liTitle} style={{ width: '350px' }}>
                    Name
                  </div>
                  <div className={styles.tag}>manufacturer A</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <MdCalendarMonth />
                  </div>
                  <div className={styles.liTitle} style={{ width: '350px' }}>
                    Date of recognition of manufacturing capacity
                  </div>
                  <div className={styles.tag}>16/01/2023</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <TbRulerMeasure />
                  </div>
                  <div className={styles.liTitle} style={{ width: '350px' }}>
                    Accreditation size
                  </div>
                  <div className={styles.tag}>1,520 ton</div>
                </li>

                <li>
                  <div className={styles.liICon}>
                    <AiFillPhone />
                  </div>
                  <div className={styles.liTitle} style={{ width: '350px' }}>
                    Contact
                  </div>
                  <div className={styles.tag}>+82 123-4567-8910</div>
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
            <div className={styles.mainTitle}>Battery Model Information</div>
            <div className={styles.content}>
              <ul>
                <li>
                  <div className={styles.liICon}>
                    <PiIdentificationBadgeFill />
                  </div>
                  <div className={styles.liTitle}>Battery identification</div>
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
            <div className={styles.mainTitle}>
              Geographic location of the battery manufacturing facility
            </div>
            <div className={styles.content}>
              <ul>
                <li style={{ position: 'relative' }}>
                  <div className={styles.liICon}>
                    <MdOutlinePlace />
                  </div>
                  <div className={styles.liTitle}>Location</div>
                  <Popconfirm
                    className={styles.popcon}
                    placement="topLeft"
                    title={'Location'}
                    description={locationDesc}
                    showCancel={false}
                  >
                    <div style={{ position: 'absolute', top: -8, left: 285 }}>
                      <FiAlertCircle />
                    </div>
                    <div className={styles.tag}>Nanjing</div>
                  </Popconfirm>
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
            <div className={styles.mainTitle}>Technical documentation</div>
            <div className={styles.content}>
              <ul>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle} style={{ width: '300px' }}>
                    ID of EU declaration of conformity
                  </div>
                  <div
                    className={classNames(styles.tag, styles.hover)}
                    onClick={() =>
                      navigate('/compliance-labels-certirications')
                    }
                  >
                    768/2008/EC
                  </div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <BiLink />
                  </div>
                  <div className={styles.liTitle} style={{ width: '300px' }}>
                    Link
                  </div>
                  <div className={styles.tag}>
                    <a
                      href="https://pubs.acs.org/doi/10.1021/es803496a"
                      target="_blank"
                    >
                      Link to carbon footprint study
                    </a>
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
            <div className={styles.mainTitle}>
              Carbon footprint performance class
            </div>
            <div className={styles.content}>
              <Popconfirm
                className={styles.popcon}
                placement="bottomLeft"
                title={'Carbon footprint label description'}
                description={decs3}
                showCancel={false}
              >
                <div className={styles.symbol} style={{ position: 'relative' }}>
                  <div
                    style={{ position: 'absolute', left: 140, top: '-5' }}
                    className={styles.alert}
                  >
                    <FiAlertCircle />
                  </div>
                  <img src={footLabelPath} alt="foot lables" width={150} />
                </div>
              </Popconfirm>
            </div>
          </div>
        </div>

        <div className={styles.boxContainer}>
          <div className={styles.space} />
          <div
            className={styles.sbox}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div className={styles.mainTitle}>
              Carbon footprint in stages over expected lifetime
            </div>
            <div className={styles.content}>
              <ul>
                <li>
                  <TimeLineCharts />
                </li>
                <li>
                  <div className={styles.liICon}>
                    <PiNumberCircleOneBold />
                  </div>
                  <Popconfirm
                    className={styles.popcon}
                    placement="bottomLeft"
                    title={'Raw matrerial acquistion and pre-processing stage'}
                    description={
                      <div style={{ width: '400px' }}>
                        Includes mining and other relevant sourcing,
                        pre-processing and transport of active materials, up to
                        the manufacturing of battery cells and battery
                        components (active materials, separator, electrolyte,
                        casings, active and passive battery components), and
                        electric or electronic components.
                      </div>
                    }
                    showCancel={false}
                  >
                    <div className={styles.liTitle} style={{ width: '500px' }}>
                      Raw matrerial acquistion and pre-processing stage
                    </div>
                  </Popconfirm>

                  <div className={styles.tag}>518 CO2e/kWh</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <PiNumberCircleTwoBold />
                  </div>
                  <Popconfirm
                    className={styles.popcon}
                    placement="bottomLeft"
                    title={'Main product production/Manufacturing stage'}
                    description={
                      <div style={{ width: '400px' }}>
                        Assembly of battery cells and assembly of batteries with
                        the battery cells and the electric or electronic
                        components
                      </div>
                    }
                    showCancel={false}
                  >
                    <div className={styles.liTitle} style={{ width: '500px' }}>
                      Main product production/Manufacturing stage
                    </div>
                  </Popconfirm>

                  <div className={styles.tag}>346 CO2e/kWh</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <PiNumberCircleThreeBold />
                  </div>
                  <Popconfirm
                    className={styles.popcon}
                    placement="bottomLeft"
                    title={'Distribution stage'}
                    description={'Transport to the point of sale'}
                    showCancel={false}
                  >
                    <div className={styles.liTitle} style={{ width: '500px' }}>
                      Distribution stage
                    </div>
                  </Popconfirm>

                  <div className={styles.tag}>346 CO2e/kWh</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <PiNumberCircleFourBold />
                  </div>
                  <Popconfirm
                    className={styles.popcon}
                    placement="bottomLeft"
                    title={'EOL and Recycling stage'}
                    description={'Collection, dismantling and recycling'}
                    showCancel={false}
                  >
                    <div className={styles.liTitle} style={{ width: '500px' }}>
                      EOL and Recycling stage
                    </div>
                  </Popconfirm>

                  <div className={styles.tag}>432 CO2e/kWh</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <MdExpandCircleDown />
                  </div>
                  <div className={styles.liTitle} style={{ width: '500px' }}>
                    All
                  </div>
                  <div className={styles.tag}>1,555 CO2e/kWh</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonFootpint;
