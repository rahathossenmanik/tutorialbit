import React from 'react';
import { Layout, theme } from 'antd';
import RightSidebar from '../ads/RightSidebar';

const { Sider } = Layout;

const Right = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Sider
      breakpoint='lg'
      collapsedWidth='0'
      trigger={null}
      style={{ background: colorBgContainer }}
      width={250}>
      <RightSidebar />
    </Sider>
  );
};

export default Right;
