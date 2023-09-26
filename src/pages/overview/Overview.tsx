import React from 'react';
import styles from './Overview.module.scss';
import EVBatteryPath from '../../assets/images/EVBattery.jpeg';
import EVBattery2Path from '../../assets/images/EVBattery2.png';
import { FiBox, FiAlertCircle } from 'react-icons/fi';
import { FaPassport, FaTruck, FaRecycle } from 'react-icons/fa';
import { FaUser, FaUserLarge } from 'react-icons/fa6';
import { MdDateRange } from 'react-icons/md';
import { AiFillStar, AiOutlineStar, AiFillEdit } from 'react-icons/ai';
import {
  PiBatteryFullDuotone,
  PiBatteryHighDuotone,
  PiBatteryMediumDuotone,
  PiBatteryLowDuotone,
  PiBatteryWarningDuotone,
  PiBatteryEmptyDuotone,
} from 'react-icons/pi';
import { LuFileType2 } from 'react-icons/lu';
import { MdGrade, MdHealthAndSafety } from 'react-icons/md';
import { TbHealthRecognition } from 'react-icons/tb';
import { BsChevronDoubleRight, BsBuilding } from 'react-icons/bs';
import { Popconfirm, message } from 'antd';
import { GoDotFill } from 'react-icons/go';
import { GrCapacity } from 'react-icons/gr';
import { ImPower } from 'react-icons/im';
import { GiFootprint, GiAtom } from 'react-icons/gi';
const Overview = () => {
  const betteryDesc = () => {
    return (
      <div className={styles.batteryInfo}>
        <div>
          <div className={styles.battery}>
            <PiBatteryFullDuotone />
          </div>
          <div className={styles.percent}>100%</div>
          <div className={styles.title}>Mercury</div>
          <div className={styles.rigthIcon}>
            <BsChevronDoubleRight />
          </div>
          <div className={styles.subText}>
            Mercury is the small planet in the Solar System
          </div>
        </div>
        <div>
          <div className={styles.battery}>
            <PiBatteryHighDuotone />
          </div>
          <div className={styles.percent}>85%</div>
          <div className={styles.title}>Neptune</div>
          <div className={styles.rigthIcon}>
            <BsChevronDoubleRight />
          </div>
          <div className={styles.subText}>
            Neptune is the fouth-largest in the Solor System
          </div>
        </div>
        <div>
          <div className={styles.battery}>
            <PiBatteryMediumDuotone />
          </div>
          <div className={styles.percent}>70%</div>
          <div className={styles.title}>Mars</div>
          <div className={styles.rigthIcon}>
            <BsChevronDoubleRight />
          </div>
          <div className={styles.subText}>
            Despite being red, Mars is actually a cold place
          </div>
        </div>
        <div>
          <div className={styles.battery}>
            <PiBatteryLowDuotone />
          </div>
          <div className={styles.percent}>55%</div>
          <div className={styles.title}>Saturn</div>
          <div className={styles.rigthIcon}>
            <BsChevronDoubleRight />
          </div>
          <div className={styles.subText}>
            Saturn is composed of hydrogen and heliium
          </div>
        </div>
        <div>
          <div className={styles.battery}>
            <PiBatteryEmptyDuotone />
          </div>
          <div className={styles.percent}>40%</div>
          <div className={styles.title}>Venus</div>
          <div className={styles.rigthIcon}>
            <BsChevronDoubleRight />
          </div>
          <div className={styles.subText}>
            It has a beautiful name and is the second planet
          </div>
        </div>
        <div>
          <div className={styles.battery}>
            <PiBatteryWarningDuotone />
          </div>
          <div className={styles.percent}>25%</div>
          <div className={styles.title}>Jupiter</div>
          <div className={styles.rigthIcon}>
            <BsChevronDoubleRight />
          </div>
          <div className={styles.subText}>
            Jupiter is the biggest planet in the Solar System
          </div>
        </div>
      </div>
    );
  };

  const starDesc = () => {
    return (
      <div className={styles.starInfo}>
        <div>
          <div className={styles.starInfoIcon}>
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
          <div className={styles.text}>Data is self-reported</div>
        </div>
        <div>
          <div className={styles.starInfoIcon}>
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
          <div className={styles.text}>
            Data is verified by a member of the supply chain
          </div>
        </div>
        <div>
          <div className={styles.starInfoIcon}>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <div className={styles.text}>
            Data is audited by authorized verifier or auditor
          </div>
        </div>
        <div>
          <div className={styles.starInfoIcon}>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div className={styles.text}>
            Data collected via authorized external provider and additionally
            audited
          </div>
        </div>
      </div>
    );
  };

  const confirm = () => {
    message.info('Clicked on Yes.');
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.boxContainer}>
          <div className={styles.box}>
            <div className={styles.overview}>
              <div>
                <div className={styles.title}>Battery Passport Overview</div>
                <br />
                <br />
                <div className={styles.content}>
                  <ul>
                    <li>
                      <div className={styles.liICon}>
                        <FaPassport />
                      </div>
                      <div className={styles.liTitle}>Battery Passport ID</div>
                      <div className={styles.tag}>RSTE2291345831</div>
                    </li>
                    <li>
                      <div className={styles.liICon}>
                        <BsBuilding />
                      </div>
                      <div className={styles.liTitle}>Passport Issued For</div>

                      <div className={styles.tag}>Aipim</div>
                    </li>
                    <li>
                      <div className={styles.liICon}>
                        <MdDateRange />
                      </div>
                      <div className={styles.liTitle}>Passport Issued Date</div>
                      <div className={styles.tag}>16/01/2023</div>
                    </li>
                    <li>
                      <div className={styles.liICon}>
                        <AiFillEdit />
                      </div>
                      <div className={styles.liTitle}>Data Auditor</div>
                      <div className={styles.tag}>Not audited</div>
                    </li>
                    <li>
                      <div className={styles.liICon}>
                        <MdGrade />
                      </div>
                      <Popconfirm
                        className={styles.popcon}
                        placement="topLeft"
                        title={'Data quality-into information'}
                        description={starDesc}
                        onConfirm={confirm}
                        showCancel={false}
                      >
                        <div
                          className={styles.liTitle}
                          style={{
                            position: 'relative',
                          }}
                        >
                          <div
                            style={{
                              position: 'absolute',
                              top: '-5px',
                              left: '110px',
                            }}
                          >
                            <FiAlertCircle />
                          </div>
                          Data Quality Info
                        </div>
                      </Popconfirm>
                      <div className={styles.tagDiv}>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                    </li>
                    <li>
                      <div className={styles.liICon}>
                        <TbHealthRecognition />
                      </div>

                      <Popconfirm
                        className={styles.popcon}
                        placement="bottomLeft"
                        title={'Battery health info'}
                        description={betteryDesc}
                        onConfirm={confirm}
                        showCancel={false}
                      >
                        <div
                          className={styles.liTitle}
                          style={{
                            position: 'relative',
                          }}
                        >
                          <div
                            style={{
                              position: 'absolute',
                              top: '-5px',
                              left: '96px',
                            }}
                          >
                            <FiAlertCircle />
                          </div>
                          Battery Health
                        </div>
                      </Popconfirm>

                      <div className={styles.tagDiv}>
                        <PiBatteryFullDuotone />
                      </div>
                      <div className={styles.tag} style={{ marginLeft: '5px' }}>
                        100%
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <img src={EVBattery2Path} alt="" width={320} />
              </div>
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
            {/* <div className={styles.mainTitle}>Required Infomation</div> */}
            <div className={styles.mainTitle}>General</div>
            <div className={styles.content}>
              <ul>
                <li>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      width: '100%',
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'row',
                      }}
                    >
                      <div className={styles.liICon}>
                        <LuFileType2 />
                      </div>
                      <div className={styles.liTitle}>Type</div>
                      <div className={styles.tag}>EV</div>
                    </div>
                    <div
                      style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'row',
                      }}
                    >
                      <div className={styles.liICon}>
                        <FiBox />
                      </div>
                      <div className={styles.liTitle}>Battery Model</div>
                      <div className={styles.tag}>NMC-M50</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className={styles.mainTitle}>Performance</div>
            <div className={styles.content}>
              <ul>
                <li>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      width: '100%',
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'row',
                      }}
                    >
                      <div className={styles.liICon}>
                        <GrCapacity />
                      </div>
                      <div className={styles.liTitle}>Rated Capacity </div>
                      <div className={styles.tag}>120 kWh</div>
                    </div>
                    <div
                      style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'row',
                      }}
                    >
                      <div className={styles.liICon}>
                        <ImPower />
                      </div>
                      <div className={styles.liTitle}>Original Power</div>
                      <div className={styles.tag}>350 kW</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className={styles.mainTitle}>Health</div>
            <div className={styles.content}>
              <ul>
                <li>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      width: '100%',
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'row',
                      }}
                    >
                      <div className={styles.liICon}>
                        <MdHealthAndSafety />
                      </div>
                      <div className={styles.liTitle}>State Of Health(SOH)</div>
                      <div className={styles.tag}>12 %</div>
                    </div>

                    <div
                      style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'row',
                      }}
                    >
                      <div className={styles.liICon}>
                        <FaRecycle />
                      </div>
                      <div className={styles.liTitle}>Charging Cycles</div>
                      <div className={styles.tag}>20/1200</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className={styles.mainTitle}>Sustainability</div>
            <div className={styles.content}>
              <ul>
                <li>
                  <div className={styles.liICon}>
                    <FaUserLarge />
                  </div>
                  <Popconfirm
                    className={styles.popcon}
                    placement="topLeft"
                    title={'Human Rights index information'}
                    description={
                      <div style={{ width: '500px' }}>
                        The Human Rights index for this battery is calculated
                        based on the Human Rights Rulebook issued by the Global
                        Battery Alliance. The Human Rights index is calculated
                        through averaging all individually reported Human Rights
                        scores of all supply chain participants. Disclaimer: the
                        calculation of the Human Rights index for this Battery
                        Passport included only the Cobalt supply chain.
                      </div>
                    }
                    showCancel={false}
                  >
                    <div
                      className={styles.liTitle}
                      style={{
                        position: 'relative',
                        width: '285px',
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          top: '-5px',
                          left: '135px',
                        }}
                      >
                        <FiAlertCircle />
                      </div>
                      Human Rights Index
                    </div>
                  </Popconfirm>

                  <div className={styles.tag}>Advanced</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <FaUser />
                  </div>
                  <Popconfirm
                    className={styles.popcon}
                    placement="topLeft"
                    title={'Child Rights index information'}
                    description={
                      <div style={{ width: '500px' }}>
                        The Child Labor index for this battery is calculated
                        based on the Child Labor Rulebook issued by the Global
                        Battery Alliance. The Child Labor index is calculated
                        through averaging all individually reported Child Labor
                        scores of all supply chain participants. Disclaimer: the
                        calculation of the Child Labor index for this Battery
                        Passport included only the Cobalt supply chain.
                      </div>
                    }
                    onConfirm={confirm}
                    showCancel={false}
                  >
                    <div
                      className={styles.liTitle}
                      style={{
                        position: 'relative',
                        width: '285px',
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          top: '-5px',
                          left: '118px',
                        }}
                      >
                        <FiAlertCircle />
                      </div>
                      Child Labor Index
                    </div>
                  </Popconfirm>
                  <div className={styles.tag}>Advanced</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <GiFootprint />
                  </div>
                  <div className={styles.liTitle} style={{ width: '285px' }}>
                    Battery Carbon Footprint
                  </div>
                  <div className={styles.tag}>110 CO2e/kWh</div>
                </li>
                <li>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      width: '100%',
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'row',
                      }}
                    >
                      <div className={styles.liICon}>
                        <GiAtom />
                      </div>
                      <div
                        className={styles.liTitle}
                        style={{ width: '100px' }}
                      >
                        Ni
                      </div>
                      <div className={styles.tag}>47%</div>
                    </div>
                    <div
                      style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'row',
                      }}
                    >
                      <div className={styles.liICon}>
                        <GiAtom />
                      </div>
                      <div
                        className={styles.liTitle}
                        style={{ width: '100px' }}
                      >
                        Co
                      </div>
                      <div className={styles.tag}>9%</div>
                    </div>
                    <div
                      style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'row',
                      }}
                    >
                      <div className={styles.liICon}>
                        <GiAtom />
                      </div>
                      <div
                        className={styles.liTitle}
                        style={{ width: '100px' }}
                      >
                        Li
                      </div>
                      <div className={styles.tag}>19%</div>
                    </div>
                    <div
                      style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'row',
                      }}
                    >
                      <div className={styles.liICon}>
                        <GiAtom />
                      </div>
                      <div
                        className={styles.liTitle}
                        style={{ width: '100px' }}
                      >
                        Pb
                      </div>
                      <div className={styles.tag}>0%</div>
                    </div>
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
              // height: '100%',
            }}
          >
            <div className={styles.mainTitle}>Chain of Custody</div>
            <div
              className={styles.content}
              style={{
                // height: '100%',
                flexDirection: 'row',
              }}
            >
              <div
                style={{
                  width: '30px',
                  paddingTop: '4px',
                  paddingLeft: '4px',
                  marginRight: '10px',
                }}
              >
                <div
                  style={{
                    fontSize: '24px',
                    width: '30px',
                  }}
                >
                  <FaTruck />
                </div>
              </div>
              <div
                style={{
                  borderLeft: '1px solid #d9d9d9',
                  height: '90%',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    marginBottom: '20px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '20px',
                      position: 'absolute',
                      left: '-10px',
                      color: '#d9d9d9',
                    }}
                  >
                    <GoDotFill />
                  </div>
                  <div
                    style={{
                      paddingLeft: '20px',
                      color: 'gray',
                    }}
                  >
                    09/07/2022, 10:00
                    <div style={{ color: 'black' }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    position: 'relative',
                    marginBottom: '20px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '20px',
                      position: 'absolute',
                      left: '-10px',
                      color: '#d9d9d9',
                    }}
                  >
                    <GoDotFill />
                  </div>
                  <div
                    style={{
                      paddingLeft: '20px',
                      color: 'gray',
                    }}
                  >
                    09/07/2022, 10:00
                    <div style={{ color: 'black' }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    position: 'relative',
                    marginBottom: '20px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '20px',
                      position: 'absolute',
                      left: '-10px',
                      color: '#d9d9d9',
                    }}
                  >
                    <GoDotFill />
                  </div>
                  <div
                    style={{
                      paddingLeft: '20px',
                      color: 'gray',
                    }}
                  >
                    09/07/2022, 10:00
                    <div style={{ color: 'black' }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    position: 'relative',
                    marginBottom: '20px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '20px',
                      position: 'absolute',
                      left: '-10px',
                      color: '#d9d9d9',
                    }}
                  >
                    <GoDotFill />
                  </div>
                  <div
                    style={{
                      paddingLeft: '20px',
                      color: 'gray',
                    }}
                  >
                    09/07/2022, 10:00
                    <div style={{ color: 'black' }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    position: 'relative',
                    marginBottom: '20px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '20px',
                      position: 'absolute',
                      left: '-10px',
                      color: '#d9d9d9',
                    }}
                  >
                    <GoDotFill />
                  </div>
                  <div
                    style={{
                      paddingLeft: '20px',
                      color: 'gray',
                    }}
                  >
                    09/07/2022, 10:00
                    <div style={{ color: 'black' }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
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

export default Overview;
