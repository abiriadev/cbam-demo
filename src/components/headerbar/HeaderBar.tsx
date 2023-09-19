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
import { AuthService } from '../../services/AuthService';
import LogoPath from '../../assets/images/aipim_logo.png';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';

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
      key: '1',
      label: 'Logout',
      icon: <UserOutlined />,
      onClick: () => onClickLogout(),
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

  const mainItems: MenuProps['items'] = [
    {
      label: <Link to={'/overview'}>OVERVIEW</Link>,
      key: 'mainItem1',
    },
    {
      label: <Link to={'/general-battery'}>BATTERY & MANUFACTURER INFO</Link>,
      key: 'mainItem2',
    },
    {
      label: (
        <Link to={'/compliance-labels-certirications'}>
          COMPLIANCE & LABELS & CERTIRICATIONS
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
          SUPPLY CHAIN DUE DILIGENCET
        </Link>
      ),
      key: 'mainItem5',
    },
    {
      label: <Link to={'/materials-composition'}>MATERIALS & COMPOSITION</Link>,
      key: 'mainItem6',
    },
    {
      label: (
        <Link to={'/circularity-and-resource-efficiency'}>
          CIRCULARITY & RESOURCE EFFICIENCY
        </Link>
      ),
      key: 'mainItem7',
    },
    {
      label: (
        <Link to={'/performance-durability'}>PERFORMANCE & DURABILITY</Link>
      ),
      key: 'mainItem8',
    },
  ];

  return (
    <Header id="header" style={{ display: 'flex', alignItems: 'center' }}>
      <div
        className="logo"
        style={{
          height: '100%',
          width: '100px',
          textAlign: 'center',
          // height: '32px',
          // margin: '10px 16px 14px 30px',

          background: 'gray',
        }}
      >
        AIPIM
        {/* <a href="/" target="_blank">
          <img src={LogoPath} alt="logo" />
        </a> */}
      </div>
      <Menu
        // theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['mainItem1']}
        items={mainItems}
        disabledOverflow={false}
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
