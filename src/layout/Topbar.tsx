import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import { courses } from '../constants/json/courses';
const { Header } = Layout;

const Topbar = () => {
  const { pathname: path } = useLocation();
  const [selectedKeys, setSelectedKeys] = useState<string[]>();

  const headerMenuItems: MenuProps['items'] = [
    {
      key: 'logo',
      label: (
        <a href='/'>
          <img src={process.env.REACT_APP_LOGO_URL} alt='logo' height={20} />
        </a>
      ),
    },
    ...courses.map((course) => ({
      key: course.slug,
      label: <a href={'/courses/' + course.slug}>{course.label}</a>,
    })),
    {
      key: 'about-us',
      label: <a href='/about-us'>About</a>,
    },
  ];

  useEffect(() => {
    const pathArray = path?.split('/');
    courses.forEach((course) => {
      if (pathArray.includes(course.slug)) {
        setSelectedKeys([course.slug]);
      }
    });
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
