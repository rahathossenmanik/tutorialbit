import React from 'react';
import { Layout, theme } from 'antd';
import Topbar from './Topbar';
import Left from './Left';
import Right from './Right';
import { Route, Routes } from 'react-router-dom';
import { IRoute } from '../interfaces/IRoute';
import { routes } from '../routes';

const { Content, Footer } = Layout;

const BaseLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className='main-body'>
      <Topbar />
      <Content>
        <Layout style={{ background: colorBgContainer }}>
          <Left />
          <Content
            style={{
              paddingTop: '10px',
              background: colorBgContainer,
            }}
            className='inner-body'>
            <Layout style={{ background: colorBgContainer }}>
              <Content style={{ padding: '5px 10px', minHeight: 500 }}>
                <Routes>
                  {routes.map((route: IRoute, i) => {
                    return (
                      <Route
                        key={i}
                        path={route.path}
                        element={route.element}
                      />
                    );
                  })}
                </Routes>
              </Content>
              <Right />
            </Layout>
            <Footer
              style={{
                textAlign: 'center',
                height: 50,
                paddingTop: 15,
                paddingBottom: 15,
              }}>
              Tutorial Bit 2016-{new Date().getFullYear()} © By Rastercell
            </Footer>
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default BaseLayout;
