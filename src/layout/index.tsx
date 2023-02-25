import React from 'react';
import { Layout, theme } from 'antd';
import Topbar from './Topbar';
import Left from './Left';
import Right from './Right';
import { Route, Routes, useLocation } from 'react-router-dom';
import { IRoute } from '../interfaces/IRoute';
import { routes } from '../routes';

const { Content, Footer } = Layout;

const BaseLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { pathname: path } = useLocation();

  return (
    <Layout>
      <Topbar />
      <Content>
        <Layout style={{ padding: '16px 0', background: colorBgContainer }}>
          <Left />
          <Content style={{ padding: '0 24px', minHeight: 400 }}>
            <Routes>
              {routes.map((route: IRoute, i) => {
                // Generate dynamic title for browser titlebar
                if (route.path === path) document.title = route.title;
                // Routes each pages with different routes
                return (
                  <Route key={i} path={route.path} element={route.element} />
                );
              })}
            </Routes>
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
