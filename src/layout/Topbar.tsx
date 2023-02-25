import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { courses } from '../constants/json/courses';
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
      onClick: () => navigate('/'),
    },
    ...courses.map((course) => ({
      key: course.slug,
      label: course.label,
      onClick: () => navigate(course.slug),
    })),
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
