import React from 'react';
import styles from './Performance.module.scss';
import EVBatteryPath from '../../assets/images/EVBattery.jpeg';
import { FiBox, FiAlertCircle } from 'react-icons/fi';
import { FaPassport } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';
import { AiFillStar, AiOutlineStar, AiFillEdit } from 'react-icons/ai';
import { MdGrade } from 'react-icons/md';
import { TbHealthRecognition } from 'react-icons/tb';
import { BsChevronDoubleRight, BsBuilding } from 'react-icons/bs';
import { Popconfirm, message } from 'antd';

const PerformancAndDurability = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.boxContainer}>
          <div className={styles.leftBox}>
            <div
              className={styles.box}
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div className={styles.mainTitle}>
                state of health, battery capacity, energy and voltage
              </div>
              <div className={styles.content}>
                <ul>
                  <li>
                    <div className={styles.liICon}>
                      <FaPassport />
                    </div>
                    <div className={styles.liTitle}>Rated capacity</div>
                    <div className={styles.tag}>
                      RSTE2291345831, Tesla Model 3 Standard Range NMC-M50
                    </div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <FiBox />
                    </div>
                    <div className={styles.liTitle}>Remaining capacity</div>
                    <div className={styles.tag}>NMC-M50</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <BsBuilding />
                    </div>
                    <div className={styles.liTitle}>Capacity fade</div>

                    <div className={styles.tag}>Aipim</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <MdDateRange />
                    </div>
                    <div className={styles.liTitle}>
                      Certified usable battery energy
                    </div>
                    <div className={styles.tag}>16/01/2023</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <AiFillEdit />
                    </div>
                    <div className={styles.liTitle}>
                      Remaining usable battery energy
                    </div>
                    <div className={styles.tag}>Not audited</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <AiFillEdit />
                    </div>
                    <div className={styles.liTitle}>
                      State of certified energy (SOCE)
                    </div>
                    <div className={styles.tag}>Not audited</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <AiFillEdit />
                    </div>
                    <div className={styles.liTitle}>State of charge (SoC)</div>
                    <div className={styles.tag}>Not audited</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <AiFillEdit />
                    </div>
                    <div className={styles.liTitle}>Minimum voltage</div>
                    <div className={styles.tag}>Not audited</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <AiFillEdit />
                    </div>
                    <div className={styles.liTitle}>Maximum voltage</div>
                    <div className={styles.tag}>Not audited</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <AiFillEdit />
                    </div>
                    <div className={styles.liTitle}>Nominal voltage</div>
                    <div className={styles.tag}>Not audited</div>
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
              <div className={styles.mainTitle}>Power capability</div>
              <div className={styles.content}>
                <ul>
                  <li>
                    <div className={styles.liICon}>
                      <FaPassport />
                    </div>
                    <div className={styles.liTitle}>
                      Original power capability
                    </div>
                    <div className={styles.tag}>
                      RSTE2291345831, Tesla Model 3 Standard Range NMC-M50
                    </div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <FiBox />
                    </div>
                    <div className={styles.liTitle}>Power capabiltiy fade</div>
                    <div className={styles.tag}>NMC-M50</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <BsBuilding />
                    </div>
                    <div className={styles.liTitle}>
                      Remaining power capability
                    </div>

                    <div className={styles.tag}>Aipim</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <MdDateRange />
                    </div>
                    <div className={styles.liTitle}>
                      Maximum permitted battery power
                    </div>
                    <div className={styles.tag}>16/01/2023</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <AiFillEdit />
                    </div>
                    <div className={styles.liTitle}>
                      Ratio between nominal battery power and battery energy
                    </div>
                    <div className={styles.tag}>Not audited</div>
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
                round trip energy efficiency & self discharge
              </div>
              <div className={styles.content}>
                <ul>
                  <li>
                    <div className={styles.liICon}>
                      <FaPassport />
                    </div>
                    <div className={styles.liTitle}>
                      Initial round trip energy efficiency
                    </div>
                    <div className={styles.tag}>
                      RSTE2291345831, Tesla Model 3 Standard Range NMC-M50
                    </div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <FiBox />
                    </div>
                    <div className={styles.liTitle}>
                      Round trip energy efficiency at 50% of cycle-life
                    </div>
                    <div className={styles.tag}>NMC-M50</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <BsBuilding />
                    </div>
                    <div className={styles.liTitle}>
                      Remaining round trip energy efficiency
                    </div>

                    <div className={styles.tag}>Aipim</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <MdDateRange />
                    </div>
                    <div className={styles.liTitle}>
                      Energy round trip efficiency fade
                    </div>
                    <div className={styles.tag}>16/01/2023</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <AiFillEdit />
                    </div>
                    <div className={styles.liTitle}>
                      Initial self-discharging rate
                    </div>
                    <div className={styles.tag}>Not audited</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <AiFillEdit />
                    </div>
                    <div className={styles.liTitle}>
                      Current self discharging rate
                    </div>
                    <div className={styles.tag}>Not audited</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <AiFillEdit />
                    </div>
                    <div className={styles.liTitle}>
                      Evolution of self discharging rates
                    </div>
                    <div className={styles.tag}>Not audited</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.midBox}>
            <div
              className={styles.box}
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div className={styles.mainTitle}>
                internal resistance and electrochemical impedance
              </div>
              <div className={styles.content}>
                <ul>
                  <li>
                    <div className={styles.liICon}>
                      <FaPassport />
                    </div>
                    <div className={styles.liTitle}>
                      Initial internal battery cell/ module/ pack resistance(1);
                      Cell level
                    </div>
                    <div className={styles.tag}>
                      RSTE2291345831, Tesla Model 3 Standard Range NMC-M50
                    </div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <FiBox />
                    </div>
                    <div className={styles.liTitle}>
                      Current internal battery cell/ module/ pack resistance(1)
                      ; Cell level
                    </div>
                    <div className={styles.tag}>NMC-M50</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <BsBuilding />
                    </div>
                    <div className={styles.liTitle}>
                      Internal battery cell/ module/ pack resistance increase(1)
                      : Cell level
                    </div>

                    <div className={styles.tag}>Aipim</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <MdDateRange />
                    </div>
                    <div className={styles.liTitle}>
                      Initial internal battery cell/ module/ pack resistance(2)
                      : Pack level
                    </div>
                    <div className={styles.tag}>16/01/2023</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <AiFillEdit />
                    </div>
                    <div className={styles.liTitle}>
                      Internal battery cell/ module/ pack resistance increase(2)
                      ;Pack level
                    </div>
                    <div className={styles.tag}>Not audited</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <AiFillEdit />
                    </div>
                    <div className={styles.liTitle}>
                      Internal battery cell/ module/ pack resistance increase(2)
                      ;Pack level
                    </div>
                    <div className={styles.tag}>Not audited</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <AiFillEdit />
                    </div>
                    <div className={styles.liTitle}>
                      Initial internal battery cell/ module/ pack resistance(3)
                      : module level
                    </div>
                    <div className={styles.tag}>Not audited</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <AiFillEdit />
                    </div>
                    <div className={styles.liTitle}>
                      Current internal battery cell/ module/ pack resistance(3)
                      ;Module level
                    </div>
                    <div className={styles.tag}>Not audited</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <AiFillEdit />
                    </div>
                    <div className={styles.liTitle}>
                      Internal battery cell/ module/ pack resistance increase(3)
                      ; Module level
                    </div>
                    <div className={styles.tag}>Not audited</div>
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
                internal resistance and electrochemical impedance
              </div>
              <div className={styles.content}>
                <ul>
                  <li>
                    <div className={styles.liICon}>
                      <FaPassport />
                    </div>
                    <div className={styles.liTitle}>
                      Initial internal battery cell/ module/ pack resistance(1);
                      Cell level
                    </div>
                    <div className={styles.tag}>
                      RSTE2291345831, Tesla Model 3 Standard Range NMC-M50
                    </div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <FiBox />
                    </div>
                    <div className={styles.liTitle}>
                      Current internal battery cell/ module/ pack resistance(1)
                      ; Cell level
                    </div>
                    <div className={styles.tag}>NMC-M50</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <BsBuilding />
                    </div>
                    <div className={styles.liTitle}>
                      Internal battery cell/ module/ pack resistance increase(1)
                      : Cell level
                    </div>

                    <div className={styles.tag}>Aipim</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <MdDateRange />
                    </div>
                    <div className={styles.liTitle}>
                      Initial internal battery cell/ module/ pack resistance(2)
                      : Pack level
                    </div>
                    <div className={styles.tag}>16/01/2023</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <AiFillEdit />
                    </div>
                    <div className={styles.liTitle}>
                      Internal battery cell/ module/ pack resistance increase(2)
                      ;Pack level
                    </div>
                    <div className={styles.tag}>Not audited</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <AiFillEdit />
                    </div>
                    <div className={styles.liTitle}>
                      Internal battery cell/ module/ pack resistance increase(2)
                      ;Pack level
                    </div>
                    <div className={styles.tag}>Not audited</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <AiFillEdit />
                    </div>
                    <div className={styles.liTitle}>
                      Initial internal battery cell/ module/ pack resistance(3)
                      : module level
                    </div>
                    <div className={styles.tag}>Not audited</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <AiFillEdit />
                    </div>
                    <div className={styles.liTitle}>
                      Current internal battery cell/ module/ pack resistance(3)
                      ;Module level
                    </div>
                    <div className={styles.tag}>Not audited</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <AiFillEdit />
                    </div>
                    <div className={styles.liTitle}>
                      Internal battery cell/ module/ pack resistance increase(3)
                      ; Module level
                    </div>
                    <div className={styles.tag}>Not audited</div>
                  </li>
                </ul>
              </div>
            </div>

            {/* <div className={styles.space} /> */}
          </div>

          <div className={styles.RightBox}>
            <div
              className={styles.box}
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div className={styles.mainTitle}>Battery lifetime</div>
              <div className={styles.content}>
                <ul>
                  <li>
                    <div className={styles.liICon}>
                      <FaPassport />
                    </div>
                    <div className={styles.liTitle}>
                      Expected lifetime: Number of chargedischarge cycles
                    </div>
                    <div className={styles.tag}>
                      RSTE2291345831, Tesla Model 3 Standard Range NMC-M50
                    </div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <FiBox />
                    </div>
                    <div className={styles.liTitle}>
                      Number of full charging and discharging cycles
                    </div>
                    <div className={styles.tag}>NMC-M50</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <BsBuilding />
                    </div>
                    <div className={styles.liTitle}>
                      Cycle-life Reference test
                    </div>

                    <div className={styles.tag}>Aipim</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <MdDateRange />
                    </div>
                    <div className={styles.liTitle}>
                      C-rate of relevant cyclelife test
                    </div>
                    <div className={styles.tag}>16/01/2023</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <AiFillEdit />
                    </div>
                    <div className={styles.liTitle}>Energy throughput</div>
                    <div className={styles.tag}>Not audited</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <AiFillEdit />
                    </div>
                    <div className={styles.liTitle}>Capacity throughput</div>
                    <div className={styles.tag}>Not audited</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <AiFillEdit />
                    </div>
                    <div className={styles.liTitle}>
                      Capacity threshold for exhaustion
                    </div>
                    <div className={styles.tag}>Not audited</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <AiFillEdit />
                    </div>
                    <div className={styles.liTitle}>
                      SOCE threshold for exhaustion
                    </div>
                    <div className={styles.tag}>Not audited</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <AiFillEdit />
                    </div>
                    <div className={styles.liTitle}>
                      Warranty period of the battery
                    </div>
                    <div className={styles.tag}>Not audited</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <AiFillEdit />
                    </div>
                    <div className={styles.liTitle}>
                      Date of manufacturing of the battery
                    </div>
                    <div className={styles.tag}>Not audited</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <AiFillEdit />
                    </div>
                    <div className={styles.liTitle}>
                      Date of putting the battery into service
                    </div>
                    <div className={styles.tag}>Not audited</div>
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
              <div className={styles.mainTitle}>Temperature conditions</div>
              <div className={styles.content}>
                <ul>
                  <li>
                    <div className={styles.liICon}>
                      <FaPassport />
                    </div>
                    <div className={styles.liTitle}>
                      Temperature range idle state (lower boundary)
                    </div>
                    <div className={styles.tag}>
                      RSTE2291345831, Tesla Model 3 Standard Range NMC-M50
                    </div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <FiBox />
                    </div>
                    <div className={styles.liTitle}>
                      Temperature range idle state (upper boundary)
                    </div>
                    <div className={styles.tag}>NMC-M50</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <BsBuilding />
                    </div>
                    <div className={styles.liTitle}>
                      Time spent in extreme temperatures above boundary
                    </div>

                    <div className={styles.tag}>Aipim</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <MdDateRange />
                    </div>
                    <div className={styles.liTitle}>
                      Time spent in extreme temperatures below boundary
                    </div>
                    <div className={styles.tag}>16/01/2023</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <AiFillEdit />
                    </div>
                    <div className={styles.liTitle}>
                      Time spent charging during extreme temperatures above
                      boundary
                    </div>
                    <div className={styles.tag}>Not audited</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <AiFillEdit />
                    </div>
                    <div className={styles.liTitle}>
                      Time spent charging during extreme temperatures below
                      boundary
                    </div>
                    <div className={styles.tag}>Not audited</div>
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
              <div className={styles.mainTitle}>Negative events</div>
              <div className={styles.content}>
                <ul>
                  <li>
                    <div className={styles.liICon}>
                      <FaPassport />
                    </div>
                    <div className={styles.liTitle}>
                      Number of deep discharge events
                    </div>
                    <div className={styles.tag}>
                      RSTE2291345831, Tesla Model 3 Standard Range NMC-M50
                    </div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <FiBox />
                    </div>
                    <div className={styles.liTitle}>
                      Number of overcharge events
                    </div>
                    <div className={styles.tag}>NMC-M50</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <BsBuilding />
                    </div>
                    <div className={styles.liTitle}>
                      Information on accidents
                    </div>
                    <div className={styles.tag}>Aipim</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PerformancAndDurability;

// import React from 'react';
// import styles from './Performance.module.scss';

// const PerformancAndDurability = () => {
//   return (
//     <div className={styles.page}>
//       <div className={styles.container}>
//         <div className={styles.lBox}>
//           state of health, battery capacity, energy and voltage(건강 상태,
//           배터리 용량, 에너지 및 전압)
//         </div>
//         <div className={styles.lBox}>Power capability</div>
//         <div className={styles.lBox}></div>
//         <div className={styles.lBox}></div>
//         <div className={styles.lBox}>Temperature conditions</div>
//       </div>
//       <div className={styles.content}>
//         <div className={styles.rBox}>
//           internal resistance and electrochemical impedance(내부저항과
//           전기화학적 임피던스)
//         </div>
//         <div className={styles.rBox}></div>
//         <div className={styles.rBox}>Battery lifetime</div>
//         <div className={styles.rBox}>Negative events</div>
//       </div>
//     </div>
//   );
// };
// export default PerformancAndDurability;
