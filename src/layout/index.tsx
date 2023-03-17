import React from 'react';
import { Col, FloatButton, Layout, Row, theme } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Topbar from './Topbar';
import Left from './Left';
import Main from '../pages/common/Main';
import RightSidebar from '../ads/RightSidebar';

const { Content, Footer } = Layout;

const BaseLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [broken, setBroken] = React.useState(false);
  const [collapsed, setCollapsed] = React.useState(false);
  console.log(collapsed);

  return (
    <Layout className='main-body'>
      <Topbar />
      <Content>
        <Layout style={{ background: colorBgContainer }}>
          <Left
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            setBroken={setBroken}
          />
          {/* If Left Menu is Collapsed The Icon will Float */}
          {broken ? (
            <FloatButton
              shape='square'
              type='primary'
              style={{ left: 4, bottom: 8 }}
              icon={<MenuOutlined onClick={() => setCollapsed(!collapsed)} />}
            />
          ) : null}
          <Content
            style={{
              paddingTop: '10px',
              background: colorBgContainer,
              overflowX: 'hidden',
            }}
            className='inner-body'>
            <Row gutter={[4, 4]}>
              <Col span={24} md={16} style={{ padding: 8 }}>
                <Main />
              </Col>
              <Col span={24} md={8} style={{ padding: '8px 0' }}>
                <RightSidebar />
              </Col>
            </Row>
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
