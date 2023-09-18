import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import HeaderBar from '../components/headerbar/HeaderBar';
import SideBar from '../components/sidebar/SideBar';

const { Content } = Layout;

const DefaultLayout = () => {
  return (
    <Layout id="default-layout">
      <SideBar />
      <Layout id="site-layout" style={{ overflowY: 'scroll' }}>
        <HeaderBar />
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
