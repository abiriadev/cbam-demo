import React, { useEffect } from 'react';
import { Layout, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { useTranslation } from 'react-i18next';
import {
  UserOutlined,
  CaretRightOutlined,
  CaretLeftOutlined,
  GlobalOutlined,
} from '@ant-design/icons';
import { AuthService } from '../../services/AuthService';

const { Header } = Layout;

const HeaderBar = () => {
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

  return (
    <Header id="header">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span
          className="trigger"
          onClick={onClickCollapsed}
          style={{ background: '#00a8e7', color: '#FFFFFF' }}
        >
          {/* {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} */}
          {/* {collapsed ? <CaretRightOutlined /> : <CaretLeftOutlined />} */}
        </span>

        <span
          className="title"
          //   onClick={() => {
          //     navigate(path);
          //   }}
          style={{ cursor: 'pointer' }}
        >
          <span
            style={{
              fontSize: '24px',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            subTitle
            {/* {subTitle} */}
          </span>
          <span>＼</span>
          title
          {/* {title} */}
        </span>
      </div>
      <div className="header-right">
        {/* 알람 기능 생겼을 때 구현 예정 */}
        {/* <div className="icon">
          <BellOutlined />
        </div> */}
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
