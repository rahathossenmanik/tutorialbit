import React from 'react';
import { Layout, theme } from 'antd';
import Right1 from '../ads/Right1';
import Right2 from '../ads/Right2';
import Right3 from '../ads/Right3';

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
      <Right1 />
      <Right2 />
      <Right3 />
    </Sider>
  );
};

export default Right;
