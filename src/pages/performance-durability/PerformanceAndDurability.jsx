import React from 'react';
import styles from './Performance.module.scss';
import { FiBox, FiAlertCircle } from 'react-icons/fi';
import { FaPassport } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';
import { AiFillStar, AiOutlineStar, AiFillEdit } from 'react-icons/ai';
import { BsChevronDoubleRight, BsBuilding } from 'react-icons/bs';
import { GrCapacity } from 'react-icons/gr';
import { PiDotOutlineBold } from 'react-icons/pi';
const PerformancAndDurability = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.boxContainer}>
          <div className={styles.leftBox} style={{ marginRight: '20px' }}>
            <div
              className={styles.box}
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div className={styles.mainTitle}>
                State of health, battery capacity, energy and voltage
              </div>
              <div className={styles.content}>
                <ul>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>Rated capacity</div>
                    <div className={styles.tag}>232 Ah</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>Remaining capacity</div>
                    <div className={styles.tag}>230 Ah</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>Capacity fade</div>

                    <div className={styles.tag}>1%</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>
                      Certified usable battery energy
                    </div>
                    <div className={styles.tag}>68KWh</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>
                      Remaining usable battery energy
                    </div>
                    <div className={styles.tag}>67Kwh</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>
                      State of certified energy (SOCE)
                    </div>
                    <div className={styles.tag}>95%</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>State of charge (SoC)</div>
                    <div className={styles.tag}>98%</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>Minimum voltage</div>
                    <div className={styles.tag}>400V</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>Maximum voltage</div>
                    <div className={styles.tag}>800V</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>Nominal voltage</div>
                    <div className={styles.tag}>657V</div>
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
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>
                      Original power capability
                    </div>
                    <div className={styles.tag}>147 kW</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>Power capabiltiy fade</div>
                    <div className={styles.tag}>1%</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>
                      Remaining power capability
                    </div>

                    <div className={styles.tag}>145 KW</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>
                      Maximum permitted battery power
                    </div>
                    <div className={styles.tag}>80%</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>
                      Ratio between nominal battery power and battery energy
                    </div>
                    <div className={styles.tag}>214%</div>
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
                Round trip energy efficiency & Self discharge
              </div>
              <div className={styles.content}>
                <ul>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>
                      Initial round trip energy efficiency
                    </div>
                    <div className={styles.tag}>95%</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>
                      Round trip energy efficiency at 50% of cycle-life
                    </div>
                    <div className={styles.tag}>87%</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>
                      Remaining round trip energy efficiency
                    </div>

                    <div className={styles.tag}>Not applicable</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>
                      Energy round trip efficiency fade
                    </div>
                    <div className={styles.tag}>None</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>
                      Initial self-discharging rate
                    </div>
                    <div className={styles.tag}>Not applicable</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>
                      Current self discharging rate
                    </div>
                    <div className={styles.tag}>Not applicable</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>
                      Evolution of self discharging rates
                    </div>
                    <div className={styles.tag}>Not applicable</div>
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
                Resistance and electrochemical impedance
              </div>
              <div className={styles.content}>
                <ul>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>
                      Initial internal battery Cell resistance
                    </div>
                    <div className={styles.tag}>1 milliohm </div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>
                      Current internal battery Cell resistance
                    </div>
                    <div className={styles.tag}>1 milliohm</div>
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
                Internal battery cell/ module/ pack resistance increase
              </div>
              <div className={styles.content}>
                <ul>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>Cell level</div>
                    <div className={styles.tag}>1 milliohm</div>
                  </li>

                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>Pack level</div>
                    <div className={styles.tag}>1 milliohm</div>
                  </li>

                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>module level</div>
                    <div className={styles.tag}>None</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.RightBox}>
            <div
              className={styles.box}
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div className={styles.mainTitle}>
                Current battery cell/ module/ pack resistance increase
              </div>
              <div className={styles.content}>
                <ul>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>Cell level</div>

                    <div className={styles.tag}>1 milliohm </div>
                  </li>

                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>Pack level</div>
                    <div className={styles.tag}>1 milliohm </div>
                  </li>

                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>module level</div>
                    <div className={styles.tag}>None</div>
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
              <div className={styles.mainTitle}>Battery lifetime</div>
              <div className={styles.content}>
                <ul>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>
                      Expected lifetime: Number of chargedischarge cycles
                    </div>
                    <div className={styles.tag}>1,000</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>
                      Number of full charging and discharging cycles
                    </div>
                    <div className={styles.tag}>800</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>
                      Cycle-life Reference test
                    </div>

                    <div className={styles.tag}>
                      IEC 62660-2, EUCAR,
                      {/* [European Council for Automotive R&D) */}
                      <br /> DOE
                      {/* (U.S. Department of Energy) */}
                    </div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>
                      C-rate of relevant cyclelife test
                    </div>
                    <div className={styles.tag}>1C, 0.5C, 2C, 10C</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>Energy throughput</div>
                    <div className={styles.tag}>Not applicable</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>Capacity throughput</div>
                    <div className={styles.tag}>Not applicable</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>
                      Capacity threshold for exhaustion
                    </div>
                    <div className={styles.tag}>75%(70~80%)</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>
                      SOCE threshold for exhaustion
                    </div>
                    <div className={styles.tag}>15%(10~20%)</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>
                      Warranty period of the battery
                    </div>
                    <div className={styles.tag}>8 years</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>
                      Date of manufacturing of the battery
                    </div>
                    <div className={styles.tag}>Not applicable</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>
                      Date of putting the battery into service
                    </div>
                    <div className={styles.tag}>Not applicable</div>
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
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>
                      Temperature range idle state (lower boundary)
                    </div>
                    <div className={styles.tag}>0°C</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>
                      Temperature range idle state (upper boundary)
                    </div>
                    <div className={styles.tag}>30°C</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>
                      Time spent in extreme temperatures above boundary
                    </div>

                    <div className={styles.tag}>0 Minutes</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>
                      Time spent in extreme temperatures below boundary
                    </div>
                    <div className={styles.tag}>0 Minutes</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>
                      Time spent charging during extreme temperatures above
                      boundary
                    </div>
                    <div className={styles.tag}>0 Minutes</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>
                      Time spent charging during extreme temperatures below
                      boundary
                    </div>
                    <div className={styles.tag}>0 Minutes</div>
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
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>
                      Number of deep discharge events
                    </div>
                    <div className={styles.tag}>1</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>
                      Number of overcharge events
                    </div>
                    <div className={styles.tag}>0</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <PiDotOutlineBold />
                    </div>
                    <div className={styles.liTitle}>
                      Information on accidents
                    </div>
                    <div className={styles.tag}>None</div>
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
