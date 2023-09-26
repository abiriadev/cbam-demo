import React, { useEffect } from 'react';
import { Layout, Dropdown } from 'antd';
import { Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  UserOutlined,
  QrcodeOutlined,
  CaretLeftOutlined,
  GlobalOutlined,
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { MdQuestionAnswer } from 'react-icons/md';
import { AuthService } from '../../services/AuthService';
import LogoPath from '../../assets/images/aipim_logo.png';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from './HeaderBar.module.scss';
import apimIndigo from '../../assets/images/aipim_logo_indigo.png';

const { Header } = Layout;

const HeaderBar = () => {
  const navigate = useNavigate();

  //   const [collapsed, setCollapsed] = useRecoilState<boolean>(collapsedState);
  const onClickCollapsed = () => {
    // setCollapsed(!collapsed);
  };

  // 언어 설정
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = localStorage.getItem('locale') || '';
    i18n.changeLanguage(lang);
  }, []);

  const toggleLocales = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('locale', lang);
    window.location.reload();
  };

  const onClickLogout = () => {
    // AuthService.logout()
    //   .then(() => {
    //     setAuth(null);
    //     return auth;
    //   })
    //   .finally(() => {
    //     navigate('/');
    //   });
  };

  const items: MenuProps['items'] = [
    {
      key: '0',
      label: 'Help',
      icon: <MdQuestionAnswer />,
      onClick: () => navigate('/overview'),
    },
    {
      key: '1',
      label: 'Logout',
      icon: <UserOutlined />,
      onClick: () => navigate('/start'),
    },
    {
      key: '2',
      label: 'Language',
      icon: <GlobalOutlined />,
      children: [
        {
          key: '2-1',
          label: '한글',
          onClick: () => toggleLocales('ko'),
        },
        {
          key: '2-2',
          label: 'English',
          onClick: () => toggleLocales('en'),
        },
      ],
    },
  ];

  const mainItems: any = [
    {
      label: (
        <Link to={'/overview'}>
          <div className={styles.titleContainer}>OVERVIEW</div>
        </Link>
      ),
      key: 'mainItem1',
    },
    {
      label: (
        <Link to={'/general-battery'}>
          <div className={styles.titleContainer}>
            <div className={styles.innerTitle}>BATTERY</div>
            <div className={styles.innerTitle}>MANUFACTURER INFO</div>
          </div>
        </Link>
      ),
      key: 'mainItem2',
    },
    {
      label: (
        <Link to={'/compliance-labels-certirications'}>
          <div className={styles.titleContainer}>
            <div className={styles.innerTitle}>COMPLIANCE</div>
            <div className={styles.innerTitle}>LABELS & CERTIRICATIONS</div>
          </div>
        </Link>
      ),
      key: 'mainItem3',
    },
    {
      label: <Link to={'/carbon-footprint'}>CARBON FOOTPRINT</Link>,
      key: 'mainItem4',
    },
    {
      label: (
        <Link to={'/supply-chain-due-diligentcet'}>
          <div className={styles.titleContainer}>
            <div className={styles.innerTitle}> SUPPLY CHAIN</div>
            <div className={styles.innerTitle}> DUE DILIGENCET</div>
          </div>
        </Link>
      ),
      key: 'mainItem5',
    },
    {
      label: (
        <Link to={'/materials-composition'}>
          <div className={styles.titleContainer}>
            <div className={styles.innerTitle}> MATERIALS</div>
            <div className={styles.innerTitle}>COMPOSITION</div>
          </div>
        </Link>
      ),
      key: 'mainItem6',
    },
    {
      label: (
        <Link to={'/circularity-and-resource-efficiency'}>
          <div className={styles.titleContainer}>
            <div className={styles.innerTitle}> CIRCULARITY</div>
            <div className={styles.innerTitle}>RESOURCE EFFICIENCY</div>
          </div>
        </Link>
      ),
      key: 'mainItem7',
    },
    {
      label: (
        <Link to={'/performance-durability'}>
          <div className={styles.titleContainer}>
            <div className={styles.innerTitle}> PERFORMANCE</div>
            <div className={styles.innerTitle}>DURABILITY</div>
          </div>
        </Link>
      ),
      key: 'mainItem8',
    },
  ];

  return (
    <Header
      id="header"
      style={{
        display: 'flex',
        alignItems: 'center',
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        zIndex: 999,
      }}
    >
      <div
        className="logo"
        style={{
          height: '100%',
          width: '100px',
          textAlign: 'center',
          marginLeft: '10px',
          marginTop: '15px',
          // background: 'gray',
        }}
      >
        <a href="/overview">
          <img src={apimIndigo} alt="logo" />
        </a>
      </div>
      {/* <ul>
        {mainItems.map(({ label, key }: any) => {
          return <li key={key}>{label}</li>;
        })}
      </ul> */}

      <Menu
        // theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['mainItem1']}
        items={mainItems}
        disabledOverflow={false}
        style={{
          fontWeight: '600',
          fontSize: '12px',
          display: 'flex',
          width: 'calc(100% - 120px)',
          justifyContent: 'center',
        }}
      />
      <div className="header-right">
        <div
          className="icon"
          onClick={() => {
            navigate('/qr');
          }}
        >
          <QrcodeOutlined />
        </div>
        <div className="icon">
          <SettingOutlined />
        </div>
        <div className="icon">
          <Dropdown menu={{ items }}>
            <UserOutlined />
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};

export default HeaderBar;
