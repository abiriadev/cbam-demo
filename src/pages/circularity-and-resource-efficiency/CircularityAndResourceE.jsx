import React from 'react';
import styles from './CircularityAndResource.module.scss';
import { Button } from 'antd';
import { FaPassport } from 'react-icons/fa';
import { AiFillRightCircle, AiOutlineClose } from 'react-icons/ai';

const CircularityAndResourceEfficiency = () => {
  const onClick = () => {
    let ele = document.getElementById('prepare');
    if (ele != undefined) {
      ele.style.visibility = 'visible';
    }
  };
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.boxContainer}>
          <div
            style={{
              marginTop: '30px',
              paddingLeft: '30px',
              width: '100%',
            }}
          >
            <div className={styles.title}>Recycled & Renewable Content</div>
          </div>
          <div
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <div
              className={styles.topBox}
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div className={styles.mainTitle}>
                Pre-consumer recycled share
              </div>
              <div className={styles.content}>
                <ul>
                  <li>
                    <div className={styles.liICon}>
                      <FaPassport />
                    </div>
                    <div className={styles.liTitle}>nickel</div>
                    <div className={styles.tag}>0%</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <FaPassport />
                    </div>
                    <div className={styles.liTitle}>cobalt</div>
                    <div className={styles.tag}>0%</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <FaPassport />
                    </div>
                    <div className={styles.liTitle}>lithium</div>
                    <div className={styles.tag}>0%</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <FaPassport />
                    </div>
                    <div className={styles.liTitle}>lead</div>
                    <div className={styles.tag}>0%</div>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className={styles.topBox}
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div className={styles.mainTitle}>
                Post-consumer recycled share
              </div>
              <div className={styles.content}>
                <ul>
                  <li>
                    <div className={styles.liICon}>
                      <FaPassport />
                    </div>
                    <div className={styles.liTitle}>nickel</div>
                    <div className={styles.tag}>0%</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <FaPassport />
                    </div>
                    <div className={styles.liTitle}>cobalt</div>
                    <div className={styles.tag}>0%</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <FaPassport />
                    </div>
                    <div className={styles.liTitle}>lithium</div>
                    <div className={styles.tag}>0%</div>
                  </li>
                  <li>
                    <div className={styles.liICon}>
                      <FaPassport />
                    </div>
                    <div className={styles.liTitle}>lead</div>
                    <div className={styles.tag}>0%</div>
                  </li>
                </ul>
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
            <div className={styles.mainTitle}>Design for Circularity</div>
            <div className={styles.content}>
              <ul>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}>
                    Part numbers for components
                  </div>
                  <div className={styles.tag}>98721</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}>
                    Postal address of sources for spare parts
                  </div>
                  <div className={styles.tag}>
                    360, Olympic-ro, Songpa-gu
                    <br /> Seoul, Republic of Korea
                  </div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}>
                    E-mail address of sources for spare parts
                  </div>
                  <div className={styles.tag}>aipimbusiness@aipim.io</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}>
                    Web address of sources for spare parts
                  </div>
                  <div className={styles.tag}>http://www.aipim.io</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}>
                    Manual for removal of the battery from the appliance
                  </div>
                  <Button className={styles.button}>
                    <div style={{ display: 'flex', fontWeight: '600' }}>
                      Download
                      <div className={styles.icon}>
                        <AiFillRightCircle />
                      </div>
                    </div>
                  </Button>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}>
                    Manual for disassembly & dismantling of the battery pack
                  </div>
                  <Button className={styles.button}>
                    <div style={{ display: 'flex', fontWeight: '600' }}>
                      Download
                      <div className={styles.icon}>
                        <AiFillRightCircle />
                      </div>
                    </div>
                  </Button>
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
            <div className={styles.mainTitle}>Safety Requirements</div>
            <div className={styles.content}>
              <ul>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}>
                    Safety measures/instructions
                  </div>
                  <Button className={styles.button}>
                    <div style={{ display: 'flex', fontWeight: '600' }}>
                      Download
                      <div className={styles.icon}>
                        <AiFillRightCircle />
                      </div>
                    </div>
                  </Button>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}>Extinguishing agent</div>
                  <Button className={styles.button}>
                    <div
                      style={{
                        display: 'flex',
                        fontWeight: '600',
                      }}
                    >
                      Download
                      <div className={styles.icon}>
                        <AiFillRightCircle />
                      </div>
                    </div>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CircularityAndResourceEfficiency;

// import React from 'react';
// import styles from './CircularityAndResource.module.scss';
// import { Button } from 'antd';

// const CircularityAndResourceEfficiency = () => {
//   return (
//     <div className={styles.page}>
//       <div className={styles.container}>
//         <div className={styles.link}>
//           Manual for removal of the batterPart numbers for components(구성
//           요소의 부품 번호) from the appliance(배터리 분리 메뉴얼)
//         </div>
//         <div className={styles.link}>
//           Postal address of sources for spare parts(예비 부품 공급처 우편 주소)
//         </div>
//         <div className={styles.link}>
//           E-mail address of sources for spare parts(예비 부품 공급처 이메일
//           주소)
//         </div>
//         <div className={styles.link}>
//           Web address of sources for spare parts(예비 부품 공급처 웹 주소)
//         </div>
//       </div>
//       <div className={styles.content}>
//         <div className={styles.cBox}>
//           <div>Safety measures/instructions(안전 조치/지침)</div>
//           <Button className={styles.button}>다운로드</Button>
//         </div>
//         <div className={styles.cBox}>
//           <div>xtinguishing agent(소화제)</div>
//           <Button className={styles.button}>다운로드</Button>
//         </div>
//         <div className={styles.cBox}>
//           <div>
//             Manual for removal of the battery from the appliance(배터리 분리
//             매뉴얼)
//           </div>
//           <Button className={styles.button}>다운로드</Button>
//         </div>
//         <div className={styles.cBox}>
//           <div>
//             Manual for disassembly and dismantling of the battery pack(배터리
//             팩의 분해 및 해체를 위한 설명서)
//           </div>
//           <Button className={styles.button}>다운로드</Button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default CircularityAndResourceEfficiency;
