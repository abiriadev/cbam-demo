import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import HeaderBar from 'components/headerbar/HeaderInitBar';
const { Header, Content, Footer } = Layout;
import { Outlet } from 'react-router-dom';

const DppInitLayout = () => {
  return (
    <Layout id="default-layout">
      <HeaderBar />
      <Outlet />
    </Layout>
  );
};

export default DppInitLayout;
