import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { courses } from '../constants/json/courses';
const { Header } = Layout;

const Topbar = () => {
  const { pathname: path } = useLocation();
  const [selectedKeys, setSelectedKeys] = useState<string[]>();

  const headerMenuItems: MenuProps['items'] = [
    {
      key: 'logo',
      label: (
        <Link to='/'>
          <img src={process.env.REACT_APP_LOGO_URL} alt='logo' height={20} />
        </Link>
      ),
    },
    ...courses.map((course) => ({
      key: course.slug,
      label: <Link to={'/courses/' + course.slug}>{course.label}</Link>,
    })),
    {
      key: 'about-us',
      label: <Link to='/about-us'>About</Link>,
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
