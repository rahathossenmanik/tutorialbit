import React from 'react';
import { Layout, theme } from 'antd';
import Topbar from './Topbar';
import Left from './Left';
import Right from './Right';
import Homepage from '../pages/Homepage';

const { Content, Footer } = Layout;

const BaseLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Topbar />
      <Content>
        <Layout style={{ padding: '16px 0', background: colorBgContainer }}>
          <Left />
          <Content style={{ padding: '0 24px', minHeight: 400 }}>
            <Homepage />
          </Content>
          <Right />
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Tutorial Bit 2016-{new Date().getFullYear()} © By Rastercell
      </Footer>
    </Layout>
  );
};

export default BaseLayout;
