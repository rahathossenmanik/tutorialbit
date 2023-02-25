import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
const { Header } = Layout;

const Topbar = () => {
  const { pathname: path } = useLocation();
  const navigate = useNavigate();
  const [selectedKeys, setSelectedKeys] = useState<string[]>();

  const headerMenuItems: MenuProps['items'] = [
    {
      key: 'logo',
      label: (
        <img src={process.env.REACT_APP_LOGO_URL} alt='logo' height={20} />
      ),
    },
    {
      key: '/courses/artificial-intelligence',
      label: 'AI',
      onClick: () => navigate('/courses/artificial-intelligence'),
    },
    {
      key: '/courses/oop-c',
      label: 'C++',
      onClick: () => navigate('/courses/oop-c'),
    },
    {
      key: '/courses/communication-engineering',
      label: 'CE',
      onClick: () => navigate('/courses/communication-engineering'),
    },
    {
      key: '/courses/cisco-packet-tracer',
      label: 'Cisco',
      onClick: () => navigate('/courses/cisco-packet-tracer'),
    },
    {
      key: '/courses/computer-simulation',
      label: 'CSM',
      onClick: () => navigate('/courses/computer-simulation'),
    },
    {
      key: '/courses/database',
      label: 'DBMS',
      onClick: () => navigate('/courses/database'),
    },
    {
      key: '/courses/digital-image-processing',
      label: 'DIP',
      onClick: () => navigate('/courses/digital-image-processing'),
    },
    {
      key: '/courses/discrete-mathematics',
      label: 'DM',
      onClick: () => navigate('/courses/discrete-mathematics'),
    },
    {
      key: '/courses/data-structure',
      label: 'DS',
      onClick: () => navigate('/courses/data-structure'),
    },
    {
      key: '/courses/digital-signal-processing',
      label: 'DSP',
      onClick: () => navigate('/courses/digital-signal-processing'),
    },
    {
      key: '/courses/java',
      label: 'Java',
      onClick: () => navigate('/courses/java'),
    },
    {
      key: '/courses/mathematics',
      label: 'Math',
      onClick: () => navigate('/courses/mathematics'),
    },
    {
      key: '/courses/mpi-programming',
      label: 'MPI',
      onClick: () => navigate('/courses/mpi-programming'),
    },
    {
      key: '/courses/networking',
      label: 'Networking',
      onClick: () => navigate('/courses/networking'),
    },
    {
      key: '/courses/operating-system',
      label: 'OS',
      onClick: () => navigate('/courses/operating-system'),
    },
    {
      key: '/about-us',
      label: 'About',
      onClick: () => navigate('/about-us'),
    },
    {
      key: '/contact-us',
      label: 'Contact',
      onClick: () => navigate('/contact-us'),
    },
  ];

  useEffect(() => {
    setSelectedKeys([path]);
  }, [path]);

  return (
    <Header style={{ height: 50, paddingInline: 10, lineHeight: '50px' }}>
      {/* <img src={process.env.REACT_APP_LOGO_URL} alt='logo' height={20} /> */}
      <Menu
        theme='dark'
        mode='horizontal'
        selectedKeys={selectedKeys}
        items={headerMenuItems}
        overflowedIndicator={<MenuOutlined />}
      />
    </Header>
  );
};

export default Topbar;
