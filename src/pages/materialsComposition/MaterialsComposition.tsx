import React from 'react';
import { Popconfirm } from 'antd';
import { FaPassport } from 'react-icons/fa';
import { FiAlertCircle } from 'react-icons/fi';
import { PiDotOutlineBold } from 'react-icons/pi';
import styles from './MaterialsComposition.module.scss';

const MaterialsComposition = () => {
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
            <div className={styles.title}>Materials</div>
            <div className={styles.content}>
              <ul>
                <li>
                  <div className={styles.liICon}>
                    <PiDotOutlineBold />
                  </div>
                  <div className={styles.liTitle} style={{ width: '200px' }}>
                    Battery chemistry
                  </div>
                  <div className={styles.tag}>Li-ion</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <PiDotOutlineBold />
                  </div>
                  <div className={styles.liTitle} style={{ width: '200px' }}>
                    Critical Raw Materials
                  </div>
                  <div className={styles.tag} style={{ marginRight: '3px' }}>
                    Lithium
                  </div>
                  <div className={styles.tag} style={{ marginRight: '3px' }}>
                    Cobalt
                  </div>
                  <div className={styles.tag} style={{ marginRight: '3px' }}>
                    Nickel
                  </div>
                  <div className={styles.tag} style={{ marginRight: '3px' }}>
                    Neodymium
                  </div>
                  <div className={styles.tag} style={{ marginRight: '3px' }}>
                    Tungsten
                  </div>
                  <div className={styles.tag}>Aluminum</div>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.space} />
          <div
            style={{
              width: '100%',
              paddingLeft: '30px',
              paddingTop: '30px',
            }}
          >
            <div style={{ fontSize: '20px', fontWeight: '600' }}>
              The cathode, anode, electrolyte materials
            </div>

            <br />
            <div className={styles.mainTitle}>Cathode</div>
            <div className={styles.content}>
              <ul>
                <li>
                  <div className={styles.liICon}>
                    <PiDotOutlineBold />
                  </div>
                  <div className={styles.liTitle} style={{ width: '250px' }}>
                    Name
                  </div>
                  <div className={styles.tag} style={{ marginRight: '3px' }}>
                    Li2CO3
                  </div>
                  <div className={styles.tag}>NMC111</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <PiDotOutlineBold />
                  </div>
                  <div className={styles.liTitle} style={{ width: '250px' }}>
                    Related Identifiers
                  </div>
                  <div className={styles.tag} style={{ marginRight: '3px' }}>
                    Li2CO3(CAS no 554-13-2)
                  </div>
                  <div className={styles.tag}> NMC111(CAS no 12190-79-3)</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <PiDotOutlineBold />
                  </div>
                  <div className={styles.liTitle} style={{ width: '250px' }}>
                    Weight
                  </div>
                  <div className={styles.tag}>40kg</div>
                </li>
              </ul>
            </div>
            <br />
            <div className={styles.mainTitle}>Anode</div>
            <div className={styles.content}>
              <ul>
                <li>
                  <div className={styles.liICon}>
                    <PiDotOutlineBold />
                  </div>
                  <div className={styles.liTitle} style={{ width: '250px' }}>
                    Name
                  </div>
                  <div className={styles.tag} style={{ marginRight: '3px' }}>
                    Graphite
                  </div>
                  <div className={styles.tag}>Graphene</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <PiDotOutlineBold />
                  </div>
                  <div className={styles.liTitle} style={{ width: '250px' }}>
                    Related Identifiers
                  </div>
                  <div className={styles.tag} style={{ marginRight: '3px' }}>
                    Graphite(CAS no 7782-42-5)
                  </div>
                  <div className={styles.tag}> Graphene(103434-98-0)</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <PiDotOutlineBold />
                  </div>
                  <div className={styles.liTitle} style={{ width: '250px' }}>
                    Weight
                  </div>
                  <div className={styles.tag}>40kg</div>
                </li>
              </ul>
            </div>
            <br />
            <div className={styles.mainTitle}>Electrolyte</div>
            <div className={styles.content}>
              <ul>
                <li>
                  <div className={styles.liICon}>
                    <PiDotOutlineBold />
                  </div>
                  <div className={styles.liTitle} style={{ width: '250px' }}>
                    Name
                  </div>
                  <div className={styles.tag} style={{ marginRight: '3px' }}>
                    LiPF6
                  </div>
                  <div className={styles.tag}>DMC(Dimethyl Carbonate)</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <PiDotOutlineBold />
                  </div>
                  <div className={styles.liTitle} style={{ width: '250px' }}>
                    Related Identifiers
                  </div>
                  <div className={styles.tag} style={{ marginRight: '3px' }}>
                    LiPF6(CAS no 21324-40-3)
                  </div>
                  <div className={styles.tag}>DMC(616-38-6)</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <PiDotOutlineBold />
                  </div>
                  <div className={styles.liTitle} style={{ width: '250px' }}>
                    Weight
                  </div>
                  <div className={styles.tag}>20kg</div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.boxContainer}>
          <div
            className={styles.sbox}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div className={styles.title}>Substances</div>
            <br />
            <div className={styles.content}>
              <ul>
                <li>
                  <div className={styles.liICon}>
                    <PiDotOutlineBold />
                  </div>
                  <div className={styles.liTitle}>
                    Name of hazardous substances
                  </div>
                  <div className={styles.tag} style={{ marginRight: '3px' }}>
                    Nickel
                  </div>
                  <div className={styles.tag} style={{ marginRight: '3px' }}>
                    Manganese Dioxide
                  </div>
                  <div className={styles.tag}>Cobalt</div>
                </li>
              </ul>
            </div>
            <div className={styles.mainTitle}>
              Hazard classes and/or categories of hazardous substances
            </div>
            <div className={styles.content}>
              <ul>
                <li>
                  <div className={styles.liICon}>
                    <PiDotOutlineBold />
                  </div>
                  <div className={styles.liTitle}>Nickel</div>
                  <div className={styles.tag}>Toxic substance</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <PiDotOutlineBold />
                  </div>
                  <div className={styles.liTitle}>Manganese Dioxide:</div>
                  <div className={styles.tag}>Manganese Toxicity</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <PiDotOutlineBold />
                  </div>
                  <div className={styles.liTitle}>Cobalt</div>
                  <div className={styles.tag}>Carcinogenic substance</div>
                </li>
              </ul>
            </div>

            <div className={styles.mainTitle}>
              Related identifiers of hazardous substances
            </div>
            <div className={styles.content}>
              <ul>
                <li>
                  <div className={styles.liICon}>
                    <PiDotOutlineBold />
                  </div>
                  <div className={styles.liTitle}>Nickel</div>
                  <div className={styles.tag}>CAS no 7440-02-0</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <PiDotOutlineBold />
                  </div>
                  <div className={styles.liTitle}>Manganese Dioxide</div>
                  <div className={styles.tag}> CAS no 1313-13-9</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <PiDotOutlineBold />
                  </div>
                  <div className={styles.liTitle}>Cobalt</div>
                  <div className={styles.tag}>CAS no 7440-48-4</div>
                </li>
              </ul>
            </div>
            <div className={styles.mainTitle}>
              Location of hazardous substances
            </div>
            <div className={styles.content}>
              <ul>
                <li>
                  <div className={styles.liICon}>
                    <PiDotOutlineBold />
                  </div>
                  <div className={styles.liTitle}>Nickel</div>
                  <div className={styles.tag}>Positive electrode</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <PiDotOutlineBold />
                  </div>
                  <div className={styles.liTitle}>Manganese Dioxide</div>
                  <div className={styles.tag}>Positive electrode</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <PiDotOutlineBold />
                  </div>
                  <div className={styles.liTitle}>Cobalt</div>
                  <div className={styles.tag}>Positive electrode</div>
                </li>
              </ul>
            </div>
            <div className={styles.mainTitle}>
              Concentration range of hazardous substances
            </div>
            <div className={styles.content}>
              <ul>
                <li>
                  <div className={styles.liICon}>
                    <PiDotOutlineBold />
                  </div>
                  <div className={styles.liTitle}>Nickel</div>
                  <div className={styles.tag}>10% to 30%</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <PiDotOutlineBold />
                  </div>
                  <div className={styles.liTitle}>Manganese Dioxide</div>
                  <div className={styles.tag}> 5% to 30%</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <PiDotOutlineBold />
                  </div>
                  <div className={styles.liTitle}>Cobalt</div>
                  <div className={styles.tag}>30% to 60%</div>
                </li>
              </ul>
            </div>
            <div className={styles.mainTitle}>
              Impact of substances on the environment and on human health or
              safety
            </div>
            <div className={styles.content}>
              <ul>
                <li>
                  <div className={styles.liICon}>
                    <PiDotOutlineBold />
                  </div>
                  <div className={styles.liTitle}>Nickel</div>
                  <div>
                    <div style={{ display: 'flex', marginBottom: '3px' }}>
                      <div
                        className={styles.tag}
                        style={{ marginRight: '3px' }}
                      >
                        Skin Sensitizer
                      </div>
                      <div className={styles.tag}>Respiratory Sensitizer</div>
                    </div>
                    <div style={{ display: 'flex' }}>
                      <div
                        className={styles.tag}
                        style={{ marginRight: '3px' }}
                      >
                        Reproductive Toxicant
                      </div>
                      <div className={styles.tag}>Carcinogenic</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <PiDotOutlineBold />
                  </div>
                  <div className={styles.liTitle}>Manganese Dioxide</div>
                  <div>
                    <div style={{ display: 'flex', marginBottom: '3px' }}>
                      <div
                        className={styles.tag}
                        style={{ marginRight: '3px' }}
                      >
                        Skin Sensitizer
                      </div>
                      <div className={styles.tag}>Respiratory Sensitizer</div>
                    </div>
                    <div style={{ display: 'flex' }}>
                      <div
                        className={styles.tag}
                        style={{ marginRight: '3px' }}
                      >
                        Reproductive Toxicant
                      </div>
                      <div className={styles.tag}>Carcinogenic</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <PiDotOutlineBold />
                  </div>
                  <div className={styles.liTitle}>Cobalt</div>
                  <div className={styles.tag}>potential hazards</div>
                </li>
              </ul>
            </div>
            <div className={styles.mainTitle}>Material Provenance</div>
            <div className={styles.content}>
              <ul>
                <li>
                  <div className={styles.liICon}>
                    <PiDotOutlineBold />
                  </div>
                  <div className={styles.liTitle}>Cobalt</div>
                  <div className={styles.tag}>~5 kg</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <PiDotOutlineBold />
                  </div>
                  <div className={styles.liTitle}>Lithium</div>
                  <div className={styles.tag}>?</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <PiDotOutlineBold />
                  </div>
                  <div className={styles.liTitle}>Nickel</div>
                  <div className={styles.tag}>~5 kg</div>
                </li>
                <li>
                  <div className={styles.liICon}>
                    <PiDotOutlineBold />
                  </div>
                  <div className={styles.liTitle}>Manganese</div>
                  <div className={styles.tag}>~5 kg</div>
                </li>{' '}
                <li>
                  <div className={styles.liICon}>
                    <PiDotOutlineBold />
                  </div>
                  <div className={styles.liTitle}>Other</div>
                  <div className={styles.tag}>~5 kg</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialsComposition;
