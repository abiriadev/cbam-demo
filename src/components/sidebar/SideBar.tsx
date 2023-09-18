import React, { useState } from 'react';
import {
  DatabaseOutlined,
  BarChartOutlined,
  DeploymentUnitOutlined,
  GlobalOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

type SideMenu = {
  title: string;
  link?: string;
  icon?: any;
  children?: SideMenu[];
};

const createLable = (menu: SideMenu) => {
  let lable: any = menu.title;
  const link = menu.link;
  if (link) {
    lable = <Link to={link}>{lable}</Link>;
  }
  return lable;
};

const { Sider } = Layout;

const SideBar = () => {
  const { t } = useTranslation();
  const menus: SideMenu[] = [
    {
      title: t('main:header:title'),
      icon: DatabaseOutlined,
      link: '/',
      children: [
        {
          title: t('main:header:subTitle'),
          link: '/',
        },
      ],
    },
  ];

  const items: MenuProps['items'] | null = menus.map((menu: SideMenu) => {
    const key = String(menu.title ?? new Date());
    const lable = createLable(menu);

    return {
      key: `${key}`,
      icon: React.createElement(menu.icon),
      label: lable,

      children: menu.children?.map((subMenu) => {
        const subKey = subMenu.link;
        const subLable = createLable(subMenu);
        if (subMenu.icon) {
          return {
            key: subKey,
            icon: React.createElement(subMenu.icon),
            label: subLable,
          };
        } else {
          return {
            key: subKey,
            label: subLable,
          };
        }
      }),
    };
  });

  //   const collapsed = useRecoilValue(collapsedState);

  const [openKeys, setOpenKeys] = useState([t('main:header:shareData')]);
  const rootSubmenuKeys = [
    t('main:header:shareData'),
    t('main:header:analysisData'),
    t('main:header:optimumFacility'),
    t('main:header:carbonEmissions'),
  ];

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Sider
      trigger={null}
      collapsible //collapsed={collapsed}
    >
      <div></div>
      <div
        className="logo"
        style={{
          height: '32px',
          margin: '16px',
          background: 'rgba(255, 255, 255, 0.2)',
        }}
      >
        <a href="/" target="_blank">
          {/* {collapsed ? <div>작은 로고</div> : <div>큰 로고</div>} */}
          {/* <img src="/img/aipim_logo.png" alt="logo" /> */}
        </a>
      </div>
      <Menu
        mode="inline"
        theme="dark"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        // inlineCollapsed={collapsed}
        // selectedKeys={[selectedKey]}s
        items={items}
      />
    </Sider>
  );
};

export default SideBar;
