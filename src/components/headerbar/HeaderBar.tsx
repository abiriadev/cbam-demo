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
import apimWhite from '../../assets/images/aipim_logo.png';

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
        <Link to={'/instData'}>
          <div className={styles.titleContainer}>INST DATA</div>
        </Link>
      ),
      key: 'mainItem1',
    },
    {
      label: (
        <Link to={'/emInst'}>
          <div className={styles.titleContainer}>
            <div className={styles.innerTitle}>EMINST</div>
          </div>
        </Link>
      ),
      key: 'mainItem2',
    },
    {
      label: (
        <Link to={'/emissions-energy'}>
          <div className={styles.titleContainer}>
            <div className={styles.innerTitle}>EMISSIONS & ENERGY</div>
          </div>
        </Link>
      ),
      key: 'mainItem3',
    },
    {
      label: (
        <Link to={'/precesses'}>
          <div className={styles.titleContainer}>
            <div className={styles.innerTitle}>PROCESSES</div>
          </div>
        </Link>
      ),
      key: 'mainItem4',
    },
    {
      label: (
        <Link to={'/purchprec'}>
          <div className={styles.titleContainer}>
            <div className={styles.innerTitle}>PURCHPREC</div>
          </div>
        </Link>
      ),
      key: 'mainItem5',
    },
    {
      label: (
        <Link to={'/tools'}>
          <div className={styles.titleContainer}>
            <div className={styles.innerTitle}>TOOLS</div>
          </div>
        </Link>
      ),
      key: 'mainItem6',
    },
    {
      label: (
        <Link to={'/summaryProcesses'}>
          <div className={styles.titleContainer}>
            <div className={styles.innerTitle}>SUMMARY</div>
            <div className={styles.innerTitle}>PROCESSES</div>
          </div>
        </Link>
      ),
      key: 'mainItem7',
    },
    {
      label: (
        <Link to={'/summaryProducts'}>
          <div className={styles.titleContainer}>
            <div className={styles.innerTitle}>SUMMARY</div>
            <div className={styles.innerTitle}>PRODUCTS</div>
          </div>
        </Link>
      ),
      key: 'mainItem8',
    },
    {
      label: (
        <Link to={'/summaryCommunication'}>
          <div className={styles.titleContainer}>
            <div className={styles.innerTitle}>SUMMARY</div>
            <div className={styles.innerTitle}>COMMUNICATION</div>
          </div>
        </Link>
      ),
      key: 'mainItem9',
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
        }}
      >
        <a href="/overview">
          <img src={apimWhite} alt="logo" width={100} />
        </a>
      </div>

      <Menu
        // theme="dark"
        mode="horizontal"
        id="headerBg"
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
