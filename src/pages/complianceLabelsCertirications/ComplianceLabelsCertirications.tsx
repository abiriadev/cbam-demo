import React, { useState } from 'react';
import styles from './ComplianceLabelsCertirications.module.scss';
import weeePath from '../../assets/images/WEEE_SYMBOL.png';
import cdPath from '../../assets/images/cd_SYMBOL.png';
import pbPath from '../../assets/images/pb_SYMBOL.png';
import cert1Path from '../../assets/images/certifications1.jpg';
import cert2Path from '../../assets/images/certifications2.jpg';
import cert3Path from '../../assets/images/certifications3.jpg';
import footLabelPath from '../../assets/images/footlabel1.png';
import packagePath from '../../assets/images/package.png';
import { Popconfirm, Button } from 'antd';
import { FaPassport } from 'react-icons/fa';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { AiFillRightCircle, AiOutlineClose } from 'react-icons/ai';
import { VscSymbolMisc } from 'react-icons/vsc';

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
      case 'label1':
        return (
          <div
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div className={styles.title}>
              The “separate collection” symbol or “WEEE label” (see Figure )
              indicates that a “product should not be discarded as unsorted
              waste but must be sent to separate collection facilities for
              recovery and recycling”. The symbol must appear on any electrical
              and electronic equipment placed on the EU market. This label is
              introduced in the EU directive on waste electrical and electronic
              equipment (WEEE).
            </div>
            <br />
            <hr style={{ border: '1px solid #ced4da' }} />
            <br />
            <div className={styles.text}>
              Display symbol and translate it into text to ensure machine
              readability of the battery passport We suggest specifying in the
              battery passport for any battery that a separate collection is
              required. The separate collection symbol is also to be printed as
              a symbol on the physical label of the battery (with the symbol
              displayed in Annex VI, Part B and the required size of the symbol
              specified in Article 13(3)). We suggest displaying the symbol via
              the battery passport since the public is familiar with it and will
              therefore easily recognise it. In addition, we suggest translating
              the symbol into text to be made accessible for the battery
              passport to ensure machine readability.
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <img src={weeePath} alt="certifications-3" width={200} />
            </div>
          </div>
        );
      case 'label2':
        return (
          <div
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div className={styles.title}>Meaning of labels and symbols</div>
            <br />
            <hr style={{ border: '1px solid #ced4da' }} />
            <br />
            <div className={styles.text}>
              <p>
                "Meaning of all labels and symbols 1) marked on batteries 2)
                printed on their packaging 3) the document accompanying
                batteries Available (on the market) to end-users and
                distributors Producers shall communicate this information “in a
                visible manner and through online marketplaces” We suggest
                adding an explanation of the meaning of all symbols and labels.
                This would include the separate collection; cadmium and lead;
                and carbon footprint and carbon footprint performance class
                labels, which are accessible via the battery passport. In
                addition, the meaning of symbols and labels marked or printed on
                batteries or their accompanying documents but not included in
                the battery passport should be added. We recommend linking the
                symbols to be accessible via the battery passport to the
                explanation of meaning. This way, if the symbol is added, the
                corresponding explanatory text could be automatically added to
                the battery passport. For labels and symbols not accessible via
                the battery passport but still printed on the battery or its
                documents, it will first need to be specified if the symbol or
                label is applicable. Only then, the text on the meaning can be
                added to the battery passport. In line with Article 60, this
                information shall be communicated in (a) language(s) easily
                understood by end-users as determined by the Member State. We
                recommend that the explanatory texts are agreed on across the
                industry, potentially even prescribed by regulation, to ease the
                implementation for companies and ensure comprehensibility for
                the public."
              </p>
            </div>
          </div>
        );
      case 'label3':
        return (
          <div
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div className={styles.title}>Symbols for cadmium and lead </div>
            <br />
            <hr style={{ border: '1px solid #ced4da' }} />
            <br />
            <div className={styles.text}>
              Chemical symbol “Cd” for cadmium contained in the battery above
              0.002%; “Pb” for lead above 0.004%.
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <img src={cdPath} alt="certifications-3" width={150} />
              <img src={pbPath} alt="certifications-3" width={150} />
            </div>
          </div>
        );
      case 'label4':
        return (
          <div
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div className={styles.title}>Carbon footprint label</div>
            <br />
            <hr style={{ border: '1px solid #ced4da' }} />
            <br />
            <div className={styles.text}>
              "A label indicating the carbon footprint and carbon footprint
              performance class the carbon footprint of the battery, calculated
              as kg of carbon dioxide equivalent per one kWh of the total energy
              provided by the battery over its expected service life; Article
              7(2) specifies the CF performance classes. Starting from 36 months
              (EV batteries), 60 months (industrial batteries without external
              storage), 78 months (LMT batteries) and 102 months (industrial
              batteries with external storage) after entry into force of the
              regulation (industrial batteries), batteries in these categories
              “shall bear a conspicuous, clearly legible and indelible label
              indicating the carbon footprint of the battery "{' '}
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <img src={packagePath} alt="certifications-3" width={400} />
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
            <div
              className={styles.title}
              style={{ fontSize: '24px', fontWeight: '600' }}
            >
              Certifications & Compliance
            </div>
            <br /> <br />
            {/* <div className={styles.mainTitle}> </div> */}
            <div className={styles.content}>
              <ul>
                <li>
                  <div className={styles.liICon}>
                    <HiOutlineDocumentReport />
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
                    <HiOutlineDocumentReport />
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
                    <HiOutlineDocumentReport />
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
            <div
              className={styles.title}
              style={{ fontSize: '24px', fontWeight: '600' }}
            >
              Labels
            </div>
            <br />
            <br />
            <div className={styles.content}>
              <ul>
                <li>
                  <div className={styles.liICon}>
                    <VscSymbolMisc />
                  </div>
                  <div className={styles.liTitle}>
                    Separate collection symbol
                  </div>
                  <Button onClick={() => onClick('label1')}>
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
                    <VscSymbolMisc />
                  </div>
                  <div className={styles.liTitle}>
                    Meaning of labels and symbols
                  </div>
                  <Button onClick={() => onClick('label2')}>
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
                    <VscSymbolMisc />
                  </div>
                  <div className={styles.liTitle}>
                    Symbols for cadmium and lead
                  </div>
                  <Button onClick={() => onClick('label3')}>
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
                    <VscSymbolMisc />
                  </div>
                  <div className={styles.liTitle}>Carbon footprint label</div>
                  <Button onClick={() => onClick('label4')}>
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
