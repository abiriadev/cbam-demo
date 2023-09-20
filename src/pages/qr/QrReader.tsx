import React, { useState } from 'react';
import styles from './QrReader.module.scss';
import { Button, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import Loader from '../../components/loader/Loader';
import dppLogo from '../../assets/images/DPP_logo.png';

const QrReader = () => {
  const navigate = useNavigate();

  const onSearch = () => {
    setTimeout(() => {
      navigate('/overview');
    }, 500);
  };

  return (
    <>
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.tBox}>
            <div className={styles.title}>Digital Product Passport</div>
            <div className={styles.text}>
              Deployed and validated at scale and real life setting Digital
              Product Passports in at least two value chains. Report on further
              needs for standardisation and specifications to ensure
              interoperability, security and acceptance by all the stakeholders.
              Recommendations based on the lessons learnt for the deployments of
              DPP in other value chains.
            </div>
          </div>
          <div className={styles.tBox}>
            <img
              className={styles.img}
              src="https://www.europarl.europa.eu/cmsdata/248115/product%20passport%20-%20traceability3-ml.jpeg"
            />
          </div>
        </div>
        <div className={styles.content}>
          <Button className={styles.arrow}>
            <ArrowLeftOutlined />
          </Button>
          <img src={dppLogo} className={styles.logo} />
          <div className={styles.buttons}>
            <Button className={styles.button}>QR Scan</Button>
            <Button className={styles.button} onClick={onSearch}>
              Search <ArrowRightOutlined />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QrReader;

// import React, { useState } from 'react';
// import styles from './QrReader.module.scss';
// import { Button, Input } from 'antd';
// import { useNavigate } from 'react-router-dom';
// import { ArrowRightOutlined } from '@ant-design/icons';
// import Loader from '../../components/loader/Loader';
// const QrReader = () => {
//   const navigate = useNavigate();

//   const onSearch = () => {
//     setTimeout(() => {
//       navigate('/overview');
//     }, 500);
//   };

//   return (
//     <>
//       <div className={styles.page}>
//         <div className={styles.container}>
//           <div className={styles.buttons}>
//             <Button className={styles.button} style={{ marginRight: '2.5px' }}>
//               Upload Image
//             </Button>
//             <Button className={styles.button} style={{ marginLeft: '2.5px' }}>
//               Scan QR code
//             </Button>
//           </div>
//           <div className={styles.qrBox} />
//           <div className={styles.input}>
//             <Input placeholder="URL" />
//           </div>
//           <div className={styles.buttons}>
//             <Button className={styles.button} onClick={onSearch}>
//               Search <ArrowRightOutlined />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default QrReader;
