import React, { useState } from 'react';
import styles from './ComplianceLabelsCertirications.module.scss';
import weeePath from '../../assets/images/WEEE_SYMBOL.png';
import cdPath from '../../assets/images/cd_SYMBOL.png';
import pbPath from '../../assets/images/pb_SYMBOL.png';
import cert1Path from '../../assets/images/certifications1.jpg';
import cert2Path from '../../assets/images/certifications2.jpg';
import cert3Path from '../../assets/images/certifications3.jpg';
import footLabelPath from '../../assets/images/footlabel1.png';
import { Popconfirm, Button } from 'antd';
import { FaPassport } from 'react-icons/fa';
import { FiAlertCircle } from 'react-icons/fi';
import { AiFillRightCircle, AiOutlineClose } from 'react-icons/ai';
const ComplianceLabelsCertirications = () => {
  const [page, setPage] = useState<string>('');
  const onClick = (value: any) => {
    setPage(value);
    let ele: any = document.getElementById('prepare');
    if (ele != undefined) {
      ele.style.visibility = 'visible';
      // ele.innerHTML = onSelectCert(value);
    }
  };

  const onHidden = () => {
    let ele = document.getElementById('prepare');
    if (ele != undefined) {
      ele.style.visibility = 'hidden';
    }
  };

  const decs1 = () => {
    return (
      <div style={{ width: '500px' }}>
        <b>
          The “separate collection” symbol or “WEEE label” (see Figure )
          indicates that a “product should not be discarded as unsorted waste
          but must be sent to separate collection facilities for recovery and
          recycling”. The symbol must appear on any electrical and electronic
          equipment placed on the EU market. This label is introduced in the EU
          directive on waste electrical and electronic equipment (WEEE).
        </b>
        <br />
        <br />
        Display symbol and translate it into text to ensure machine readability
        of the battery passport We suggest specifying in the battery passport
        for any battery that a separate collection is required. The separate
        collection symbol is also to be printed as a symbol on the physical
        label of the battery (with the symbol displayed in Annex VI, Part B and
        the required size of the symbol specified in Article 13(3)). We suggest
        displaying the symbol via the battery passport since the public is
        familiar with it and will therefore easily recognise it. In addition, we
        suggest translating the symbol into text to be made accessible for the
        battery passport to ensure machine readability.
      </div>
    );
  };

  const decs2 = () => {
    return (
      <div style={{ width: '500px' }}>
        <b>
          Chemical symbol “Cd” for cadmium contained in the battery above
          0.002%; “Pb” for lead above 0.004%.
        </b>
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

  const onSelectCert = () => {
    switch (page) {
      case 'case1':
        return (
          <div
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div className={styles.title}>
              The EU declaration of conformity shall state that the fulfilment
              of the requirements set out in Articles 6 to 10 and 12 to 14 [of
              the Battery Regulation] has been demonstrated, Annex IX gives
              details about necessary content for the declaration of conformity.
            </div>
            <br />
            <hr style={{ border: '1px solid #ced4da' }} />
            <br />
            <div className={styles.text}>
              EU declaration of conformity signed by responsible economic
              operators to declare compliance with the regulatory requirements
              in the context of the market conformity assessment procedure and
              assume full responsibility.
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <img src={cert1Path} alt="certifications-1" width={500} />
            </div>
          </div>
        );
      case 'case2':
        return (
          <div
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div className={styles.title}>
              The Battery Carbon Footprint Declaration shall refer to the
              identification number of the EU declaration of conformity. Annex
              IX lists requirements for EU declaration of conformity.
            </div>
            <br />
            <hr style={{ border: '1px solid #ced4da' }} />
            <br />
            <div className={styles.text}>
              Identification number of the EU declaration of conformity of the
              battery, linked to the Battery Carbon Footprint Declaration.
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <img src={cert2Path} alt="certifications-2" width={500} />
            </div>
          </div>
        );
      case 'case3':
        return (
          <div
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div className={styles.title}>
              Results of test reports proving compliance with the requirements
              set out in this Regulation or any implementing or delegated act
              adopted on its basis.
            </div>
            <br />
            <hr style={{ border: '1px solid #ced4da' }} />
            <br />
            <div className={styles.text}>
              Test results of the market conformity assessment procedure Results
              of tests reports proving compliance in the market conformity
              assessment procedure with the requirements as per the technical
              documentation (Art. 7-10, Art. 12-14 and due diligence policies ).
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <img src={cert3Path} alt="certifications-3" width={700} />
            </div>
          </div>
        );

      default:

      //실행내용
    }
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
            <div className={styles.mainTitle}>Certifications & Compliance </div>
            <div className={styles.content}>
              <ul>
                <li>
                  <div className={styles.liICon}>
                    <FaPassport />
                  </div>
                  <div className={styles.liTitle}>
                    EU declaration of conformity
                  </div>
                  <Button onClick={() => onClick('case1')}>
                    <div style={{ display: 'flex', fontWeight: '600' }}>
                      view
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
                    ID of EU declaration of conformity
                  </div>
                  <Button onClick={() => onClick('case2')}>
                    <div
                      style={{
                        display: 'flex',
                        fontWeight: '600',
                      }}
                    >
                      view
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
                    Compliance of test results
                  </div>
                  <Button onClick={() => onClick('case3')}>
                    <div style={{ display: 'flex', fontWeight: '600' }}>
                      view
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
            <div className={styles.mainTitle}>Labels</div>
            <div className={styles.symbolContent}>
              <Popconfirm
                className={styles.popcon}
                placement="bottomLeft"
                title={'Separate collection symbol'}
                description={decs1}
                showCancel={false}
              >
                <div className={styles.symbol}>
                  <div className={styles.alert}>
                    <FiAlertCircle />
                  </div>
                  <img src={weeePath} alt="WEEE SYMBOL" width={100} />
                </div>
              </Popconfirm>
              <Popconfirm
                className={styles.popcon}
                placement="bottomLeft"
                title={'Cadmium description'}
                description={decs2}
                showCancel={false}
              >
                <div className={styles.symbol}>
                  <div className={styles.alert}>
                    <FiAlertCircle />
                  </div>
                  <img src={cdPath} alt="Cd SYMBOL" width={100} />
                </div>
              </Popconfirm>
              <Popconfirm
                className={styles.popcon}
                placement="bottomLeft"
                title={'Lead description'}
                description={decs2}
                showCancel={false}
              >
                <div className={styles.symbol}>
                  <div className={styles.alert}>
                    <FiAlertCircle />
                  </div>
                  <img src={pbPath} alt="Pb SYMBOL" width={100} />
                </div>
              </Popconfirm>
            </div>
            <div className={styles.symbolContent}>
              <Popconfirm
                className={styles.popcon}
                placement="bottomLeft"
                title={'Carbon footprint label description'}
                description={decs3}
                showCancel={false}
              >
                <div className={styles.symbol}>
                  <div className={styles.alert}>
                    <FiAlertCircle />
                  </div>
                  <img src={footLabelPath} alt="foot lables" width={150} />
                </div>
              </Popconfirm>
            </div>
          </div>
        </div>
        <div
          className={styles.boxContainer}
          style={{ backgroundColor: 'transparent' }}
        >
          <div id="prepare" className={styles.prepare}>
            <div
              style={{
                position: 'absolute',
                right: '20px',
                top: '20px',
                fontSize: '28px',
              }}
              onClick={onHidden}
            >
              <AiOutlineClose />
            </div>
            {onSelectCert()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceLabelsCertirications;
