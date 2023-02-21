import React from 'react';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
const { Header } = Layout;

const items1: MenuProps['items'] = [
  {
    key: 'logo',
    label: <img src={process.env.REACT_APP_LOGO_URL} alt='logo' height={20} />,
  },
  ...[
    'AI',
    'C++',
    'CE',
    'Cisco',
    'CSM',
    'DBMS',
    'DIP',
    'DM',
    'DS',
    'DSP',
    'Java',
    'Math',
    'MPI',
    'Networking',
    'OS',
    'About',
    'Contact',
  ].map((item, key) => ({
    key,
    label: item,
  })),
];

const Topbar = () => {
  return (
    <Header style={{ height: 50, paddingInline: 10, lineHeight: '50px' }}>
      {/* <img src={process.env.REACT_APP_LOGO_URL} alt='logo' height={20} /> */}
      <Menu
        theme='dark'
        mode='horizontal'
        defaultSelectedKeys={['2']}
        items={items1}
      />
    </Header>
  );
};

export default Topbar;
