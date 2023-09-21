import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import HeaderBar from 'components/headerbar/HeaderInitBar';
const { Header, Content, Footer } = Layout;
import { Outlet } from 'react-router-dom';

const DppInitLayout = () => {
  return (
    <Layout id="default-layout">
      <HeaderBar />
      {/* <Content style={{ padding: '0 50px' }}> */}
      {/* <div className="site-layout-content"> */}
      <Outlet />
      {/* </div> */}
      {/* </Content> */}
    </Layout>
  );
};

export default DppInitLayout;
