import React, { useEffect } from 'react';
import { Layout, Dropdown } from 'antd';
import { Menu, theme } from 'antd';

import { useTranslation } from 'react-i18next';
import {
  UserOutlined,
  CaretRightOutlined,
  CaretLeftOutlined,
  GlobalOutlined,
  MailOutlined,
  QrcodeOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { MdQuestionAnswer } from 'react-icons/md';
import { AuthService } from '../../services/AuthService';
import LogoPath from '../../assets/images/aipim_logo.png';
import type { MenuProps } from 'antd';
import apimIndigo from '../../assets/images/aipim_logo_indigo.png';
import apimWhite from '../../assets/images/aipim_logo.png';

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

  return (
    <Header id="header" style={{ display: 'flex', alignItems: 'center' }}>
      {/* <div className="demo-logo" /> */}
      <div
        className="logo"
        style={{
          height: '100%',
          width: '100px',
          textAlign: 'center',
          marginLeft: '15px',
          marginTop: '15px',
          // margin: '0 auto',
          // background: 'gray',
        }}
      >
        <a href="/qr">
          <img src={apimWhite} alt="logo" width={100} />
        </a>
      </div>

      <div className="header-right">
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
